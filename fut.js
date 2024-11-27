let players = [
    {
      name: "Lionel Messi",
      photo: "https://cdn3.futbin.com/content/fifa25/img/players/p67266887.png?fm=png&ixlib=java-2.1.0&verzion=1&w=252&s=2af95830918a32886ab8cbde23f0e1c0",
      position: "RW",
      nationality: "Argentina",
      flag: "https://cdn.sofifa.net/flags/ar.png",
      club: "Inter Miami",
      logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
      rating: 93,
      pace: 85,
      shooting: 92,
      passing: 91,
      dribbling: 95,
      defending: 35,
      physical: 65
    },
    {
      name: "Cristiano Ronaldo",
      photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
      position: "ST",
      nationality: "Portugal",
      flag: "https://cdn.sofifa.net/flags/pt.png",
      club: "Al Nassr",
      logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
      rating: 91,
      pace: 84,
      shooting: 94,
      passing: 82,
      dribbling: 87,
      defending: 34,
      physical: 77
    },
    {
      name: "Kevin De Bruyne",
      photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
      position: "CM",
      nationality: "Belgium",
      flag: "https://cdn.sofifa.net/flags/be.png",
      club: "Manchester City",
      logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
      rating: 91,
      pace: 74,
      shooting: 86,
      passing: 93,
      dribbling: 88,
      defending: 64,
      physical: 78
    },
    {
      name: "Kylian Mbappé",
      photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
      position: "ST",
      nationality: "France",
      flag: "https://cdn.sofifa.net/flags/fr.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 92,
      pace: 97,
      shooting: 89,
      passing: 80,
      dribbling: 92,
      defending: 39,
      physical: 77
    },
    {
      name: "Virgil van Dijk",
      photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
      position: "CB",
      nationality: "Netherlands",
      flag: "https://cdn.sofifa.net/flags/nl.png",
      club: "Liverpool",
      logo: "https://cdn.sofifa.net/meta/team/8/120.png",
      rating: 90,
      pace: 75,
      shooting: 60,
      passing: 70,
      dribbling: 72,
      defending: 92,
      physical: 86
    },
    {
      name: "Antonio Rudiger",
      photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
      position: "CB",
      nationality: "Germany",
      flag: "https://cdn.sofifa.net/flags/de.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 88,
      pace: 82,
      shooting: 55,
      passing: 73,
      dribbling: 70,
      defending: 86,
      physical: 86
    },
    {
      name: "Neymar Jr",
      photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
      position: "LW",
      nationality: "Brazil",
      flag: "https://cdn.sofifa.net/flags/br.png",
      club: "Al-Hilal",
      logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
      rating: 90,
      pace: 91,
      shooting: 83,
      passing: 86,
      dribbling: 94,
      defending: 37,
      physical: 61
    },
    {
      name: "Mohamed Salah",
      photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
      position: "RW",
      nationality: "Egypt",
      flag: "https://cdn.sofifa.net/flags/eg.png",
      club: "Liverpool",
      logo: "https://cdn.sofifa.net/meta/team/8/120.png",
      rating: 89,
      pace: 93,
      shooting: 87,
      passing: 81,
      dribbling: 90,
      defending: 45,
      physical: 75
    },
    {
      name: "Joshua Kimmich",
      photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
      position: "CM",
      nationality: "Germany",
      flag: "https://cdn.sofifa.net/flags/de.png",
      club: "Bayern Munich",
      logo: "https://cdn.sofifa.net/meta/team/503/120.png",
      rating: 89,
      pace: 70,
      shooting: 75,
      passing: 88,
      dribbling: 84,
      defending: 84,
      physical: 81
    },
    {
      name: "Jan Oblak",
      photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
      position: "GK",
      nationality: "Slovenia",
      flag: "https://cdn.sofifa.net/flags/si.png",
      club: "Atletico Madrid",
      logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
      rating: 91,
      diving: 89,
      handling: 90,
      kicking: 78,
      reflexes: 92,
      speed: 50,
      positioning: 88
    },

    {
        name: "Luka Modrić",
        photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
        position: "CM",
        nationality: "Croatia",
        flag: "https://cdn.sofifa.net/flags/hr.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 88,
        pace: 74,
        shooting: 78,
        passing: 89,
        dribbling: 90,
        defending: 72,
        physical: 65
      },
      {
        name: "Vinicius Junior",
        photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
        position: "LW",
        nationality: "Brazil",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 89,
        pace: 91,
        shooting: 88,
        passing: 85,
        dribbling: 94,
        defending: 39,
        physical: 61
      },
      {
        name: "Brahim Diáz",
        photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
        position: "LW",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 82,
        pace: 85,
        shooting: 74,
        passing: 78,
        dribbling: 85,
        defending: 31,
        physical: 56
      },
      {
        name: "Karim Benzema",
        photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
        position: "ST",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Al-Ittihad",
        logo: "https://cdn.sofifa.net/meta/team/476/120.png",
        rating: 90,
        pace: 77,
        shooting: 90,
        passing: 83,
        dribbling: 88,
        defending: 40,
        physical: 78
      },
      {
        name: "Erling Haaland",
        photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        position: "ST",
        nationality: "Norway",
        flag: "https://cdn.sofifa.net/flags/no.png",
        club: "Manchester City",
        logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        rating: 91,
        pace: 89,
        shooting: 94,
        passing: 65,
        dribbling: 80,
        defending: 45,
        physical: 88
      },
      {
        name: "N'Golo Kanté",
        photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
        position: "CDM",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Al-Ittihad",
        logo: "https://cdn.sofifa.net/meta/team/476/120.png",
        rating: 87,
        pace: 77,
        shooting: 66,
        passing: 75,
        dribbling: 82,
        defending: 88,
        physical: 82
      },
      {
        name: "Alphonso Davies",
        photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
        position: "LB",
        nationality: "Canada",
        flag: "https://cdn.sofifa.net/flags/ca.png",
        club: "Bayern Munich",
        logo: "https://cdn.sofifa.net/meta/team/503/120.png",
        rating: 84,
        pace: 96,
        shooting: 68,
        passing: 77,
        dribbling: 82,
        defending: 76,
        physical: 77
      },
      {
        name: "Yassine Bounou",
        photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
        position: "GK",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Al-Hilal",
        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 84,
        diving: 81,
        handling: 82,
        kicking: 77,
        reflexes: 86,
        speed: 38,
        positioning: 83
      },
      {
        name: "Bruno Fernandes",
        photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
        position: "CM",
        nationality: "Portugal",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 88,
        pace: 75,
        shooting: 85,
        passing: 89,
        dribbling: 84,
        defending: 69,
        physical: 77
      },
      {
        name: "Jadon Sancho",
        photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
        position: "LW",
        nationality: "England",
        flag: "https://cdn.sofifa.net/flags/gb-eng.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 84,
        pace: 85,
        shooting: 74,
        passing: 78,
        dribbling: 88,
        defending: 34,
        physical: 63
      },
      {
        name: "Trent Alexander-Arnold",
        photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
        position: "RB",
        nationality: "England",
        flag: "https://cdn.sofifa.net/flags/gb-eng.png",
        club: "Liverpool",
        rating: 87,
        pace: 76,
        shooting: 66,
        passing: 89,
        dribbling: 80,
        defending: 79,
        physical: 71
      },
      {
        name: "Achraf Hakimi",
        photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
        position: "RB",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Paris Saint-Germain",
        logo: "https://cdn.sofifa.net/meta/team/591/120.png",
        rating: 84,
        pace: 91,
        shooting: 76,
        passing: 80,
        dribbling: 80,
        defending: 75,
        physical: 78
      },
      {
        name: "Youssef En-Nesyri",
        photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
        position: "ST",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Fenerbahçe",
        logo: "https://cdn.sofifa.net/meta/team/88/120.png",
        rating: 83,
        pace: 82,
        shooting: 82,
        passing: 63,
        dribbling: 77,
        defending: 36,
        physical: 80
      },
      {
        name: "Noussair Mazraoui",
        photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
        position: "LB",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 81,
        pace: 78,
        shooting: 66,
        passing: 77,
        dribbling: 83,
        defending: 77,
        physical: 71
      },
      {
        name: "Ismael Saibari",
        photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
        position: "CM",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "PSV",
        logo: "https://cdn.sofifa.net/meta/team/682/120.png",
        rating: 83,
        pace: 89,
        shooting: 78,
        passing: 80,
        dribbling: 83,
        defending: 72,
        physical: 78
      },
      {
        name: "Olivier Giroud",
        photo: "https://cdn.sofifa.net/players/021/013/25_120.png",
        position: "ST",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "AC Milan",
        logo: "https://cdn.sofifa.net/meta/team/736/120.png",
        rating: 83,
        pace: 73,
        shooting: 84,
        passing: 72,
        dribbling: 75,
        defending: 37,
        physical: 85
      }   
];

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
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
const btnAddTeamPlayer = document.getElementById("add-team-player");
const btnAddGkPlayer = document.getElementById("add-team-gk");
let addStatiqueChoise = document.getElementById("statique-add");
const inputverifi = document.querySelectorAll('input[type="number"]');
const lw = document.getElementById("lw");
const st = document.getElementById("st");
const rw = document.getElementById("rw");
const lCm = document.getElementById("l-cm");
const cAm = document.getElementById("cam");
const rCm = document.getElementById("r-cm");
const lb = document.getElementById("lb");
const lCb = document.getElementById("l-cb");
const rCb = document.getElementById("r-cb");
const rb = document.getElementById("rb");
const gk = document.getElementById("gk");
let fieldPlayerCount = 0;
let replacements = [];


  for (let i = 0; i < inputverifi.length; i++) {
  inputverifi[i].addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2); 
    }
  });
}

btnAddTeamPlayer.addEventListener("click", function () {
  if (playerName.value.trim() !== "" && playerPosition.value !== "" && paceStatu.value.trim() !== "" && shootingStatu.value.trim() !== "" && passingStatu.value.trim() !== "" && dribblinStatu.value.trim() !== "" && defendingStatu.value.trim() !== "" && physicalStatu.value.trim() !== "") {
    if (fieldPlayerCount < 10) {
      addToArray(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
      addToPlan(playerName.value, playerPosition.value, paceStatu.value, shootingStatu.value, passingStatu.value, dribblinStatu.value, defendingStatu.value, physicalStatu.value);
      fieldPlayerCount++;
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
  }
  } else {
    alert("Please enter the correct info!");
  }
});


btnAddGkPlayer.addEventListener("click", function () {
  if (gkName.value.trim() !== "" && playerGkPosition.value !== "" && divingStatu.value.trim() !== "" && handlingStatu.value.trim() !== "" && kickingStatu.value.trim() !== "" && reflexesStatu.value.trim() !== "" && speedStatu.value.trim() !== "" && positioningStatu.value.trim() !== "") {
    addToArrayA(gkName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
    console.log(players);
    addGkToPlan(gkName.value, playerGkPosition.value, divingStatu.value, handlingStatu.value, kickingStatu.value, reflexesStatu.value, speedStatu.value, positioningStatu.value);
    // playerName.value = "";
    // playerPosition.value = "";
    // paceStatu.value = "";
    // shootingStatu.value = "";
    // passingStatu.value = "";
    // dribblinStatu.value = "";
    // defendingStatu.value = "";
    // physicalStatu.value = "";
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
  let divPlayerCard = document.createElement("div");
  divPlayerCard.innerHTML =`
<button type="button" class="flex flex-col items-center">
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
        
    </div>
</button>
  `

  addPositionToPlan(position, divPlayerCard); 
}

function addGkToPlan(name, position, diving, handling, kicking, reflexes, speed, positioning) {
  let divPlayerCard = document.createElement("div");
  divPlayerCard.innerHTML =`
<button type="button" class="flex flex-col items-center">
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
                <img src="/img/argentina.webp" class="w-2" alt="">
                <img src="/img/msl.webp" class="w-2" alt="">
                <img src="/img/inter.webp" class="w-2" alt="">
            </div>
         </div>
        
    </div>
</button>
  `

  addPositionGkToPlan(position,divPlayerCard); 
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

function addPositionGkToPlan(planPosition, divPlayerCard){
  switch (planPosition) {
    case "GK":
      gk.innerHTML="";
      gk.appendChild(divPlayerCard);
      break;
  }
}

function updateReplacement(name, position, pace, shooting, passing, dribbling, defending, physical) {
  const replacementList = document.getElementById("replacement-list");
  const replacementLimit = 14; 
  
  if (replacementList.children.length >= replacementLimit) {
      alert("Replacement slots are full. Cannot add more players.");
      return;
  }

  let li = document.createElement("li");
  li.classList.add('list-none');
  li.innerHTML = `
<button type="button" class="flex flex-col items-center">
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
              <p class="text-[0.650rem] font-medium text-white">${pace}</p>
          </div>
          <div class="flex justify-center gap-1">
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAC</p>
                  <p class="text-[0.5rem] font-bold text-white">${shooting}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">SHO</p>
                  <p class="text-[0.5rem] font-bold text-white">${passing}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">PAS</p>
                  <p class="text-[0.5rem] font-bold text-white">${dribbling}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DRI</p>
                  <p class="text-[0.5rem] font-bold text-white">${defending}</p>
              </div>
              <div class="text-center">
                  <p class="text-[0.5rem] font-normal text-white">DEF</p>
                  <p class="text-[0.5rem] font-bold text-white">${physical}</p>
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
  </div>
</button>`;

replacementList.appendChild(li);
}
