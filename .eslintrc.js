module.exports = {
    parser: 'babel-eslint',  // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2015, // specify the version of ECMAScript syntax you want to use: 2015 => (ES6)
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            impliedStrict: true // enable global strict mode
        }
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        'import/no-dynamic-require': 0
    }
};
