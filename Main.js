import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";

export class Main {
		constructor() {
				this.canvas = document.getElementById('mainPanel')
				this.ctx = this.canvas.getContext('2d')
				this.dataStore = DataStore.getInstance()
				this.director = Director.getInstance()
				const loader = ResourceLoader.create()
				loader.onLoaded(map => this.onResourceFirstLoaded(map))
				}


		onResourceFirstLoaded(map) {
				this.dataStore.canvas = this.canvas
				this.dataStore.ctx = this.ctx
				this.dataStore.res = map
				this.init()
		}
		init(){
				this.director.isGameOver = false
				this.dataStore
						.put('pencils', [])
						.put('background', BackGround)
						.put('land', Land)
						.put('birds', Birds)
						.put('startButton', StartButton)
						.put('score', Score)
				this.registerEvent()
				this.director.createPencil()
				this.director.run()
		}
		registerEvent() {
				this.canvas.addEventListener('touchstart', e => {
						e.preventDefault()
						if (this.director.isGameOver){
								this.init()
						} else {
								this.director.birdsEvent()
						}
				})

		}
}
