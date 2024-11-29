let players = [];
console.log(players);

let menuToggle = document.getElementById('menu-toggle');
let mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', _ => {
    mobileMenu.classList.toggle('hidden');
});
function showHideList() {
    let form = document.getElementById("add-player");
    form.classList.toggle("hidden");
  }
  function showHideListGk() {
    let form = document.getElementById("add-Gk");
    form.classList.toggle("hidden");
  }



let playerName = document.getElementById("player-name");
let gkName = document.getElementById("gk-name");
let playerPosition = document.getElementById("player-position");
let playerGkPosition = document.getElementById("player-position-gk");
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
let btnAddTeamPlayer = document.getElementById("add-team-player");
let btnAddGkPlayer = document.getElementById("add-team-gk");
let addStatiqueChoise = document.getElementById("statique-add");
let inputverifi = document.querySelectorAll('input[type="number"]');
let inputverifitext = document.querySelectorAll('input[type="text"]');
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
let PlayerPlanCount = 0;
let gkPlanCount = 0;
let replacements = [];
console.log(replacements);

let planPlayers = [];
console.log(planPlayers);



let occupiedPositions = {};
let playerChosed = document.querySelectorAll(".player-chosed");
let showTheGkRoplacement = document.querySelectorAll(".show-the-gk-roplacement");
let gkChosed = document.querySelectorAll(".gk-chosed");
let showTheRoplacement = document.querySelectorAll(".show-the-roplacement");

for (let i = 0; i < inputverifi.length; i++) {
  inputverifi[i].addEventListener("input", function () {
    if (!/^\d{0,2}$/.test(this.value)) {
      this.value = this.value.replace(/[^\d]/g, '').slice(0, 2); 
    }
  });
}
for (let i = 0; i < inputverifitext.length; i++) {
  inputverifitext[i].addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
  });
}


btnAddTeamPlayer.addEventListener("click", function () {

  if (playerName.value.trim() !== "" && playerPosition.value !== "" && paceStatu.value.trim() !== "" && shootingStatu.value.trim() !== "" && passingStatu.value.trim() !== "" && dribblinStatu.value.trim() !== "" && defendingStatu.value.trim() !== "" && physicalStatu.value.trim() !== "") {
    if (players.find(player => player.name.toLowerCase() === playerName.value.trim().toLowerCase())) {
      alert(`The player "${playerName.value}" is already in the team.`);
    }else {
        if (occupiedPositions[playerPosition.value]) {
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
    
    
          updateReplacement(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
        } else {
    
          if (PlayerPlanCount < 10) {
            addToArray(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
            addToPlan(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
            PlayerPlanCount++;
            
            occupiedPositions[playerPosition.value] = playerName.value;
    
            // playerName.value = "";
            // playerPosition.value = "";
            // paceStatu.value = "";
            // shootingStatu.value = "";
            // passingStatu.value = "";
            // dribblinStatu.value = "";
            // defendingStatu.value = "";
            // physicalStatu.value = "";
          } else {
            alert('the player added to replacement!');
          }
        }
      }
  
  } else {
    alert("Please enter the correct info!");
  }
});



btnAddGkPlayer.addEventListener("click", function () {
  if (gkName.value.trim() !== "" && playerGkPosition.value !== "" && divingStatu.value.trim() !== "" && handlingStatu.value.trim() !== "" && kickingStatu.value.trim() !== "" && reflexesStatu.value.trim() !== "" && speedStatu.value.trim() !== "" && positioningStatu.value.trim() !== "") {
    if (players.find(player => player.name.toLowerCase() === gkName.value.trim().toLowerCase())) {
      alert(`The player "${gkName.value}" is already in the team.`);
    }else {
      if (gkPlanCount < 1) {
        addToArrayA(gkName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
        addGkToPlan(gkName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
        gkPlanCount++;
        
        // playerName.value = "";
        // playerPosition.value = "";
        // paceStatu.value = "";
        // shootingStatu.value = "";
        // passingStatu.value = "";
        // dribblinStatu.value = "";
        // defendingStatu.value = "";
        // physicalStatu.value = "";
      } else {
          replacements.push({
            "name": gkName.value,
            "position": playerGkPosition.value,
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
            "position": playerGkPosition.value,
            "rating": Math.floor((Number(divingStatu.value) + Number(handlingStatu.value) + Number(kickingStatu.value) + Number(reflexesStatu.value) + Number(speedStatu.value) + Number(positioningStatu.value)) / 6),
            "diving": divingStatu.value,
            "handling": handlingStatu.value,
            "kicking": kickingStatu.value,
            "reflexes": reflexesStatu.value,
            "speed": speedStatu.value,
            "positioning": positioningStatu.value
          });
  
      updateReplacementGK(gkName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
      
      }
  
    }
  
  }else {
    alert("please entre the corect info !");
  }
});


function addToArray(name, position, pace, shooting, passing, dribbling, defending, physical){
  let playerAdded = {
    "name" : name,
    "position" : position,
    "rating" : Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6),
    "pace" : pace,
    "shooting" : shooting,
    "passing" : passing,
    "dribbling" : dribbling,
    "defending" : defending,
    "physical" : physical
  }
  players.push(playerAdded);
}

function addToArrayA(name, position, diving, handling, kicking, reflexes, speed, positioning){
  let gkAdded = {
    "name" : name,
    "position" : position,
    "rating" : Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6),
    "diving" : diving,
    "handling" : handling,
    "kicking" : kicking,
    "reflexes" : reflexes,
    "speed" : speed,
    "positioning" : positioning
  }
  players.push(gkAdded);
}

function addToPlan(name, position, pace, shooting, passing, dribbling, defending, physical) {
    if (occupiedPositions[position]) {
      alert('the position is plain');
    } else {
  let divPlayerCard = document.createElement("div");
  divPlayerCard.innerHTML =`
<button type="button" class="show-the-roplacement" class="flex flex-col items-center  md:hover:scale-150 md:transition-all md:duration-500">
    <div class="bg-[url('../img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6)}</p>
                <p class="text-[0.625rem] text-white">${position}</p>
            </span>
            <div class="bg-[url('../img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
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
                <img src="../img/argentina.webp" class="w-2" alt="">
                <img src="../img/msl.webp" class="w-2" alt="">
                <img src="../img/inter.webp" class="w-2" alt="">
            </div>
         </div>
        
    </div>
</button>
      <button class="delete mr-3 text-white bg-red-500 hover:bg-red-700 hover:scale-150 rounded-full px-1 py-1"></button>

  `;




  let button = divPlayerCard.querySelector("button");
  button.addEventListener("click", function () {
  poopUP(position);
  
});
  addPositionToPlan(position, divPlayerCard); 
  let playerAdded = {
    "name" : name,
    "position" : position,
    "rating" : Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6),
    "pace" : pace,
    "shooting" : shooting,
    "passing" : passing,
    "dribbling" : dribbling,
    "defending" : defending,
    "physical" : physical
  }
 
  planPlayers.push(playerAdded);

  const deleteButton = divPlayerCard.querySelector(".delete");
  deleteButton.addEventListener("click", function () {
    deletePlayer(name, position, divPlayerCard);
  });
 
}
}

function addGkToPlan(name, position, diving, handling, kicking, reflexes, speed, positioning) {
  let divPlayerCard = document.createElement("div");
  gk.innerHTML = "";
  divPlayerCard.innerHTML =`
<button type="button" class="show-the-gk-roplacement" class="flex flex-col items-center hover:scale-150 transition-all duration-500">
    <div class="bg-[url('................/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6)}</p>
                <p class="text-[0.625rem] text-white">${position}</p>
            </span>
            <div class="bg-[url('................/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
            </div>
        </div>
         <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
            <div class=" mt-1">
                <p class="text-[0.650rem] font-medium text-white">${name}</p>
            </div>
            <div class="flex justify-center gap-1">
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAC</p>
                    <p class="text-[0.5rem] font-bold text-white">${diving}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">SHO</p>
                    <p class="text-[0.5rem] font-bold text-white">${handling}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAS</p>
                    <p class="text-[0.5rem] font-bold text-white">${kicking}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DRI</p>
                    <p class="text-[0.5rem] font-bold text-white">${reflexes}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">DEF</p>
                    <p class="text-[0.5rem] font-bold text-white">${speed}</p>
                </div>
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PHY</p>
                    <p class="text-[0.5rem] font-bold text-white">${positioning}</p>
                </div>
            </div>
            <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
                <img src="............../img/argentina.webp" class="w-2" alt="">
                <img src="............../img/msl.webp" class="w-2" alt="">
                <img src="............../img/inter.webp" class="w-2" alt="">
            </div>
         </div>
        
    </div>
</button>
  `
  
  let button = divPlayerCard.querySelector("button");
  button.addEventListener("click", function () {
    poopUP(position);
    
  });

  gk.appendChild(divPlayerCard);
  let playerGKAdded = {
    "name" : name,
    "position" : position,
    "rating" : Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6),
    "diving" : diving,
    "handling" : handling,
    "kicking" : kicking,
    "reflexes" : reflexes,
    "speed" : speed,
    "positioning" : positioning
  }
  planPlayers.push(playerGKAdded);
}

function addPositionToPlan(planPosition, divPlayerCard){
  switch (planPosition) {
    case "LW":
      lw.innerHTML="";
      lw.appendChild(divPlayerCard);
      break;
    case "ST":
      st.innerHTML="";
      st.appendChild(divPlayerCard);
      break;
    case "RW":
      rw.innerHTML="";
      rw.appendChild(divPlayerCard);
      break;
    case "LCM":
      lCm.innerHTML="";
      lCm.appendChild(divPlayerCard);
      break;
    case "CAM":
      cAm.innerHTML="";
      cAm.appendChild(divPlayerCard);
      break;
    case "RCM":
      rCm.innerHTML="";
      rCm.appendChild(divPlayerCard);
      break;
    case "LB":
      lb.innerHTML="";
      lb.appendChild(divPlayerCard);
      break;
    case "LCB":
      lCb.innerHTML="";
      lCb.appendChild(divPlayerCard);
      break;
    case "RCB":
      rCb.innerHTML="";
      rCb.appendChild(divPlayerCard);
      break;
    case "RB":
      rb.innerHTML="";
      rb.appendChild(divPlayerCard);
      break;
  }
}



function updateReplacement(name, position, pace, shooting, passing, dribbling, defending, physical) {
  let replacementList = document.getElementById("replacement-list");
  let replacementLimit = 14; 
  
  if (replacementList.children.length >= replacementLimit) {
      alert("Replacement slots are full. Cannot add more players.");
      return;
  }

  let li = document.createElement("li");
  li.classList.add('list-none');
  li.innerHTML = `
<button type="button" class="player-chosed" class="flex flex-col items-center hover:scale-150 transition-all duration-500">
  <div class="bg-[url('............/img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
      <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
          <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
              <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6)}</p>
              <p class="text-[0.625rem] text-white">${position}</p>
          </span>
          <div class="bg-[url('............/img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
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
              <img src="........../img/argentina.webp" class="w-2" alt="">
              <img src="........../img/msl.webp" class="w-2" alt="">
              <img src="........../img/inter.webp" class="w-2" alt="">
          </div>
       </div>
  </div>
</button>
      
`;


replacementList.appendChild(li);
}

function updateReplacementGK(name, position, diving, handling, kicking, reflexes, speed, positioning) {
  let replacementList = document.getElementById("replacement-list");
  let replacementLimit = 4; 
  
  if (replacementList.children.length >= replacementLimit) {
      alert("Replacement slots are full. Cannot add more players.");
      return;
  }

  let li = document.createElement("li");
  li.classList.add('list-none');
  li.innerHTML = `
    <button type="button" class="gk-chosed flex flex-col items-center hover:scale-150 transition-all duration-500">
      <div class="bg-[url('......../img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
          <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
              <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                  <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6)}</p>
                  <p class="text-[0.625rem] text-white">${position}</p>
              </span>
              <div class="bg-[url('......../img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
              </div>
          </div>
           <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
              <div class="mt-1">
                  <p class="text-[0.650rem] font-medium text-white">${name}</p>
              </div>
              <div class="flex justify-center gap-1">
                  <div class="text-center">
                      <p class="text-[0.5rem] font-normal text-white">PAC</p>
                      <p class="text-[0.5rem] font-bold text-white">${diving}</p>
                  </div>
                  <div class="text-center">
                      <p class="text-[0.5rem] font-normal text-white">SHO</p>
                      <p class="text-[0.5rem] font-bold text-white">${handling}</p>
                  </div>
                  <div class="text-center">
                      <p class="text-[0.5rem] font-normal text-white">PAS</p>
                      <p class="text-[0.5rem] font-bold text-white">${kicking}</p>
                  </div>
                  <div class="text-center">
                      <p class="text-[0.5rem] font-normal text-white">DRI</p>
                      <p class="text-[0.5rem] font-bold text-white">${reflexes}</p>
                  </div>
                  <div class="text-center">
                      <p class="text-[0.5rem] font-normal text-white">DEF</p>
                      <p class="text-[0.5rem] font-bold text-white">${speed}</p>
                  </div>
                  <div class="text-center">
                      <p class="text-[0.5rem] font-normal text-white">PHY</p>
                      <p class="text-[0.5rem] font-bold text-white">${positioning}</p>
                  </div>
              </div>
              <div class="flex justify-center items-center gap-1 mt-[0.1rem]">
                  <img src="....../img/argentina.webp" class="w-2" alt="">
                  <img src="....../img/msl.webp" class="w-2" alt="">
                  <img src="....../img/inter.webp" class="w-2" alt="">
              </div>
           </div>
      </div>
    </button>
  `;


  replacementList.appendChild(li);
}

function poopUP(position) {
  let filteredPlayers = replacements.filter(player => player.position === position);
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

  let playerContainer = popUpReplacement.querySelector(".player-replacement-poopup");
  filteredPlayers.forEach(player => {
    if (position !== "GK") {
      let playerCard = document.createElement("div");
      playerCard.classList.add("flex", "flex-col", "items-center", "bg-gray-200", "p-4", "rounded-lg", "shadow-md");
      playerCard.innerHTML = `
      <button type="button" class=" flex flex-col items-center hover:scale-150 transition-all duration-500">
        <div class="bg-[url('../img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
          <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
              <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.pace) + Number(player.shooting) + Number(player.passing) + Number(player.dribbling) + Number(player.defending) + Number(player.physical)) / 6)}</p>
              <p class="text-[0.625rem] text-white">${player.position}</p>
            </span>
            <div class="bg-[url('../img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]"></div>
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
        </div>
      </button>


      `;

      playerCard.addEventListener("click", function() {
        replacePlayerInPlan(player, player.position, player.name); 
        closePopUp(); 
      });  

      playerContainer.appendChild(playerCard);
    }else {
      let playerCard = document.createElement("div");
      playerCard.classList.add("flex", "flex-col", "items-center", "bg-gray-200", "p-4", "rounded-lg", "shadow-md");
      playerCard.innerHTML =  `
      <button type="button" class=" flex flex-col items-center hover:scale-150 transition-all duration-500">
        <div class="bg-[url('..../img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
            <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
                <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                    <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.diving) + Number(player.handling) + Number(player.kicking) + Number(player.reflexes) + Number(player.speed) + Number(player.positioning)) / 6)}</p>
                    <p class="text-[0.625rem] text-white">${player.position}</p>
                </span>
                <div class="bg-[url('..../img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
                </div>
            </div>
             <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
                <div class="mt-1">
                    <p class="text-[0.650rem] font-medium text-white">${player.name}</p>
                </div>
                <div class="flex justify-center gap-1">
                    <div class="text-center">
                        <p class="text-[0.5rem] font-normal text-white">PAC</p>
                        <p class="text-[0.5rem] font-bold text-white">${player.diving}</p>
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
                    <img src="../img/argentina.webp" class="w-2" alt="">
                    <img src="../img/msl.webp" class="w-2" alt="">
                    <img src="../img/inter.webp" class="w-2" alt="">
                </div>
             </div>
        </div>
      </button>
    `;

    playerCard.addEventListener("click", function() {
      replacePlayerInPlan(player, player.position, player.name); 
      closePopUp(); 
    });  
    // let deleteButtonGK = popUpReplacement.querySelector("button.bg-red-500");
    // deleteButtonGK.addEventListener("click", function() {
    //   deletePlayer(player.name); 
    //   closePopUp(); 
    // });

    playerContainer.appendChild(playerCard);
    }
  });

  document.body.appendChild(popUpReplacement);
}

function closePopUp() {
  let popUp = document.querySelector(".fixed");
    popUp.remove();
  
}

function replacePlayerInPlan(player, position, name) {
  let existingPlayerIndex = planPlayers.findIndex(player => player.position === position);
  if (existingPlayerIndex !== -1) {
    let existingPlayer = planPlayers[existingPlayerIndex];
    replacements.push(existingPlayer);
    players.push(existingPlayer);
    planPlayers.splice(existingPlayerIndex, 1);
  }
  let playerIndexInReplacements = replacements.findIndex(playerReplacement => playerReplacement.name === name);
  if (playerIndexInReplacements !== -1) {
    replacements.splice(playerIndexInReplacements, 1);
    players.splice(playerIndexInReplacements, 1);
  }
if (player.position !== "GK") {
  let divPlayerCard = document.createElement("div");
  divPlayerCard.innerHTML =`
      <button type="button" class=" flex flex-col items-center hover:scale-150 transition-all duration-500">
        <div class="bg-[url('../img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
          <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
              <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.pace) + Number(player.shooting) + Number(player.passing) + Number(player.dribbling) + Number(player.defending) + Number(player.physical)) / 6)}</p>
              <p class="text-[0.625rem] text-white">${player.position}</p>
            </span>
            <div class="bg-[url('../img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]"></div>
          </div>..
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
        </div>
      </button>


      `;


      let playerAdded = {
        "name" : player.name,
        "position" : player.position,
        "rating" : Math.floor((Number(player.pace) + Number(player.shooting) + Number(player.passing) + Number(player.dribbling) + Number(player.defending) + Number(player.physical)) / 6),
        "pace" : player.pace,
        "shooting" : player.shooting,
        "passing" : player.passing,
        "dribbling" : player.dribbling,
        "defending" : player.defending,
        "physical" : player.physical
      }
      planPlayers.push(playerAdded);

      divPlayerCard.querySelector("button").addEventListener("click", function() {
        poopUP(player.position);
      });
  addPositionToPlan(player.position, divPlayerCard); 
}else {
  let divPlayerCard = document.createElement("div");
  divPlayerCard.innerHTML =`
<button type="button" class="show-the-gk-roplacement" class="flex flex-col items-center hover:scale-150 transition-all duration-500">
    <div class="bg-[url('..../img/99_total_rush.webp')] bg-cover bg-no-repeat w-[8rem] h-[12rem] flex flex-col">
        <div class="flex justify-center items-center mr-[-1.3rem] mt-[1.950rem]">
            <span class="flex flex-col mt-[-2.5rem] mr-[-1rem]">
                <p class="text-[0.625rem] font-bold text-white">${Math.floor((Number(player.diving) + Number(player.handling) + Number(player.kicking) + Number(player.reflexes) + Number(player.speed) + Number(player.positioning)) / 6)}</p>
                <p class="text-[0.625rem] text-white">${player.position}</p>
            </span>
            <div class="bg-[url('..../img/messi.png')] bg-cover bg-no-repeat w-[7rem] h-[5.75rem]">
            </div>
        </div>
         <div class="flex flex-col items-center ml-[0.6rem] mt-[-0.450rem]">
            <div class=" mt-1">
                <p class="text-[0.650rem] font-medium text-white">${player.name}</p>
            </div>
            <div class="flex justify-center gap-1">
                <div class="text-center">
                    <p class="text-[0.5rem] font-normal text-white">PAC</p>
                    <p class="text-[0.5rem] font-bold text-white">${player.diving}</p>
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
                <img src="../img/argentina.webp" class="w-2" alt="">
                <img src="../img/msl.webp" class="w-2" alt="">
                <img src="../img/inter.webp" class="w-2" alt="">
            </div>
         </div>
        
    </div>
</button>
  `;
  let playerGKAdded = {
    "name" : player.name,
    "position" : player.position,
    "rating" : Math.floor((Number(player.diving) + Number(player.handling) + Number(player.kicking) + Number(player.reflexes) + Number(player.speed) + Number(player.positioning)) / 6),
    "diving" : player.diving,
    "handling" : player.handling,
    "kicking" : player.kicking,
    "reflexes" : player.reflexes,
    "speed" : player.speed,
    "positioning" : player.positioning
  }
  planPlayers.push(playerGKAdded);
  
  let button = divPlayerCard.querySelector("button");
  button.addEventListener("click", function () {
    poopUP(player.position);
    
  });
  gk.innerHTML = "";
  gk.appendChild(divPlayerCard);
}

}


function deletePlayer(name, position, divPlayerCard) {
  const deletePlayerIndex = planPlayers.findIndex(player => player.name === name);
  if (deletePlayerIndex !== -1) {
    let playerToDelete = planPlayers[deletePlayerIndex]
    delete occupiedPositions[position];
    planPlayers.splice(deletePlayerIndex, 1);
    divPlayerCard.remove(); 
  }
}
