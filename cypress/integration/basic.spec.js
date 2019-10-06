describe("Basic test", () => {
  it("should show blog.vararu.org", () => {
    cy.visit("/");

    cy.contains("blog.vararu.org").should("exist");
  });
});
