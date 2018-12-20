import React from "react";
import NavigationDrawer from "./NavigationDrawer";
import renderer from "react-test-renderer";

it("<NavigationDrawer /> renders correctly", () => {
  const tree = renderer.create(<NavigationDrawer />).toJSON();
  expect(tree).toMatchSnapshot();
});
