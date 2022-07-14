module.exports = {
    resolve: {
        fallback: [
            {
                stream: require("stream-browserify"),
            },
        ],
    },
};
