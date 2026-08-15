const heartContainer = document.querySelector(".heart-burst");
const heartButton = document.querySelector(".heart-button");

function launchHearts() {
  heartContainer.replaceChildren();

  for (let index = 0; index < 46; index += 1) {
    const heart = document.createElement("span");
    heart.className = "flying-heart";
    heart.textContent = "♥";
    heart.style.setProperty("--x", `${(index * 37) % 100}vw`);
    heart.style.setProperty("--size", `${16 + ((index * 13) % 30)}px`);
    heart.style.setProperty("--delay", `${(index * 0.067) % 0.9}s`);
    heart.style.setProperty("--duration", `${2.5 + ((index * 17) % 13) / 10}s`);
    heart.style.setProperty("--drift", `${-90 + ((index * 29) % 180)}px`);
    heart.style.setProperty("--spin", `${-40 + ((index * 23) % 80)}deg`);
    heartContainer.append(heart);
  }
}

heartButton.addEventListener("click", launchHearts);
launchHearts();
