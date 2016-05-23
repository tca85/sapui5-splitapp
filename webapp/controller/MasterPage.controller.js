sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";

	return Controller.extend("tca85.com.github.controller.MasterPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tca85.com.github.view.MasterPage
		 */
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();

			oModel.loadData("json/specs.json");

			sap.ui.getCore().setModel(oModel, 'data');
		},

		/**
		 * Called when the user click on item. This function get the item selected
		 * and display the information at Details view
		 * 
		 */
		itemSelected: function() {
			var app = sap.ui.getCore().byId("appId");
			var list = sap.ui.getCore().byId("listId");

			var sItem = list.getSelectedItem();
			var sPath = sItem.oBindingContexts.data.sPath;

			var itemJSON = sap.ui.getCore().getModel('data').getProperty(sPath);

			// display at Details view
			var oModel = new sap.ui.model.json.JSONModel(itemJSON);

			sap.ui.getCore().setModel(oModel, 'item');

			app.toDetail('detailsId', 'show'); // show, fade, slide
		}
	});

});