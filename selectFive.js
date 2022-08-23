const selectedPlayer = [];

let playerCount = 0;




function displayPlayerName(player) {
    const selectedPlayerName = document.getElementById('selected-player')
    selectedPlayerName.innerHTML = '';
    for (let i = 0; i < player.length; i++) {

        if (i >= 5) {
            alert('you can not add player anymore')
            return;

        } else {
            const playerName = selectedPlayer[i]
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${i + 1}</td>
            <td> ${playerName}</td>
            `
            selectedPlayerName.appendChild(tr)


        }



    }

    playerCount++




}

function addToSelectArea(Element) {
    const addedPlayer = Element.parentNode.children[0].innerText
    selectedPlayer.push(addedPlayer);

    if (selectedPlayer.length >= 6) {
        alert('you can not add player anymore')
        return;

    } else {
        document.getElementById('selected-number').innerText = selectedPlayer.length;
    }



    displayPlayerName(selectedPlayer)



}