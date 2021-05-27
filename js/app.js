const home = document.querySelector("#Home"),
  buttonLetsGo = document.querySelector("#finishButton");

let today = new Date().toISOString().substr(0, 10);

document.querySelector("#dateFormsEducationStartCero").value = today;
document.querySelector("#dateFormsEducationStartOne").value = today;
document.querySelector("#dateFormsEducationFinishCero").value = today;
document.querySelector("#dateFormsEducationFinishOne").value = today;

document.querySelector("#dateFormsJobStartCero").value = today;
document.querySelector("#dateFormsJobFinishCero").value = today;
document.querySelector("#dateFormsJobStartOne").value = today;
document.querySelector("#dateFormsJobFinishOne").value = today;

buttonLetsGo.addEventListener("click", () => {
  const userData = {
    name: document.querySelector("#name").value,
    proffession: document.querySelector("#proffession").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    city: document.querySelector("#city").value,
    country: document.querySelector("#country").value,
    address: document.querySelector("#address").value,
    aboutUser: document.querySelector("#aboutUser").value
  };
  const userEducation = {
    universityOne: document.querySelector("#universityOne").value,
    universityTwo: document.querySelector("#universityTwo").value,
    degreeOne: document.querySelector("#degreeOne").value,
    degreeTwo: document.querySelector("#degreeTwo").value,
    dateUniversityStartCero: document.querySelector("#dateFormsEducationStartCero").value,
    dateUniversityStartOne: document.querySelector("#dateFormsEducationStartOne").value,
    dateUniversityFinishCero: document.querySelector("#dateFormsEducationFinishCero").value,
    dateUniversityFinishOne: document.querySelector("#dateFormsEducationFinishCero").value
  };
  console.log(userData);
  console.log(userEducation)
});

//home.setAttribute("style", `min-height: ${sizeWindow()}px`,);
function sizeWindow() {
  var sizeWindow = [0, 0];
  if (typeof window.innerWidth != "undefined") {
    sizeWindow = [window.innerWidth, window.innerHeight];
  } else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    sizeWindow = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ];
  } else {
    sizeWindow = [
      document.getElementsByTagName("body")[0].clientWidth,
      document.getElementsByTagName("body")[0].clientHeight,
    ];
  }
  return sizeWindow[1];
}
