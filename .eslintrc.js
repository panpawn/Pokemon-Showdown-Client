'use strict';

const os = require('os');

module.exports = {
	"env": {
		"node": true,
		"browser": true
	},
	"globals": {
		// Libraries
		"_": false, "$": false, "Backbone": false, "d3": false, "html": false, "html4": false, "jQuery": false, "SockJS": false, "ColorThief": false,

		// Environment-specific
		"fs": false, "gui": false, "ga": false, "macgap": false, "nwWindow": false, "webkitNotifications": false,

		// Battle stuff
		"Battle": true, "Pokemon": true, "BattleSound": true,
		"BattleAbilities": false, "BattleAliases": false, "BattleBackdrops": false, "BattleBackdropsFour": false, "BattleBackdropsThree": false, "BattleEffects": false,
		"BattleFormats": false, "BattleFormatsData": false, "BattleItems": false, "BattleMoveAnims": false, "BattleMovedex": false, "BattleNatures": false, 
		"BattleOtherAnims": false,  "BattlePokedex": false,"BattlePokemonSprites": false, "BattlePokemonSpritesBW": false, "BattleSearchCountIndex": false, "BattleSearchIndex": false,
		"BattleSearchIndexOffset": false, "BattleSearchIndexType": false, "BattleStatIDs": false, "BattleStatNames": false, "BattleStats": false, "BattleStatusAnims": false, "BattleStatuses": false,

		// Generic global variables
		"Config": false, "Chart": false, "soundManager": false, "Storage": false, "Tools": false,
		"app": false, "toId": false, "toRoomid": false, "toUserid": false, "toName": false, "hashColor": false, "MD5": false,
		"ChatHistory": false, "Topbar": false, "UserList": false,

		// Rooms
		"Room": false, "BattleRoom": false, "ChatRoom": false, "ConsoleRoom": false, "LadderRoom": false, "MainMenuRoom": false, "RoomsRoom": false, "TeambuilderRoom": false,

		// Tons of popups
		"Popup": false, "ForfeitPopup": false, "BracketPopup": false, "LoginPasswordPopup": false, "UserPopup": false, "TeamPopup": false,
		"AvatarsPopup": false, "BattleListPopup": false, "CreditsPopup": false, "FormatPopup": false, "FormattingPopup": false, "LoginPopup": false,
		"MovePopup": false, "SoundsPopup": false, "OptionsPopup": false, "PromptPopup": false, "ProxyPopup": false, "ReconnectPopup": false,
		"RegisterPopup": false, "ReplayUploadedPopup": false, "RulesPopup": false, "TabListPopup": false, "TournamentBox": false,
		"CustomBackgroundPopup": false
	},
	"rules": {
		"comma-dangle": [2, "never"],
		"no-cond-assign": [2, "except-parens"],
		"no-console": 0,
		"no-constant-condition": 0,
		"no-control-regex": 0,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty-character-class": 2,
		"no-empty": 0,
		"no-ex-assign": 2,
		"disallow-extra-boolean-casts": 0,
		"no-extra-parens": 0,
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": 2,
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-negated-in-lhs": 2,
		"no-obj-calls": 2,
		"no-regex-spaces": 2,
		"no-sparse-arrays": 2,
		"no-unexpected-multiline": 2,
		"no-unreachable": 2,
		"use-isnan": 2,
		"valid-jsdoc": 0,
		"valid-typeof": 2,

		"block-scoped-var": 0,
		"complexity": 0,
		"consistent-return": 0,
		"default-case": 0,
		"dot-location": [2, "property"],
		"dot-notation": 0,
		"eqeqeq": 0,
		"no-caller": 2,
		"no-case-declarations": 0,
		"no-div-regex": 2,
		"no-else-return": 0,
		"no-empty-label": 2,
		"no-empty-pattern": 1,
		"no-eval": 0,
		"no-implied-eval": 2,
		"no-extend-native": 2,
		"no-extra-bind": 1,
		"no-fallthrough": 2,
		"no-implicit-coercion": 0,
		"no-invalid-this": 0,
		"no-lone-blocks": 0,
		"no-loop-func": 0,
		"no-magic-numbers": 0,
		"no-multi-spaces": 0,
		"no-multi-str": 2,
		"no-native-reassign": 2,
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-octal-escape": 2,
		"no-octal": 1,
		"no-param-reassign": 0,
		"no-process-env": 0,
		"no-proto": 2,
		"no-return-assign": [2, "except-parens"],
		"no-self-compare": 2,
		"no-sequences": 1,
		"no-throw-literal": 2,
		"no-unused-expressions": 2,
		"no-useless-call": 2,
		"no-useless-concat": 0,
		"no-void": 0,
		"no-warning-comments": 0,
		"no-with": 2,
		"radix": 1,
		"vars-on-top": 0,
		"wrap-iife": [2, "inside"],
		"yoda": 0,
		"strict": 0,
		"init-declarations": 0,
		"no-delete-var": 2,
		"no-label-var": 2,
		"no-shadow-restricted-names": 2,
		"no-shadow": 0,
		"no-undef-init": 0,
		"no-undef": [2, {"typeof": true}],
		"no-undefined": 0,
		"no-unused-vars": 0,
		"no-new-require": 2,

		"array-bracket-spacing": [2, "never"],
		"block-spacing": 0,
		"brace-style": [2, "1tbs", {"allowSingleLine": true}],
		"camelcase": 0,
		"comma-spacing": [2, {"before": false, "after": true}],
		"comma-style": [2, "last"],
		"computed-property-spacing": [2, "never"],
		"consistent-this": 0,
		"eol-last": os.EOL === '\n' ? [2, "unix"] : 0,
		"func-names": 0,
		"func-style": 0,
		"id-length": 0,
		"id-match": 0,
		"indent": [2, "tab"],
		"key-spacing": 0,
		"linebreak-style": os.EOL === '\n' ? [2, "unix"] : 0,
		"lines-around-comment": 0,
		"max-nested-callbacks": 0,
		"new-parens": 2,
		"newline-after-var": 0,
		"no-array-constructor": 2,
		"no-continue": 0,
		"no-inline-comments": 0,
		"no-lonely-if": 0,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"no-multiple-empty-lines": [2, {"max": 2, "maxEOF": 1}],
		"no-negated-condition": 0,
		"no-nested-ternary": 0,
		"no-new-object": 2,
		"no-spaced-func": 2,
		"no-ternary": 0,
		"no-trailing-spaces": 2,
		"no-underscore-dangle": 0,
		"no-unneeded-ternary": 2,
		"object-curly-spacing": [2, "never"],
		"one-var": 0,
		"operator-assignment": 0,
		"operator-linebreak": [2, "after"],
		"quote-props": 0,
		"quotes": 0,
		"require-jsdoc": 0,
		"semi-spacing": [2, {"before": false, "after": true}],
		"semi": [2, "always"],
		"sort-vars": 0,
		"space-after-keywords": [2, "always"],
		"space-before-blocks": [2, "always"],
		"space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
		"space-before-keywords": [2, "always"],
		"space-in-parens": [2, "never"],
		"space-infix-ops": 2,
		"space-return-throw-case": 2,
		"space-unary-ops": [2, {"words": true, "nonwords": false}],
		"spaced-comment": 0,
		"wrap-regex": 0

		// Rules enabled in the server code, but disabled here
		/*
		"curly": [2, "multi-line", "consistent"],
		"no-floating-decimal": 2,
		"no-new": 2,
		"no-redeclare": 2,
		"no-unused-vars": [1, {"args": "none"}],
		"no-use-before-define": [2, "nofunc"],
		"new-cap": [2, {"newIsCap": true, "capIsNew: false}],
		"padded-blocks": [2, "never"],
		"validate-conditionals": 2
		*/
	}
};
