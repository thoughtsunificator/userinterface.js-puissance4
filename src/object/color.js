/**
 * @param {string} name
 * @param {string} value
 */
puissance4.Color = function(name, value) {
	this.name = name
	this.value = value
	this.wins = 0
}

/**
 * @return {string}
 */
puissance4.Color.prototype.getName = function() {
	return this.name
}

/**
 * @return {string}
 */
puissance4.Color.prototype.getValue = function() {
	return this.value
}

/**
 * @return {number}
 */
puissance4.Color.prototype.getWins = function() {
	return this.wins
}

puissance4.Color.prototype.addWin = function() {
	this.wins++
}
