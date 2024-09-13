function setBudget() {
    const target = document.getElementById("carbon-target").value;
    document.getElementById("target-emissions").textContent = target;
    document.getElementById("emissions-progress").max = target;
}