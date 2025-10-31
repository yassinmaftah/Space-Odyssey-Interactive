// Fetch missions data from JSON
fetch('missions-data.json')
  .then(response => response.json())
  .then(data => {
    displayMissions(data);
    setupSearchFilter(data);
  })
  .catch(error => console.error('Error loading JSON:', error));


function displayMissions(missions) {
  const container = document.querySelector('.missions-container');
  container.innerHTML = ''; 

  missions.forEach(mission => {
    const card = document.createElement('div');
    card.classList.add('mission-card');

    card.innerHTML = `
      <img src="${mission.image}" alt="${mission.name}" />
      <div class="card-text">
        <h3 class="mission-name">${mission.name}</h3>
        <p class="mission-agency">${mission.agency}</p>
        <p class="mission-year">${mission.launchDate.split('-')[0]}</p>
        <p class="mission-desc">${mission.objective}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function setupSearchFilter(missions) {
  const searchInput = document.getElementById("searchInput");
  const agencyFilter = document.getElementById("agencyFilter");
  const yearInput = document.getElementById("yearInput");

  function filterMissions() {
    const searchValue = searchInput.value.toLowerCase();
    const agencyValue = agencyFilter.value.toLowerCase();
    const yearValue = yearInput.value.toLowerCase();

    const filtered = missions.filter(mission => {
      const name = mission.name.toLowerCase();
      const agency = mission.agency.toLowerCase();
      const year = mission.launchDate.split('-')[0]; 

      const matchSearch = name.includes(searchValue);
      const matchAgency = agencyValue === "" || agency.includes(agencyValue);
      const matchYear = yearValue === "" || year.includes(yearValue);

      return matchSearch && matchAgency && matchYear;
    });

    displayMissions(filtered);
  }

  
  searchInput.addEventListener("input", filterMissions);
  agencyFilter.addEventListener("change", filterMissions);
  yearInput.addEventListener("input", filterMissions);
}
