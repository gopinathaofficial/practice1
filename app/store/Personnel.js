Ext.define('sample.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'sample.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" ,age:'23'},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" ,age:'26'},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" ,age:'27'},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" ,age:''}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
