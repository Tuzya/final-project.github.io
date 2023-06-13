// eslint-disable-next-line import/extensions
import { overFlow, translitWord } from "./js/translit_overflow.js";

const input = document.querySelector("#input");
const button = document.querySelector(".btn");
const strContainer = document.querySelector(".str-container");
button.addEventListener("click", addWord);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addWord();
  }
});
function addWord() {
  const index = document.querySelectorAll("#index");
  const deleteButtonAll = document.querySelector(".delete-button-all");
  const newDiv = document.createElement("div");
  const russian = document.createElement("div");
  const russianFull = document.createElement("div");
  const translit = document.createElement("div");
  const translitFull = document.createElement("div");
  const newIndex = document.createElement("span");
  const deleteButton = document.createElement("span");

  newIndex.id = "index";
  newDiv.className = "new-row";
  russian.className = "short-russian";
  russianFull.className = "full-russian";
  translit.className = "short-translit ";
  translitFull.className = "full-translit";
  deleteButton.className = "delete-button-new";

  russian.innerText = overFlow(input.value);
  russianFull.innerText = input.value;
  translit.innerText = translitWord(overFlow(input.value));
  translitFull.innerText = translitWord(input.value);
  newIndex.innerText = index.length + 1;

  if (input.value.length > 6) {
    russian.addEventListener("mouseout", () => {
      russianFull.style.display = "none";
    });
    russian.addEventListener("mouseenter", () => {
      russianFull.style.display = "block";
    });
    translit.addEventListener("mouseout", () => {
      translitFull.style.display = "none";
    });
    translit.addEventListener("mouseenter", () => {
      translitFull.style.display = "block";
    });
  }

  deleteButtonAll.addEventListener("click", () => {
    newDiv.remove();
  });
  deleteButton.addEventListener("click", () => {
    deleteButton.parentElement.parentElement.remove();
    const indexes = document.querySelectorAll("#index");
    indexes.forEach((e, i) => {
      e.innerText = i + 1;
    });
  });

  russian.prepend(newIndex);
  translit.append(deleteButton);
  newDiv.append(russian, russianFull, translitFull, translit);
  strContainer.append(newDiv);
  input.value = "";
}
