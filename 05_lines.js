var through = require('through2');
var split = require('split');
var stream = through(write, end);

var iter = 1;

function write(buffer, encoding, next){
	
	if(iter%2 == 0){
		this.push(buffer.toString().toUpperCase() + '\n');
		next();		
	}
	
	else {
		this.push(buffer.toString().toLowerCase() + '\n');
		next();	
	}

	iter+=1;

}

function end(done){
	done();
}

// process.stdin.pipe(stream).pipe(process.stdout);
process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout);