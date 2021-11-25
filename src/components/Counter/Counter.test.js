import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("Counter Component", () => {
  it("should render the title with value 0", () => {
    render(<Counter />);
    const counterTitle = screen.getByText("0");
    expect(counterTitle).toBeInTheDocument();
  });

  it("should contain the class counter__title on title", () => {
    render(<Counter />);
    const counterTitle = screen.getByText("0");
    expect(counterTitle).toHaveClass("counter__title");
  });

  it("should not start title with classses counter__title--increment or counter__title--decrement", () => {
    render(<Counter />);
    const counterTitle = screen.getByText("0");
    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement");
  });

  it("should have a button called increment", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /increment/i });
    expect(buttonIncrement).toBeInTheDocument();
  });

  it("should have a button called increment with classes button and button--increment", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /increment/i });
    expect(buttonIncrement).toHaveClass("button");
    expect(buttonIncrement).toHaveClass("button--increment");
  });

  it("should have a button called decrement", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: /decrement/i });
    expect(buttonDecrement).toBeInTheDocument();
  });

  it("should have a button called decrement with classes button and button--decrement", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: /decrement/i });
    expect(buttonDecrement).toHaveClass("button");
    expect(buttonDecrement).toHaveClass("button--decrement");
  });

  it("should increment + 1 on increment button click", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /increment/i });

    expect(screen.queryByText("1")).toBeNull();

    userEvent.click(buttonIncrement);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should decrement - 1 on increment button click", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: /decrement/i });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonDecrement);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("should add class counter__title--increment when counter value > 0", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: /increment/i });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(buttonIncrement);

    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });

  it("should add class counter__title--decrement when counter value < 0", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: /decrement/i });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--decrement"
    );

    userEvent.click(buttonDecrement);

    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });
});
