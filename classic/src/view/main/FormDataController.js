Ext.define('Ext.view.main.FormDataController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formdatacontroller',
    requires:[
        'sample.view.main.Newregisteration',
        'sample.view.main.Regassign'   
    ],
    onSaveData: function () {
        var view = this.getView(),
            grid=view.down('array-grid'),
                store =grid.getStore();
        var form = view.down('reg-page');
if (form.validate()) {
            var data =form.getValues(),
    storeData =[];
    storeData.push(data);
    store.loadData(storeData, true);
}
},
resetbtn:function(button){
    button.up('form').getForm().reset();
}
});