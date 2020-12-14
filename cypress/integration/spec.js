describe("page", () => {
  beforeEach(() => {
    cy.visit("cypress/fixtures/index.html");
  });

  it("should trigger a click action when typing {enter}", () => {
    cy.get("button").focus().type("{enter}");
    cy.get("output").should("contain", "Clicked!");
  });

  it("should not trigger a click action when typing random characters", () => {
    cy.get("button").type("foobar");
    cy.get("output").should("not.contain", "Clicked!");
  });
});
