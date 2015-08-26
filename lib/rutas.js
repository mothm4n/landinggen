Router.configure({
	layoutTemplate: 'layout',
	template: 'indexH3G'
});

Router.route('/h3g/', {
	name: 'h3g',
	template: 'indexH3G',
	layoutTemplate: 'layout',
	yieldRegions: {
    	'button': {to: 'action'},
    	'footerH3G': {to: 'footer'}
  	}
});

Router.route('/h3g/:campaign', {
	name: 'h3g.campaign',
	template: 'indexH3G',
	layoutTemplate: 'layout',
	yieldRegions: {
    	'button': {to: 'action'},
    	'footerH3G': {to: 'footer'}
  	},
  	camp: function(){
  		return this.params.campaign;
  	}
});

Router.route('/h3g/wifi', {
	name: 'h3g.wifi',
	template: 'indexH3G',
	layoutTemplate: 'layout',
	yieldRegions: {
    	'formWifi1': {to: 'action'},
    	'footerH3G': {to: 'footer'}
  	}
});
Router.route('/h3g/wifi/ok', {
	name: 'h3g.wifi.ok',
	template: 'indexH3G',
	layoutTemplate: 'layout',
	yieldRegions: {
    	'formWifi2': {to: 'action'},
    	'footerH3G': {to: 'footer'}
  	}
});

Router.route('/h3g/gestione', {
	name: 'gestione',
	template: 'gestione',
	layoutTemplate: 'layout',
	yieldRegions: {
    	'footerH3G': {to: 'footer'}
  	}
});
Router.route('/h3g/cancel', {
	name: 'cancelOk',
	template: 'cancelOk',
	layoutTemplate: 'layout',
	yieldRegions: {
    	'footerH3G': {to: 'footer'}
  	}
});
