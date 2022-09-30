import { Event } from "./Event"

const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/f09ddcac/events"
  )
  let data = await response.json()
  console.log(data)
  return data
}

// loadData()

const preparePage = async () => {
  const data = await loadData()
  const elementMain = new Event(data[0])
  const element1 = new Event(data[1])
  const element2 = new Event(data[2])
  const element3 = new Event(data[3])
  const element4 = new Event(data[4])
  const element5 = new Event(data[5])
  //   const element6 = new Event(data[6])
  elementMain.prepareMainEvent()
  element1.prepareNewEvent()
  element2.prepareNewEvent()
  element3.prepareNewEvent()
  element4.prepareNewEvent()
  element5.prepareNewEvent()
  //   element6.prepareNewEvent()
}

preparePage()

// let element = new Event()
// let element2 = new Event()
// let element3 = new Event()
// let element4 = new Event()
// let element5 = new Event()
// let element6 = new Event()
// element.prepareNewEvent(1)
// element.appendSelfToParent(".events__others")
// element2.prepareNewEvent("second")
// element2.appendSelfToParent(".events__others")
// element3.prepareNewEvent("third")
// element3.appendSelfToParent(".events__others")
// element4.prepareNewEvent("fourth")
// element4.appendSelfToParent(".events__others")
// element5.prepareNewEvent("fifth")
// element5.appendSelfToParent(".events__others")

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close");

let openModal = () => {
    modal.style.display = "flex";
}

let closeModal = () => {
    modal.style.display = "none";
}
let outside = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modal.addEventListener('click', outside);
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);




