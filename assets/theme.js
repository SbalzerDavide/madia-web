/* Collega il pulsante del tema: applica la scelta e la ricorda.
   Il tema chiaro resta il default; le preferenze di sistema non vengono lette. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  function apply(dark) {
    if (dark) root.setAttribute("data-ui", "dark");
    else root.removeAttribute("data-ui");
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Torna al tema chiaro" : "Attiva il tema scuro");
  }
  apply(root.getAttribute("data-ui") === "dark");
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-ui") !== "dark";
    apply(dark);
    try { localStorage.setItem("madia-theme", dark ? "dark" : "light"); } catch (e) {}
  });
})();
