/**
 * axios基础构建
 * @date 2021-4-9
 */

import { AxiosRequestConfig, AxiosResponse } from 'axios';
// import getUrl from './config';
import instance from './intercept';
import { CustomResponse } from './types';

class Abstract {
  // protected baseURL: string = import.meta.env.VITE_BUILD_ENV
  //   ? window.env.VITE_BASEURL
  //   : import.meta.env.VITE_BASEURL;
  protected baseURL: string = import.meta.env.VITE_BASE_API

  protected headers = {
    ContentType: 'application/json;charset=UTF-8',
  };

  private apiAxios({
    baseURL = this.baseURL,
    headers = this.headers,
    method,
    url,
    data,
    params,
    responseType,
  }: AxiosRequestConfig): Promise<CustomResponse> {
    Object.assign(headers, {
      token: localStorage.getItem('token')
    });

    if (url?.startsWith('/')) {
      url = url.slice(1)
    }

    return new Promise((resolve, reject) => {
      instance({
        baseURL,
        headers,
        method,
        url,
        params,
        data,
        responseType,
      })
        .then((res: AxiosResponse<any, string>) => {
          // 200:服务端业务处理正常结束
          const message =
            res.data?.errorMessage ||
            `${url} Request failed`;
          if (res.status === 200) {
            if (res.data.success) {
              // 这里自定义处理了返回数据格式
              resolve({
                status: true,
                message: 'success',
                data: res.data?.data,
                origin: res.data,
              });
            } else {
              resolve({
                status: false,
                message,
                data: res.data?.data,
                origin: res.data,
              });
            }
          } else {
            resolve({ status: false, message, data: null });
          }
        })
        .catch((err) => {
          let message;
          switch (err.status) {
            case 401:
              message = `$Login timed out, please log in again`;
              break;
            default:
              message =
                err?.data?.errorMessage ||
                err?.message ||
                `${url} Request failed`;
              break;
          }
          // eslint-disable-next-line
          reject({ status: false, message, data: null });
        });
    });
  }

  /**
   * GET类型的网络请求
   */
  protected getReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType,
  }: AxiosRequestConfig): Promise<CustomResponse> {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'GET',
      url,
      data,
      params,
      responseType,
    });
  }

  /**
   * POST类型的网络请求
   */
  protected postReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType,
  }: AxiosRequestConfig): Promise<CustomResponse> {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'POST',
      url,
      data,
      params,
      responseType,
    });
  }

  /**
   * PUT类型的网络请求
   */
  protected putReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType,
  }: AxiosRequestConfig): Promise<CustomResponse> {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'PUT',
      url,
      data,
      params,
      responseType,
    });
  }

  /**
   * DELETE类型的网络请求
   */
  protected deleteReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType,
  }: AxiosRequestConfig): Promise<CustomResponse> {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'DELETE',
      url,
      data,
      params,
      responseType,
    });
  }
}

export default Abstract;
