Ext.define('sample.model.Base', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'sample.model'
    },
    fields: [
        'name', 'email', 'phone','age','gender'
    ], 
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
