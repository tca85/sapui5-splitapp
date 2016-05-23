sap.ui.jsview("tca85.com.github.view.Intro", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View
	 */
	getControllerName: function() {
		return "tca85.com.github.controller.Intro";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			title: "Intro",
			content: [
				new sap.ui.commons.TextView({
					text: "Please select a product",
					design: sap.ui.commons.TextViewDesign.H5
				})
			]
		});
	}

});