/**
 * This view is an example list of people.
 */
Ext.define('Survey.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'Survey.store.Questions'
    ],

    title: 'Questions',

    store: {
        type: 'questions'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id', width: 100 },
        { text: 'Question', dataIndex: 'question', flex: 1 },
        { text: 'Created At', dataIndex: 'createdAt', width: 150 },
        { text: 'Updated At', dataIndex: 'updatedAt', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected',
        initialize: 'onInitialize'
    }
});
