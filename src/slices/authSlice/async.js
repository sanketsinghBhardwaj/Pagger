
export const login = (payload) => {
  return async dispatch => {
    try {
      const user = await new APIService().login(payload);
    } catch (err) {
      console.log('Login error: ', err.response);
    }
  };
};
