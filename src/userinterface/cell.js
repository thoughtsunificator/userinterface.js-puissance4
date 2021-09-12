UserInterface.model({
	name: "cell",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "cell",
		children: [{
			tagName: "div",
			className: "slot"
		}]
	}
})
