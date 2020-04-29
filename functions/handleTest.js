import questionsJSON from './questions.js'

let questions = questionsJSON
let numQuestions = questions.length
let counter = 1
let selQuestion = null
let answers = []

// handle vote
function vote(id) {
  selQuestion.opts.forEach(opt => {
    if (opt.id === id) {
      answers.push({ question_id: selQuestion.id, correct: opt.correct })
    }
  })
  loadQuestion()
}

// load questions
function loadQuestion() {
  if (questions.length === 0) return finishTest()

  const selectedId = Math.floor(Math.random() * questions.length)
  selQuestion = questions[selectedId]
  const h4 = document.querySelector("#h4")
  const p = document.querySelector("#p")
  const bt1 = document.querySelector("#bt1")
  const bt2 = document.querySelector("#bt2")
  const title = document.createTextNode(`Question Nº ${counter}`)
  const question = document.createTextNode(selQuestion.text)
  const answer1 = document.createTextNode(selQuestion.opts[0].text)
  const answer2 = document.createTextNode(selQuestion.opts[1].text)
  
  if (h4.childNodes.length === 0) {
    h4.appendChild(title, h4.childNodes)
    p.appendChild(question, p.childNodes)
    bt1.appendChild(answer1, bt1.childNodes)
    bt2.appendChild(answer2, bt2.childNodes)
  }
  else {
    h4.replaceChild(title, h4.childNodes[0])
    p.replaceChild(question, p.childNodes[0])
    bt1.replaceChild(answer1, bt1.childNodes[0])
    bt2.replaceChild(answer2, bt2.childNodes[0])
  }

  counter++
  questions = questions.filter(q => q.id !== selQuestion.id)
}

// remove all child elements
function removeChilds(e) {
    let child = e.lastElementChild
    while (child) { 
      e.removeChild(child) 
      child = e.lastElementChild
    } 
}

// check number of hits (correct answers)
function checkHits() {
  let hits = 0;
  answers.forEach(e => e.correct === true ? hits++ : null)
  return hits
}

function checkResult(numQuestions, hits) {
  console.log(numQuestions, hits)
  console.log()
  if (hits > (Math.floor((numQuestions / 10) * 7))) return "awesome"
  if (hits > (Math.floor((numQuestions / 10) * 4))) return "improve"
  else return "bad"
}

// handles test finish
function finishTest() {
  const hits = checkHits()
  const hitsPercent = Math.floor((100 / numQuestions) * hits)
  const passed = hits > Math.floor(numQuestions / 2)
  
  const result = checkResult(numQuestions, hits)
  console.log(result)
  
  const cardBody = document.querySelector(".card-body")
  removeChilds(cardBody)

  const p = document.createElement("p")
  const icon = document.createElement("span")
  icon.setAttribute("class", `material-icons result-${result} mt-3 mb-4`)
  
  icon.animate([
    // keyframes
    { transform: 'scale(1)' }, 
    { transform: 'scale(2)' }
  ], { 
    duration: 800,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    fill: "forwards"
  })

  const progressDiv = document.createElement("div")
  progressDiv.setAttribute("class", "progress")
  progressDiv.setAttribute("style", "height: 15px")
  
  const progressBar = document.createElement("div")
  progressBar.setAttribute("class", "progress-bar")
  progressBar.setAttribute("role", "progressbar")
  progressBar.setAttribute("style", `width: ${hitsPercent}%`)
  progressBar.appendChild(document.createTextNode(`${hitsPercent}%`))

  progressBar.animate([
    // keyframes
    { width: '0%' }, 
    { width: `${hitsPercent}%` }
  ], { 
    duration: 1500,
    easing: 'ease-in-out',
    fill: "forwards"
  });

  const actButton = document.createElement("a")
  actButton.setAttribute("class", "btn btn-outline-light btn-sm mt-4")

  if (result === "awesome") {
    const iconText = document.createTextNode("check_circle_outline")
    icon.appendChild(iconText)
    cardBody.appendChild(icon)
    
    const pText = document.createTextNode("Congrats! David Malan's proud of you!")
    p.appendChild(pText)

    cardBody.appendChild(p)
    progressBar.classList.add("bg-green")
    actButton.setAttribute("href", "about.html")
    actButton.appendChild(document.createTextNode("Continue"))
  }
  if (result === "improve") {
    const iconText = document.createTextNode("replay")
    icon.appendChild(iconText)
    cardBody.appendChild(icon)
    
    const pText = document.createTextNode("Come on! You can do better than that!")
    p.appendChild(pText)
  
    cardBody.appendChild(p)
    progressBar.classList.add("bg-yellow")
    actButton.setAttribute("href", "test.html")
    actButton.appendChild(document.createTextNode("Try again!"))
  }
  if (result === "bad") {
    const iconText = document.createTextNode("highlight_off")
    icon.appendChild(iconText)
    cardBody.appendChild(icon)

    const pText = document.createTextNode("Have you been sleeping during the classes?")
    p.appendChild(pText)
    cardBody.appendChild(p)
    progressBar.classList.add("bg-red")
    actButton.setAttribute("href", "test.html")
    actButton.appendChild(document.createTextNode("Try Again!"))
  }
  
  progressDiv.appendChild(progressBar)
  cardBody.appendChild(progressDiv)
  cardBody.appendChild(actButton)
}

window.vote = vote
window.loadQuestion = loadQuestion
