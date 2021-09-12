/**
 * @param {Column} column
 * @param {number} y
 */
puissance4.Cell = function(column, x) {
	this.x = x
	this.color = null
	this.column = column
	this.neighboors = []
}

/**
 * @param {Color} color
 */
puissance4.Cell.prototype.setColor = function(color) {
	this.color = color
}

/**
 * @return {Color}
 */
puissance4.Cell.prototype.getColor = function() {
	return this.color
}

/**
 * @return {string}
 */
puissance4.Cell.prototype.getColorName = function() {
	return this.color.getName()
}

/**
 * @return {Column}
 */
puissance4.Cell.prototype.getColumn = function() {
	return this.column
}


/**
 * @return {number}
 */
puissance4.Cell.prototype.getX = function() {
	return this.x
}

/**
 * @return {number}
 */
puissance4.Cell.prototype.getY = function() {
	return this.getColumn().getY()
}

/**
 * @return {string|boolean}
 */
puissance4.Cell.prototype.isAdjacentTo = function(cell) {
	if ((this.getY() === cell.getY()) &&
		(cell.getX() === this.getX() + 1
			|| cell.getX() === this.getX() - 1)) {
		return "vertical"
	}
	if ((this.getX() === cell.getX()) &&
		(cell.getY() === this.getY() + 1
			|| cell.getY() === this.getY() - 1)) {
		return "horizontal"
	}
	if (cell.getY() === this.getY() + 1 && cell.getX() === this.getX() + 1
		|| cell.getY() === this.getY() - 1 && cell.getX() === this.getX() - 1) {
		return "diagonal-right"
	}
	if (cell.getY() === this.getY() + 1 && cell.getX() === this.getX() - 1
		|| cell.getY() === this.getY() - 1 && cell.getX() === this.getX() + 1
		) {
		return "diagonal-left"
	}
	return null
}

puissance4.Cell.prototype.addNeighboor = function(cell, axe) {
	this.neighboors.push({cell, axe})
}

/**
 * @return {array}
 */
puissance4.Cell.prototype.getNeighboors = function() {
	return this.neighboors
}

/**
 * @return {array}
 */
puissance4.Cell.prototype.getAxeCells = function(axe, history, axeCells) {
	if (typeof axeCells === "undefined") {
		axeCells = []
		axeCells.push(this)
	}
	if (typeof history === "undefined") {
		history = []
	}
	history.push(this)
	this.neighboors.filter(neighboor => neighboor.axe === axe && history.includes(neighboor.cell) === false).forEach(neighboor => {
		axeCells.push(neighboor.cell)
		axeCells.concat(neighboor.cell.getAxeCells(axe, history, axeCells))
	})
	axeCells.sort((a, b) => {
		if (a.getY() <  b.getY()) {
			return -1;
		}
		if (a.getY() >  b.getY()) {
			return 1;
		}
		if (a.getX() <  b.getX()) {
			return -1;
		}
		if (a.getX() >  b.getX()) {
			return 1;
		}
		return 0;
	})
	return axeCells
}

