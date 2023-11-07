import { AxiosResponse } from "axios";

import { $api } from "@api/index";
import { ILogin, ILoginResponse } from "@src/types/auth/ILogin";
import { IRegistration } from "@src/types/auth/IRegistration";

export class AuthService {
  static async login(creds: ILogin): Promise<AxiosResponse<string>> {
    return $api.post<string>(`auth/login`, creds);
  }

  static async registration(
    creds: IRegistration
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(`auth/registration`, creds);
  }

  static async refresh(): Promise<AxiosResponse<string>> {
    return $api.get<string>(`auth/refresh`);
  }

  static async logout(): Promise<AxiosResponse<ILoginResponse>> {
    return $api.get(`auth/logout`);
  }
  // static async logout(): Promise<AxiosResponse<ILoginResponse>> {
  //   return axios.get(`${DEV_API}auth/logout`, { withCredentials: true });
  // }
}
