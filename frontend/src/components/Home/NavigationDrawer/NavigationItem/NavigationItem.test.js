import React from "react";
import NavigationItem from "./NavigationItem";
import renderer from "react-test-renderer";

it("<NavigationItem /> renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationItem icon="star" selector="#test">
        Test Item
      </NavigationItem>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
