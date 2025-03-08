import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { getAuthData } from "./storage";
import history from "./history";

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "myclientid";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_ID ?? "myclientsecret";

type LoginData = {
  username: string;
  password: string;
};

type Review = {
  text: string;
}

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const postReviewBackend = (review: Review, movieId: String) => {
  const headers = {
    "Content-type": "application/json",
    Authorization: "Bearer " + getAuthData().access_token, 
  };

  const data = JSON.stringify({"text": review.text, "movieId": Number(movieId)});

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/reviews",
    data,
    headers,
  });
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //
  return config;
}, function (error) {
  // 
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // 
  return response;
}, function (error) {
  if(error.response.status === 401 || error.response.status === 403) {
    history.replace('/');
  }
  return Promise.reject(error);
});
