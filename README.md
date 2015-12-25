# flyerArchive

A jQuery plugin used for archive an element to another with fly animation

# Usage

After import this plugin, just use `.flyerArchive()` to affect the animation on any element you want.

The following command can fly the `file-wrap` block on github project page to top-right user links in navbar.

```js
$(".file-wrap").flyerArchive({backgroundColor: "#c33", flyTarget: $("#user-links")});
```

# Options

Parameter       | Default       | Description
----------------|---------------|------------
startOffset     | this.offset() | flyer start from `{ top: top, left: left }`
foldTime        | 500           | how long the fold animation act (ms)
foldHeight      | "16px"        | fold block height
foldWidth       | "16px"        | fold block width
flyTime         | 500           | how long the fly animation act (ms)
flyTarget       | $("body")     | where for fly target
backgroundColor | this.css("backgroundColor")       | the background color for animation element (cause most element with a white or blank background color, this parameter should set manually in recommendation)
