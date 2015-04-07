$ = jQuery = require('./libs/jquery.js');
require('./libs/bootstrap.js');
var hello = require('./modules/hello');

hello.sayHello();

$('#myModal').modal('show');

