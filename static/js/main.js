var FooterPosition = {
    e: $("#body-text"),
    documentWidth: $(document).width(),

    init: function () {
        if (this.documentWidth >= 1200) {
            this.centerLargeDesktop();
        }

        this.e.show();
    },

    centerLargeDesktop: function () {
        this.e.css('left', (this.documentWidth - this.e.width()) / 2);

    }
};

FooterPosition.init();