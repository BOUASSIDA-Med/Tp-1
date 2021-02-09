let villeCourante = "Lyon";
function showCity() {
  let cities = document.getElementById("pet-select").value;
  console.log(cities);
  let l = cities.length;
  // for (let i = 0; i < l; i++) {}
  if (cities == "Paris") {
    document.getElementById("Paris").style.display = "";
    document.getElementById("Lyon").style.display = "none";
    document.getElementById("Montbeliard").style.display = "none";
  } else if (cities == "Lyon") {
    document.getElementById("Paris").style.display = "none";
    document.getElementById("Lyon").style.display = "";
    document.getElementById("Montbeliard").style.display = "none";
  } else if (cities == "Montbeliard") {
    document.getElementById("Paris").style.display = "none";
    document.getElementById("Lyon").style.display = "none";
    document.getElementById("Montbeliard").style.display = "";
  } else if (cities == "") {
    document.getElementById("Paris").style.display = "none";
    document.getElementById("Lyon").style.display = "none";
    document.getElementById("Montbeliard").style.display = "none";
  } else {
    document.getElementById("Paris").style.display = "none";
    document.getElementById("Lyon").style.display = "none";
    document.getElementById("Montbeliard").style.display = "none";
  }
}
