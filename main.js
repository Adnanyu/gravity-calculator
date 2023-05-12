const select = document.querySelector('select')
const div = document.querySelector('.flex-item-description')
const img = document.querySelector('.planet-image')
const button = document.querySelector('button')
const input = document.querySelector('input')


let gravity;
let planet;
let scores = 0

select.addEventListener('change', () => {
     gravity = select.options[select.selectedIndex].value
     planet = select.options[select.selectedIndex].text
     img.src = `./images/${planet}.png`
     div.innerHTML = ''
})

button.addEventListener('click', () => {
    if (input.value === ''){
        const title = document.createElement('h1')
        const score = document.createElement('p')
        title.innerText = `MASS IS REQUIRED!!`;

        div.append(title)

    }else{
        const title = document.createElement('h1')
    const score = document.createElement('p')

    let mass = input.value
    console.log(mass,gravity)
    scores = Math.round(mass * gravity)
    score.innerText = `${scores} N`;
    
    div.innerHTML = ''
    div.append(title)
    div.append(score)
    title.innerHTML = `The weight of an object on ${planet.toUpperCase()}`
    }
    

})



