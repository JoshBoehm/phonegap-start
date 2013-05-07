Ext.regApplication({
    name: 'app',
    launch: function() {
		console.log('launch');
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        if (!device || !this.launched) {return;}
		this.views.viewport = new this.views.Viewport();
        console.log('mainLaunch');
    }
});