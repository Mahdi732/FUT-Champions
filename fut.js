let players = [];
console.log(players);
//mobile menu
let menuToggle = document.getElementById('menu-toggle');
let mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', _ => {
    mobileMenu.classList.toggle('hidden');
});
//gk and player form
function showHideList() {
    let form = document.getElementById("add-player");
    form.classList.toggle("hidden");
  }
function showHideListGk() {
    let form = document.getElementById("add-Gk");
    form.classList.toggle("hidden");
  }
//player position 
let lw = document.getElementById("lw");
let st = document.getElementById("st");
let rw = document.getElementById("rw");
let lCm = document.getElementById("l-cm");
let cAm = document.getElementById("cam");
let rCm = document.getElementById("r-cm");
let lb = document.getElementById("lb");
let lCb = document.getElementById("l-cb");
let rCb = document.getElementById("r-cb");
let rb = document.getElementById("rb");
let gk = document.getElementById("gk");
//btn add player and gk
let btnAddTeamPlayer = document.getElementById("add-team-player");
let btnAddGkToTeam = document.getElementById("add-team-gk");
//input statique
let inputNameVerifi = document.querySelectorAll('.name');
let inputStatiqueVerifi = document.querySelectorAll('.statueinputvf');
//input value to add
let playerName = document.getElementById("player-name");
let gkName = document.getElementById("gk-name");
let playerPosition = document.getElementById("player-position");
let gkPosition = document.getElementById("player-position-gk");
let paceStatu = document.getElementById("pace-status");
let shootingStatu = document.getElementById("shooting-status");
let passingStatu = document.getElementById("passing-status");
let dribblinStatu = document.getElementById("dribbling-status");
let defendingStatu = document.getElementById("defending-status");
let physicalStatu = document.getElementById("physical-status");
let divingStatu = document.getElementById("diving-status");
let handlingStatu = document.getElementById("handling-status");
let kickingStatu = document.getElementById("kicking-status");
let reflexesStatu = document.getElementById("reflexes-status");
let speedStatu = document.getElementById("speed-status");
let positioningStatu = document.getElementById("positioning-status");

//verefie for the player added to plan
let playerExistan = {};
console.log(playerExistan);
//replacement array
let replacements = [];
console.log(replacements);
//player in plan 
let playersInPlan = [];
console.log(playersInPlan);
//verefie the input for the name and statique
for (let i = 0; i < inputStatiqueVerifi.length; i++) {
  inputStatiqueVerifi[i].addEventListener("input", function () {
    if (!/^\d{0,2}$/.test(this.value)) {
      this.value = this.value.replace(/[^\d]/g, '').slice(0, 2); 
    }
  });
}
for (let i = 0; i < inputNameVerifi.length; i++) {
  inputNameVerifi[i].addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
  });
}


//add player to plan 
btnAddTeamPlayer.addEventListener("click", function () {
  if (playerName.value.trim() !== "" && playerPosition.value !== "" && paceStatu.value.trim() !== "" && shootingStatu.value.trim() !== "" && passingStatu.value.trim() !== "" && dribblinStatu.value.trim() !== "" && defendingStatu.value.trim() !== "" && physicalStatu.value.trim() !== "") {
    if (players.find(player => player.name.toLowerCase() === playerName.value.toLowerCase())) {
      alert(`please entre an defferent name ! Because the player whit namr "${playerName.value}" is already in your player list.`);
    } else {
      if (playerExistan[playerPosition.value]) {
        replacements.push({
          "name": playerName.value,
          "position": playerPosition.value,
          "rating": Math.floor((Number(paceStatu.value) + Number(shootingStatu.value) + Number(passingStatu.value) + Number(dribblinStatu.value) + Number(defendingStatu.value) + Number(physicalStatu.value)) / 6),
          "pace": paceStatu.value,
          "shooting": shootingStatu.value,
          "passing": passingStatu.value,
          "dribbling": dribblinStatu.value,
          "defending": defendingStatu.value,
          "physical": physicalStatu.value
        });
        players.push({
          "name": playerName.value,
          "position": playerPosition.value,
          "rating": Math.floor((Number(paceStatu.value) + Number(shootingStatu.value) + Number(passingStatu.value) + Number(dribblinStatu.value) + Number(defendingStatu.value) + Number(physicalStatu.value)) / 6),
          "pace": paceStatu.value,
          "shooting": shootingStatu.value,
          "passing": passingStatu.value,
          "dribbling": dribblinStatu.value,
          "defending": defendingStatu.value,
          "physical": physicalStatu.value
        });
        updateReplacementList();
      } else {
          addToPlan(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
          playersInPlan.push({
            "name": playerName.value,
            "position": playerPosition.value,
            "rating": Math.floor((Number(paceStatu.value) + Number(shootingStatu.value) + Number(passingStatu.value) + Number(dribblinStatu.value) + Number(defendingStatu.value) + Number(physicalStatu.value)) / 6),
            "pace": paceStatu.value,
            "shooting": shootingStatu.value,
            "passing": passingStatu.value,
            "dribbling": dribblinStatu.value,
            "defending": defendingStatu.value,
            "physical": physicalStatu.value
          });
          players.push({
            "name": playerName.value,
            "position": playerPosition.value,
            "rating": Math.floor((Number(paceStatu.value) + Number(shootingStatu.value) + Number(passingStatu.value) + Number(dribblinStatu.value) + Number(defendingStatu.value) + Number(physicalStatu.value)) / 6),
            "pace": paceStatu.value,
            "shooting": shootingStatu.value,
            "passing": passingStatu.value,
            "dribbling": dribblinStatu.value,
            "defending": defendingStatu.value,
            "physical": physicalStatu.value
          });
          playerExistan[playerPosition.value] = playerName.value;
      }
     
    }
  } else{
    alert("please fill the correct information!");
  }
});

//function to add player to plan
function addToPlan(name, position, pace, shooting, passing, dribbling, defending, physical) {
  let addCardToPlan = document.createElement('div');
  addCardToPlan.classList.add('hover:scale-125',  'transition-all', 'duration-500');
  addCardToPlan.innerHTML = `
  <button type="button" class="group flex flex-col items-center">
    <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6)}</p>
                <p class="text-[0.625rem] text-white">${position}</p>
            </span>
            <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
            </div>
        </div>
         <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
            <div class=" mt-1">
                <p class="text-[0.650rem] font-medium text-white">${name}</p>
            </div>
            <div class="flex justify-center gap-1">
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAC</p>
                    <p class="text-[0.5rem] font-bold text-white">${pace}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">SHO</p>
                    <p class="text-[0.5rem] font-bold text-white">${shooting}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAS</p>
                    <p class="text-[0.5rem] font-bold text-white">${passing}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DRI</p>
                    <p class="text-[0.5rem] font-bold text-white">${dribbling}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DEF</p>
                    <p class="text-[0.5rem] font-bold text-white">${defending}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PHY</p>
                    <p class="text-[0.5rem] font-bold text-white">${physical}</p>
                </div>
            </div>
            <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
                <img src="/img/argentina.webp" class="w-2" alt="">
                <img src="/img/msl.webp" class="w-2" alt="">
                <img src="/img/inter.webp" class="w-2" alt="">
            </div>
         </div>     
         <div class="flex justify-around pl-2">
           <div class="detete-btn bg-red-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">delete</div>
           <div class="modify-btn bg-green-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">modify</div>
         </div>
    </div>
</button>

  `
postexact(position, addCardToPlan);
let buttondelete = addCardToPlan.querySelector(".detete-btn");
buttondelete.addEventListener("click", function () {
  deletePlayersFromThePlan(name, position, addCardToPlan)
});

let button = addCardToPlan.querySelector("button");
button.addEventListener("click", function () {
  playerReplacements(position);
});
}

//fonction to choose the poste that will be add the player 
function postexact(cardPosition, card) {
  switch (cardPosition) {
    case "LW":
      lw.innerHTML="";
      lw.appendChild(card);
      break;
    case "ST":
      st.innerHTML="";
      st.appendChild(card);
      break;
    case "RW":
      rw.innerHTML="";
      rw.appendChild(card);
      break;
    case "LCM":
      lCm.innerHTML="";
      lCm.appendChild(card);
      break;
    case "CAM":
      cAm.innerHTML="";
      cAm.appendChild(card);
      break;
    case "RCM":
      rCm.innerHTML="";
      rCm.appendChild(card);
      break;
    case "LB":
      lb.innerHTML="";
      lb.appendChild(card);
      break;
    case "LCB":
      lCb.innerHTML="";
      lCb.appendChild(card);
      break;
    case "RCB":
      rCb.innerHTML="";
      rCb.appendChild(card);
      break;
    case "RB":
      rb.innerHTML="";
      rb.appendChild(card);
      break;
  }
}

//add gk to plain

btnAddGkToTeam.addEventListener("click", function () {
  if (gkName.value.trim() !== "" && gkPosition.value !== "" && divingStatu.value.trim() !== "" && handlingStatu.value.trim() !== "" && kickingStatu.value.trim() !== "" && reflexesStatu.value.trim() !== "" && speedStatu.value.trim() !== "" && positioningStatu.value.trim() !== "") {
    if (players.find(player => player.name.toLowerCase() === gkName.value.toLowerCase())) {
      alert(`please entre an defferent name ! Because the player whit namr "${playerName.value}" is already in your player list.`);
    } else {
      if (playerExistan[gkPosition.value]) {
        replacements.push({
          "name": gkName.value,
          "position": gkPosition.value,
          "rating": Math.floor((Number(divingStatu.value) + Number(handlingStatu.value) + Number(kickingStatu.value) + Number(reflexesStatu.value) + Number(speedStatu.value) + Number(positioningStatu.value)) / 6),
          "diving": divingStatu.value,
          "handling": handlingStatu.value,
          "kicking": kickingStatu.value,
          "reflexes": reflexesStatu.value,
          "speed": speedStatu.value,
          "positioning": positioningStatu.value
        });
        players.push({
          "name": gkName.value,
          "position": gkPosition.value,
          "rating": Math.floor((Number(divingStatu.value) + Number(handlingStatu.value) + Number(kickingStatu.value) + Number(reflexesStatu.value) + Number(speedStatu.value) + Number(positioningStatu.value)) / 6),
          "diving": divingStatu.value,
          "handling": handlingStatu.value,
          "kicking": kickingStatu.value,
          "reflexes": reflexesStatu.value,
          "speed": speedStatu.value,
          "positioning": positioningStatu.value
        });
        updateReplacementList();
      } else {
          addGkToPlan(gkName.value, gkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
          playersInPlan.push({
            "name": gkName.value,
            "position": gkPosition.value,
            "rating": Math.floor((Number(divingStatu.value) + Number(handlingStatu.value) + Number(kickingStatu.value) + Number(reflexesStatu.value) + Number(speedStatu.value) + Number(positioningStatu.value)) / 6),
            "diving": divingStatu.value,
            "handling": handlingStatu.value,
            "kicking": kickingStatu.value,
            "reflexes": reflexesStatu.value,
            "speed": speedStatu.value,
            "positioning": positioningStatu.value
          });
          players.push({
            "name": gkName.value,
            "position": gkPosition.value,
            "rating": Math.floor((Number(divingStatu.value) + Number(handlingStatu.value) + Number(kickingStatu.value) + Number(reflexesStatu.value) + Number(speedStatu.value) + Number(positioningStatu.value)) / 6),
            "diving": divingStatu.value,
            "handling": handlingStatu.value,
            "kicking": kickingStatu.value,
            "reflexes": reflexesStatu.value,
            "speed": speedStatu.value,
            "positioning": positioningStatu.value
          });
          playerExistan[gkPosition.value] = gkName.value;
          gkName.value = "";
          gkPosition.value = "";
          divingStatu.value = "";
          handlingStatu.value = "";
          kickingStatu.value = "";
          reflexesStatu.value = "";
          speedStatu.value = "";
          positioningStatu.value = "";
      }
    }
  } else{
    alert("please fill the correct information!");
  }
});

//add the gk to plan

function addGkToPlan(name, position, diving, handling, kicking, reflexes, speed, positioning) {
  let addCardToPlan = document.createElement('div');
    addCardToPlan.classList.add('mt-[-1rem]', 'hover:scale-125',  'transition-all', 'duration-500');
    addCardToPlan.innerHTML = `
<button type="button" class="group flex flex-col items-center hover:scale-100 transition-all duration-500">
    <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6)}</p>
                <p class="text-[0.625rem] text-white">${position}</p>
            </span>
            <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
            </div>
        </div>
         <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
            <div class=" mt-1">
                <p class="text-[0.650rem] font-medium text-white">${name}</p>
            </div>
            <div class="flex justify-center gap-1">
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DIV</p>
                    <p class="text-[0.5rem] font-bold text-white">${diving}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">HAN</p>
                    <p class="text-[0.5rem] font-bold text-white">${handling}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">KIC</p>
                    <p class="text-[0.5rem] font-bold text-white">${kicking}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">REF</p>
                    <p class="text-[0.5rem] font-bold text-white">${reflexes}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">SPE</p>
                    <p class="text-[0.5rem] font-bold text-white">${speed}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">POS</p>
                    <p class="text-[0.5rem] font-bold text-white">${positioning}</p>
                </div>
            </div>
            <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
                <img src="/img/argentina.webp" class="w-2" alt="">
                <img src="/img/msl.webp" class="w-2" alt="">
                <img src="/img/inter.webp" class="w-2" alt="">
            </div>
            <div class="flex w-full justify-around pl-2">
           <div class="detete-btn bg-red-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">delete</div>
           <div class="modify-btn bg-green-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">modify</div>
         </div>
    </div>
</button>
  `;
  let buttondelete = addCardToPlan.querySelector(".detete-btn");
  buttondelete.addEventListener("click", function () {
    deletePlayersFromThePlan(name, position, addCardToPlan)
  });

  let button = addCardToPlan.querySelector("button");
  button.addEventListener("click", function () {
  playerReplacements(position);
});
  gk.innerHTML = "";
  gk.appendChild(addCardToPlan);
}
//show the player in replacement
function updateReplacementList() {
  if (replacements.length <= 14) {
    const replacementContainer = document.getElementById("replacement-list");
    replacementContainer.innerHTML = "";
    replacements.forEach(player => {
      if (player.position !== "GK") {
        let playerCard = document.createElement("div");
        playerCard.innerHTML = `
        <button type="button" class="flex flex-col items-center">
        <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
          <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
              <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.pace) + Number(player.shooting) + Number(player.passing) + Number(player.dribbling) + Number(player.defending) + Number(player.physical)) / 6)}</p>
              <p class="text-[0.625rem] text-white">${player.position}</p>
          </span>
          <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
          </div>
        </div>
       <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
          <div class=" mt-1">
              <p class="text-[0.650rem] font-medium text-white">${player.name}</p>
          </div>
          <div class="flex justify-center gap-1">
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAC</p>
                  <p class="text-[0.5rem] font-bold text-white"> ${player.pace}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">SHO</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.shooting}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAS</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.passing}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DRI</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.dribbling}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DEF</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.defending}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PHY</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.physical}</p>
              </div>
          </div>
          <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
              <img src="/img/argentina.webp" class="w-2" alt="">
              <img src="/img/msl.webp" class="w-2" alt="">
              <img src="/img/inter.webp" class="w-2" alt="">
          </div>
       </div>
  </div>
  </button>
    `;
    replacementContainer.appendChild(playerCard);
  let button = playerCard.querySelector("button");
  button.addEventListener("click", _ => {
  suprimTheReplacementPlayer(player.name);
});
      } else{
        let playerCard = document.createElement("div");
        playerCard.innerHTML = `
        <button type="button" class="flex flex-col items-center">
        <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
          <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
              <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.diving) + Number(player.handling) + Number(player.kicking) + Number(player.reflexes) + Number(player.speed) + Number(player.positioning)) / 6)}</p>
              <p class="text-[0.625rem] text-white">${player.position}</p>
          </span>
          <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
          </div>
       </div>
       <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
          <div class=" mt-1">
              <p class="text-[0.650rem] font-medium text-white">${player.name}</p>
          </div>
          <div class="flex justify-center gap-1">
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAC</p>
                  <p class="text-[0.5rem] font-bold text-white"> ${player.diving}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">SHO</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.handling}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAS</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.kicking}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DRI</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.reflexes}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DEF</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.speed}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PHY</p>
                  <p class="text-[0.5rem] font-bold text-white">${player.positioning}</p>
              </div>
          </div>
          <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
              <img src="/img/argentina.webp" class="w-2" alt="">
              <img src="/img/msl.webp" class="w-2" alt="">
              <img src="/img/inter.webp" class="w-2" alt="">
          </div>
       </div>
      
  </div>
  </button>
    
  `;
  replacementContainer.appendChild(playerCard);
  let button = playerCard.querySelector("button");
  button.addEventListener("click", _ => {
  suprimTheReplacementPlayer(player.name);
});
}
     
    });
  } else {
    alert("the replacement is plain!");
  }
 
}

// filter the replacement players 
function playerReplacements(position) {
  let filterplayers = replacements.filter(playersin => playersin.position === position);
  let popUpReplacement = document.createElement("div");
  popUpReplacement.classList.add("fixed", "top-0", "left-0", "w-full", "h-full", "bg-gray-800", "bg-opacity-50", "flex", "justify-center", "items-center");
  popUpReplacement.innerHTML =  `
  <div class="bg-gray-500 p-6 rounded-lg shadow-lg w-[42rem]">
    <h2 class="text-xl font-bold text-center mb-4">Players with the same position: ${position}</h2>
    <div class="player-replacement-poopup grid grid-cols-4 gap-3">
    </div>
    <div class="flex justify-around">
    <button class="mt-4 text-white bg-blue-500 hover:bg-blue-700 rounded px-4 py-2" onclick="closePopUp()">Close</button>
    </div>
  </div>
`;
let playerForSwitch = popUpReplacement.querySelector(".player-replacement-poopup");
filterplayers.forEach(player => {
  if (player.position !== "GK") {
    let playerCard = document.createElement("div");
    playerCard.classList.add("flex", "flex-col", "items-center", "bg-gray-200", "p-4", "rounded-lg", "shadow-md");
    playerCard.innerHTML = `
    <button type="button" class="group flex flex-col items-center hover:scale-150 transition-all duration-500">
      <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
          <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
            <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.pace) + Number(player.shooting) + Number(player.passing) + Number(player.dribbling) + Number(player.defending) + Number(player.physical)) / 6)}</p>
            <p class="text-[0.625rem] text-white">${player.position}</p>
          </span>
          <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]"></div>
        </div>
        <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
          <div class="mt-1">
            <p class="text-[0.650rem] font-medium text-white">${player.name}</p>
          </div>
          <div class="flex justify-center gap-1">
            <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">PAC</p>
              <p class="text-[0.5rem] font-bold text-white">${player.pace}</p>
            </div>
            <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">SHO</p>
              <p class="text-[0.5rem] font-bold text-white">${player.shooting}</p>
            </div>
            <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">PAS</p>
              <p class="text-[0.5rem] font-bold text-white">${player.passing}</p>
            </div>
            <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">DRI</p>
              <p class="text-[0.5rem] font-bold text-white">${player.dribbling}</p>
            </div>
            <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">DEF</p>
              <p class="text-[0.5rem] font-bold text-white">${player.defending}</p>
            </div>
            <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">PHY</p>
              <p class="text-[0.5rem] font-bold text-white">${player.physical}</p>
            </div>
          </div>
        </div>
          <div class="flex justify-around pl-2">
           <div class="detete-btn bg-red-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">delete</div>
           <div class="modify-btn bg-green-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">modify</div>
         </div>
      </div>
    </button>
    `;
    let button = playerCard.querySelector(".detete-btn");
    button.addEventListener("click", function () {
    suprimTheReplacementPlayer(player.name);
    closePopUp();
});
let buttonToSwitch = playerCard.querySelector("button");
buttonToSwitch.addEventListener("click", function () {
  replacePlayerInPlan(player.position, player.name)
closePopUp();
});
    playerForSwitch.appendChild(playerCard);
  }else {    
    let playerCard = document.createElement("div");
    playerCard.classList.add("flex", "flex-col", "items-center", "bg-gray-200", "p-4", "rounded-lg", "shadow-md");
    playerCard.innerHTML =  `
    <button type="button" class="group flex flex-col items-center">
    <div class="bg-[url('/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
    <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
      <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
          <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.diving) + Number(player.handling) + Number(player.kicking) + Number(player.reflexes) + Number(player.speed) + Number(player.positioning)) / 6)}</p>
          <p class="text-[0.625rem] text-white">${player.position}</p>
      </span>
      <div class="bg-[url('/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
      </div>
   </div>
   <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
      <div class=" mt-1">
          <p class="text-[0.650rem] font-medium text-white">${player.name}</p>
      </div>
      <div class="flex justify-center gap-1">
          <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">PAC</p>
              <p class="text-[0.5rem] font-bold text-white"> ${player.diving}</p>
          </div>
          <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">SHO</p>
              <p class="text-[0.5rem] font-bold text-white">${player.handling}</p>
          </div>
          <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">PAS</p>
              <p class="text-[0.5rem] font-bold text-white">${player.kicking}</p>
          </div>
          <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">DRI</p>
              <p class="text-[0.5rem] font-bold text-white">${player.reflexes}</p>
          </div>
          <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">DEF</p>
              <p class="text-[0.5rem] font-bold text-white">${player.speed}</p>
          </div>
          <div class="text-center">
              <p class="text-[0.5rem] font-normal text-white">PHY</p>
              <p class="text-[0.5rem] font-bold text-white">${player.positioning}</p>
          </div>
      </div>
      <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
          <img src="/img/argentina.webp" class="w-2" alt="">
          <img src="/img/msl.webp" class="w-2" alt="">
          <img src="/img/inter.webp" class="w-2" alt="">
      </div>
   </div>
      <div class="flex justify-around pl-2">
           <div class="detete-btn bg-red-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">delete</div>
           <div class="modify-btn bg-green-700 p-1 rounded-full text-[8px] text-white transition-all duration-300 group-hover:opacity-100 opacity-0">modify</div>
      </div>
</div>
</button>

`;
let button = playerCard.querySelector(".detete-btn");
button.addEventListener("click", function () {
suprimTheReplacementPlayer(player.name);
closePopUp();
});
let buttonToSwitch = playerCard.querySelector("button");
buttonToSwitch.addEventListener("click", function () {
  replacePlayerInPlan(player.position, player.name);
closePopUp();
});
  playerForSwitch.appendChild(playerCard);
  }

});
document.body.appendChild(popUpReplacement);
}

function closePopUp() {
  let popUp = document.querySelector(".fixed");
    popUp.remove();
}

//suprrime the player from replacements
function suprimTheReplacementPlayer(name) {
  let foundPlayerIndex = replacements.findIndex(player => player.name === name);
  let foundPlayerIndexIN = players.findIndex(player => player.name === name);
  replacements.splice(foundPlayerIndex, 1);
  players.splice(foundPlayerIndexIN, 1);
  updateReplacementList();
}

//delete the players from the plan
function deletePlayersFromThePlan(name, position, card) {
  let findplayers = playersInPlan.findIndex(player => player.name === name);
  let switchToReplacement = playersInPlan[findplayers];
  replacements.push(switchToReplacement);
  delete playerExistan[position];
  playersInPlan.splice(findplayers, 1);
  card.remove(); 
  let addCardToPlan = document.createElement('div');
  addCardToPlan.innerHTML = `
  <div class="bg-[url('../img/placeholder-card-normal.webp')] bg-cover bg-no-repeat h-[7rem] w-[5rem] md:h-[8.8rem] md:w-[6rem] ">
  </div>
  <p class="bg-[url('../img/pos_base.png')] bg-contain bg-no-repeat text-[0.8rem] md:text-base h-9 w-9 md:h-11 md:w-11 ml-6 mt-[-0.6rem] text-white text-center">
      ${position}
  </p>`;
  gk.appendChild(addCardToPlan);
  postexact(position, addCardToPlan);

  updateReplacementList()
}

//switch the players from the replacements to plan
function replacePlayerInPlan(position, name) {
  console.log(name);
  let indexToRemove = playersInPlan.findIndex(player => player.position === position);
  console.log(indexToRemove);
  let indexToReplace = replacements.findIndex(player => player.name === name);
  console.log(indexToReplace);

  if (indexToRemove !== -1 && indexToReplace !== -1) {
    let currentPlayer = playersInPlan[indexToRemove];
    replacements.push(currentPlayer);
    playersInPlan.splice(indexToRemove, 1);
    let replacementPlayer = replacements[indexToReplace];
    playersInPlan.push(replacementPlayer);
    playerExistan[position] = replacementPlayer.name;
    replacements.splice(indexToReplace, 1);
    playerReplacements(position);
    updateReplacementList();
    playersInPlan.forEach(player => {
      if (player.position !== "GK") {
        addToPlan(player.name, player.position, player.pace, player.shooting, player.passing, player.dribbling, player.defending, player.physical);
      }else {
        addGkToPlan(player.name, player.position, player.diving, player.handling, player.kicking, player.reflexes, player.speed, player.positioning);
      }
    })
  }
 
  closePopUp();
}
