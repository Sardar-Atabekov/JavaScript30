var inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener("change", inputUpdat));
inputs.forEach(input => input.addEventListener("mousemove", inputUpdat));

function inputUpdat() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}