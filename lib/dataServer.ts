import { toast } from "@/hooks/use-toast";
import axios from "axios";

const PROD_URL = process.env.NEXT_PUBLIC_API_URL;
const dataServer = axios.create({
  baseURL: PROD_URL,
  timeout: 10000,
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
});

// ✅ Request interceptor (network check)
dataServer.interceptors.request.use(
  async (config) => {
    if (!navigator.onLine) {
      return Promise.reject({ message: "No internet connection" });
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor with success & error toasts
dataServer.interceptors.response.use(
  (response) => {
    // Show success toast for status 200
    if (response.status === 200) {
      toast({ title: "Request send successfully!" });
    }

    return response;
  },
  (error) => {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message || "An unexpected error occurred";

    if (status === 400 || status === 500) {
      toast({ title: message });
    } else if (!status) {
      toast({ title: "Network error or no response from server" });
    }

    console.error("API Error:", message);
    return Promise.reject(error);
  }
);

export default dataServer;
