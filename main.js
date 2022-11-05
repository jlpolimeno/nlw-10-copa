function creatGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}

let delay = -0.3;
function createCard (date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
  </div>
  `
}
document.querySelector("#app").innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
      </header>
      <main id="cards">
        ${createCard("24/11", "quinta", creatGame("brasil", "16:00", "serbia"))}
        ${createCard("28/11","segunda", creatGame("brasil", "13:00", "switzerland") + creatGame("portugal", "16:00", "uruguay"))}
        ${createCard("02/12", "sexta", creatGame("brasil", "16:00", "cameroon"))}
      </main>
`
