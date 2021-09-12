UserInterface.bind("welcome", async function(element, options) {

	const _startNode = element.querySelector(".start")

	_startNode.addEventListener("click", async function() {
		const parentNode = element.parentNode
		element.style.display = "none"
		await UserInterface.runModel("game", { parentNode , bindingArgs:[options] })
	})

})
