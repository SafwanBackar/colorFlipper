const colors = ['green', 'red', 'blue', 'orange', 'yellow', 'pink', 'purple']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    const randomColor = getRandomNumber()
    // console.log(getRandomNumber())
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

simple.addEventListener('click', function () {
    h2.textContent = 'Simple'
})