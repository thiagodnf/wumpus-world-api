(function (global, factory) {

    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {

        let mod = {
            exports: {}
        };

        factory(mod.exports);

        global.log = mod.exports;
    }

})(this, function (exports) {

    "use strict";

    function create(lines, columns) {
        console.log("Example of UMD module system");
    }

    // expose log to other modules
    exports.create = create;
});
