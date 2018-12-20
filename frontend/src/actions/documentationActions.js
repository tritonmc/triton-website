export const setDocumentationDefaultPage = (page) => (dispatch) => {
  dispatch({
    type: "SET_DOCUMENTATION_DEFAULT_PAGE",
    page,
  });
};
