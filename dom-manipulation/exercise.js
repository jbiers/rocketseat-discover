const container = document.querySelector('#container')
container.style.cssText = 'font-family: sans-serif;'

const p = document.createElement('p')
p.textContent = 'Hey I\'m red!'
p.style.cssText = 'color :red;'

const h3 = document.createElement('h3')
h3.textContent = 'Hey I\'m a blue h3!'
h3.style.cssText = 'color: blue;'

const div = document.createElement('div')
div.style.backgroundColor = 'pink'
div.style.border = '1px solid black'

const h1 = document.createElement('h1')
h1.textContent = 'I\'m in a div'

const p2 = document.createElement('p2')
p2.textContent = 'ME TOO!'

container.appendChild(p)
container.appendChild(h3)

div.appendChild(h1)
div.appendChild(p2)

container.appendChild(div)