/**
 * This view is an example list of people.
 */
 Ext.define('sample.view.main.Sample', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist1',

    requires: [
        'sample.store.Sample'
    ],

    title: 'Sample Data',

    store: {
        type: 'Sample'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone Number', dataIndex: 'phone', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
        {text:'Gender',dataIndex:'gender',flex:1}
         

    ],
    id:'testgrid',
    selModel:{
        injectCheckbox: 'first',
        checkOnly:true,
        model: 'SIMPLE',
        type: 'checkboxmodel'},
    

    listeners: {
        select: 'onItemSelected'
    }
});
