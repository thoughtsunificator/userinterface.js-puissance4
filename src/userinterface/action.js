UserInterface.model({
	name: "action",
	method: UserInterface.appendChild,
	properties: {
		tagName: "div",
		className: "display-grid grid-gap grid-auto-flow-column grid-auto-columns-maxcontent",
		children: [{
			tagName: "button",
			className: "cancel",
			textContent: "Annuler le dernier déplacement"
		},{
			tagName: "button",
			className: "new_game",
			textContent: "Nouvelle partie"
		}]
	}
})
