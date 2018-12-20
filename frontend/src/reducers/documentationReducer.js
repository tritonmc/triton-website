import { Map } from "immutable";

export default (state = Map({ defaultPage: "" }), action) => {
  switch (action.type) {
    case "SET_DOCUMENTATION_DEFAULT_PAGE":
      return state.set("defaultPage", action.page);
    default:
      return state;
  }
};
