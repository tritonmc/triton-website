import React from "react";
import { shallow } from "enzyme";
import { Redirect } from "react-router-dom";
import { DocumentationPage } from "./DocumentationPage";
import mockAxios from "axios";

describe("Documentation/DocumentationPage Component", () => {
  mockAxios.get.mockImplementation(() =>
    Promise.resolve({
      data: "This is a test response.",
    })
  );
  let wrapper = shallow(<DocumentationPage page="test-page" defaultPage="" />);

  it("should fetch 'test-page'", () => {
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith("/documentation/page/test-page");
  });

  it("displays markdown", () => {
    expect(wrapper.update().instance().state.content).toBe("This is a test response.");
    expect(wrapper.find("ReactMarkdown")).toHaveLength(1);
    expect(wrapper.find("ReactMarkdown").props().source).toBe("This is a test response.");
  });

  let wrapper2 = shallow(<DocumentationPage defaultPage="" />);

  it("shows loading if page and defaultPage are empty", () => {
    expect(wrapper2.find("CircularProgress")).toHaveLength(1);
  });

  it("redirects to default page if page is empty", () => {
    wrapper2.setProps({ defaultPage: "test-page" });
    expect(wrapper2.contains(<Redirect to="/docs/test-page" />)).toBe(true);
  });
});
