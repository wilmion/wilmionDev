const tailwindcss = require('tailwindcss');
const autoPrefixer = require('autoprefixer')

module.exports = {
    plugins: [
        'postcss-preset-env',
        tailwindcss,
        autoPrefixer
    ]
}