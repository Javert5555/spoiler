const btn = document.querySelector('#myBtn')
const spoiler = document.querySelector('#spoiler')

let isSpoilerClosed = spoiler.matches('.closed')

/**
 * Switches the visibility of the "spoiler" element when the button is pressed.
 * @returns {void}
 */
const btnToggleVisibility = () => {
  if (isSpoilerClosed) {
    spoiler.classList.remove('closed')
  } else {
    spoiler.classList.add('closed')
  }
  isSpoilerClosed = !isSpoilerClosed
}

/**
 * Makes the "spoiler" element invisible when the "Escape" key is pressed.
 * @param {object} - event object.
 * @returns {void}
 */
const escapeToggleVisibility = (event) => {
  if (event.key === 'Escape' && !isSpoilerClosed) {
    btnToggleVisibility()
  }
}

btn.addEventListener('click', btnToggleVisibility)
document.addEventListener('keydown', escapeToggleVisibility)
