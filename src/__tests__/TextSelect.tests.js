import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextSelect from "../index";

test("TextSelect renders null when no article provided", () => {
  const { queryByTestId } = render(<TextSelect />);
  expect(queryByTestId("<h1>")).toBeNull();
});
