const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
let hex = '#'

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    const randomHex = getRandomNumber()
    document.body.style.backgroundColor = hex
    color.textContent = hex
    hex = '#'
})


function getRandomNumber() {
    let randomArray = [];
    for (var i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16)
        randomArray = colors[random]
        hex += randomArray
    }
    return hex

}