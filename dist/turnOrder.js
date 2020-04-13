System.register([], function (exports_1, context_1) {
    "use strict";
    var MODES, PLAYER_COUNT_IDS, TURNORDER_SETUP_VARIATION_IDS;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("MODES", MODES = [
                'Default',
                'Maelstrom',
                'Blitz',
                'Blitz + Maelstrom',
            ]);
            exports_1("PLAYER_COUNT_IDS", PLAYER_COUNT_IDS = [
                'onePlayer',
                'twoPlayers',
                'threePlayers',
                'fourPlayers',
            ]);
            exports_1("TURNORDER_SETUP_VARIATION_IDS", TURNORDER_SETUP_VARIATION_IDS = [
                'default',
                '4toc',
                '34alternating',
                'wildToken',
                'splitPlayers',
            ]);
        }
    };
});
