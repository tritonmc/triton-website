import React from "react";
import FAQ from "./FAQ";
import renderer from "react-test-renderer";

it("<FAQ /> renders correctly", () => {
  const tree = renderer.create(<FAQ />).toJSON();
  expect(tree).toMatchSnapshot();
});
