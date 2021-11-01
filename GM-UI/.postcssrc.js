// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-salad": require('./packages/theme/salad.config.json'),
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {}
    }
}