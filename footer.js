import { fetchQuotes } from './fetchQuotes.js'

// export default async function loadFooter() {
async function loadFooter() {
  console.log("footer")
  const quotes = await fetchQuotes()
  const quoteIndex = Math.floor(Math.random() * quotes.length)
  
  document.querySelector("body").insertAdjacentHTML('afterbegin',
  `<footer class="bg-dark text-light position-absolute fixed-bottom d-flex justify-content-center px-3 py-2">
    <p class="text-light lead mb-0">
      ${quotes[quoteIndex].author} - ${quotes[quoteIndex].text}
    </p>
  </footer>`
  )
}

window.loadFooter = loadFooter