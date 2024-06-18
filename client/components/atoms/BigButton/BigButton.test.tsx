import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { BigButton } from "../BigButton";

describe("BigButton", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <BigButton text="Press me" onPress={() => {}} />
    );
    expect(getByText("Press me")).toBeTruthy();
  });

  // TODO: check this: https://github.com/testing-library/jest-native/issues/72
  //   it("renders correctly with custom color and borderStyle", () => {
  //     const { getByText } = render(
  //       <BigButton
  //         text="Press me"
  //         onPress={() => {}}
  //         color="red"
  //         borderStyle="solid red 1px"
  //       />
  //     );
  //     const button = getByText("Press me").parent;
  //     expect(button).toHaveStyle({
  //       backgroundColor: "red",
  //       border: "solid red 1px",
  //     });
  //   });

  it("calls the onPress function when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <BigButton text="Press me" onPress={onPressMock} />
    );
    const button = getByText("Press me");
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it("disables the button when disabled prop is true", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <BigButton text="Press me" onPress={onPressMock} disabled={true} />
    );
    const button = getByText("Press me");
    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
