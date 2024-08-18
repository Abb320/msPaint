
const paints = document.getElementById('paints')
const colors = paints.querySelectorAll('button')
const canvas = document.getElementById('canvas')
const toolbox = document.getElementById('tools')
const tools = toolbox.querySelectorAll('button')
let color


colors.forEach((button) =>{
  button.style.background = button.textContent
  button.style.color = button.textContent
})

colors.forEach((button) => {
  button.addEventListener('click', () => {
    color = button.textContent
})
})



for(let i = 0; i <= 99; i++){
  const newButton = document.createElement('button')
  newButton.addEventListener('click', () => {
    newButton.style.background = color
})
  tools.forEach((button) =>{
    button.addEventListener('click', () =>{
      if(button.textContent === 'clear'){
        const slots = canvas.querySelectorAll('button')
        slots.forEach((button) => {
          button.style.backgroundColor = 'white'
        })
      }
    })
  })
  canvas.appendChild(newButton)
}

