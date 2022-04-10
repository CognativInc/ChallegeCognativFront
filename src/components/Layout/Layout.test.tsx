import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import userEvent from "@testing-library/user-event";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should have a titel with the 'Food recipes' text", () => {
      const title = /food recipes/i;

      render(
        <BrowserRouter>
          <Layout children={""} />
        </BrowserRouter>
      );

      const findTitle = screen.getByRole("heading", { name: title });

      expect(findTitle).toBeInTheDocument();
    });
  });

  describe("When the user click on the header title", () => {
    test("Then it should navigate to '/' path", () => {
      const title = /food recipes/i;

      render(
        <BrowserRouter>
          <Layout children={""} />
        </BrowserRouter>
      );

      const findTitle = screen.getByRole("heading", { name: title });
      userEvent.click(findTitle);

      expect(window.location.pathname).toBe("/");
    });
  });
});
