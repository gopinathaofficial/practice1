/**
 * This view is an example list of people.
 */
Ext.define('sample.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'sample.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone Number', dataIndex: 'phone', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
         

    ],

    listeners: {
        select: 'onItemSelected'
    }
});
