import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const reducer = {
  counter: counterReducer,
  isLogged: loggedReducer,
};

export default reducer;
