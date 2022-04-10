import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Detail from "./Detail";

jest.mock("../../data/fakeRecipes");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "52943" }),
}));

describe("When it's rendered with a recipe without photo", () => {
  test("Then it should render a photo with an src = 'http://via.placeholder.com/640x360'", () => {
    const expectedSrc = "http://via.placeholder.com/640x360";

    render(
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    );

    const findPhoto = screen.getByRole("img");

    expect(findPhoto).toHaveProperty("src", expectedSrc);
  });
});
