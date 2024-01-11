import newLineOfTask, {deleteLine, buttonCheked, displayOnlyUnCompletedElement, displayOnlyCompletedElement, displayAllElement, firstDisplayItems, typeOfDisplayChoice, changeModeOfDisplay} from "./annex.js"

const inputSeizure = document.querySelector(".new-task-input")
const taskListDiv = document.querySelector(".task-list")
const deleteCross1 = document.querySelector(".img-1")
const deleteCross2 = document.querySelector(".img-2")
const tchek1 = document.querySelector('.button-1')
const tchek2 = document.querySelector('.button-2')
const displayAll = document.querySelector("#all")
const displayUncompleted = document.querySelector("#uncompleted")
const displayCompleted = document.querySelector("#completed")
const ChangeModeLink = document.querySelector("#change-mode")
const changeModeLigth = document.querySelector(".mode-ligth")
const changeModeDark = document.querySelector(".mode-dark")
const headerBackground = document.querySelector("#css")

displayAll.focus()

let imgClassName = 2

inputSeizure.addEventListener("keydown", (event) => {
    let inputValue = inputSeizure.value
    if (event.key === 'Enter') {
        imgClassName += 1
       newLineOfTask(inputValue, taskListDiv, imgClassName)
       inputSeizure.value = ""
    }
})

firstDisplayItems(deleteCross1, deleteCross2, tchek1, tchek2)

typeOfDisplayChoice(displayAll, displayCompleted, displayUncompleted)

changeModeOfDisplay(changeModeDark, changeModeLigth, ChangeModeLink)





