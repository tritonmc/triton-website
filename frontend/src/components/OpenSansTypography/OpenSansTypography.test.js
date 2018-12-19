import React from "react";
import OpenSansTypography from "./OpenSansTypography";
import renderer from "react-test-renderer";

it("<OpenSansTypography /> renders correctly", () => {
  const tree = renderer
    .create(<OpenSansTypography use="headline1">Test Typography</OpenSansTypography>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
