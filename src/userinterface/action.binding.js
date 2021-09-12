UserInterface.bind("action", async function(element, game) {

	const _newGameNode = element.querySelector(".new_game")
	const _cancelNode = element.querySelector(".cancel")

	_newGameNode.addEventListener("click", async function() {
		await UserInterface.announce(game, "newGame")
	})

	_cancelNode.addEventListener("click", async function() {
		await UserInterface.announce(game, "cancel")
	})

})
