//Caché
window.addEventListener('beforeunload', () => {
  window.location.reload(true);
});


document.addEventListener("DOMContentLoaded", () => {
  const robotsMeta = document.createElement("meta");
  robotsMeta.name = "robots";
  robotsMeta.content = "index, follow";
  document.head.appendChild(robotsMeta);
});
