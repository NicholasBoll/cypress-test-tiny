describe("page", () => {
  beforeEach(() => {
    cy.visit("cypress/fixtures/index.html");
  });

  it("should trigger the click action when typing {enter}", () => {
    cy.get("button").type("{enter}");
    cy.get("output").should("contain", "Clicked!");
  });
});
