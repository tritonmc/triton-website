import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("App/Header Component", () => {
  let wrapper;
  const mockToggleDrawer = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header toggleDrawer={mockToggleDrawer} />);
  });
  describe("When the hamburger menu is clicked", () => {
    it("should call the mock toggleDrawer function", () => {
      wrapper.find("TopAppBarNavigationIcon").simulate("click", { preventDefault() {} });
      expect(mockToggleDrawer.mock.calls.length).toBe(1);
    });
  });
});
