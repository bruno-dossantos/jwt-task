import axios from 'axios';
import { generateBackendURL } from '../routes';
import TokenService from '../tokenService';

class SessionController {
  static async login(username, password) {
    const response = await axios.post(generateBackendURL('/auth/signin'), {
      username,
      password,
    });
    TokenService.setUser(response.data);
  }

  static async register(username, password, email) {
    const response = await axios.post(generateBackendURL('/auth/signup'), {
      username,
      password,
      email,
    });
    TokenService.setUser(response.data);
  }

  static async refreshToken() {
    const refreshToken = TokenService.getLocalRefreshToken();
    const response = await axios.post(generateBackendURL('/auth/refreshtoken'), {
      refreshToken,
    });
    TokenService.updateLocalAccessToken(response.data.accessToken);
    TokenService.updateLocalRefreshToken(response.data.refreshToken);
  }

  static async getUser() {
    const accessToken = TokenService.getLocalAccessToken();
    const response = await axios.get(generateBackendURL('/test/user'), { headers: { Authorization: `Bearer ${accessToken}` } });
    return response.data;
  }
}

export default SessionController;
