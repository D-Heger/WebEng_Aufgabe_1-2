'use strict';

window.onload = () => {
    window.setInterval("realTimeClock()", 1000) //1000ms -> 1s
    realTimeClock();
    window.setInterval("highlightProducts()", 10000) //10000ms -> 10s
    highlightProducts();
}

function realTimeClock() {
    let date = new Date(); // get current data & split into parts
    let hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    let minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    let second = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    let timeFormatting = ' ' + hour + ':' + minute + ':' + second; // format time & apply text to it
    if (hour < 10) {
        timeFormatting += " Guten Morgen"
    } else if (hour < 18) {
        timeFormatting += " Guten Tag"
    } else {
        timeFormatting  += " Guten Abend"
    }
    let clockHTML = document.getElementById("rtClock"); // find element & input the text
    clockHTML.innerText = timeFormatting;
}

function highlightProducts() {
    let prodList = document.querySelectorAll(".prod"); // select all products
    let num = Math.floor(Math.random() * prodList.length); // make random num
    for (let [index, prod] of prodList.entries()) {
        prod.classList.remove("highlight");
        if (index == num) {
            prod.classList.add("highlight");
        }
    }
}