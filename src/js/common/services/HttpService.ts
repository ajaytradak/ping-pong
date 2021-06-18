import { AxiosInstance, AxiosRequestConfig } from "axios";
import { defaultAxios } from "@src/common/services/DefaultHttpClient";

export interface HttpService {
  POST<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export class DefaultHttpService implements HttpService {
  constructor(private client: AxiosInstance = defaultAxios) {}

  GET<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get(path, config).then(
      payload => payload.data,
      payload => Promise.reject(payload.response)
    ) as Promise<T>;
  }

  POST<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.client.post(path, data, config).then(
      payload => payload.data,
      payload => Promise.reject(payload.response)
    ) as Promise<T>;
  }
}
