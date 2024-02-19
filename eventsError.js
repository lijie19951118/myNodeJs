var events = require('events'); 
var emitter = new events.EventEmitter(); 

emitter.on('error', function(err) {
	console.log(err)
})
emitter.emit('error'); 


console.log('程序结束');