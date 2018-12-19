import React from "react";
import Features from "./Features";
import renderer from "react-test-renderer";

it("<Features /> renders correctly", () => {
  const tree = renderer.create(<Features />).toJSON();
  expect(tree).toMatchSnapshot();
});
