import Component from "@ember/component";
import { action, computed } from "@ember/object";

export default Component.extend({
	classNames        : [
		"grabber-card-outer"
	],
	classNameBindings : [
		"large:large"
	],
	attributeBindings : [
		"key:key"
	],
	height            : 0,
	width             : "444px",
	text              : "",
	card              : "",
	answer            : "",
	type              : "",
	validate          : false,
	char_array        : computed("text", "answer", function() {
		let chars_array  = this.text.split("");
		let answer_array = (this.answer) ? this.answer.split("") : [];
		let card_array   = (this.card) ? this.card.split("") : [];
		let char_data    = [];

		if (chars_array.length < 15) {
			for (let i = chars_array.length; i < 15; i++) {
				chars_array.push("");
			}
		}

		for (let i in chars_array) {
			char_data.push({
				char       : chars_array[i],
				is_correct : (chars_array[i] === card_array[i] || chars_array[i] === answer_array[i]),
				is_answer  : (i < answer_array.length)
			});
		}

		let result      = [];
		let column_data = [
			char_data.slice(10, 15), // left column characters
			char_data.slice(5, 10), // middle column characters
			char_data.slice(0, 5) // right column characters
		];

		for (let i = 0; i < 5; i++) {
			for (let tmp_chars of column_data) {
				result.push(tmp_chars[i] || {});
			}
		}

		return result;
	}),

	init() {
		this._super(...arguments);
	},

	didInsertElement() {
		$(this.element).css("width", this.width);
		this.setHeight();

		$(window).on("resize", () => {
			this.setHeight();
		});
	},

	setHeight() {
		$(this.element).css("height", this.calculateHeight($(this.element).width()));
	},

	calculateHeight(width) {
		let unit_match = String(width).match(/[^\d\.]+/g);

		if (unit_match) {
			width = +width.replace(unit_match[0], "");
		}

		let height = width * 1.3962264150943396226415094339623;

		if (unit_match) {
			height = `${height}${unit_match[0]}`;
		}

		return `${height}px`;
	}
});