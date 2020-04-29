export const sendMessage = async (args) => {
    return await emailjs.sendForm('default_service', 'contribute_template', args)
}

export const sendAnimation = () => {
    // animation to send contribution message
    const main = document.querySelector("main")
    main.animate([
        { transform: 'scale(1)' }, 
        { transform: 'scale(0.8) translateX(0)' }, 
        { transform: 'scale(0.8) translateX(120%)' }
    ], { 
        duration: 1000,
        easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        fill: "forwards",
    })
    // remove main section after animation
    setTimeout(() => document.querySelector("body").removeChild(main), 1000)
}

export const thankAnimation = () => {
    // creates container of thank message
    const container = document.createElement("div")
    const thank = document.createTextNode("Thanks for contributing!")
    const icon = document.createElement("span")
    const iconText = document.createTextNode("check_circle_outline")

    container.setAttribute("class", "center-absolute font-size-2 text-center opacity-0 d-flex flex-column align-items-center")
    icon.setAttribute("class", `material-icons result-awesome mb-3 scale-2`)

    icon.appendChild(iconText)
    container.appendChild(icon)
    container.appendChild(thank)

    document.querySelector('body').appendChild(container)

    // opacity animation for thank container
    container.animate([
        { opacity: 0 }, 
        { opacity: 1 }
    ], { 
        duration: 1500,
        easing: 'ease-in-out',
        fill: "forwards",
        delay: 400,
    })
}
