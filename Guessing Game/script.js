let count = 9;

function Guess() {
    const el = document.querySelector(".input-game");
    const value = Number(el.value);
    const spanEl = document.querySelector(".spn");


    if (count === 0) {
        spanEl.innerHTML = "Sorry, you're out of attempts! The correct number was 45.";
        return;
    }

    if (value < 45) {
        spanEl.innerHTML = `Too low! Try again. ${count} attempts remaining.`;
        spanEl.style.color = "black";
    } else if (value > 45) {
        spanEl.innerHTML = `Too high! Try again. ${count} attempts remaining.`;
        spanEl.style.color = "black";
    } else {
        spanEl.innerHTML = `Congratulations!`;
        spanEl.style.color = "green";
        return;
    }

    count--;
}
Guess()
