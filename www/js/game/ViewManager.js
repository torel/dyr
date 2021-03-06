
define(['jquery', 'jquerymobile', 'handlebars', 'game/Resources', 'game/Sound', 'game/Animation'], function($, $m, Handlebars, Resources, Sound Animation) {

    function ViewManager() {
        this.resources = new Resources();
    }

    ViewManager.prototype = {

        constructor: ViewManager,

        renderView: function(resourceType) {
            var templateElement = $('#template');
            var source = templateElement.html();
            var template = Handlebars.compile(source);

            var context = { resources: this.resources.findResourcesByType(resourceType)};
            var html = template(context);

            templateElement.parent().html(html);

            this.setupView();
        },

        setupView: function() {
            this.setupOnImageClick();
            this.scaleView();
        },

        setupOnImageClick: function() {
            var that = this;
            $('#image-matrix td').on('click', function() {
                var id = $(this).attr('id');
                var resource = that.resources.findByName(id);
                console.log('Image clicked: ' + resource.name);

                var animation = new Animation();
                animation.test($(this).find('img'));
            });
        },

        playSound: function(resource) {
            if (navigator.userAgent.match(/Android/i)) {
                this.playPhoneGapMediaSound(resource);
            }
            else if (navigator.userAgent.match(/Chrome|Mozilla|AppleWebKit|Safari/i)) {
                this.playHtmlSound(resource);
            }
        },

                var sound = new Sound();
                sound.play(resource);
            });
        },

        /**
         * Scales view based on window width / height
         */
        scaleView: function() {

            var ratio = 1.5; // width/height ratio of image
            var totalBorderWidth = 4 * 10;

            var viewPort = {
                width: $(window).width(),
                height: $(window).height()
            };

            console.log(viewPort);

            var matrixHeight = 0;
            var matrixWidth = 0;

            if ((viewPort.width / viewPort.height) >= ratio) { // Matrix is wider than ratio -> height is the deciding factor
                var matrixHeight = viewPort.height - totalBorderWidth;
                var matrixWidth = (matrixHeight * ratio);
            }
            else { // Matrix is higher than ratio -> width is the deciding factor
                var matrixWidth = (viewPort.width - totalBorderWidth);
                var matrixHeight = (matrixWidth / ratio);
            }

            var imageWidth = matrixWidth / 3;
            var imageHeight = matrixHeight / 3;

            console.log('Matrix width: ' + matrixWidth);
            console.log('Matrix width: ' + matrixHeight);

            $('.photo').width(imageWidth);
            $('.photo').height(imageHeight);
        }
    };

    return ViewManager;
});