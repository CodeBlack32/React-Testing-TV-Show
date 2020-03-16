import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait,
  debug,
  getAllByTestId
} from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");

const Shows = {
  info: []
};

test("App fetches season shows and renders data", async () => {
  mockFetchShow.mockResolvedValueOnce(Shows);

  const { getByText, getAllByTestId, getByTestId } = render(<App />);
  await wait(() => {
    getByText(/Season/i);
  });

  const dropdown = getAllByTestId("Dropdown");
  debug();

  fireEvent.click;
  const text = getByText(/Season/i);
  expect(text).toBeInTheDocument();
});
