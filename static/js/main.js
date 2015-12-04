var ElementScaler = {
    e: $("#body-text"),
    logo: $("#logo"),
    documentWidth: $(document).width(),
    documentHeight: $(document).height(),
    baseLogo: {
        'width': 379,
        'height': 110
    },

    init: function () {
        this.centerFooter();
        this.scaleLogo();
        this.centerLogo();

        this.show();
    },

    show: function () {
        this.logo.show();
        this.e.show();
    },

    centerFooter: function () {
        this.e.css('left', (this.documentWidth - this.e.width()) / 2);
    },

    centerLogo: function () {
        this.logo.css('left', (this.documentWidth - this.logo.width()) / 2);
    },

    scaleLogo: function () {
        if ((this.documentWidth / this.documentHeight) > (window.screen.width / window.screen.height)) {
            this.logo.css('width', this.documentWidth * 0.32);

            var xScaleFactor = this.baseLogo.width / this.logo.width();
            var yScaleFactor = this.baseLogo.height / this.logo.height();
            var scaleFactor = Math.min(xScaleFactor, yScaleFactor);

            this.logo.css('top', 103 * scaleFactor);
        }
    }
};

ElementScaler.init();

$(window).resize(function () {
  ElementScaler.init();

});

setTimeout(function () {
    //$("#logo img").show();

}, 1000);