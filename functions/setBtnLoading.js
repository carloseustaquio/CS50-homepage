import removeChilds from './removeChilds.js'

export const setBtnLoading = (button) => {
    button.removeChild(button.childNodes[0])
    return button.insertAdjacentHTML('beforeend', `
        <div class="spinner-border spinner-border-sm" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    `)
}

export const setBtnError = (button) => {
    removeChilds(button)
    button.appendChild(document.createTextNode("Sorry, an error has occurred"))
    button.disabled = true
}