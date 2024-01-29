// Importing necessary React hooks and Axios-related types
import { useEffect, useState } from "react";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client.ts";

// Define the response shape for the fetched data
interface FetchResponse<T> {
    count: number;
    results: T[];
}

/**
 * A custom hook for fetching data from an API endpoint.
 * param {string} endpoint - The API endpoint to fetch data from.
 * param {AxiosRequestConfig} requestConfig - Optional Axios request configuration.
 * param {any[]} deps - Optional dependencies to trigger the effect.
 * returns {Object} - An object containing the fetched data, error, and loading state.
 */
function UseData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
    // State to hold the fetched data
    const [data, setData] = useState<T[]>([]);
    // State to hold any error that might occur during the API request
    const [error, setError] = useState<AxiosError>();
    // State to track the loading state of the data
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Effect to execute the API request when the component mounts
    useEffect(() => {
        // Set loading to true when starting the API request
        setIsLoading(true);
        // Create an abort controller to handle component unmounting
        const controller = new AbortController();

        // Perform the API request using the provided endpoint
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                // If successful, set the data and update loading state
                setData(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                // If an error occurs (excluding cancellation), set the error and update loading state
                if (err instanceof CanceledError) return;
                setError(err);
                setIsLoading(false);
            });

        // Cleanup function to abort the request when the component unmounts
        return () => controller.abort();
    }, deps || []); // Use provided dependencies or an empty array

    // Return an object containing the fetched data, error, and loading state
    return { data, error, isLoading };
}

// Export the custom hook for use in other components
export default UseData;
