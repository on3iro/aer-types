System.register([], function (exports_1, context_1) {
    "use strict";
    var THRESHOLD_OPERATIONS, SUPPLY_OPERATIONS, isCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("THRESHOLD_OPERATIONS", THRESHOLD_OPERATIONS = ['<', '>', '=', '<=', '>=']); // Note: should not be a const, because we want to treat it as regular list
            exports_1("SUPPLY_OPERATIONS", SUPPLY_OPERATIONS = [
                ...THRESHOLD_OPERATIONS,
                'ANY',
                'OR',
                'NoOp',
            ]);
            exports_1("isCard", isCard = (card) => {
                if (!card)
                    return false;
                return card.name !== undefined;
            });
        }
    };
});
