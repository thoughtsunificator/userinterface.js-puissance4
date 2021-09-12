const rewire = require("rewire")
global.puissance4 = {}
rewire("../src/object/cell.js")
rewire("../src/object/color.js")
rewire("../src/object/column.js")
rewire("../src/object/move.js")
rewire("../src/object/game.js")

let game
let columns

exports.setUp = callback => {
	game = new puissance4.Game()
	for (let x = 0; x < 7; x++) {
		const column = new puissance4.Column(x)
		for (let y = 6; y > -1; y--) {
			const cell = new puissance4.Cell(column, y)
			column.addCell(cell)
		}
		game.addColumn(column)
	}
	game.addColor(new puissance4.Color("red", "red"))
	game.addColor(new puissance4.Color("yellow", "yellow"))
	game.initialize()
	columns = game.getColumns()
	callback()
}

exports.move = async test => {
	test.expect(4)
	test.strictEqual(game.getColorIndex(), 0)
	test.strictEqual(game.getMoves().length, 0)
	game.move(columns[0])
	test.strictEqual(game.getMoves().length, 1)
	test.strictEqual(game.getColorIndex(), 1)
	test.done()
}
