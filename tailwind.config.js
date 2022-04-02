module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            colors:{
                primary: "#0040FF", 
                secondary:"#86E7FD",
                third:"#4F5C82",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
