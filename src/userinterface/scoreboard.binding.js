UserInterface.bind("scoreboard", async function(element, game) {

	const _scoreboardNode = element.querySelector(".scoreboard")

	UserInterface.listen(game, "win", async function(color) {
		await UserInterface.runModel("mini-slot", {parentNode: _scoreboardNode, data: color})
	})

})
