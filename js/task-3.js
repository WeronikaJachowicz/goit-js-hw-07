document.getElementById("name-input").addEventListener("input", function () {
  const nameInput = document.getElementById("name-input").value.trim();
  const nameOutput = document.getElementById("name-output");
  if (nameOutput === " ") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput ? nameInput : "Anonymous";
  }
});
