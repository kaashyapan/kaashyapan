exports.files = {
    javascripts: {
        joinTo: {
            "js/app.js": /^app/,
            "js/vendor.js": [/^vendor/, /^node_modules/]
        }
    },
    stylesheets: {
        joinTo: {
            "css/app.css": /^app/,
            "css/vendor.css": [/^vendor/, /^node_modules/]
        }
    }
};

exports.plugins = {
    autoReload : {
        enabled: true,
        host: '0.0.0.0'
    },
    sass : {
        mode : "native"
    },
    uglify: {
        mangle : true
    }
};

exports.server = {
    hostname: "0.0.0.0",
    port: 3000
};

exports.conventions = {
    ignored: /\.ml$/
};

exports.npm = {
    enabled: true,
    globals: {
        $ : 'jquery'
    }
};

exports.modules = {
    autoRequire : {
        'js/app.js': ['bs/demo.bs.js']
    }
};
