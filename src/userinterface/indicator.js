UserInterface.model({
	name: "indicator",
	method: UserInterface.insertBefore,
	properties: {
		tagName: "div",
		className: "display-grid grid-gap",
		children: [
		{
			tagName: "div",
			className: "display-grid grid-gap",
			children: [{
				tagName: "h3",
				className: "indicator-status",
				textContent: "Status: Initialisation..."
			}]
		},
		{
			tagName: "div",
			className: "display-grid grid-gap grid-auto-flow-column",
			children: [
			{
				tagName: "div",
				className: "display-grid grid-gap",
				children: [{
					tagName: "h3",
					textContent: "Joueur actuel"
				},
				{
					tagName: "div",
					className: "indicator-current mini-slot"
				}]
			},{
				tagName: "div",
				className: "display-grid grid-gap",
				children: [{
					tagName: "h3",
					textContent: "Prochains joueurs"
				},
				{
					tagName: "div",
					className: "display-grid grid-gap grid-auto-flow-column grid-auto-columns-maxcontent indicator-next"
				}]
			}]
		}]
	}
})
