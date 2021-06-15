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
  userInfoCall();
  console.log(userData)
});

home.setAttribute("style", `min-height: ${sizeWindow()}px`);
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
      document.getElementsByTagName("body")[0].clientHeight
    ];
  }
  return sizeWindow[1];
}
function userInfoCall(){
  userData = {
    name: document.querySelector("#name").value,
    proffession: document.querySelector("#proffession").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    city: document.querySelector("#city").value,
    country: document.querySelector("#country").value,
    address: document.querySelector("#address").value,
    aboutUser: document.querySelector("#aboutUser").value,
    university:{
      universityOne: {
        universityName: document.querySelector("#universityOne").value,
        degrade: document.querySelector("#degreeOne").value,
        date:{
          start: document.querySelector("#dateFormsEducationStartCero").value,
          finish: document.querySelector("#dateFormsEducationFinishCero").value
        }
      },
      universityTwo: {
        universityName: document.querySelector("#universityTwo").value,
        degrade: document.querySelector("#degreeTwo").value,
        date: {
          start: document.querySelector("#dateFormsEducationStartOne").value,
          finish: document.querySelector("#dateFormsEducationFinishCero").value
        }
      } 
    },
    skills: {
      skillCero: {
        name: document.querySelector('#skillOne').value,
        percen: document.querySelector('#skillPercentOne').value
      },
      skillOne: {
        name: document.querySelector('#skillTwo').value,
        percen: document.querySelector('#skillPercentTwo').value
      },
      skillTwo: {
        name: document.querySelector('#skillThree').value,
        percen: document.querySelector('#skillPercentThree').value
      },
      skillThree: {
        name: document.querySelector('#skillFour').value,
        percen: document.querySelector('#skillPercentFour').value
      },
      
    },
    references: {
      referenceOne: {
        name: document.querySelector("#nameReference").value,
        position: document.querySelector("#positionReference").value,
        phone: document.querySelector("#phoneReference").value
      },
      referenceTwo: {
        name: document.querySelector("#nameReferenceOne").value,
        position: document.querySelector("#positionReferenceOne").value,
        phone: document.querySelector("#phoneReferenceOne").value
      }


    }
  };
   return userData;
}
