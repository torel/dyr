
define(['jquery', 'handlebars'], function($, Handlebars) {

    function ViewManager() {}

	ViewManager.prototype = {

		constructor: ViewManager,
		
        renderView: function(resourceType, resources) {
            var source = $('#template').html();
            var template = Handlebars.compile(source);

            var context = { resources: resources.findResourcesByType(resourceType)};
            var html = template(context);

            $('#template').parent().html(html);

            $('#image-matrix td').on('click', function() {
                var id = $(this).attr('id');
                var resource = resources.findByName(id);
                resource.sound.play();
            });
        }	
	};

	return ViewManager;
});