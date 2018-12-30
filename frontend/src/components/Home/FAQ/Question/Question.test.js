import React from "react";
import { shallow } from "enzyme";
import Question from "./Question";

describe("Home/FAQ/Question Component", () => {
  it("matches snapshot", () => {
    let wrapper = shallow(
      <Question title="This is a test title!">This is a test answer!</Question>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
