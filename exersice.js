const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const rec = new SpeechRecognition()
rec.lang = "ru-RU"


const input3 = document.getElementById('input3')
const start = document.getElementById('start')
const word = document.getElementById('word')
const say = document.getElementById('say')
const said = document.getElementById('said')
const next = document.getElementById('next')
const list = document.getElementById('list')
const add = document.getElementById('add')

word.style.display = 'none'
say.style.display = 'none'
said.style.display = 'none'
next.style.display = 'none'

let array = []
let currentWordIndex = -1

add.onclick = function () {
    if (input3.value.trim() !== ' ') {
        array.push(input3.value.trim())
        list.textContent = array.join('; ')
        input3.value = ''
        return array
    }
}

start.onclick = function () {
    if (list === '') {
        list.textContent = 'Добавьте слова в список'
        return
    }

    word.style.display = 'inline'
    say.style.display = 'inline'
    said.style.display = 'inline'
    list.style.display = 'inline'
    next.style.display = 'inline'

    next.onclick = function () {
        const randomIndex = Math.floor(Math.random() * array.length)

        if (array.length > 1 && currentWordIndex === randomIndex) {
            next.click()
            return
        }
    
        currentWordIndex = randomIndex;
        word.textContent = array[currentWordIndex]

    
        if (array.length === 0) {
            word.textContent = 'Добавьте слова в список'
        }
        array.splice(currentWordIndex, 1)
        return
    }

    say.addEventListener('click', () => {
        rec.start()
        say.classList.add("rec")
     })
    
    rec.onresult = function (event) {
        const text = event.results[0][0].transcript
        say.classList.remove("rec")
        said.textContent = `Вы сказали: ${text}`
    }

}
