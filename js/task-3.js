const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", e => {
    const value = e.currentTarget.value.trim();
  
    if (value === "") {
      output.textContent = "Anonymous";
    } else {
      output.textContent = value;
    }
});
  
