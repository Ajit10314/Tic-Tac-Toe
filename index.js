console.log("Welcome to Tic Tac Toe World");

let turn = "X";

const changeTurn = () => turn === "X" ? "O" : "X";

const checkWin = () => {
    const boxtext = document.querySelectorAll('.boxtext');
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];
    
    wins.forEach(([a, b, c]) => {
        if (boxtext[a].innerText && boxtext[a].innerText === boxtext[b].innerText && boxtext[b].innerText === boxtext[c].innerText) {
            document.querySelector('.info').innerText = boxtext[a].innerText + " Wins!";
            document.querySelector(".IMG img").style.width = '560px';
            document.querySelectorAll('.box').forEach(box => box.style.pointerEvents = 'none');
        }
    });
};

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const boxtext = box.querySelector('.boxtext');
        if (!boxtext.innerText) {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            document.querySelector('.info').innerText = "Turn for " + turn;
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    document.querySelectorAll('.boxtext').forEach(boxtext => boxtext.innerText = '');
    document.querySelector('.info').innerText = "Turn for X...";
    document.querySelector(".IMG img").style.width = '0';
    turn = "X";
    document.querySelectorAll('.box').forEach(box => box.style.pointerEvents = 'auto');
});