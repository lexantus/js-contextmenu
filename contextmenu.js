"use strict";

var contextMenu = {
    create: function (items, callbacks)
    {
        if (!this.wrapper)
        {
            this.initStyle();
            this.wrapper = document.createElement("div");
            this.wrapper.id = "contextmenu";
            this.wrapper.className = "opacity-animated position-animated";
            this.wrapper.style.opacity = 0;
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
        this.wrapper.style.opacity = 1;
        this.moveTo(x, y);
    },
    moveTo: function (x, y) {
        this.wrapper.style.left = x;
        this.wrapper.style.top =  y;
    },
    hide: function () {
        this.wrapper.style.opacity = 0;
    },
    initStyle: function () {
        var link = document.createElement("link");
        link.rel="stylesheet";
        link.href="contextmenu.css";
        document.head.appendChild(link);
    }
};