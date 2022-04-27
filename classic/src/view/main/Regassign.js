Ext.define('sample.view.main.Regassign',{
    extend:'Ext.grid.Panel',
    xtype:'array-grid',
    title:'Data',
    bbar:{
      xtype:'pagingtoolbar',
      displayInfo:true
    },
    requires: [
        'sample.store.Sample'
    ],
     store: {
        type: 'sample'
    }, 
    // bind: {
    //     selection: '{Details}'
    // },
     columns: [{
        text: 'First Name',
        width: 100,
        flex:1,
        dataIndex: 'name'
    }, {
        text: 'Email',
        width: 100,
        flex:1,
        dataIndex: 'email'
    }, {
        text: 'phone number',
        width: 100,
        flex:1,
        dataIndex: 'phone'
    }, {
        text: 'Age',
        width: 100,
        flex:1,
        dataIndex: 'age'
    },{
        text: 'Gender',
        width: 100,
        flex:1,
        dataIndex: 'gender',
        formatter: 'pick("Female","Male","Others")'
    }],
    // selModel: {
    //     selType: 'checkboxmodel'
    // },
    // buttons:[{
    //     text:'YES',
    //     handler:'submitClick'
    // },{
    //     text:'NO',
    //     handler:'submitClick'

    // },{
    //     text:'CANCEL',
    //     handler:'submitClick'
    // }]

})