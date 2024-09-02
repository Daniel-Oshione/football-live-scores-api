const liveScores = document.querySelector(".live-scores");

async function getGames() {
    try {
        const response = await fetch("https://api.openligadb.de/getmatchdata/bl1/2023/8")
        const data = await response.json();
        console.log(data);

        data.forEach((scores) => {
            liveScores.innerHTML += `<div class="mb-32">
        <h1 class="text-center mb-9 text-slate-1  00 font-bold">${scores.leagueName}</h1>
        <hr class="mb-10">
        <div class="flex justify-evenly items-center bg-slate-800 p-5 rounded-3xl">
          <div class="text-center flex flex-col items-center">
            <img src="${scores.team1.teamIconUrl}" onerror="this.onerror=null; this.src='./img/icons8-soccer-ball-96.png';" alt="" class="w-32 h-32 rounded-lg mb-4">
            <p class="text-xl font-bold text-slate-200">${scores.team1.teamName}</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold text-slate-200">${scores.matchDateTime}</p>
            <p class="text-6xl font-bold text-slate-200 mb-4">${scores.goals[0].scoreTeam1} - ${scores.goals[0].scoreTeam2}</p>
            <p class="text-xl font-bold text-slate-200 mb-4">FULLTIME</p>
          </div>
          <div class="text-center flex flex-col items-center">
            <img src="${scores.team2.teamIconUrl}" onerror="this.onerror=null; this.src='./img/icons8-soccer-ball-96.png';" alt="" class="w-32 h-32 rounded-lg mb-4">
            <div>
              <p class="text-xl font-bold text-slate-200">${scores.team2.teamName}</p>
            </div>
          </div>
        </div>
      </div>`;
        });
    } catch (error) {
        console.log(error);
    }
}
getGames();