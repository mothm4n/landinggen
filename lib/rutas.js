Router.configure({
	layoutTemplate: 'layout',
	template: 'indexH3G'
});
// RUTA BASE
Router.route('/', {
	name: 'ListadoLandings',
	template: 'ListadoLandings',
	layoutTemplate: 'layout',
});