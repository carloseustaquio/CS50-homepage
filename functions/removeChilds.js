// remove all child elements
export default function removeChilds(e) {
    let child = e.lastElementChild
    while (child) { 
      e.removeChild(child) 
      child = e.lastElementChild
    } 
}