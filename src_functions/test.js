// src_function/test.js

exports.handler = function(event, context, callback) {
    
const result= []
const board = JSON.parse(event.body)
const result= = trainedNet(board)

console.log(result)

return callback (null {
statuscode: 200
body: JSON.stringify(next(board, net))
    })
}