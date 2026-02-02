let preventClose = localStorage.getItem("preventClose") === "true";

function beforeUnloadHandler(e) {
  if (!preventClose) return;
  e.preventDefault();
  e.returnValue = "";
}

window.addEventListener("beforeunload", beforeUnloadHandler);

// Allow same-site navigation without warning
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link || !link.href) return;

  const url = new URL(link.href, location.href);
  if (url.origin === location.origin) {
    preventClose = false;
    setTimeout(() => {
      preventClose = localStorage.getItem("preventClose") === "true";
    }, 500);
  }
});

// Toggle function (call this from a button)
function toggleClosePrevention() {
  preventClose = !preventClose;
  localStorage.setItem("preventClose", preventClose);
  return preventClose;
}
