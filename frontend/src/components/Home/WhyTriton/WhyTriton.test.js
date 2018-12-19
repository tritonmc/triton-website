import React from "react";
import WhyTriton from "./WhyTriton";
import renderer from "react-test-renderer";

it("<WhyTriton /> renders correctly", () => {
  const tree = renderer.create(<WhyTriton />).toJSON();
  expect(tree).toMatchSnapshot();
});
