var fs=require('fs');
var path = require('path');

function ComponentLoader() {
    "use strict";

    var component = {

        loadComponents : function(dir, done) {

            var components = [];

            function getFilter(ext) {
                return function(filename) {
                    return filename.match(new RegExp('\\.' + ext + '$', 'i'));
                };
            }

            fs.readdir(dir, function (err, files) {
                if (err) {
                    throw err;
                }

                files.filter(function (file) {

                    return fs.statSync(path.join(dir,file)).isDirectory();
                }).forEach(function (plugin) {
                    console.log("Loading " + plugin + " plugin.");

                    // Load the backend code
                    var component = require(path.join(dir, plugin))(plugin);
                    if (typeof component != 'undefined') {
                        component.name = plugin;
                        component.publicDir = '';

                        var js;
                        var assets;
                        var scripts = [];
                        // Add the public assets to a static route
                        if (fs.existsSync(assets = path.join(dir, plugin, 'public'))) {
                            component.publicDir = assets;
                            // Add the js to the view
                            if (fs.existsSync(js = path.join(assets, 'js'))) {
                                fs.readdirSync(js).filter(getFilter('js')).forEach(function (script) {
                                    scripts.push("/component/" + plugin + "/js/" + script);
                                });
                            }
                        }
                        component.scripts = scripts;
                        components.push(component);
                    }
                });

                done(components);
            });
        }
    };
    return component;
}
/*


 // Add the css to the view
 if (fs.existsSync(css = path.join(assets, 'css'))) {
 fs.readdirSync(css).filter(getFilter('css')).forEach(function(style) {
 styles.push("/plugin/" + plugin + "/css/" + style);
 });
 }*/

module.exports = ComponentLoader;