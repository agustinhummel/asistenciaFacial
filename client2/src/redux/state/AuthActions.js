import { setUser, setToken, setLoading, setError } from './AuthSlice';

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = 'http://localhost:5000/auth';
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('No se pudo iniciar sesión');
    }
    const data = await response.json();
    dispatch(setUser(data.data.user));
    dispatch(setToken(data.data.token));
    localStorage.setItem('token', data.data.token);
    localStorage.setItem('user', JSON.stringify(data.data.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loadUserFromStorage = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  dispatch(setToken(token ? token : null));
  dispatch(setUser(user ? JSON.parse(user) : null));
}

export const logoutUser = () => async (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
