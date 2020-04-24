export async function fetchQuotes() {
  const fetchApi = await fetch("https://type.fit/api/quotes/")
  const data = await fetchApi.json()
  const authors = ["Abraham Lincoln", "Thomas Edison", "Aristotle",
          "William Shakespeare", "Benjamin Spock", "Benjamin Franklin", 
          "Chinese proverb", "Socrates", "Ralph Emerson", "Napoleon Bonaparte"]
  const quotes = data.filter(q => authors.find(a => a === q.author))
  return quotes
}
