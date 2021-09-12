UserInterface.model({
	name: "mini-slot",
	method: UserInterface.appendChild,
	callback: color => ({
		tagName: "div",
		title: color.getName(),
		className: "mini-slot",
		style: "background-color: " + color.getValue()
	})
})
