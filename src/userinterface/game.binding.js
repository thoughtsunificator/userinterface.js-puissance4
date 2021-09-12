UserInterface.bind("game", async function(element, options) {

	const _puissance4 = new puissance4.Game()
	const _columnsNode = element.querySelector(".columns")

	UserInterface.listen(_puissance4, "startGame", async function() {
		await UserInterface.announce(_puissance4, "startTurn")
	})

	UserInterface.listen(_puissance4, "newGame", async function(color) {
		_puissance4.newGame()
		await UserInterface.announce(_puissance4, "startGame")
	})

	UserInterface.listen(_puissance4, "move", async function(column) {
		const move = _puissance4.move(column)
		if(move !== null) {
			new Audio('./resource/move.mp3').play()
			await UserInterface.announce(move.getColumn(), "removePreview")
			await UserInterface.announce(move.getCell(), "setColor", move.getCell().getColor())
			const win = move.isWinning()
			if (win === true) {
				new Audio('./resource/win.mp3').play()
				await UserInterface.announce(_puissance4, "win", move.getCell().getColor())
			} else {
				const cellsCount = _puissance4.getColumns().map(column => column.getCells().length).reduce(function(accumulator, value, index, array) {
					return accumulator + value;
				});
				if (cellsCount === _puissance4.getMoves().length) {
					new Audio('./resource/draw.mp3').play()
					await UserInterface.announce(_puissance4, "draw")
				} else {
					await UserInterface.announce(_puissance4, "startTurn")
				}
			}
			await UserInterface.announce(move.getCell().getColumn(), "preview")
		}
	})

	UserInterface.listen(_puissance4, "cancel", async function(column) {
		const move = _puissance4.cancelMove()
		if(move !== null) {
			await UserInterface.announce(move.getCell(), "removeColor")
			await UserInterface.announce(_puissance4, "startTurn")
		}
	})

	UserInterface.listen(_puissance4, "draw", async function(color) {
		await UserInterface.announce(_puissance4, "endGame")
	})

	UserInterface.listen(_puissance4, "win", async function(color) {
		color.addWin()
		await UserInterface.announce(_puissance4, "endGame")
	})

	UserInterface.listen(_puissance4, "endGame", function() {
		_puissance4.endGame()
	})

	for (let y = 0; y < options.columns; y++) {
		await UserInterface.runModel("column", {parentNode: _columnsNode, bindingArgs: [y, _puissance4, options]})
	}

	for (const color of options.colors) {
		_puissance4.addColor(new puissance4.Color(color.name, color.value))
	}

	_puissance4.initialize()

	await UserInterface.runModel("action", {parentNode: element, bindingArgs: [_puissance4]})
	await UserInterface.runModel("indicator", {parentNode: _columnsNode, bindingArgs: [_puissance4]})
	await UserInterface.runModel("scoreboard", {parentNode: element, bindingArgs: [_puissance4]})

	await UserInterface.announce(_puissance4, "startGame")

})
