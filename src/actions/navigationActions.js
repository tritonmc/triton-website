export const toggleDrawer = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_DRAWER",
  });
};

export const setDrawerState = (state) => (dispatch) => {
  dispatch({
    type: "SET_DRAWER_STATE",
    state,
  });
};

export const setActiveSection = (section) => (dispatch) => {
  dispatch({
    type: "SET_ACTIVE_SECTION",
    section,
  });
};
