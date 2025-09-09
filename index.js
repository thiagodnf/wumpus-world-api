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

    class RandomUtils {

        static int(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static element(array) {
            const index = RandomUtils.int(0, array.size - 1);
            return array[index];
        }
    }

    class SetUtils {

        static createFromArray(matrix) {
            return new Set(matrix.flatMap((row, i) => row.map((_, j) => `${i},${j}`)));
        }

        static removeValues(set, values) {

            for (const value of values) {
                set.delete(value);
            }

            return set;
        }
    }

    class ArrayUtils {

        static create(lines, columns, defaultValue = 0) {
            return Array.from({ length: lines }, () => Array(columns).fill(defaultValue));
        }



        // static getIndexes(matrix) {
        //     return matrix.flatMap((row, i) => row.map((_, j) => [i, j]));
        // }

        static removeByValues(array, values) {

            let filtered = [];

            array.forEach(el1 => {
                if (!ArrayUtils.contains(values, el1)) {
                    filtered.push(el1);
                }
            });

            return filtered;
        }
    }

    function create(lines, columns) {

        let matrix = ArrayUtils.create(lines, columns);

        let indexes = SetUtils.createFromArray(matrix);

        indexes = SetUtils.removeValues(indexes, ["0,0", "0,1", "1,0", "1,1"])

        console.log(indexes)

        console.log(indexes.keys())

        console.log(RandomUtils.element(indexes))
        console.log(RandomUtils.element(indexes))
        console.log(RandomUtils.element(indexes))
        console.log(RandomUtils.element(indexes))
3
        // let indexes = MatrixUtils.create(lines, columns);

        return [];
    }

    // expose log to other modules
    exports.create = create;
});
