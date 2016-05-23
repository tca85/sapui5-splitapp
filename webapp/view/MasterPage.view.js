sap.ui.jsview("tca85.com.github.view.MasterPage", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf tca85.com.github.view.MasterPage
	 */
	getControllerName: function() {
		return "tca85.com.github.controller.MasterPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf tca85.com.github.view.MasterPage
	 */
	createContent: function(oController) {
		var oList = new sap.m.List({
			id: "listId",
			mode: sap.m.ListMode.SingleSelect,
			select: function(){
				oController.itemSelected();
			}
		});
		
		var oItemTemplate = new sap.m.StandardListItem({
			id: "sList",
			title: "{data>name}",
			description: "{data>price}"
		});
		
		// access root node
		oList.bindAggregation("items", "data>/", oItemTemplate);
		
		return new sap.m.Page({
			title: "Products",
			content: [ oList ]
		});
	}

});