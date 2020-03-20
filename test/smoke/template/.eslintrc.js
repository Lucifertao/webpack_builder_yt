module.exports = {
    parser: 'babel-eslint',  // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2015, // specify the version of ECMAScript syntax you want to use: 2015 => (ES6)
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // enable JSX
            impliedStrict: true // enable global strict mode
        }
    },
    extends: [
        'airbnb',  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
        // 'prettier', // Use prettier, it can disable all rules which conflict with prettier
        // 'prettier/react' // Use prettier/react to pretty react syntax
    ],
    rules: {
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "react/jsx-filename-extension": 0,
    },
    "globals": {
        "document": true,
        "localStorage": true,
        "window": true
    }
};
