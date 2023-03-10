import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {

  connect() {
    console.log("hey")
    new Typed(this.element, {
      strings: ["Make your own list",
      "Share with others"],
      typeSpeed: 10,
      loop: true
    })
  }
}
