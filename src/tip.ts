import { currentBill } from './bill';

export let currentTip: number;

export function OnChange() {
    const tipButton = this as HTMLLabelElement;
    const isSelected = tipButton.classList.contains('active');
    if (!isSelected) {
        tipButton.classList.add('active');
        setTipPercent(tipButton);
    }
    removeActive(tipButton, document.querySelectorAll('.tipLabel'));
}
export function setTipPercent(tipLabel: HTMLLabelElement) {
    const listPercent = document.getElementById('list_TipPercent') as HTMLSpanElement;
    const helperPercent = document.getElementById('tipPercentHelper') as HTMLSpanElement;
    const tipPercent = (tipLabel.firstElementChild as HTMLInputElement).value;
    listPercent.innerText = tipPercent;
    helperPercent.innerText = tipPercent;
    updateCurrentTip(tipPercent);
}
function updateCurrentTip(newTip: string) {
    const lblTip = document.getElementById('tipPercentHelper');
    currentTip = parseFloat(lblTip.innerText) / 100;
}
function removeActive(activeTip: HTMLLabelElement, tips: NodeList) {
    tips.forEach((s: HTMLLabelElement) => {
        if (s !== activeTip && s.classList.contains('active')) {
            s.classList.remove('active');
        }
    });
}


