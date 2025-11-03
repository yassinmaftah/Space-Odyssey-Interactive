
let missions = JSON.parse(localStorage.getItem('missions')) ||  [
  { id: 1, name: "Apollo 11", agency: "NASA", objective: "Premier alunissage habité", launchDate: "1969", image: "images/Missions/appolo11.png" },
  { id: 2, name: "Voyager 1", agency: "NASA", objective: "Exploration du système solaire externe", launchDate: "1977", image: "images/Missions/voyage1.png" },
  { id: 3, name: "Rosetta", agency: "ESA", objective: "Étude de la comète 67P/Churyumov-Gerasimenko", launchDate: "2004", image: "images/Missions/rosetta.png" },
  { id: 4, name: "Curiosity", agency: "NASA", objective: "Exploration du cratère Gale sur Mars", launchDate: "2011", image: "images/Missions/curiosity.png" },
  { id: 5, name: "Artemis I", agency: "NASA", objective: "Test du système de lancement SLS et d’Orion", launchDate: "2022", image: "images/Missions/artemis1.png" },
  { id: 6, name: "James Webb Space Telescope", agency: "NASA/ESA/CSA", objective: "Observation de l’univers primitif", launchDate: "2021", image: "images/Missions/james_weeb_telescope.png" },
  { id: 7, name: "BepiColombo", agency: "ESA/JAXA", objective: "Exploration de la planète Mercure", launchDate: "2018", image: "images/Missions/BepiColombo.jpg" }
];

if (!localStorage.getItem('favorites')) 
  localStorage.setItem('favorites', JSON.stringify([]));

function displayMissions(list) {
  const container = document.querySelector('.missions-container');
  container.innerHTML = '';

  list.forEach(m => {
    const card = document.createElement('div');
    card.className = 'mission-card';
    card.innerHTML = `
      <img src="${m.image}" alt="${m.name}" />
      <div class="card-text">
        <h3>${m.name}</h3>
        <p>${m.agency}</p>
        <p>${m.launchDate}</p>
        <p>${m.objective}</p>
        <div class="card-actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="fav-btn"><span class="material-symbols-outlined">favorite</span></button>
        </div>
      </div>
    `;
    container.appendChild(card);

    
    const favBtn = card.querySelector('.fav-btn');
    let favs = JSON.parse(localStorage.getItem('favorites'));
    if (favs.includes(m.id)) favBtn.style.color = 'red';

    favBtn.onclick = function() {
      let favs = JSON.parse(localStorage.getItem('favorites'));
      if (favs.includes(m.id)) {
        favs = favs.filter(f => f !== m.id);
        favBtn.style.color = '';
      } else {
        favs.push(m.id);
        favBtn.style.color = 'red';
      }
      localStorage.setItem('favorites', JSON.stringify(favs));
      showFavoritesPanel();
    };

    
    card.querySelector('.edit-btn').onclick = () => openPopup('edit', m);

    card.querySelector('.delete-btn').onclick = () => {
      if (confirm(`Delete "${m.name}"?`)) {
        missions = missions.filter(x => x.id !== m.id);
        displayMissions(missions);
        showFavoritesPanel();
      }
    };
  });
}

// favoritesPanel
const favPanel = document.getElementById('favorites-panel');
document.getElementById('favorites-btn').onclick = () => {
  favPanel.classList.toggle('active');
  showFavoritesPanel();
};

function showFavoritesPanel() {
  const container = document.getElementById('favorites-container');
  container.innerHTML = '';
  const favs = JSON.parse(localStorage.getItem('favorites'));
  favs.forEach(id => {
    const mission = missions.find(m => m.id === id);
    if (!mission) return;
    const card = document.createElement('div');
    card.className = 'mission-card-mini';
    card.innerHTML = `
      <img src="${mission.image}" alt="${mission.name}" />
      <div class="card-text">
        <h4>${mission.name}</h4>
        <p>${mission.launchDate}</p>
        <p>${mission.objective}</p>
        <button class="fav-btn" style="color:red;"><span class="material-symbols-outlined">favorite</span></button>
      </div>
    `;
    container.appendChild(card);

    card.querySelector('.fav-btn').onclick = () => {
      let favs = JSON.parse(localStorage.getItem('favorites'));
      favs = favs.filter(f => f !== mission.id);
      localStorage.setItem('favorites', JSON.stringify(favs));
      showFavoritesPanel();
      displayMissions(missions);
    };
  });
}

document.addEventListener('click', e => {
  if (favPanel.classList.contains('active') && !favPanel.contains(e.target) && e.target.id !== 'favorites-btn') {
    favPanel.classList.remove('active');
  }
});

// add and edit functions
const popup = document.getElementById('mission-popup');
const missionForm = document.getElementById('mission-form');
const addMissionBtn = document.getElementById('add-mission-btn');
let currentEditId = null;

addMissionBtn.onclick = () => openPopup('add');
document.getElementById('cancel-btn').onclick = () => popup.style.display = 'none';

function openPopup(mode, mission=null) {
  popup.style.display = 'flex';
  if (mode === 'edit' && mission) {
    currentEditId = mission.id;
    missionForm['mission-name'].value = mission.name;
    missionForm['mission-agency'].value = mission.agency;
    missionForm['mission-year'].value = mission.launchDate;
    missionForm['mission-subject'].value = mission.objective;
    missionForm['mission-image'].value = mission.image;
  } else {
    currentEditId = null;
    missionForm.reset();
  }
}

function getMissionData() {
  const name = missionForm['mission-name'].value.trim();
  const agency = missionForm['mission-agency'].value.trim();
  const year = missionForm['mission-year'].value.trim();
  const subject = missionForm['mission-subject'].value.trim();
  const image = missionForm['mission-image'].value.trim();

  if (!name || !agency || !year || !subject || !image) {
    alert('Please fill all fields!');
    return null;
  }
  return { name, agency, year, subject, image };
}

function saveToLocalStorage() {
  localStorage.setItem('missions', JSON.stringify(missions));
}

function addMission({ name, agency, year, subject, image }) {
  const newId = missions.length ? missions[missions.length-1].id + 1 : 1;
  missions.push({ id:newId, name, agency, launchDate:year, objective:subject, image });
  saveToLocalStorage();
}

function editMission({ name, agency, year, subject, image }) {
  for (let i=0; i<missions.length; i++) {
    if (missions[i].id === currentEditId) {
      missions[i].name=name;
      missions[i].agency=agency;
      missions[i].launchDate=year;
      missions[i].objective=subject;
      missions[i].image=image;
      break;
    }
  }
  saveToLocalStorage();
}

missionForm.onsubmit = function(e){
  e.preventDefault();
  const data = getMissionData();
  if (!data) return;
  if (currentEditId) editMission(data);
  else addMission(data);
  displayMissions(missions);
  popup.style.display = 'none';
  showFavoritesPanel();
};

// search
const searchInput = document.getElementById('searchInput');
const agencyInput = document.getElementById('agencyFilter');
const yearInput = document.getElementById('yearInput');
const subjectInput = document.getElementById('subjectInput');

function filterMissions() {
  const search = searchInput.value.toLowerCase();
  const agency = agencyInput.value.toLowerCase();
  const year = yearInput.value;
  const subject = subjectInput.value.toLowerCase();

  const filtered = missions.filter(m => {
    return m.name.toLowerCase().includes(search) &&
           (!agency || m.agency.toLowerCase().includes(agency)) &&
           (!year || m.launchDate.includes(year)) &&
           (!subject || m.objective.toLowerCase().includes(subject));
  });

  displayMissions(filtered);
}

searchInput.oninput = filterMissions;
agencyInput.onchange = filterMissions;
yearInput.oninput = filterMissions;
subjectInput.oninput = filterMissions;


displayMissions(missions);
showFavoritesPanel();
