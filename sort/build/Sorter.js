"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var x = 0; x < length - i - 1; x++) {
                if (this.collection.compare(x, x + 1)) {
                    this.collection.swap(x, x + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
