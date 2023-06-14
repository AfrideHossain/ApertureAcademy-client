import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// create and configure axios
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
});

const useAxiosIntercep = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("aperture-token");
  console.log(token);
  useEffect(() => {
    // Intercept request
    axiosSecure.interceptors.request.use((config) => {
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`;
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });
    // Intercept response
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, token]);

  return [axiosSecure];
};

export default useAxiosIntercep;
