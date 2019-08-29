export function runApp() {
    const secretNumber = 0;
    const tips = document.querySelectorAll('.tip');
    let currentOption = 1;
    tips.forEach((s: HTMLButtonElement, k) => {
        if (currentOption === secretNumber) {
            s.dataset.secret = 'true';
        }
        s.addEventListener('click', handleClick);
        currentOption++;
    });
}
function handleClick() {
    const clickedSquare = this as HTMLButtonElement;
    const isSpecial = clickedSquare.dataset.secret === 'true';
    if (isSpecial) {
        clickedSquare.classList.add('winner');
        setLosers(document.querySelectorAll('.square'));
    } else {
        clickedSquare.classList.add('loser');
    }
    clickedSquare.removeEventListener('click', handleClick);
}
function setLosers(tips: NodeList) {
    tips.forEach((s: HTMLButtonElement) => {
        if (s.dataset.secret !== 'true') {
            s.classList.add('loser');
            s.removeEventListener('click', handleClick);
        }
    });
}
