"use strict";

var contextMenu = {
    create: function (items, callbacks)
    {
        if (!this.wrapper)
        {
            this.initStyle();
            this.wrapper = document.createElement("div");
            this.wrapper.id = "contextmenu";
            this.wrapper.style.display = "none";
            document.body.appendChild(this.wrapper);
        }
        else
        {
            while (this.wrapper.hasChildNodes())
                this.wrapper.removeChild(this.wrapper.lastChild);
        }

        var contextMenuItem;
        for (var i = 0; i < items.length; i++) {
            contextMenuItem = document.createElement("div");
            contextMenuItem.className = "contextmenu-item background-animated";
            contextMenuItem.innerHTML = items[i];
            contextMenuItem.onclick = callbacks[i];
            this.wrapper.appendChild(contextMenuItem);
        }
    },
    showAt: function (x, y) {
        TweenLite.to(this.wrapper, 0.25, {opacity: 1});
        TweenLite.to(this.wrapper, 0.5,  {scaleX: 1, scaleY: 1, ease: Bounce.easeOut});
        this.wrapper.style.display = "block";
        this.wrapper.style.opacity = 0;
        this.moveTo(x, y);
    },
    moveTo: function (x, y) {
        TweenLite.to(this.wrapper, 0.25, {x: x, y: y});
    },
    hide: function () {
        TweenLite.to(this.wrapper, 0.25, {opacity: 0, scaleX: 0.1, scaleY: 0.1, onComplete: function () {
            this.wrapper.style.display = "none";
        }});
    },
    initStyle: function () {
        var link = document.createElement("link");
        link.rel="stylesheet";
        link.href="contextmenu.css";
        document.head.appendChild(link);
    }
};

contextMenu.create(["Item 1", "Item 2"], [function () {
    alert("1");
}, function () {
    alert("2");
}]);

contextMenu.showAt(0, 0);