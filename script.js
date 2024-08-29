const liveScores = document.querySelector(".live-scores");

async function getGames() {
    try {
        const response = await fetch("https://api.openligadb.de/getmatchdata/bl1/2020/8")
        const data = await response.json();
        console.log(data);

        data.forEach((scores) => {
            liveScores.innerHTML += `<div>${scores.leagueName
            }</div>`;
        });
    } catch (error) {
        console.log(error);
    }
}
getGames();