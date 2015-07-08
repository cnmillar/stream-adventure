var concat = require('concat-stream');

function reverse(s){
    return s.split("").reverse().join("");
}

process.stdin
  .pipe(concat(function(body){
  	process.stdout.write(reverse(body.toString()));
  }))
