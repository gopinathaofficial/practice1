Ext.define('sample.view.main.Register',{
    extend:'Ext.panel.Panel',
    xtype:'sample-page',

    title:'sample page',
    border:true,
    width:500,
    // height:200,

    

    buttons:[{
        text:'YES',
        handler:'submitClick'
    },{
        text:'NO',
        handler:'submitClick'

    },{
        text:'CANCEL',
        handler:'submitClick'
    }]
})

