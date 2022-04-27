Ext.define('sample.store.Sample', {
    extend: 'Ext.data.Store',

    alias: 'store.sample',
    // id: 'sampleDataStore',

    model: 'sample.model.Sample',
    pageSize:2,
    lastOptions: {params: {start: 0, limit: 3}},
    checkOnly:true,

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "5551111111" ,age:'02/23/2003',gender:0},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "5552222222" ,age:'12/26/1998',gender:1},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "5553333333" ,age:'09/27/2001',gender:2},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "5554444444" ,age:'12/30/1996',gender:0},
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "5551111111" ,age:'08/23/2001',gender:2},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "5552222222" ,age:'02/26/2000',gender:2},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "5553333333" ,age:'08/26/1999',gender:1},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "5554444444" ,age:'05/30/1997',gender:2},
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "5551111111" ,age:'03/23/1998',gender:0},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "5552222222" ,age:'12/26/1992',gender:0},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "5553333333" ,age:'08/27/2003',gender:1},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "5554444444" ,age:'02/20/1997',gender:2}
    ]},
   
    

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
