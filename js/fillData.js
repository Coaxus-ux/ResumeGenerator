const userDataJSON = localStorage.getItem("userData");
const userDataTxt = JSON.parse(userDataJSON);
const title = document.querySelector(".title");
const education = document.querySelector(".education");
const contact = document.querySelector(".contact");
const references = document.querySelector(".reference");
const worknameOne = document.querySelector(".div-inf");
const workNameTwo = document.querySelector("#div-inf");
const descriptionWorkOne = document.querySelector(".div-inf-work");
const descriptionWorkTwo = document.querySelector(".work-inf-two");
const skillsOne = document.querySelector(".skill-one");
const skillsTwo = document.querySelector(".skill-two");
const skillsThree = document.querySelector(".skill-three");
const skillsFour = document.querySelector(".skill-four");
const skills = [
  percentSkillCero = userDataTxt.skills.skillCero.percen,
  percentSkillOne = userDataTxt.skills.skillOne.percen,
  percentSkillTwo = userDataTxt.skills.skillTwo.percen,
  percentSkillThree = userDataTxt.skills.skillThree.percen
];
const secondDegrade = userDataTxt.university.universityTwo.degrade;

const yearStarOne = userDataTxt.university.universityOne.date.start.substr(0, 4);
const yearFinishOne = userDataTxt.university.universityOne.date.finish.substr(0,4);
const yearStarTwo = userDataTxt.university.universityTwo.date.start.substr(0, 4)
const yearFinishTwo = userDataTxt.university.universityTwo.date.finish.substr(0,4);
const workOneStart = userDataTxt.work.workOne.start.substr(0,4);
const workOneFinish = userDataTxt.work.workOne.finish.substr(0,4);
const workTwoStart = userDataTxt.work.workOne.start.substr(0,4);
const workTwoFinish = userDataTxt.work.workOne.finish.substr(0,4);
const percentToValue = []
skills.forEach(element => {
  var x;
  var y;  
  if (element > 99){
    x = element.substr(0,2);
  }else{
    x = element.substr(1,1);
    if (x > 5){
      y = parseInt(element.substr(0,1))+1
    }else{
      y = parseInt(element.substr(0,1))
    }
  }
  percentToValue.push(Math.round(y/2))
});
dotColorize1 = [];
for(var i = 0; i < 5; i++){
  if(i < percentToValue[0]){
    dotColorize1.push('<i class="fas fa-circle"></i>');
  }else{
    dotColorize1.push('<i class="used fas fa-circle"></i>');
  };
};

dotColorize2 = [];
for(var i = 0; i < 5; i++){
  if(i < percentToValue[1]){
    dotColorize2.push('<i class="fas fa-circle"></i>');
  }else{
    dotColorize2.push('<i class="used fas fa-circle"></i>');
  };
};
dotColorize3 = [];
for(var i = 0; i < 5; i++){
  if(i < percentToValue[2]){
    dotColorize3.push('<i class="fas fa-circle"></i>');
  }else{
    dotColorize3.push('<i class="used fas fa-circle"></i>');
  };
};
dotColorize4 = [];
for(var i = 0; i < 5; i++){
  if(i < percentToValue[3]){
    dotColorize4.push('<i class="fas fa-circle"></i>');
  }else{
    dotColorize4.push('<i class="used fas fa-circle"></i>');
  };
};


console.log(percentToValue)
console.log(skills)
console.log(dotColorize1)
    title.innerHTML= `
    <p class="name-title">${userDataTxt.name}</p>
    <p class="proffesion-title">${userDataTxt.proffession}</p>
      <p class="about-person">
        ${userDataTxt.aboutUser}
      </p>
    `;
    const educationValue = `
        <p class="titles">Education</p>
        <p class="university-year">${yearStarOne}-${yearFinishOne}</p>
        <p class="university-name">${userDataTxt.university.universityOne.universityName}</p>
        <p class="university-degrade">${userDataTxt.university.universityOne.degrade}</p>
        <br />
    `;
    if (secondDegrade !== ""){
      education.innerHTML = `
        ${educationValue}
        <p class="university-year">${yearStarTwo}-${yearFinishTwo}</p>
        <p class="university-name">${userDataTxt.university.universityTwo.universityName}</p>
        <p class="university-degrade">${userDataTxt.university.universityTwo.degrade}</p>
      `;
    }else{
      education.innerHTML = `
        ${educationValue}
      `;
    }
    contact.innerHTML = `
        <p class="titles">Contact</>
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
      <p>${workOneStart}-${workOneFinish} </p>
      <p>${userDataTxt.work.workOne.position}</p>
    `;
    workNameTwo.innerHTML = `
      <p>${userDataTxt.work.workTwo.workName}</p>
      <p>${workTwoStart}-${workTwoFinish}</p>
      <p>${userDataTxt.work.workTwo.position}</p>
    `;
    descriptionWorkOne.innerHTML = `
        <div class="flex-info">
        <li></li>
        <p>${userDataTxt.work.workOne.description.dotOne}</p>
      </div>
      <div class="flex-info margin-negative">
        <li></li>
        <p>${userDataTxt.work.workOne.description.dotTwo}</p>
      </div>
      <div class="flex-info margin-negative">
        <li></li>
        <p>${userDataTxt.work.workOne.description.dotThree}</p>
      </div>
      
    `;
    descriptionWorkTwo.innerHTML = `
            <div class="flex-info">
              <li></li>
              <p>${userDataTxt.work.workTwo.description.dotOne}</p>
            </div>
            <div class="flex-info margin-negative">
              <li></li>
              <p>${userDataTxt.work.workTwo.description.dotOne}</p>
            </div>
            <div class="flex-info margin-negative">
              <li></li>
              <p>${userDataTxt.work.workTwo.description.dotOne}</p>
            </div>
    
    `;
    skillsOne.innerHTML = `
      <div class="flex-name-icon2">
      <p class="title-main">${userDataTxt.skills.skillCero.name}</p>
      <div class="icons-skill">
        ${dotColorize1.join(' ')}
      </div>
    </div>
    `;
    skillsTwo.innerHTML = `
      <div class="flex-name-icon2">
      <p class="title-main">${userDataTxt.skills.skillOne.name}</p>
      <div class="icons-skill">
        ${dotColorize2.join(' ')}
      </div>
    </div>
    `;
    skillsThree.innerHTML = `
      <div class="flex-name-icon2">
      <p class="title-main">${userDataTxt.skills.skillTwo.name}</p>
      <div class="icons-skill">
        ${dotColorize3.join(' ')}
      </div>
    </div>
    `;
    skillsFour.innerHTML = `
      <div class="flex-name-icon2">
      <p class="title-main">${userDataTxt.skills.skillThree.name}</p>
      <div class="icons-skill">
        ${dotColorize4.join(' ')}
      </div>
    </div>
    `;

    
    


