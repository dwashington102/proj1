var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");
  exec ("ls -lah", function (error,stdout,stderr){
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write(stdout);
	  response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello Upload");
	  response.end();
}

function crystal(response) {
  console.log("Request handler 'crystal' was called.");
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello my name is Mud");
	  response.end();
	
}

/* For all functions above we must export.
 * Any function that is created, but not export will return
 * "404 Not Found" message when attempting to access in 
 * browser
*/

exports.start = start;
exports.upload = upload;
exports.crystal = crystal;
