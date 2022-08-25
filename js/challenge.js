'use strict';
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const counter = document.querySelector('#counter')
const form = document.querySelector('#comment-form')
const likes = document.querySelector('.likes')
let seconds = 0



//adding event listeners
attachEventListener('submit',form ,submitHandler)
attachEventListener('click',heart,loveHandler)
attachEventListener('click',minus,minusHandler)
attachEventListener('click',plus,plusHandler)
attachEventListener('click',pause,pauseHandler)

let id = timer()


//handlers
function submitHandler(event){
    event.preventDefault()
    const { target } = event
    const value = target['comment-input'].value   
    addComment(value) 
    target.reset()
}
function loveHandler(event){   
    let count = 1,liItems
    const dataNum = document.querySelector(`li[data-num="${seconds}"]`)    

    if(dataNum){
       //same second
       //debugger
       let theSecond = parseInt(dataNum.getAttribute('data-num'),10)
       let times = parseInt(dataNum.querySelector('span').textContent, 10) 
       times = times + 1
       dataNum.querySelector('span').textContent = times

    }else{
        liItems = creatElement('li',`${seconds} has been liked <span>${count}</span> times`,{'data-num': seconds})
        updateDom(liItems,likes)
    }       
    
}
function minusHandler(event){
    seconds = seconds - 1
    clearInterval(id)
    UpdateInnerText(seconds,counter)
    id = timer()
}
function plusHandler(event){
    seconds = seconds + 1
    clearInterval(id)
    UpdateInnerText(seconds,counter)
    id = timer()
}
function pauseHandler(event){
    console.log('clicked pause')
}

//other fns
function timer(){    
    const intervalID = setInterval(() =>{
        UpdateInnerText(seconds,counter)
        seconds++

    }, 1000)
    return intervalID     
}


//utilities fn
function creatElement(tag,innerText='',attributes={}){
    const element = document.createElement(tag)
    const updatedElement = UpdateInnerText(innerText, element)  

    if((Object.keys(attributes)).length === 0){
        return updatedElement
    } else {
        for(const attr in attributes){
            updatedElement.setAttribute(attr, attributes[attr])  
        }
        return updatedElement
    } 
    
}
function addComment(comment){
    const list = document.querySelector('#list')
    const p = creatElement('p',comment)
    updateDom(p,list)       
}
function attachEventListener(event,elemnt, fnHandler){
    elemnt.addEventListener(event,fnHandler)
}
function UpdateInnerText(text,tag){
    tag.innerHTML = text
    return tag
}
function updateDom(elemnt, targetElemnt){
    targetElemnt.append(elemnt)
}
// <li data-num="43">43 has been liked <span>6</span> times</li>