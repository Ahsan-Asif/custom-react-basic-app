const INITIAL_STATE = {
  isLoading: false,
  user: {}
};

const SpecificUserReduc = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_START_fetcd":
      return {
        ...state,
        isLoading: true
      };
      break;
    case "USER_fetcd":
      if (action.error) {
        return {
          ...state,
          isLoading: false
        };
      }
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
      console.log("Fetched user in Reducer", user);
      break;
    default:
      return state;
  }
};
export default SpecificUserReduc;
