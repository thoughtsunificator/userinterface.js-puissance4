UserInterface.bind("indicator", async function(element, game) {

	const _indicatorCurrentNode = element.querySelector(".indicator-current")
	const _indicatorNextNode = element.querySelector(".indicator-next")
	const _indicatorStatusNode = element.querySelector(".indicator-status")

	UserInterface.listen(game, "startTurn", async function() {
		_indicatorCurrentNode.title = game.getCurrentColor().getName()
		_indicatorCurrentNode.style.backgroundColor = game.getCurrentColor().getValue()
		_indicatorNextNode.innerHTML = ""
		const nextColors = game.getNextColors()
		for (let i = 0; i < nextColors.length; i++) {
			await UserInterface.runModel("mini-slot", {parentNode: _indicatorNextNode, data: nextColors[i]})
		}
		_indicatorStatusNode.textContent =  "Status : En attente de déplacement..."
	})

	UserInterface.listen(game, "win", async function(color) {
		_indicatorStatusNode.textContent =  "Status : " + color.getName() + " a remporté la partie."
	})

	UserInterface.listen(game, "draw", async function(color) {
		_indicatorStatusNode.textContent =  "Status : Match nul"
	})

})
