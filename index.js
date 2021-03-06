module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "arrow-body-style": "off",                  // Team Preference
    "arrow-parens": ["error", "as-needed"],     // Team Preference
    "class-methods-use-this": "off",            // TBD
    "comma-dangle": ["error", {                 // Team Preference
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "consistent-return": "off",         // TBD
    "default-case": "off",              // TBD
    "func-names": "off",                // Team Preference
    "getter-return": "off",             // TBD

    "import/extensions": "off",                   // TBD
    "import/first": "off",                        // Team Preference
    "import/no-extraneous-dependencies": "off",   // TBD
    "import/no-unresolved": "off",                // TBD
    "import/prefer-default-export": "off",

    "jsx-a11y/alt-text": "off",                                 // TBD
    "jsx-a11y/anchor-has-content": "off",                       // TBD
    "jsx-a11y/anchor-is-valid": "off",                          // TBD
    "jsx-a11y/click-events-have-key-events": "off",             // TBD
    "jsx-a11y/heading-has-content": "off",                      // TBD
    "jsx-a11y/label-has-for": "off",                            // TBD
    "jsx-a11y/no-noninteractive-element-interactions": "off",   // TBD
    "jsx-a11y/no-static-element-interactions": "off",           // TBD
    "jsx-a11y/tabindex-no-positive": "off",                     // TBD

    "max-len": "off",                 // TBD
    "no-confusing-arrow": "off",      // TBD --fixable
    "no-console": "warn",             // Team Preference
    "no-else-return": "off",          // Team Preference
    "no-mixed-operators": "off",      // TBD
    "no-param-reassign": "off",       // TBD
    "no-plusplus": "off",             // TBD
    "no-prototype-builtins": "off",   // TBD
    "no-restricted-globals": "off",   // TBD
    "no-shadow": "off",               // TBD
    "no-underscore-dangle": "off",    // TBD
    "no-use-before-define": "off",    // Team Preference
    "object-curly-newline": "off",    // Team Preference
    "prefer-arrow-callback": "off",   // TBD --fixable
    "prefer-destructuring": "off",    // Team Preference
    "prefer-rest-params": "off",      // TBD
    "radix": "off",                   // Team Preference

    "react/forbid-prop-types": "off",             // TBD
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": "off",  // TBD --fixable
    "react/jsx-curly-spacing": ["error", {"when": "always", "attributes": false, "children": true}], // Team Preference
    "react/jsx-no-bind": "off",                   // TBD
    "react/jsx-no-target-blank": "off",           // TBD
    "react/jsx-no-undef": "off",                  // TBD
    "react/no-did-update-set-state": "off",       // TBD
    "react/no-did-mount-set-state": "off",        // TBD
    "react/no-unescaped-entities": ["error", {    // Team Preference
      "forbid": [">", "}"]
    }],
    "react/prefer-stateless-function": "off",     // Team Preference
    "react/require-default-props": "off",         // TBD
    "react/self-closing-comp": "off",             // TBD
    "react/sort-comp": ["error", {                // Team Preference
      "order": [
        "static-methods",
        "/constructor/",
        "/state/",
        "instance-variables",
        "lifecycle",
        "everything-else",
        "getters",
        "render"
      ],
      "groups": {
        "lifecycle": [
          "childContextTypes",
          "componentDidCatch",
          "componentDidMount",
          "componentDidUpdate",
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUnmount",
          "componentWillUpdate",
          "constructor",
          "contextTypes",
          "defaultProps",
          "displayName",
          "getChildContext",
          "getDefaultProps",
          "getDerivedStateFromProps",
          "getInitialState",
          "getSnapshotBeforeUpdate",
          "mixins",
          "propTypes",
          "shouldComponentUpdate",
          "state",
          "statics",
          "UNSAFE_componentWillMount",
          "UNSAFE_componentWillReceiveProps",
          "UNSAFE_componentWillUpdate"
        ]
      }
    }],

    "sort-keys": "error",                         // Team Preference
    "space-before-function-paren": "off"          // Team Preference
  },
  "plugins": [
    "react"
  ]
}
