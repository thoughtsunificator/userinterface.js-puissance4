UserInterface.model({
	name: "welcome",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "display-grid grid-gap",
		children: [
		{
			tagName: "h1",
			textContent: "puissance4 ni ようこそ!"
		},
		{
			tagName: "div",
			textContent: "The best online game in the world has arrived!"
		},
		{
			tagName: "div",
			className: "display-grid grid-gap grid-auto-flow-column",
			children: [
				{
					tagName: "button",
					className: "start",
					textContent: "Offline"
				},
				{
					tagName: "button",
					className: "online",
					textContent: "Online"
				}
			]
		}]
	}
})
