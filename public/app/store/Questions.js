Ext.define('Survey.store.Questions', {
    extend: 'Ext.data.Store',

    requires: [
        'Survey.model.Question'
    ],

    model: 'Survey.model.Question',

    alias: 'store.questions',

    proxy: {
        type: 'rest',
        url: 'questions',
        reader: {
            type: 'json'
        }
    }
});
