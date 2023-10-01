import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserInterFace {
  id: number;
  full_name: string;
  email: string;
  phone: string;
}

export interface AuthInterFace {
  access_token: string;
  refresh_token: string;
  user: UserInterFace;
}

export interface InitialState {
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
  user: UserInterFace | null;
}

function getLocalStorage(key: String) {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(`${key}`);
  }
}

const accessToken = getLocalStorage('access_token');
const refreshToken = getLocalStorage('refresh_token');
const user = getLocalStorage('user');

const initialState: InitialState = {
  isAuth: accessToken != null || (refreshToken != null && user != null),
  accessToken: '',
  refreshToken: '',
  user: user != null ? JSON?.parse(user) : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<AuthInterFace>) {
      state.isAuth = true;
      state.accessToken = payload.access_token;
      state.refreshToken = payload.refresh_token;
      state.user = payload.user;
      localStorage.setItem('access_token', JSON.stringify(payload.access_token));
      localStorage.setItem('refresh_token', JSON.stringify(payload.refresh_token));
      localStorage.setItem('user', JSON.stringify(payload.user));
    },
    setAuthDetails(state, { payload }) {},
    logout(state) {
      state.isAuth = false;
      state.accessToken = '';
      state.refreshToken = '';
      state.user = {
        email: '',
        full_name: '',
        id: 0,
        phone: '0',
      };

      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout, setAuthDetails } = authSlice.actions;

export default authSlice.reducer;
