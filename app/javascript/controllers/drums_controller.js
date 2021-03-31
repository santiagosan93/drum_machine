import { Controller } from "stimulus";

export default class extends Controller {
  static values = { soundPath: String }
  static targets = ["sound"]
  connect() {
    console.log('Hello!');
  }

  playDrums() {
    // Hello
    console.log("lets rock!")
    console.log(this.soundTarget.play())
  }
}
