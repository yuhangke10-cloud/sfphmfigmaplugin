(() => {
  "use strict";

  const PASSWORD = "18817962338";
  const PLUGIN_URL = "app/plugin-demo.html?v=0.7.7";
  const gate = document.getElementById("passwordGate");
  const input = document.getElementById("passwordInput");
  const stage = document.getElementById("demoStage");
  const frame = document.getElementById("pluginFrame");

  function loadPlugin() {
    if (!frame.src) frame.src = PLUGIN_URL;
  }

  function unlock() {
    loadPlugin();
    stage.hidden = false;
    gate.classList.add("is-hidden");
    gate.setAttribute("aria-hidden", "true");
  }

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    if (input.value !== PASSWORD) {
      input.value = "";
      input.setAttribute("aria-invalid", "true");
      input.focus();
      return;
    }
    input.disabled = true;
    unlock();
  });

  input.addEventListener("input", () => {
    input.removeAttribute("aria-invalid");
  });
})();
