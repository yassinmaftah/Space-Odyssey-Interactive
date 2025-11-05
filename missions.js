
let missions = JSON.parse(localStorage.getItem('missions')) ||  [
  { id: 1, name: "Apollo 11", agency: "NASA", objective: "Premier alunissage habité", launchDate: "1969", image: "images/Missions/appolo11.png" },
  { id: 2, name: "Voyager 1", agency: "NASA", objective: "Exploration du système solaire externe", launchDate: "1977", image: "images/Missions/voyage1.png" },
  { id: 3, name: "Rosetta", agency: "ESA", objective: "Étude de la comète 67P/Churyumov-Gerasimenko", launchDate: "2004", image: "images/Missions/rosetta.png" },
  { id: 4, name: "Curiosity", agency: "NASA", objective: "Exploration du cratère Gale sur Mars", launchDate: "2011", image: "images/Missions/curiosity.png" },
  { id: 5, name: "Artemis I", agency: "NASA", objective: "Test du système de lancement SLS et d’Orion", launchDate: "2022", image: "images/Missions/artemis1.png" },
  { id: 6, name: "James Webb Space Telescope", agency: "NASA/ESA/CSA", objective: "Observation de l’univers primitif", launchDate: "2021", image: "images/Missions/james_weeb_telescope.png" },
  { id: 7, name: "BepiColombo", agency: "ESA/JAXA", objective: "Exploration de la planète Mercure", launchDate: "2018", image: "images/Missions/BepiColombo.jpg" },
  { id: 8, name: "Voyager 2", agency: "NASA", objective: "Exploration du système solaire externe", launchDate: "1977", image: "https://www.nasa.gov/wp-content/uploads/2022/08/voyager_2_2_mjs_77_artwork_1975.jpg" },
  { id: 9, name: "Cassini–Huygens", agency: "NASA/ESA", objective: "Étude de Saturne, ses anneaux et lunes", launchDate: "1997", image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/06/saturn_orbit_insertion_manoeuvre2/17885286-2-eng-GB/Saturn_orbit_insertion_manoeuvre.jpg" },
  { id: 10, name: "Mars Odyssey", agency: "NASA", objective: "Orbiteur de Mars pour étudier surface et sous-sol", launchDate: "2001", image: "https://s.france24.com/media/display/43e8c4f6-0f37-11e9-aed0-005056bff430/w:1280/p:16x9/8615b55d795340a22cdcdf44cbd9a971.jpg" },
  { id: 11, name: "Dawn", agency: "NASA", objective: "Étude des astéroïdes Vesta et Cérès", launchDate: "2007", image: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/missionswebdawn_XLMpck3.jpg" },
  { id: 12, name: "New Horizons", agency: "NASA", objective: "Survol de Pluton et ceinture de Kuiper", launchDate: "2006", image: "https://science.nasa.gov/wp-content/uploads/2017/12/new-horizons-4q-poster-v4.png" },
  { id: 13, name: "Juno", agency: "NASA", objective: "Orbiteur de Jupiter pour étudier champ magnétique et atmosphère", launchDate: "2011", image: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/spaceimagesimageslargesizePIA13746_hires_jm52uUh.jpg" },
  { id: 14, name: "Hayabusa 2", agency: "JAXA", objective: "Retour d’échantillons de l’astéroïde Ryugu", launchDate: "2014", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3oeNKxD0zk9BY0PUPVwxzGrZ3Di9gaF_tA&s" },
  { id: 15, name: "Tianwen-1", agency: "CNSA", objective: "Orbiteur + atterrisseur sur Mars", launchDate: "2020", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Zhurong-with-lander-selfie.png" },
  { id: 16, name: "Parker Solar Probe", agency: "NASA", objective: "Étude du Soleil et vent solaire", launchDate: "2018", image: "https://medias.pourlascience.fr/api/v1/images/view/5e33efd83e45462a517008d6/wide_1000-webp/image.jpg" },
  { id: 17, name: "Mars 2020 / Perseverance", agency: "NASA", objective: "Rover Perseverance + hélicoptère Ingenuity", launchDate: "2020", image: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/imagesmars202020200714PIA23720-16.jpg" },
  { id: 18, name: "Spitzer Space Telescope", agency: "NASA", objective: "Observation infrarouge de l’univers", launchDate: "2003", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Spitzer_earth_trailing2.jpg/1200px-Spitzer_earth_trailing2.jpg" },
  { id: 19, name: "Hubble Space Telescope", agency: "NASA/ESA", objective: "Observation optique et ultraviolette de l’univers", launchDate: "1990", image: "https://science.nasa.gov/wp-content/uploads/2023/07/hubble-space-telescope-hst-6.jpg" },
  { id: 20, name: "Kepler", agency: "NASA", objective: "Recherche exoplanètes", launchDate: "2009", image: "https://i.la-croix.com/836x/smart/2016/07/13/1200775547/Vue-artiste-telescope-spatial-Kepler-observant-etoiles-lointaines-recherche-exoplanetes_0.jpg" },
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
          <button class="favoritte_btn"><span class="material-symbols-outlined">favorite</span></button>
        </div>
      </div>
    `;
    container.appendChild(card);

    
    const favBtn = card.querySelector('.favoritte_btn');
    let favs = JSON.parse(localStorage.getItem('favorites'));
    if (favs.includes(m.id)) 
      favBtn.style.color = 'red';

    favBtn.onclick = function() {
      let favs = JSON.parse(localStorage.getItem('favorites'));
      if (favs.includes(m.id)) {
        let newFavs = [];
      for (let f of favs) {
        if (f !== m.id) newFavs.push(f);
      }
      favs = newFavs;

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
    if (!mission) 
      return;
    const card = document.createElement('div');
    card.className = 'mission-card-mini';
    card.innerHTML = `
      <img src="${mission.image}" alt="${mission.name}" />
      <div class="card-text">
        <h4>${mission.name}</h4>
        <p>${mission.launchDate}</p>
        <p>${mission.objective}</p>
        <button class="favoritte_btn" style="color:red;"><span class="material-symbols-outlined">favorite</span></button>
      </div>
    `;
    container.appendChild(card);

    card.querySelector('.favoritte_btn').onclick = () => {
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
let id_select = null;

addMissionBtn.onclick = () => openPopup('add');
document.getElementById('cancel-btn').onclick = () => popup.style.display = 'none';

function openPopup(mode, mission=null) {
  popup.style.display = 'flex';
  if (mode === 'edit' && mission) {
    id_select = mission.id;
    missionForm['mission-name'].value = mission.name;
    missionForm['mission-agency'].value = mission.agency;
    missionForm['mission-year'].value = mission.launchDate;
    missionForm['mission-subject'].value = mission.objective;
    missionForm['mission-image'].value = mission.image;
  } else {
    id_select = null;
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
    if (missions[i].id === id_select) {
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
  if (!data) 
    return;
  if (id_select) 
    editMission(data);
  else 
    addMission(data);
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
    return (m.name.toLowerCase().includes(search)) &&
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
