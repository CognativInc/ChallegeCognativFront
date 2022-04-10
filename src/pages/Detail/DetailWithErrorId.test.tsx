import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Detail from "./Detail";

jest.mock("../../data/fakeRecipes");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "2345" }),
}));
describe("When it's rendered with a wrong id", () => {
  test("Then it should render an empty page", () => {
    render(
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    );
  });
});
