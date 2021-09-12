UserInterface.model({
	name: "game",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "display-grid grid-gap",
		children: [{
				tagName: "div",
				className: "display-grid grid-gap grid-auto-flow-column columns"
		}]
	}
})

