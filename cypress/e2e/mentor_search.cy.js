import MentorPage from "../support/searchPage";

describe("Mentoring App - Mentee Flow", () => {
  const baseUrl = "https://job-portal-user-dev-skx7zw44dq-et.a.run.app";
  const mentorPage = new MentorPage();

  beforeEach(() => {
    cy.visit(baseUrl + "/mentoring");
  });

  it("should allow a mentee to search and interact with a mentor", () => {
    cy.fixture("searchData").then((data) => {
      mentorPage.searchForMentor(data.mentorName);

      mentorPage.clickFirstMentorCard();

      mentorPage.clickReviewButton();

      cy.log("✅ Mentee berhasil mencari dan memilih mentor");
    });
  });
});
