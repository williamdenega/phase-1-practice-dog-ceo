console.log('%c HI', 'color: firebrick')

//source to load image
const input = document.getElementById('dog-input')
//const div = document.getElementById('dog-image-container')
//event listener for DOM loaded
document.addEventListener('DOMContentLoaded',test)




function test(){
    document.querySelector('#dog-form').addEventListener('submit',init)
}

//fetch the image after DOM is loaded
// function init(){
//     fetch(imgUrl)
//     .then(res => res.json())
//     .then(arry => makeArry(arry))

// }

// function makeArry(arry){
//     let x = Object.values(arry.message)
//     x.forEach(pic => renderDog(pic))
// }

// function renderDog(dog){
//     div1 = document.getElementById('dog-image-container')
//     pic = document.createElement('img')
//     pic.src = dog
//     div1.appendChild(pic)
// }
function handleSubmit(e){
    
    e.preventDefault()
    
   

    



}

function init(e){
    const input1 = document.getElementById('dog-input')

    e.preventDefault()
    let num = input1.value
    let div = document.getElementById('dog-image-container')
    div.innerHTML= ''

    let imgUrl = `https://dog.ceo/api/breeds/image/random/${num}`


    //$('#dog-image-container')
    fetch(imgUrl)
    .then(res => res.json())
    .then(arry => arry.message.forEach(pic => renderDog(pic)))
    e.target.reset()
}

function renderDog(dog){
    const div = document.getElementById('dog-image-container')
    pic = document.createElement('img')
    pic.src = dog
    div.appendChild(pic)
}


// function renderDog(dog){
//     div = document.getElementById('dog-image-container')
//     let card = document.createElement('li')
//     card.className = 'card'
//     card.innerHTML = `
//     <img src= "${dog}">
//     `
//     div.appendChild(card)

// }