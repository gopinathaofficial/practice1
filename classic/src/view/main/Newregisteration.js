Ext.define('sample.view.main.Newregisteration',{
    extend:'Ext.form.Panel',
    xtype:'reg-page',
    title:'Reg page',
    border:true,
    width:500,
    bodyPadding:20,
    // bind:{
    //     title:'Editing {Details.name}'
    // },

    defaultType: 'textfield',
    items: [{
       fieldLabel: 'First Name*',
        name: 'name',
        allowBlank:false,
        blankText: 'This field cannot be empty',
        msgTarget: 'under',
        xtype:'textfield',
    minLength: 2,
    minLengthText: 'Please enter more than 2 characters',
    maxLength: 20,
    maxLengthText: 'Maximum 20 characters',
    // regex: /[a-zA-Z0-9]+/,
    allowOnlyWhitespace:false,
    // bind: '{Details.name}'

      

    }, {
         fieldLabel: 'Email*',
         name: 'email',
         vtype:'email',
        allowBlank:false,
         blankText: 'This field cannot be empty',
         msgTarget: 'under',
         vtypeText: 'Invalid email format.  Email must be of the form user@domain.com',
        //  bind: '{Details.email}'
     }, {
         fieldLabel: 'phone number*',
         name: 'phone',
         xtype: 'numberfield',
        allowBlank:false,
         blankText: 'This field cannot be empty',
         msgTarget: 'under',
         minLength: 10,
        minLengthText: 'phone number should be 10 digits',
         maxLength: 10,
      maxLengthText: 'phone number should be 10 digits',
      hideTrigger:true,
    //   bind: '{Details.phone}'
     },
    //   {
    //      fieldLabel: 'Age*',
    //      name: 'age',
    //      xtype: 'numberfield',
    //     allowBlank:false,
    //      blankText: 'This field cannot be empty',
    //      msgTarget: 'under',
    //      minValue: 18,
    //      minLengthText: 'Age should be more than 18',
    //      maxValue: 100,
    //   maxLengthText: 'Age should be more than 100'
    //  },
     {
        fieldLabel: 'Age*',
        name: 'age',
        xtype: 'datefield',
        allowBlank:false,
        blankText: 'This field cannot be empty',
        msgTarget: 'under',
        maxValue: new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),
     maxValueText: 'Age should be more than 100',
    //  bind: '{Details.age}',
     formatter: 'date("d/m/Y")'
    },{
        xtype: 'radiogroup',
        name:'gender',
        fieldLabel: 'Gender*',
        msgTarget: 'under',
        // bind: '{Details.gender}',
        allowBlank:false,
        simpleValue: true,
        columns: 3,

        items: [{
            boxLabel: 'Female',
            inputValue: 0,
        }, {
            boxLabel: 'Male',
            inputValue: 1
        }, {
            boxLabel: 'Others',
            inputValue: 2
        }]
    },],
    buttons:[{
        text:'RESET',
        // handler:'submitClick1'
        handler:'resetbtn',
        formBind:true
    },{
        text:'UPDATE',
        // handler:'submitClick1'
        handler:'updatebtn',
        formBind:true
    },{
        text:'CANCEL',
        // handler:'submitClick1'
        handler:'cancelbtn',
        formBind:true
    }],
    listeners:{
        select:function(grid, record, index, eOpts) {

            var form = Ext.ComponentQuery.query('reg-page')[0];
    console.log(form);
            form.loadRecord(record);
    
        },
    }
})