const btn = document.querySelector('#myBtn')
const spoiler = document.querySelector('#spoiler')

let isSpoilerClosed = spoiler.matches('.closed')
const toggleVisibility = () => {
  if (isSpoilerClosed) {
    spoiler.classList.remove('closed')
  } else {
    spoiler.classList.add('closed')
  }
  isSpoilerClosed = !isSpoilerClosed
}

btn.addEventListener('click', toggleVisibility)

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !isSpoilerClosed) {
    toggleVisibility()
  }
})
