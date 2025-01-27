
const result = document.getElementById('result')
const speak = document.getElementById('speak')
const input1 = document.getElementById('input1')
const trans = document.getElementById('trans')
const makeTransc = document.getElementById('makeTransc')



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const rec = new SpeechRecognition()
rec.lang = "ru-RU"

speak.addEventListener('click', () => {
    rec.start()
    speak.classList.add("rec")
 })

rec.onresult = function (event) {
    const text = event.results[0][0].transcript
    speak.classList.remove("rec")
    result.textContent = `Вы сказали: ${text}`
}

makeTransc.onclick = function() {
    trans.textContent = `Транскрипция: ${transc(input1.value)}`
    }

function transc (tex) {
    tex = tex.toLowerCase()

    tex = tex.replace(/ь/g, `'`)
    tex = tex.replace(/ъ/g, '')

    tex = tex.replace(/(.*)([ауоиэыьъ' ])е(.*)/g, `$1$2йэ$3`)
    tex = tex.replace(/([^ауоиэыъь])е(.*)/g, `$1'э$2`)
    tex = tex.replace(/^е/, 'йэ')
    
    tex = tex.replace(/(.*)([ауоиэыьъ' ])ё(.*)/g, `$1$2йо$3`)
    tex = tex.replace(/([^ауоиэыъь])ё(.*)/g, `$1'о$2`)
    tex = tex.replace(/^ё/, 'йо')

    tex = tex.replace(/(.*)([ауоиэыьъ' ])ю(.*)/g, `$1$2йу$3`)
    tex = tex.replace(/([^ауоиэыъь])ю(.*)/g, `$1'у$2`)
    tex = tex.replace(/^ю/, 'йу')

    tex = tex.replace(/(.*)([ауоиэыьъ' ])я(.*)/g, `$1$2йа$3`)
    tex = tex.replace(/([^ауоиэыъь])я(.*)/g, `$1'а$2`)
    tex = tex.replace(/^я/, 'йа')
    return tex  
}






