import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Detail from "./Detail";

describe("dfsa", () => {
  describe("sfd", () => {
    test("sdf", () => {
      render(
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      );

      screen.debug();
    });
  });
});
