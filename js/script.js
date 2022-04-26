"use strict";

const randomColors = [
  "var(--lavender)",
  "var(--baby-blue)",
  "var(--rose-fog)",
  "var(--light-cornflower-blue)",
  "var(--light-teal)",
  "var(--blossom)",
  "var(--seafoam)",
  "var(--pastel-violet)",
];
const randomMargin = [
  "-0.5rem",
  "0.3rem",
  "-0.5rem",
  "0.2rem",
  "-0.6rem",
  "0.4rem",
  "-0.4rem",
  "0.3rem",
];
const randomDegree = [
  "3deg",
  "-2deg",
  "5deg",
  "-3deg",
  "6deg",
  "-4deg",
  "4deg",
  "-1deg",
];
let index = 0;
const notes = document.getElementById("notes");
const modal = document.getElementById("modal");
const userInput = document.getElementById("user-input");
const addNoteBtn = document.getElementById("btn");
const closeModal = document.getElementById("close");

addNoteBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = userInput.value;
    createNote(text);
  }
});

userInput.addEventListener("input", () => {
  closeModal.style.display = "block";

  if (userInput.value == "") {
    closeModal.style.display = "none";
  }
});

function createNote(text) {
  const note = document.createElement("div");
  const noteText = document.createElement("p");

  note.appendChild(noteText);

  note.className = "note";
  noteText.className = "note-text";
  noteText.textContent = text;

  if (index > randomColors.length - 1) index = 0;

  note.setAttribute(
    "style",
    `background-color: ${randomColors[index++]};
     margin: ${randomMargin[Math.floor(Math.random() * randomMargin.length)]};
     transform: rotate(${
       randomDegree[Math.floor(Math.random() * randomDegree.length)]
     })`
  );

  note.addEventListener("dblclick", () => {
    note.remove();
  });

  notes.appendChild(note);
}
