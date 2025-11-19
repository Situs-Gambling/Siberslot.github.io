const grandJackpotValueElement = document.getElementById("grand-jackpot-value");

let jackpotValue = 25400805040;

function updateGrandJackpot() {
  const increment = 100;
  jackpotValue += increment;
  grandJackpotValueElement.textContent = numberWithCommas(jackpotValue);
  setTimeout(updateGrandJackpot, 9);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

updateGrandJackpot(100);
