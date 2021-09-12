UserInterface.bind("column", async function(element, y, game, options) {

	const _column = new puissance4.Column(y)
	game.addColumn(_column)

	UserInterface.listen(_column, "preview", function() {
		element.classList.add("active")
	})

	UserInterface.listen(_column, "removePreview", function() {
		element.classList.remove("active")
	})

	element.addEventListener("mouseout", async function(event) {
		await UserInterface.announce(_column, "removePreview")
	})

	element.addEventListener("mousemove", async function(event) {
		if(game.getState() === puissance4.Game.STATE_AWAITING_MOVE || game.getState() === puissance4.Game.STATE_AWAITING_MOVE_CANCEL) {
			await UserInterface.announce(_column, "preview")
		}
	})

	element.addEventListener("click", async function(event) {
		await UserInterface.announce(game, "move", _column)
	})

	for (let x = options.cells - 1; x > -1; x--) {
		await UserInterface.runModel("cell", { parentNode: element, bindingArgs: [_column, x, game] })
	}

})
