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
			plugin.initializePlugin($(this));
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