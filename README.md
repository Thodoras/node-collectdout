# Synopsis

Periodically send values out to a [Collectd](http://collectd.org/) server for statistics.

# Installation

```
npm i collectdout
```

# Usage

Create your plugin:
```
var Collectd = require('collectdout');
var plugin = new Collectd(60000, "myserver", 25826).plugin('myapp', 'worker13');
```

Set gauges, they are averaged within a sampling period:
```
plugin.setGauge('users', 'total', 23);
plugin.setGauge('load', '0', [1.0, 0.85, 0.7]);
```

Manipulate counters:
```
plugin.setCounter('if_octets', 'eth0', [0, 0]);
plugin.addCounter('uptime', '0', 1);
```
