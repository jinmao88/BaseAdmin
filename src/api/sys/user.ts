import { defHttp } from '/@/utils/http/axios';
import { LoginParams, GetUserInfoByUserIdParams } from './model/userModel';
import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login',
  GetUserInfoById = 'api/user/info',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.request(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: getUserInfoById
 */
export function getUserInfo() {
  return defHttp.request({
    url: Api.GetUserInfoById,
    method: 'POST',
  });
}

export function getPermCodeByUserId(params: GetUserInfoByUserIdParams) {
  return defHttp.request<string[]>({
    url: Api.GetPermCodeByUserId,
    method: 'GET',
    params,
  });
}
