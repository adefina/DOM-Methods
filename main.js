const body = document.querySelector('body')
const buttonElement = document.createElement('button')
buttonElement.textContent = "1"
body.appendChild(buttonElement)
console.log(buttonElement)



// function createElement (tagName, contents = "", attributeWithValue = ['null]']){
//     const attributeName = attributeWithValue [0] || ""
//     const attributeValue = attributeWithValue [1] || ""
//     return `<${tagName} ${attributeName}= "${attributeValue}">${contents}</${tagName}>`
// }

const main = document.createElement('main')
body.appendChild(main)
const imageElement = document.createElement('img')
imageElement.src ="https://upload.wikimedia.org/wikipedia/commons/1/15/CSIRO_ScienceImage_4203_A_bluegreen_algae_species_Cylindrospermum_sp_under_magnification.jpg"
imageElement.classList.add('image') 
main.appendChild(imageElement)


const linkElement = document.createElement('a')
linkElement.href= "https://en.wikipedia.org/wiki/Cyanobacteria"
linkElement.classList.add('link')
linkElement.textContent = 'Wikipedia Link to Cyanobacteria'
main.appendChild(linkElement)

console.log(main)

buttonElement.addEventListener("click", function() {
    main.remove()
})