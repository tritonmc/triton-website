import React from "react";
import OpenSansTypography from "./OpenSansTypography";
import { shallow } from "enzyme";

describe("OpenSansTypography Component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <OpenSansTypography use="headline1">Test Typography</OpenSansTypography>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
