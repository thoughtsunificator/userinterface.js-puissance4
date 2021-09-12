/**
 * @param {number} x
 */
puissance4.Column = function(y) {
	this.y = y
	this.cells = []
}

/**
 * @param {Cell} cell
 */
puissance4.Column.prototype.addCell = function(cell) {
	this.cells.push(cell)
}

/**
 * @return {Cell[]}
 */
puissance4.Column.prototype.getCells = function() {
	return this.cells
}

/**
 * @return {Cell[]}
 */
puissance4.Column.prototype.getAvailableCell = function() {
	return this.cells.slice().reverse().find(cell => cell.color === null)
}

/**
 * @return {number}
 */
puissance4.Column.prototype.getY = function() {
	return this.y
}

