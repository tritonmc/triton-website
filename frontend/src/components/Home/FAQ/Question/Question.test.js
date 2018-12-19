import React from "react";
import Question from "./Question";
import renderer from "react-test-renderer";

it("<Question /> renders correctly", () => {
  const tree = renderer
    .create(<Question title="This is a test title!">This is a test answer!</Question>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
