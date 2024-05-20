import APIClient from "../apiClient/api-client.ts";
import {Screenshot} from "../hooks/useGameScreenshots.ts";

export const fetchScreenshots = new APIClient<Screenshot>('/games/')