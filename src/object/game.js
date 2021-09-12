puissance4.Game = function() {
	this.colors = []
	this.colorIndex = 0
	this.columns = []
	this.moves = []
	this.setState(puissance4.Game.STATE_AWAITING_INITIALIZATION)
}

puissance4.Game.STATE_AWAITING_INITIALIZATION = "STATE_AWAITING_INITIALIZATION"
puissance4.Game.STATE_AWAITING_MOVE = "STATE_AWAITING_MOVE"
puissance4.Game.STATE_AWAITING_MOVE_CANCEL = "STATE_AWAITING_MOVE_CANCEL"
puissance4.Game.STATE_AWAITING_RESTART = "STATE_AWAITING_RESTART"
puissance4.Game.NUMBER_ITEMS_WIN = 4

/**
 * @param  {Column} column
 * @return {Move}
 */
puissance4.Game.prototype.move = function(column) {
	if (this.state === puissance4.Game.STATE_AWAITING_MOVE || this.state === puissance4.Game.STATE_AWAITING_MOVE_CANCEL) {
		const cell = column.getAvailableCell()
		if (typeof cell !== "undefined") {
			const move = new puissance4.Move(cell)
			this.moves.push(move)
			move.getCell().setColor(this.getCurrentColor())
			this.setState(puissance4.Game.STATE_AWAITING_MOVE)
			if (this.colorIndex === this.colors.length - 1) {
				this.colorIndex = 0
			} else {
				this.colorIndex++
			}
			return move
		} else {
			return null
		}
	}
	return null
}

puissance4.Game.prototype.cancelMove = function() {
	if(this.state === puissance4.Game.STATE_AWAITING_MOVE && this.moves.length >= 1) {
		const move = this.moves[this.moves.length - 1]
		move.getCell().setColor(null)
		this.moves.splice(this.moves.length - 1, 1)
		if (this.colorIndex === 0) {
			this.colorIndex = this.colors.length - 1
		} else {
			this.colorIndex--
		}
		this.setState(puissance4.Game.STATE_AWAITING_MOVE_CANCEL)
		return move
	}
	return null
}

/**
 * @return {number}
 */
puissance4.Game.prototype.getState = function() {
	return this.state
}

/**
 * @param {number} state
 */

puissance4.Game.prototype.setState = function(state) {
	this.state = state
}

/**
 * @param {Column} column
 */
puissance4.Game.prototype.addColumn = function(column) {
	this.columns.push(column)
}

/**
 * @param {Color} color
 */
puissance4.Game.prototype.addColor = function(color) {
	this.colors.push(color)
}

/**
 * @return {Moves[]}
 */
puissance4.Game.prototype.getMoves = function() {
	return this.moves
}

/**
 * @return {Color[]}
 */
puissance4.Game.prototype.getColors = function() {
	return this.colors
}

/**
 * @return {number}
 */
puissance4.Game.prototype.getColorIndex = function() {
	return this.colorIndex
}

/**
 * @return {Color}
 */
puissance4.Game.prototype.getCurrentColor = function() {
	return this.colors[this.colorIndex]
}

/**
 * @return {Column[]}
 */
puissance4.Game.prototype.getColumns = function() {
	return this.columns
}

/**
 * @return {Cell[]}
 */
puissance4.Game.prototype.getCells = function() {
	return this.columns.map(column => column.getCells()).flat()
}

puissance4.Game.prototype.newGame = function() {
	this.setState(puissance4.Game.STATE_AWAITING_MOVE)
}

puissance4.Game.prototype.endGame = function() {
	if (this.state !== puissance4.Game.STATE_AWAITING_INITIALIZATION) {
		this.colorIndex = 0
		this.moves = []
		this.setState(puissance4.Game.STATE_AWAITING_RESTART)
	}
}

/**
 * @return {Color[]}
 */
puissance4.Game.prototype.getNextColors = function() {
	let index = 0
	const colors = []
	for (let i = this.colorIndex; index < this.colors.length - 1;i++) {
		if (i === this.colors.length) {
			i = 0
		}
		if (i === this.colorIndex) {
			continue
		}
		colors.push(this.colors[i])
		index++
	}
	if (puissance4.Game.DEBUG === true)
		console.log("(getNextColors)", colors)
	return colors
}

puissance4.Game.prototype.initialize = function() {
	if (this.state === puissance4.Game.STATE_AWAITING_INITIALIZATION) {
		const cells = this.getCells()
		for(const cell of cells) {
			for(const addedCell of cells) {
				const axe = cell.isAdjacentTo(addedCell)
				if (axe !== null) {
					cell.addNeighboor(addedCell, axe)
				}
			}
		}
		this.setState(puissance4.Game.STATE_AWAITING_MOVE)
	}
}

