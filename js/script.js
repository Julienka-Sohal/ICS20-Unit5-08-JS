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
  let num = parseInt(document.getElementById("numberOne").value)
  let den = parseInt(document.getElementById("numberTwo").value)
  let temp = 0
  let rem = num
  while (rem != 1) {
    if (den != 0) {
      rem = rem - den
      temp++
    }
  }
  document
    .getElementById("ANS")
    .innerHTML(num + "/" + den + " = " + temp + " R " + rem)
}
