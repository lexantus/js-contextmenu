"use strict";

var contextMenu = {
    create: function (items, callbacks)
    {
        if (!this.wrapper)
        {
            this.wrapper = document.createElement("div");
            this.wrapper.className = "opacity-animated position-animated size-animated";
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
        this.wrapper.style.display = "block";
        this.moveTo(x, y);
    },
    moveTo: function (x, y) {
        this.wrapper.style.left = x;
        this.wrapper.style.top = y;
    },
    hide: function () {
        this.wrapper.style.display = "none";
    }
};

contextMenu.create(["Item 1", "Item 2"], [function () {
    alert("1");
}, function () {
    alert("2");
}]);

contextMenu.showAt(0, 0);