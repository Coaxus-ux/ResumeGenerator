const userDataJSON = localStorage.getItem("userData");
const userDataTxt = JSON.parse(userDataJSON);
const title = document.querySelector(".title");
const education = document.querySelector(".education");
const contact = document.querySelector(".contact");
const references = document.querySelector(".reference");
const worknameOne = document.querySelector(".div-inf");
const workNameTwo = document.querySelector("#div-inf");




const yearStarOne = userDataTxt.university.universityOne.date.start.substr(0, 4);
const yearFinishOne = userDataTxt.university.universityOne.date.finish.substr(0,4);
const yearStarTwo = userDataTxt.university.universityTwo.date.start.substr(0, 4)
const yearFinishTwo = userDataTxt.university.universityTwo.date.finish.substr(0,4);

    title.innerHTML= `
    <p class="name-title">${userDataTxt.name}</p>
    <p class="proffesion-title">${userDataTxt.proffession}</p>
      <p class="about-person">
        ${userDataTxt.aboutUser}
      </p>
    `;
    education.innerHTML = `
        <p class="titles">Education</p>
        <p class="university-year">${yearStarOne}-${yearFinishOne}</p>
        <p class="university-name">${userDataTxt.university.universityOne.universityName}</p>
        <p class="university-degrade">${userDataTxt.university.universityOne.degrade}</p>
        <br />
        <p class="university-year">${yearStarTwo}-${yearFinishTwo}</p>
        <p class="university-name">${userDataTxt.university.universityOne.universityName}</p>
        <p class="university-degrade">${userDataTxt.university.universityOne.degrade}</p>
    `;
    contact.innerHTML = `
        <p class="titles">Contact</p>
        <div class="address-div">
        <div class="flex-name-icon">
            <i class="fas fa-map-pin"></i>
            <p class="title-main">Address</p>
        </div>
        <p class="title-child">${userDataTxt.address}</p>
        <p class="title-child">${userDataTxt.city}, ${userDataTxt.country}</p>
        </div>

        <div class="phone-div">
          <div class="flex-name-icon">
            <i class="fas fa-mobile-alt phone-title"></i>
            <p class="title-main">Phone</p>
          </div>
          <p class="title-child">${userDataTxt.phone}</p>
        </div>

        <div class="email-div">
          <div class="flex-name-icon">
            <i class="fas fa-envelope-square"></i>
            <p class="title-main">Email</p>
          </div>
          <p class="title-child">${userDataTxt.email}</p>
        </div>
      </div>
    `;
    references.innerHTML = `
    <p class="titles">References</p>
        <div class="flex-name-icon">
        <i class="fas fa-circle"></i>
        <p class="title-main">${userDataTxt.references.referenceOne.name}</p>
        </div>
        <p class="reference-info">${userDataTxt.references.referenceOne.position}</p>
        <p class="reference-info">${userDataTxt.references.referenceOne.phone}</p>
        <div class="flex-name-icon">
        <i class="fas fa-circle"></i>
        <p class="title-main">${userDataTxt.references.referenceTwo.name}</p>
        </div>
        <p class="reference-info">${userDataTxt.references.referenceTwo.position}</p>
        <p class="reference-info">${userDataTxt.references.referenceTwo.phone}</p>
    `;
    worknameOne.innerHTML = `
      <p>${userDataTxt.work.workOne.workName}</p>
      <p>2020-2022</p>
      <p>Desing Clock Inc.</p>
    `;
    workNameTwo.innerHTML = `
      <p>${userDataTxt.work.workTwo.workName}</p>
      <p>2020-2022</p>
      <p>Desing Clock Inc.</p>
    `;
    
    


