import axios from "axios";
import { AxiosError } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL + "/api";

export type ApiError = AxiosError<{ error: "string" }>;

export const nextServer = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
