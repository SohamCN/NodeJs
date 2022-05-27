const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('end', (rong)=>{
    console.log(`${rong} is my favourite colour`);
})

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
eventEmitter.emit('start', 1, 100);

eventEmitter.emit('end', 'Blue');