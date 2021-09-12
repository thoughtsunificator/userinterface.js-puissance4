UserInterface.model({
	name: "scoreboard",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "display-grid grid-gap",
		children: [
		{
			tagName: "h3",
			textContent: "Scoreboard"
		},{
			tagName: "div",
			style: "grid-template-columns: repeat(7, auto);",
			className: "display-grid grid-gap scoreboard"
		}]
	}
})
