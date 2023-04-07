var events = require('events');
var eventEmitter = new events.EventEmitter();

var myHandler01 = function () {
    console.log("Hello this is myhandler01");
    eventEmitter.emit('event2');
}

var myHandler02 = function () {
    console.log("Hello this is myhandler02");
    
}

eventEmitter.on('event3', function () {
    console.log("Hello this is myhandler03");
});

eventEmitter.on("event4" , function(msg) {
    console.log(msg);
})

var i=2
eventEmitter.on("event5" , () =>  {
    console.log(++i);
})



eventEmitter.on('event1', myHandler01);
eventEmitter.on('event2', myHandler02);

eventEmitter.emit('event1');
eventEmitter.emit('event3');
eventEmitter.emit('event4' , 'this is myhandler04');
eventEmitter.emit('event5');
eventEmitter.emit('event5');
eventEmitter.emit('event5');


