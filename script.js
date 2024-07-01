let poemFormElement = document.querySelector("#poem-generator-form");

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

poemFormElement.addEventListener("submit", generatePoem);
