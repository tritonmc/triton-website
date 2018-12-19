import { Map } from "immutable";

export default (state = Map({ drawer: false }), action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return state.set("drawer", !state.get("drawer", false));
    case "SET_DRAWER_STATE":
      return state.set("drawer", action.state);
    case "SET_ACTIVE_SECTION":
      return state.set("activeSection", action.section);
    default:
      return state;
  }
};
