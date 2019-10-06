describe("Basic test", () => {
  it("should show blog.vararu.org", () => {
    cy.visit("/");

    cy.contains("blog.vararu.org").should("exist");
  });

  it("should show a blog post", () => {
    cy.contains("Adding HTML5 pushstate support to mean-seo").click();

    cy.contains("My first experience").should("exist");
  });
});
