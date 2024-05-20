import './App.css';
import {RouterProvider} from "react-router-dom";
import routes from "./services/routes.tsx";
/**
 * The main application component.
 * @returns {JSX.Element} The rendered App component.
 */

function App() {
    // Custom hook for managing theme settings
    return <>
        <RouterProvider router={routes}></RouterProvider>
    </>

}

// Export the 'App' component for use in other parts of the application
export default App;
