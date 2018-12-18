import React from "react";
import Splash from "./Splash";
import renderer from "react-test-renderer";

it("<Splash /> renders correctly", () => {
  const tree = renderer.create(<Splash />).toJSON();
  expect(tree).toMatchSnapshot();
});
