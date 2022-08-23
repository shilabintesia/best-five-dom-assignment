// calculation option added
document.getElementById('btn-calculate').addEventListener('click', function() {
    const perPlayerField = document.getElementById('per-player');
    const perPlayerAmountString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);

    const playerExpencesField = document.getElementById('player-expences');
    const totalPlayerAmount = perPlayerAmount * playerCount;
    if (isNaN(totalPlayerAmount)) {
        alert('please enter a valid input')
    } else {
        playerExpencesField.innerText = totalPlayerAmount;
    }
})

document.getElementById('calculate-total').addEventListener('click', function() {
    const managerField = document.getElementById('manager');
    const managerAmountString = managerField.value;
    const managerAmount = parseFloat(managerAmountString);


    const coachField = document.getElementById('coach');
    const coachAmountString = coachField.value;
    const coachAmount = parseFloat(coachAmountString);

    const totalAmountField = document.getElementById('total-amount');
    const totalAmountString = totalAmountField.innerText;
    const totalAmount = parseFloat(totalAmountString);

    const perPlayerField = document.getElementById('per-player');

    const perPlayerAmountString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);
    const totalPlayerAmount = perPlayerAmount * playerCount;

    const allTotal = totalPlayerAmount + coachAmount + managerAmount;


    if (isNaN(allTotal)) {
        alert('please enter a valid input')
    } else {

        totalAmountField.innerText = allTotal;
    }
})