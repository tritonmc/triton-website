import React from "react";
import DocumentationPage from "./DocumentationPage";
import renderer from "react-test-renderer";

it("<DocumentationPage /> renders correctly", () => {
  const tree = renderer.create(<DocumentationPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
