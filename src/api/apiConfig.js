import axios from "axios";

// export const baseUrl = 'http://localhost:8080/backend/api'
export const baseUrl = 'https://fj.debugged-pro.com/backend/api'
const api = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
})

export const authInterceptor = api.interceptors.request.use(
  (config) => {
    console.log("config", config)
    return config;
  },
  (error) => {
    console.log("instance error >>>", error);
    Promise.reject(error);
  }
);

export const authInterceptorResponse = api.interceptors.response.use(
  (response) => {
    console.log("respoo>>", response)
    return response;
  },
  (error) => {
    if (error) {
      return error?.response;
    }
  }
);
export default api;

// Api Contoller

// POST Request
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(`${endpoint}`, data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// GET request
export const getData = async (endpoint) => {
  try {
    const response = await api.get(`${endpoint}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// // PUT Request
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(`${endpoint}`, data);
    return response;
  } catch (error) {
    console.log(error)

    throw error;
  }
}

// DELETE Request
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(`${endpoint}`);
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}


