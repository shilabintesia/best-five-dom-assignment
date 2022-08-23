function disabledButton(event, elementId) {
    const selectButton = event.target.innerText;
    const disableButton = document.getElementById(elementId);
    if (selectButton === 'Select') {
        disableButton.setAttribute('disabled', true)
        disableButton.style.backgroundColor = 'gray'
        disableButton.style.color = 'white'
    }
}
document.getElementById('btn-kylian').addEventListener('click', function(event) {
    disabledButton(event, 'btn-kylian');
})
document.getElementById('btn-ronaldo').addEventListener('click', function(event) {
    disabledButton(event, 'btn-ronaldo');

})
document.getElementById('btn-messi').addEventListener('click', function(event) {
    disabledButton(event, 'btn-messi')
})
document.getElementById('btn-neymar').addEventListener('click', function(event) {
    disabledButton(event, 'btn-neymar')
})
document.getElementById('btn-sergo').addEventListener('click', function(event) {
    disabledButton(event, 'btn-sergo')
})
document.getElementById('btn-ibrahim').addEventListener('click', function(event) {
    disabledButton(event, 'btn-ibrahim')
})