
const date = document.getElementById("date");
const time = document.getElementById("time");
const tag = document.getElementById("tag");
const notes = document.getElementById("notes");
const add = document.getElementById("add");

add.addEventListener(`click`, (e) => {
  e.preventDefault();
  const nowId = new Date();
  const store = [
    nowId.toLocaleDateString(),
    time.value,
    tag.value,
    notes.value,
  ];
  let state = store.filter((w) => w.length === 0).length === 0;
  if (state) {
    localStorage.setItem(nowId.toISOString(), JSON.stringify(store));
    loadLocal();
  }
});

function loadLocal() {
  for (const key in localStorage) {
    if (
      Object.hasOwnProperty.call(localStorage, key) &&
      !document.getElementById(key) &&
      new Date(key).valueOf()
    ) {
      const element = JSON.parse(localStorage[key]);
      [a, b, c, d] = element;
      document.querySelector(`.dis`).innerHTML += `
      <li>
      <span>${a}</span>
      <span>${b}</span>
      <span>${c}</span>
      <span>${d}</span>
      <span del id=${key}>x</span>
      </li>
      `;
    }
  }
}
loadLocal();

document.querySelectorAll("[del]").forEach((del) => {
  del.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem(e.target.id);
    e.target.parentElement.style.display = "none";
  });
});
