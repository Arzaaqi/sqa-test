class MentorPage {
  visit() {
    cy.visit("/mentoring");
  }

  searchForMentor(mentorName) {
    cy.get("#searchMentor").type(mentorName, { delay: 100 });
    cy.wait(1000);
  }

  clickFirstMentorCard() {
    cy.get(".MentorCard_mentor_card__zMRXB").first().click();
  }

  clickReviewButton() {
    cy.get(
      "#__next > div.flex.min-h-screen.max-w-screen.flex-col > main > div:nth-child(3) > main > section > div:nth-child(2) > div.mb-6.flex.gap-4 > a:nth-child(2)"
    ).click();
  }
}

export default MentorPage;
