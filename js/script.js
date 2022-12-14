// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-08-JS/sw.js", {
    scope: "/ICS20-Unit5-08-JS/",
  })
}

//process
function myButtonClicked() {
  //variables
  let firstNumber = parseInt(document.getElementById("numberOne").value)
  let secondNumber = parseInt(document.getElementById("numberTwo").value)
  let counter = 0
  let answer = firstNumber

  while (answer >= secondNumber) {
    answer = answer - secondNumber
    if ((counter = answer - 1)) {
      let answerTwo = parseInt(document.getElementById("ANSTWO").value)
    }
    document.getElementById("ANS").innerHTML =
      "The answer is " + answerTwo + " R " + answer + "."
    counter++
  }
}
