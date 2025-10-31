const searchInput = document.getElementById("searchInput");
const agencyFilter = document.getElementById("agencyFilter");
const yearInput = document.getElementById("yearInput");
const missionCards = document.querySelectorAll(".mission-card");

function filterMissions() {
  const searchValue = searchInput.value.toLowerCase();
  const agencyValue = agencyFilter.value.toLowerCase();
  const yearValue = yearInput.value.toLowerCase();

  missionCards.forEach(card => {
    const name = card.querySelector(".mission-name").innerText.toLowerCase();
    const agency = card.querySelector(".mission-agency").innerText.toLowerCase();
    const year = card.querySelector(".mission-year").innerText.toLowerCase();

    const matchSearch = name.includes(searchValue);
    const matchAgency = agencyValue === "" || agency.includes(agencyValue);
    const matchYear = yearValue === "" || year.includes(yearValue);

    if (matchSearch && matchAgency && matchYear) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });

}
