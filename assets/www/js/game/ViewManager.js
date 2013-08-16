
define(['jquery', 'handlebars', 'game/Resources'], function($, Handlebars, Resources) {

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

            var that = this;
            $('#image-matrix td').on('click', function() {
                var id = $(this).attr('id');
                var resource = that.resources.findByName(id);
                resource.sound.play();
            });
        }
    };

    return ViewManager;
});