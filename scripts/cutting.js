let displayFood = document.getElementById("grassEaten");
let grassImg = document.getElementById("grassImg");
let grassCut = 0;

function playSound(sound) {
	let soundPlayed = new Audio(sound);
	soundPlayed.play();
}

grassImg.addEventListener("click", () => {
	grassCut++;
	playSound("/Sounds/cuttingSound.mp3");
	displayFood.innerHTML = `Grass In Bank: ${grassCut}`;
});
