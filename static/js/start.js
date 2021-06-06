var socket = io.connect("ws://localhost:3000")
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const root = document.getElementById('root')
const controls = document.getElementById('controls')
const joinCont = document.getElementById('join-cont')
const players = document.getElementById('players')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')


function log() {
    if (input.value.trim().length > 20) {
        input.value = ''
        alert('za dlugi nick')
    } else if (input.value.trim() != '') {
        socket.emit('join', input.value.trim(), socket.id)
        joinCont.style.display = 'none'
        root.style.display = 'block'
        controls.style.display = 'block'
        players.style.display = 'flex'
        socket.emit('getPlayers')
    }
    else {
        input.value = ''
        alert('podaj jakis nick')
    }
}

socket.on('getPlayers', (players) => {
    if (players.length == 2) {
        player1.innerHTML = players[1] + " &#128721"
        player2.innerHTML = players[0] + " &#128154"
    } else {
        player1.innerHTML = players[0] + " &#128721"
    }
})
