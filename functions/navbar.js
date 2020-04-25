function loadNavbar() {
  console.log("navbar")
  document.querySelector("body").insertAdjacentHTML('afterbegin',
  `<nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light px-3 px-sm-5">
    <a class="navbar-brand" href="index.html">
      <strong class="h5">CS50</strong>
      this was.
      <img class="rounded-circle ml-3" src="./assets/yoda.png" alt="yoda master" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseDiv" aria-controls="collapseDiv" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapseDiv">
      <a class="btn btn-light d-flex px-0 px-sm-3" href="about.html">About</a>
      <a class="btn btn-light d-flex px-0 px-sm-3" href="contribute.html">Contribute</a>
    </div>
  </nav>`)
}