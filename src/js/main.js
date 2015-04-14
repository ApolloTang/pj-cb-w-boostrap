$ = jQuery = require('./libs/jquery.js');
require('./libs/bootstrap.js');
var hello = require('./modules/hello');

hello.sayHello();

$('#ef-creative-builder').modal('show');

$('#creative-tab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$('#creative-tab a[data-target="#customize"]').tab('show');

$('#asset-1-tab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$('#asset-2-tab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$('#asset-3-tab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$('#asset-4-tab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$('#asset-5-tab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
