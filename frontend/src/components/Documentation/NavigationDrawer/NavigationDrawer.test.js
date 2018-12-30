import React from "react";
import { shallow } from "enzyme";
import { NavigationDrawer } from "./NavigationDrawer";
import NavigationItem from "./NavigationItem/NavigationItem";
import mockAxios from "axios";

describe("Documentation/DocumentationPage Component", () => {
  it("should show error if fetching fails", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject("mock no internet"));
    let wrapper = shallow(<NavigationDrawer open={true} />);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    await new Promise((resolve) =>
      setTimeout(() => {
        expect(wrapper.update().instance().state.error).toBe(true);
        expect(
          wrapper.contains(<span>An error occurred while fetching the documentation index</span>)
        ).toBe(true);
        resolve();
      }, 100)
    );
  });

  it("displays documentation pages", async () => {
    let data = {
      pages: [
        { name: "Test Page 1", page: "test-page1" },
        { name: "Test Page 2", page: "test-page2" },
      ],
      default: "test-page-1",
    };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data,
      })
    );
    let mockSetDefaultPage = jest.fn();
    let wrapper = shallow(<NavigationDrawer open={true} setDefaultPage={mockSetDefaultPage} />);
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    await new Promise((resolve) =>
      setTimeout(() => {
        expect(mockSetDefaultPage).toHaveBeenCalledTimes(1);
        expect(mockSetDefaultPage).toHaveBeenCalledWith("test-page-1");
        expect(wrapper.update().instance().state.items).toEqual(data.pages);
        expect(
          wrapper.contains(
            <NavigationItem key="test-page1" to="/docs/test-page1">
              Test Page 1
            </NavigationItem>
          )
        ).toBe(true);
        expect(
          wrapper.contains(
            <NavigationItem key="test-page2" to="/docs/test-page2">
              Test Page 2
            </NavigationItem>
          )
        ).toBe(true);
        resolve();
      }, 100)
    );
  });

  it("shows loading while fetching", () => {
    let data = {
      pages: [
        { name: "Test Page 1", page: "test-page1" },
        { name: "Test Page 2", page: "test-page2" },
      ],
      default: "test-page-1",
    };
    mockAxios.get.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data });
          }, 100);
        })
    );
    let mockSetDefaultPage = jest.fn();
    let wrapper = shallow(<NavigationDrawer open={true} setDefaultPage={mockSetDefaultPage} />);
    expect(mockAxios.get).toHaveBeenCalledTimes(3);
    expect(wrapper.find("CircularProgress")).toHaveLength(1);
  });
});
