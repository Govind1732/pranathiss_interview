const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
