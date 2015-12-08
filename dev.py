import cherrypy
import sys, os
from jinja2 import Environment, FileSystemLoader
env = Environment(loader=FileSystemLoader('templates'))

class Root(object):
    @cherrypy.expose
    @cherrypy.tools.gzip()
    def index(self):
	tmpl = env.get_template('index.html')
	return tmpl.render(salutation='Hello', target='World')


if __name__ == '__main__':
     conf = {
         '/': {
             'tools.sessions.on': True,
             'tools.staticdir.root': os.path.abspath(os.getcwd())
         },
         '/css': {
             'tools.staticdir.on': True,
             'tools.staticdir.dir': './static/css'
         },
         '/js': {
             'tools.staticdir.on': True,
             'tools.staticdir.dir': './static/js'
         },
         '/images': {
             'tools.staticdir.on': True,
             'tools.staticdir.dir': './static/images'
         },
         '/static': {
                      'tools.staticdir.on': True,
                      'tools.staticdir.dir': './static'
          },

     }
     cherrypy.quickstart(Root(), '/', config=conf)
