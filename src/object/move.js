/**
 * @param {Cell} cell
 */
puissance4.Move = function(cell) {
	this.cell = cell
}

/**
 * @return {Column}
 */
puissance4.Move.prototype.getColumn = function() {
	return this.cell.getColumn()
}

/**
 * @return {Cell}
 */
puissance4.Move.prototype.getCell = function() {
	return this.cell
}

/**
 * Break down the cells of a given axe into groups of color
 * @param  {string} axe
 * @return {array}
 */
puissance4.Move.prototype.getGroups = function(axe) {
	const cells = this.getCell().getAxeCells(axe)
	const groups = []
	let group = []
	for (const [index, cell] of cells.entries()) { // FIXME
		let added = false
		if (cell.getColor() !== null) {
			if(group.length >= 1 && cell.getColor() !== group[0].getColor()) {
				groups.push(group)
				group = []
			}
			group.push(cell)
			added = true
		}
		if ((added === false || index === cells.length - 1) && group.length >= 1) {
			groups.push(group)
			group = []
		}
	}
	return groups
}

/**
 * @return {Boolean}
 */
puissance4.Move.prototype.isWinning = function() {
	const axes = ["horizontal", "vertical", "diagonal-left", "diagonal-right"] // TODO add circle and other stuff..
	for (const axe of axes) {
		const groups = this.getGroups(axe)
		const currentGroup = groups.filter(group => group.length >= puissance4.Game.NUMBER_ITEMS_WIN && group[0].getColor() === this.getCell().getColor())
		if(currentGroup.length >= 1) {
			return true
		}
	}
	return false
}


