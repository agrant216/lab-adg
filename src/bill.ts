import { currentTip } from './tip';

export let currentBill: number;

export function OnChange() {
    const txtBillInput = this as HTMLInputElement;
    const amount = txtBillInput.valueAsNumber;
    currentBill = amount;
    updatebillAmounts(amount);
}

function updatebillAmounts(billAmount: number) {
    const lblBillAmount = document.getElementById('list_BillAmount');
    const lblTipAmount = document.getElementById('list_TipAmount');

    if (isNaN(billAmount)) { billAmount = 0; }
    lblBillAmount.innerText = `\$${billAmount.toFixed(2)}`;
    lblTipAmount.innerText = `${(billAmount * currentTip).toFixed(2)}`;

}
