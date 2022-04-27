/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('sample.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    buttonClick: function (btn) {
        console.log('hello ' + btn.text + ' world')
    },
    // submitClick: function (btn1) {
    //     var gettingText = btn1.getText()
    //       console.log(gettingText);
    //       if(gettingText==='CANCEL'){
    //           btn1.setText(btn1.text+ ' is clicked already')
    //       } else{
    //              btn1.setText('CANCEL')
    //       }
    // }, submitClick1: function (btn2) {
    //     var gettingText = btn2.getText()
    //       console.log(gettingText);
    //       if(gettingText==='YES'){
    //           btn2.setText(btn2.text+ ' is clicked already')
    //       } else{
    //              btn2.setText('YES')
    //       }
    // }, submitClick2: function (btn3) {
    //     var gettingText = btn3.getText()
    //       console.log(gettingText);
    //       if(gettingText==='NO'){
    //           btn3.setText(btn3.text+ ' is clicked already')
    //       } else{
    //              btn3.setText('NO')
    //       }
    // }, 
    submitClick: function (btn1) {
        // debugger;
        const gettingText = btn1.getText()
        let result = gettingText.includes("is clicked already")
        // (result)?(newStr = gettingText.replace('is clicked already', ''),  btn1.setText(newStr)):(btn1.setText(btn1.text + ' is clicked already'))
        
        var op = result ? gettingText.replace('is clicked already', ''): btn1.text + ' is clicked already';
        btn1.setText(op);
        },
        mytextfield:function(btn){
        //     var value1 = Ext.ComponentQuery.query('textfield[name=firstName]')[0].getValue();
        // console.log(value1);
        // var value2 = this.up('window').down('textfield[name=firstName]').getValue();
        // console.log(value2);
       var formData= btn.up('form').getValues();
       console.log(formData);
        },
        submitClick1: function () {
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
        }, 
        cancelbtn:function (btn){
            btn.up('reg-page').reset();
            var parentGrid=btn.up('concat'),
            grid=parentGrid.down('array-grid'),
            selectionModal=grid.getSelectionModel();
            selectionModal.deselectAll()
         },
        updatebtn:function(button,grid){
           var form=button.up('concat').down('reg-page');
           record=form.getRecord();
           console.log("Record",record);
           values=form.getValues();
           console.log('values',values);
           record.set(values);

           var store=Ext.getStore('sample');
           store.sync();
           button.up('form').getForm().reset();
           button.up('concat').down('array-grid').getSelectionModel().deselectAll();
           Ext.Msg.alert('Sucess', 'Updated Successfully',Ext.emptyfn);
           console.log('Store:',store);
           


        },
        onGridSelect : function(grid, record, index, eOpts) {

            var form = Ext.ComponentQuery.query('reg-page')[0];
    console.log(form);
            form.loadRecord(record);
    
        },


    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
        
    }
   
});
