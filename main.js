//Robots fallback
document.addEventListener("DOMContentLoaded", () => {
  let robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "index, follow";
    document.head.appendChild(robots);
  }
});

//Marcar enlace
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('[data-route]').forEach(a => {
    if (a.getAttribute("href") === path) a.setAttribute("aria-current", "page");
  });
});

//Toggle responsive menu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const list = document.getElementById("nav-list");
  if (!toggle || !list) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    list.classList.toggle("show");
  });
});

//Resalto de secciones al hover
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-section]").forEach(sec => {
    sec.addEventListener("mouseenter", () => sec.classList.add("resaltado"));
    sec.addEventListener("mouseleave", () => sec.classList.remove("resaltado"));
  });
});

//Scroll suave
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[data-scroll][href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

//Formulario sin popups
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const err = (id, msg) => {
    const span = document.getElementById(id);
    if (span) span.textContent = msg || "";
  };

  form.addEventListener("submit", (e) => {
    let ok = true;
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");
    const categoria = document.getElementById("categoria");
    const acepto = document.getElementById("acepto");

    //limpiar mensajes
    err("err-nombre", ""); err("err-mensaje", "");
    err("err-categoria", ""); err("err-acepto", "");

    if (!nombre.value.trim()) { err("err-nombre", "Requerido"); ok = false; }
    if (!mensaje.value.trim()) { err("err-mensaje", "Requerido"); ok = false; }
    if (!categoria.value) { err("err-categoria", "Seleccione una opción"); ok = false; }
    if (!acepto.checked) { err("err-acepto", "Debes aceptar"); ok = false; }

    if (!ok) e.preventDefault();
  });
});

//chat local
document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const chatLista = document.getElementById("chatLista");
  const nombreIn = document.getElementById("chatNombre");
  const textoIn = document.getElementById("chatTexto");
  if (!chatForm || !chatLista) return;

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = (nombreIn.value || "").trim();
    const t = (textoIn.value || "").trim();
    if (!n || !t) return;

    const li = document.createElement("li");
    li.innerHTML = `<strong>${n}:</strong> ${t}`;
    chatLista.appendChild(li);

    textoIn.value = "";
    textoIn.focus();
  });
});
