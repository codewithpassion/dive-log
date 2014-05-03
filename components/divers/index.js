
function divers(name) {
    var component = {
        router : require("./routes/index")
    };

    console.log("Plugin '" + name + "' successfully loaded.");

    return component;
};

module.exports = divers;
