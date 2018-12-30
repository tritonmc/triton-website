import React from "react";
import { shallow } from "enzyme";
import { NavigationItem } from "./NavigationItem";
import { ListItemGraphic } from "@rmwc/list";

describe("Documentation/NavigationDrawer/NavigationItem Component", () => {
  let mockCloseDrawer = jest.fn();

  let wrapper = shallow(
    <NavigationItem icon="star" to="/test" closeDrawer={mockCloseDrawer}>
      Test Item
    </NavigationItem>
  );

  it("renders icon", () => {
    expect(wrapper.contains(<ListItemGraphic icon="star" />)).toBe(true);
  });

  it("renders children", () => {
    expect(wrapper.find("ListItem").props().children).toEqual([
      <ListItemGraphic icon="star" />,
      "Test Item",
    ]);
  });

  it("passes target destination to Link", () => {
    expect(wrapper.find("Link").props().to).toBe("/test");
  });

  it("closesDrawer onclick", () => {
    wrapper.simulate("click");
    expect(mockCloseDrawer).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
