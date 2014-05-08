
function divers(name) {
    var component = {
        router : require("./routes/index"),
        ngModule: 'diversModule'
    };

    console.log("Plugin '" + name + "' successfully loaded.");

    return component;
};

module.exports = divers;
