import { Controller } from "stimulus";

export default class extends Controller {
  static values = { sound: String }
  static targets = ["sound"]
  connect() {
    console.log('Hello!');
    console.log(this.soundValue)
  }

  playDrums() {
    // Hello
    console.log("lets rock!")
    const audio = new Audio(this.soundValue)
    audio.play()
  }
}
