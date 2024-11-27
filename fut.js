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


let playerName = document.getElementById("player-name");;
let playerPosition = document.getElementById("player-position");
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
let speedStatu = document.getElementById("speed-statu");
let positioningStatu = document.getElementById("positioning-statu");
let addTeamPlayer = document.getElementById("add-team-player");
let addStatiqueChoise = document.getElementById("statique-add")
const inputverifi = document.querySelectorAll('input[type="number"]');

  for (let i = 0; i < inputverifi.length; i++) {
  inputverifi[i].addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2); 
    }
  });
}

addTeamPlayer.addEventListener("click", _ =>{
  if(playerPosition.value !== "GK"){
    if (playerName.value.trim() !== "" && playerPosition.value !== "" && paceStatu.value.trim() !== "" && shootingStatu.value.trim() !== "" 
    && passingStatu.value.trim() !== "" && dribblinStatu.value.trim() !== "" && defendingStatu.value.trim() !== "" && physicalStatu.value.trim() !== "") {
      
    }else {
      alert("please enter the corect info !");
    }
}else if (playerPosition.value === "GK") {
  addStatiqueChoise.innerHTML = '';
  let gkStatique = document.createElement('div');
  gkStatique.classList.add('flex', 'flex-col', 'gap-8 ');
  addStatiqueChoise.innerHTML = `
<label class="text-white text-lg font-semibold mb-2 text-center"> Goalkeeper Statique</label>
  <div class="flex justify-center gap-24">
    <div class="flex flex-col justify-start">
      <label for="" class="text-white text-lg font-semibold mb-2">diving:</label>
      <input id="diving-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
    <div class="flex flex-col justify-start">
      <label for="" class="text-white text-lg font-semibold mb-2">handling:</label>
      <input id="handling-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
  </div>
  <div class="flex justify-center gap-24">
    <div class="flex flex-col justify-start">
      <label for="" class="text-white text-lg font-semibold mb-2">kicking:</label>
      <input id="kicking-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
    <div class="flex flex-col justify-start">
      <label for="" class="text-white text-lg font-semibold mb-2">reflexes:</label>
      <input id="reflexes-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
  </div>
  <div class="flex justify-center gap-24">
    <div class="flex flex-col justify-start">
      <label for="" class="text-white text-lg font-semibold mb-2">speed:</label>
      <input id="speed-statu" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
    <div class="flex flex-col justify-start">
      <label for="" class="text-white text-lg font-semibold mb-2">positioning:</label>
      <input id="positioning-statu" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
  </div>
  `;
  addStatiqueChoise.appendChild(gkStatique);
}else{
  
}
});



































{/* <label class="text-white text-lg font-semibold mb-2 text-center"> Player Statique</label>
<div class="flex justify-center  gap-24">
    <div class="flex flex-col justify-start">
        <label for="" class="text-white text-lg font-semibold mb-2">pace:</label>
        <input id="pace-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
    <div class="flex flex-col justify-start">
        <label for="" class="text-white text-lg font-semibold mb-2">shooting:</label>
        <input id="shooting-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
</div>
<div class="flex justify-center gap-24">
    <div class="flex flex-col justify-start">
        <label for="" class="text-white text-lg font-semibold mb-2">passing:</label>
        <input id="passing-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
    <div class="flex flex-col justify-start">
        <label for="" class="text-white text-lg font-semibold mb-2">dribbling:</label>
        <input id="dribbling-status" class="appearance-textfield bg-[#2b2a2a] hover:border-green-600 border border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
</div>
<div class="flex justify-center gap-24">
    <div class="flex flex-col justify-start">
        <label for="" class="text-white text-lg font-semibold mb-2">defending:</label>
        <input id="defending-status" class="appearance-textfield bg-[#2b2a2a] border hover:border-green-600 border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
    <div class="flex flex-col justify-start">
        <label for="" class="text-white text-lg font-semibold mb-2">physical:</label>
        <input id="physical-status" class="appearance-textfield bg-[#2b2a2a] border hover:border-green-600 border-3 border-gray-600 rounded-xl h-8 " type="number"> 
    </div>
</div> */}