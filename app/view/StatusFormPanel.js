/*
 * File: app/view/StatusFormPanel.js
 *
 * This file was generated by Sencha Architect version 4.2.5.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SenchaCrud.view.StatusFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.statusformpanel',

    requires: [
        'SenchaCrud.view.StatusFormPanelViewModel',
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer'
    ],

    config: {
        floating: 'true'
    },

    viewModel: {
        type: 'statusformpanel'
    },
    centered: true,
    modal: true,
    bodyPadding: 8,
    title: 'Status Form',

    items: [
        {
            xtype: 'textfield',
            bind: '{record.name}',
            label: 'Name'
        },
        {
            xtype: 'textfield',
            bind: '{record.description}',
            label: 'Description'
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: 'Save'
                },
                {
                    xtype: 'button',
                    text: 'Cancel'
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Delete'
                }
            ]
        }
    ]

});