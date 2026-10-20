const home = document.getElementById('home');
const homebar = document.getElementById('homebar');
let current = null;

function openApp(name) {
  const app = document.getElementById('app-' + name);
  if (!app) return;
  current = app;
  home.classList.add('away');
  app.classList.add('open');
}

function goHome() {
  if (!current) return;
  current.classList.remove('open');
  home.classList.remove('away');
  current = null;
}

document.querySelectorAll('[data-app]').forEach(btn => {
  btn.addEventListener('click', () => openApp(btn.dataset.app));
});
homebar.addEventListener('click', goHome);
document.addEventListener('keydown', e => { if (e.key === 'Escape') goHome(); });

// Live status-bar clock
function tick() {
  const d = new Date();
  document.getElementById('clock').textContent =
    d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/\s?[AP]M/i, '');
}
tick();
setInterval(tick, 1000);
