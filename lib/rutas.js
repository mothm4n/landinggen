Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/h3g/', function () {
  this.layout('layout');
  this.render('indexH3G');
  this.render('footerH3G', {to: 'footer'});
});

Router.route('/h3g/3G', function () {
  this.layout('layout');
  this.render('indexH3G');
  this.render('button', {to: 'action'});
  this.render('footerH3G', {to: 'footer'});
});

Router.route('/h3g/wifi', function () {
  this.layout('layout');
  this.render('indexH3G');
  this.render('formWifi1', {to: 'action'});
  this.render('footerH3G', {to: 'footer'});
});