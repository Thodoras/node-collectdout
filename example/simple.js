var Collectd = require('../lib');

var plugin = new Collectd(1000).plugin('collectd_out', 'test');
setInterval(function() {
    plugin.setGauge('ping', 'fun', 42 + Math.sin(new Date().getTime() / 600000) * 23.5);
    plugin.addCounter('cpu', 'time', 1);
});

