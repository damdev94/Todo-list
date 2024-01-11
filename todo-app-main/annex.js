const ChangeModeLink = document.querySelector("#change-mode")
const headerBackground = document.querySelector("#css")
let clickNb = 0

/**
 * Allow to creat in dynamics a new line of task 
 * @param {string} text 
 * @param {string} divParents 
 * @param {string} classNameImg 
 * @returns 
 */
function newLineOfTask (text, divParents, classNameImg) {
    let newLine = document.createElement('div')
    newLine.className = `tasks task-${classNameImg}`

    let newLineContent = document.createElement('div')
    newLineContent.className = "left-part"
    newLineContent.textContent = text

    let newLineContentInput = document.createElement('input')
    newLineContentInput.type = `button`
    newLineContentInput.className = `new-task-button button-${classNameImg}`
    newLineContentInput.addEventListener("click", () => {
        buttonCheked(newLineContentInput, classNameImg)
    })

    let newImg = document.createElement('img')
    newImg.src = "images/Combined Shape 2.jpg"
    newImg.alt = "delete"
    newImg.className = `img-${classNameImg}`
    newImg.addEventListener("click", () => {
        deleteLine(classNameImg)
    })

    newLine.appendChild(newLineContentInput)
    newLine.appendChild(newLineContent)
    newLine.appendChild(newImg)
    

    return divParents.appendChild(newLine)
}
/**
 * Allow to delete a ligne of task
 * @param {number} number 
 * @returns 
 */
export function deleteLine (number) {
    const lineToDelete = document.querySelector(`.task-${number}`)
    return lineToDelete.remove()
}
/**
 * Allow to put a chek image when you click on the task and add a "cheked" word at the classname
 * @param {string} element 
 * @param {number} number 
 */
export function buttonCheked (element, number) {
    if(element.className !== `new-task-button button-${number} checked`){
        element.innerHTML = `<style>.button-${number} { background: url(images/cheked.jpg) center center; width =20px; heigth=20px}</style>`
        element.className = `new-task-button button-${number} checked`
    }else{
        element.innerHTML = ''
        element.className = `new-task-button button-${number}`
    }
}
/**
 * Allow to display only completed elements
 */
export function displayOnlyUnCompletedElement() {
    let allElements = document.querySelectorAll(`.new-task-button`)
    allElements.forEach(function (allElement) {
        if((allElement.className).includes('checked')){
            allElement = allElement.parentNode
            allElement.style.display = 'none'
        }else{
        allElement = allElement.parentNode
        allElement.style.display = 'flex'
        }
    })
}
/**
 * Allow to display only completed elements
 */
export function displayOnlyCompletedElement() {
    let allElements = document.querySelectorAll(`.new-task-button`)
    allElements.forEach(function (allElement) {
        if((allElement.className).includes('checked')){
            allElement = allElement.parentNode
            allElement.style.display = 'flex'
        }else{
        allElement = allElement.parentNode
        allElement.style.display = 'none'
        }
    })
}
/**
 * Allow to display all the elements
 */
export function displayAllElement() {
    let allElements = document.querySelectorAll(`.new-task-button`)
    allElements.forEach(function (allElement){
        allElement = allElement.parentNode
        allElement.style.display = 'flex'
    })
}
/**
 * Allow to display the 2 first elements and allow the good working of them
 */
export function firstDisplayItems(deleteCross1, deleteCross2, tchek1, tchek2) {
    deleteCross1.addEventListener ("click", () => {
        deleteLine(1)
    })
    
    deleteCross2.addEventListener ("click", () => {
        deleteLine(2)
    })
    
    tchek1.addEventListener("click", () => {
        buttonCheked(tchek1,1)
    })
    
    tchek2.addEventListener("click", () => {
        buttonCheked(tchek2,2)
    })
}
/**
 * Allow to display all elements, only cheked element, or only uncheked element with a click on the good section
 */
export function typeOfDisplayChoice(displayAll, displayCompleted, displayUncompleted) {
    displayAll.addEventListener("click", () => {
        displayAll.focus()
        displayAllElement()
    })
    
    displayCompleted.addEventListener("click", () => {
        displayCompleted.focus()
        displayOnlyCompletedElement()
    })
    
    displayUncompleted.addEventListener("click", () => {
        displayUncompleted.focus()
        displayOnlyUnCompletedElement()
    })
}


export function changeModeOfDisplay(changeModeDark, changeModeLigth, ChangeModeLink) {
    ChangeModeLink.addEventListener("click", () => {
        clickNb += 1
        if (clickNb === 1) {
            darkDisplay()
            changeModeDark.style.display = "flex"
            changeModeLigth.style.display = "none"
        }else if (clickNb === 2) {
            clickNb = 0
            ligthDisplay()
            changeModeDark.style.display = "none"
            changeModeLigth.style.display = "flex"
        }
        
    })
}

function ligthDisplay () {
    ChangeModeLink.addEventListener("click", () => {
        headerBackground.href = "style-ligth.css"
     })
}

function darkDisplay () {
    ChangeModeLink.addEventListener("click", () => {
        headerBackground.href = "style-dark.css"
     })
}

export default newLineOfTask;
