System.register(["./data", "./expeditions", "./market", "./turnOrder"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (data_1_1) {
                exportStar_1(data_1_1);
            },
            function (expeditions_1_1) {
                exportStar_1(expeditions_1_1);
            },
            function (market_1_1) {
                exportStar_1(market_1_1);
            },
            function (turnOrder_1_1) {
                exportStar_1(turnOrder_1_1);
            }
        ],
        execute: function () {
        }
    };
});
