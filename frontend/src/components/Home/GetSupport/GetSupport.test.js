import React from "react";
import GetSupport from "./GetSupport";
import renderer from "react-test-renderer";

it("<GetSupport /> renders correctly", () => {
  const tree = renderer.create(<GetSupport />).toJSON();
  expect(tree).toMatchSnapshot();
});
