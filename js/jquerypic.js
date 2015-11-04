(function($) {
	var Jquerypic = function (element, options) {
		
		// Setting default settings
		var settings = $.extend({
			thumbnailsContainer: ".thumbnails",
			thumbnail: ".thumbnail",
			fullversionContainer: ".fullversion-container",
			fullVersion: ".full-version"
		}, options),
		plugin = this;
		
		// Storing settings as a property in plugin
		this.settings = settings;
		this.element = element;
		
		element.each(function(){
			// Intentionally made faulty in this branch
			// Should pass in $(this) in initializePlugin function 
			// instead of element Just want to make a point
			plugin.initializePlugin(element);
		});
		
		return this;
	};
	
	Jquerypic.prototype.initializePlugin = function (element) {
		var fullVersion = element.find(this.settings.fullVersion);
		
		element.on("click", this.settings.thumbnail, function(){
			var src = $(this).attr("src");
			fullVersion.attr("src", src);
		});
	}
	
	Jquerypic.prototype.stop = function () {
		this.element.off("click", this.settings.thumbnail);
	}
	
	$.fn.jquerypic = function (options) {
		instance = new Jquerypic(this, Jquerypic);
		return instance;
	}; 
})(jQuery)