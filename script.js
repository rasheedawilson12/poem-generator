let poemFormElement = document.querySelector("#poem-generator-form");

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "9t257307ca476845c0efc0e5f24o9bc3";
  let context =
    "You are a romantic poem expert and love to write short poems. Generate a 4 line poem in basic HTML with a <p> tag. Make sure to follow the user prompt. Place the title of the poem within a <h2> tag. Sign at the bottom of the poem 'SheCodes AI' with a <strong> tag.";
  let prompt = `User prompt is to generate a French poem about ${userPrompt}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemBox = document.querySelector("#poem");
  poemBox.classList.remove("hidden");

  axios.get(apiURL).then(displayPoem);
}

poemFormElement.addEventListener("submit", generatePoem);
