const tailwindcss = require('tailwindcss');
const autoPrefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        'postcss-preset-env',
        tailwindcss,
        autoPrefixer,
        purgecss({
            content: [
                './public/index.html',
                './src/styles/sass/**/*.scss',
                './src/**/*.ts'
            ]
        }),
        require("cssnano")({
            preset: "default",
        })
    ]
}