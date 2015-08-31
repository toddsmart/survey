Ext.define('Survey.model.Question', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'question', type: 'auto' },
        { name: 'createdAt', type: 'date' },
        { name: 'updatedAt', type: 'date' }

    ]
});
