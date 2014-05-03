function example(name) {
    console.log("This is where plugin code would execute in the node process.");

    var component = { };
    component.router = undefined;

    return component;
};

module.exports = example;
