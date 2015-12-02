import cherrypy
from jinja2 import Environment, FileSystemLoader
env = Environment(loader=FileSystemLoader('templates'))

class Root(object):
    @cherrypy.expose
    def index(self):
	tmpl = env.get_template('index.html')
	return tmpl.render(salutation='Hello', target='World')

# global config
cherrypy.config.update({'engine.autoreload.on': False, 
			'environment': 'production',
			'log.error_file': 'site.log'})
cherrypy.server.unsubscribe()
cherrypy.engine.start()

wsgiapp = cherrypy.tree.mount(Root())
