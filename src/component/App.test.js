import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("negative numbers", () => {
  describe("when we add -5 to 2", () => {
    it("equals -3", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "5" }));
      userEvent.click(screen.getByRole("button", { name: "+/-" }));
      userEvent.click(screen.getByRole("button", { name: "+" }));
      userEvent.click(screen.getByRole("button", { name: "2" }));
      userEvent.click(screen.getByRole("button", { name: "=" }));

      expect(screen.getByText("-3")).toBeInTheDocument();

      // clear the screen
      userEvent.click(screen.getByRole("button", { name: "AC" }));

      expect(screen.queryByText("-3")).not.toBeInTheDocument();
    });
  });
});

describe("division", () => {
  describe("when we divide 100 by 5", () => {
    it("equals 20", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "1" }));
      userEvent.click(screen.getByRole("button", { name: "0" }));
      userEvent.click(screen.getByRole("button", { name: "0" }));
      userEvent.click(screen.getByRole("button", { name: "÷" }));
      userEvent.click(screen.getByRole("button", { name: "5" }));
      userEvent.click(screen.getByRole("button", { name: "=" }));

      expect(screen.getByText("20")).toBeInTheDocument();
    });
  });
});

describe("multiplication", () => {
  describe("when we multiple 7 by 5", () => {
    it("equals 35", () => {
      render(<App />);
      userEvent.click(screen.getByRole("button", { name: "7" }));
      userEvent.click(screen.getByRole("button", { name: "x" }));
      userEvent.click(screen.getByRole("button", { name: "5" }));
      userEvent.click(screen.getByRole("button", { name: "=" }));
      expect(screen.getByText("35")).toBeInTheDocument();
    });
  });
});
