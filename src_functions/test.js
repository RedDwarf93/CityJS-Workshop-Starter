// src_function/test.js

exports.handler = function(event, context, callback) {

    const board = JSON.parse(event.body)
    return callback (null {
    statuscode: 200
    body: JSON.stringify(next(board, net))
    })
}