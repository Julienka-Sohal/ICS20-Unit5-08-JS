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
  navigator.serviceWorker.register("/ICS20-Unit5-06-Loop/sw.js", {
    scope: "/ICS20-Unit5-06-Loop/",
  })
}

//process
function myButtonClicked() {
  //variables
  let firstNumber = parseInt(document.getElementById("numberOne").value)
  let secondNumber = parseInt(document.getElementById("numberTwo").value)
  let counter = 0
  let answer = 0

  while (counter < secondNumber) {
    answer = firstNumber + answer
    document.getElementById("ANS").innerHTML = "The answer is " + answer + "."
    counter++
  }
}
