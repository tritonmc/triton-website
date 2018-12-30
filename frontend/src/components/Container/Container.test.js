import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

describe("Container Component", () => {
  let wrapper = shallow(
    <Container id="test-id">
      <p id="test-paragraph">Working!</p>
    </Container>
  );

  it("should render with ID test-id", () => {
    expect(wrapper.prop("id")).toBe("test-id");
  });

  it("renders children passed to it", () => {
    expect(wrapper.contains(<p id="test-paragraph">Working!</p>)).toBe(true);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
