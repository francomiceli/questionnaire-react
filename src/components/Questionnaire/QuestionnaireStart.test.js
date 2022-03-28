import { render, screen } from "@testing-library/react";
import QuestionnaireStart from "./QuestionnaireStart";

describe("Elements rendered correctly", () => {
  it("renders the heading element", () => {
    render(<QuestionnaireStart />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
  });  
});

describe("Text in elements rendered correctly", () => {
   it("renders the heading text", () => {
     render(<QuestionnaireStart />);
     const h1Text = screen.getByText("Your Questionnaire.");
     expect(h1Text).toBeInTheDocument();
   });
   it("renders the paragraph text", () => {
     render(<QuestionnaireStart />);
     const paragraphText = screen.getByText("A series of fast", {exact: false});
     expect(paragraphText).toBeInTheDocument();
   });
 });
