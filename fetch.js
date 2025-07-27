let currentTheme = 'light';

function fetchUserProfile() {
  const username = document.getElementById('username').value || 'Bilali7';
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Not Found') {
        displayNoUserFound();
      } else {
        displayUserProfile(data);
      }
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      displayNoUserFound();
    });
}

function displayUserProfile(data) {
  document.getElementById('avatar').src = data.avatar_url || 'https://via.placeholder.com/100';
  document.getElementById('name').textContent = data.name || 'No Name';
  document.getElementById('bio').textContent = data.bio || 'No Bio';
  document.getElementById('email').innerHTML = `Email: ${data.email || 'No Email'}`;
  document.getElementById('followers').textContent = `Followers: ${data.followers || 0}`;
  document.getElementById('repos').textContent = `Repos: ${data.public_repos || 0}`;
  document.getElementById('location').textContent = `Location: ${data.location || 'Unknown'}`;
  document.getElementById('company').textContent = `Company: ${data.company || 'Unknown'}`;
}

function displayNoUserFound() {
  document.getElementById('avatar').src = 'https://via.placeholder.com/100';
  document.getElementById('name').textContent = 'No User Found';
  document.getElementById('bio').textContent = '';
  document.getElementById('email').innerHTML = 'Email: Not Available';
  document.getElementById('followers').textContent = 'Followers: 0';
  document.getElementById('repos').textContent = 'Repos: 0';
  document.getElementById('location').textContent = 'Location: Not Available';
  document.getElementById('company').textContent = 'Company: Not Available';
}

const particleField = document.getElementById('particleField');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
    particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particleField.appendChild(particle);
}

let darkmode = localStorage.getItem ("darkmode");
const mode = document.getElementById ("mode");

const enableDarkmode = () => {
  document.body.classList.add("darkmode")
  localStorage.setItem ("darkmode", "active")
}

const disableDarkmode = () => {
  document.body.classList.remove("darkmode")
  localStorage.setItem ("darkmode", null)
}

if (darkmode === "active") enableDarkmode();

mode.addEventListener ("click", () => {
  darkmode = localStorage.getItem ("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});

function toggleTheme() {
  const card = document.querySelector('.card');
  const body = document.body;
  if (currentTheme === 'light') {
    card.classList.add('darkmode');
    body.style.backgroundColor = '#222';
    body.style.color = '#f0f0f0';
    currentTheme = 'darkmode';
  } 
  else {
    card.classList.remove('darkmode');
    body.style.backgroundColor = '#f0f0f0';
    body.style.color = '#222';
    currentTheme = 'light';
  }
}
window.onload = fetchUserProfile;