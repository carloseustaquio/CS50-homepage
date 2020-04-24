function loadNavbar() {
  console.log("navbar")
  document.querySelector("body").insertAdjacentHTML('afterbegin',
  `<nav class="navbar position-absolute container-fluid navbar-light bg-light px-5">
    <a class="navbar-brand" href="index.html">
      <strong class="h5">CS50</strong>
      this was.
      <img class="rounded-circle ml-3" src="yoda.png" alt="yoda master" />
    </a>
    <div>
      <a class="btn btn-light" href="about.html">About</a>
      <a class="btn btn-light" href="contribute.html">Contribute</a>
    </div>
  </nav>`)
}