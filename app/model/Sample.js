Ext.define('sample.model.Sample', {
    extend: 'sample.model.Base',

    fields: [
        'name', 'email', 'phone','age','gender'
    ] , 
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});