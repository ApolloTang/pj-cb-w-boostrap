$ = jQuery = require('./libs/jquery.js');
require('./libs/bootstrap.js');
var hello = require('./modules/hello');

hello.sayHello();

$('#myModal').modal('show');

$('#creative-tab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

