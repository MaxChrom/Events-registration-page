export class Event {
  constructor(elementData) {
    this.elementData = elementData
  }

  prepareMainEvent = async () => {
    const mainElement = document.querySelector(".events__main")
    mainElement.innerHTML = `<div class="events__main-img">
                <img src="${this.elementData.image_url}" alt="event">
            </div>
            <div class="events__main-text">
                <h1>${this.elementData.name}</h1>
                <p>${this.elementData.description}</p>
                <button>Regiser</button>
            </div>
            
        </div>`

    this.mainElement = mainElement
  }

  prepareNewEvent = async (number) => {
    // const element = await loadData(eventId)
    // console.log(element)

    const element = document.createElement("div")
    element.classList.add("number")
    element.innerHTML = `<div>${this.elementData.name}</div>
    <div>${this.elementData.date}</div>
    <button>More</button>`

    this.element = element
    console.log(this.element)
    this.appendSelfToParent(".events__others")
  }

  // loadData = async (eventId) => {
  //   v
  //   const response = await fetch(
  //     `https://test-api.codingbootcamp.cz/api/f09ddcac/events/${eventId}`
  //   )
  //   let data = await response.json()
  //   console.log(data)

  //   element.classList.add(`events__others-${eventId}`)
  //   element.innerHTML = `

  //         <p>${data.name}</p>
  //         <button>More</button>

  // `
  //   return element
  // }

  getEventName = () => {}

  getEventDiscription = () => {}

  getEventImg = () => {}

  appendSelfToParent = (selector) => {
    const parent = document.querySelector(selector)
    parent.appendChild(this.element)
  }
}
