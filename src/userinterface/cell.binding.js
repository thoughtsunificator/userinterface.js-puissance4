UserInterface.bind("cell", async function(element, column, x, game) {

	const backgroundNode = element.querySelector(".slot")
	const _cell = new puissance4.Cell(column, x)
	column.addCell(_cell)

	UserInterface.listen(game, "newGame", function() {
		if (_cell.getColor() !== null) {
			backgroundNode.style.removeProperty("background-color")
			_cell.setColor(null)
		}
	})

	UserInterface.listen(game, "cancel", async function() {
		if (_cell.getColor() === null) {
			await UserInterface.announce(_cell, "removePreview")
		}
	})

	UserInterface.listen(_cell, "removeColor", function(color) {
		backgroundNode.style.removeProperty("background-color")
	})

	UserInterface.listen(_cell, "setColor", function(color) {
		backgroundNode.style.backgroundColor = color.getValue()
	})

})
