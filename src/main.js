import string from './css.js'

const player = {
    n: 1,
    time: 25,
    id: undefined,
    ui: {
        demo: document.querySelector('#demo'),
        style: document.querySelector('#style')
    },
    events: {
        "#btnPause": 'pause',
        "#btnPlay": 'play',
        "#btnSlow": 'slow',
        "#btnNormal": 'normal',
        "#btnFast": 'fast',
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.style.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.style.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        // window.clearInterval(id)
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 50
        player.play()
    },
    norm: () => {
        player.pause()
        player.time = 25
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}


player.init()
