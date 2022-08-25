'use strict';
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const counter = document.querySelector('#counter')
const form = document.querySelector('#comment-form')

//adding event listeners
attachEventListener('submit',form ,submitHandler)



//handlers

function submitHandler(event){
    event.preventDefault()
    const { target } = event
    const value = target['comment-input'].value   
    addComment(value) 
    target.reset()
}


//utilities fn
function creatElement(tag,innerText=''){
    const element = document.createElement(tag)
    element.textContent = innerText
    return element
}
function addComment(comment){
    const list = document.querySelector('#list')
    const p = creatElement('p',comment)
    list.append(p)    
}
function attachEventListener(event,elemnt, fnHandler){
    elemnt.addEventListener(event,fnHandler)
}