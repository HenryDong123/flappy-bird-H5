import {Pencil} from "./Pencil.js";
import {Sprite} from "../base/Sprite.js";

export class DownPencil extends Pencil{
	constructor(top) {
			const image = Sprite.getImage('pencilDown')
			super(image, top)
	}
	draw() {
			let gap = window.innerWidth / 2
			this.y = this.top + gap
			super.draw();
	}
}
