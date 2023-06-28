"use strict";

const createDiv = (text) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = text;
  div.id = text;
  document.getElementById("container").appendChild(div);
};

const sounds = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

const display = (sounds) => Object.keys(sounds).forEach(createDiv);

const allowedKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const playSound = (letter) => {
  const audio = new Audio(`./sounds/${sounds[letter]}`);
  audio.play();
};
const addEffect = (letter) =>
  document.getElementById(letter).classList.add("active");

const removeEffect = (letter) => {
  const div = document.getElementById(letter);
  const removeActive = () => div.classList.remove("active");

  div.addEventListener("transitionend", removeActive);
};

const activeSounds = (ev) => {
  const letter = ev.type == "click" ? ev.target.id : ev.key.toUpperCase();

  const letterallowed = sounds.hasOwnProperty(letter);
  if (letterallowed) {
    addEffect(letter);
    playSound(letter);
    removeEffect(letter);
  } else {
    alert("clique em uma das letras");
  }
};

display(sounds);

document.getElementById("container").addEventListener("click", activeSounds);

window.addEventListener("keydown", activeSounds);
