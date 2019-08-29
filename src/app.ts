import * as bill from './bill';
import * as tip from './tip';

export function runApp() {
    const tips = document.querySelectorAll('.tipLabel');
    const billAmount = document.getElementById('billAmount') as HTMLInputElement;

    billAmount.addEventListener('input', bill.OnChange);
    billAmount.addEventListener('input', updateBillAndTip);
    tips.forEach((s: HTMLLabelElement, k) => {
        if (s.classList.contains('active')) { tip.setTipPercent(s); }
        s.addEventListener('click', tip.OnChange);
        s.addEventListener('click', updateBillAndTip);
    });
}
export function updateBillAndTip() {
    const lblTipAmount = document.getElementById('list_TipAmount');
    const lblTotalAmount = document.getElementById('list_Total');
    const tipAmount: number = (bill.currentBill * tip.currentTip);
    lblTipAmount.innerText = `\$${tipAmount.toFixed(2)}`;
    lblTotalAmount.innerText = `\$${(bill.currentBill + tipAmount).toFixed(2)}`;
}
