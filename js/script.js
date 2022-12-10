// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-4/sw.js", {
    scope: "/ICS20-Assignment-4/",
  })
}

let finalOrder

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  let buttonOldFashionDonutChecked =
    document.getElementById("old-fashioned").checked
  let buttonChocolateChecked = document.getElementById("chocolate").checked
  let buttonGlazedChecked = document.getElementById("glazed").checked
  let button1Checked = document.getElementById("1").checked
  let button2Checked = document.getElementById("2").checked
  let button3Checked = document.getElementById("3").checked
  let button6Checked = document.getElementById("6").checked
  let button12Checked = document.getElementById("12").checked

  if (buttonOldFashionDonutChecked && button1Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Old Fashion<p> <p>Amount: 1<p> <p>Price:$2.25<p>" 
  } else if (buttonOldFashionDonutChecked && button2Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Old Fashion<p> <p>Amount: 2<p> <p>Price:$4.75<p>"
  } else if (buttonOldFashionDonutChecked && button3Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Old Fashion<p> <p>Amount: 3<p> <p>Price:$6.70<p>"
  } else if (buttonOldFashionDonutChecked && button6Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Old Fashion<p> <p>Amount: 6<p> <p>Price:$10.50<p>"
      finalOrder = "<p>Donut: Old Fashion<p> <p>Amount: 6<p> <p>Price:$10.50<p>"
  } else if (buttonOldFashionDonutChecked && button12Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Old Fashion<p> <p>Amount: 12<p> <p>Price:$16.50<p>"
  }

  if (buttonChocolateChecked && button1Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Chocolate<p> <p>Amount: 1<p> <p>Price:$2.25<p>" 
  } else if (buttonChocolateChecked && button2Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Chocolate<p> <p>Amount: 2<p> <p>Price:$4.75<p>"
  } else if (buttonChocolateChecked && button3Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Chocolate<p> <p>Amount: 3<p> <p>Price:$6.70<p>"
  } else if (buttonChocolateChecked && button6Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Chocolate<p> <p>Amount: 6<p> <p>Price:$10.50<p>"
  } else if (buttonChocolateChecked && button12Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Chocolate<p> <p>Amount: 12<p> <p>Price:$16.50<p>"
  }

  if (buttonGlazedChecked && button1Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Glazed<p> <p>Amount: 1<p> <p>Price:$2.25<p>" 
  } else if (buttonGlazedChecked && button2Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Glazed<p> <p>Amount: 2<p> <p>Price:$4.75<p>"
  } else if (buttonGlazedChecked && button3Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Glazed<p> <p>Amount: 3<p> <p>Price:$6.70<p>"
  } else if (buttonGlazedChecked && button6Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Glazed<p> <p>Amount: 6<p> <p>Price:$10.50<p>"
  } else if (buttonGlazedChecked && button12Checked == true) {
    document.getElementById("final-order").innerHTML =
      "<p>Donut: Glazed<p> <p>Amount: 12<p> <p>Price:$16.70<p>"
  }
}

function myYesButtonClicked () {
  document.getElementById("final-order").innerHTML = finalOrder
}

