/*
 * File: app/view/PersonFormPanel.js
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

Ext.define('SenchaCrud.view.PersonFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.personformpanel',

    requires: [
        'SenchaCrud.view.PersonFormPanelViewModel',
        'SenchaCrud.view.PersonFormPanelViewController',
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer'
    ],

    config: {
        floating: 'true'
    },

    controller: 'personformpanel',
    viewModel: {
        type: 'personformpanel'
    },
    centered: true,
    maxWidth: 500,
    minWidth: 300,
    modal: true,
    bodyPadding: 8,
    title: 'Person Form',

    items: [
        {
            xtype: 'textfield',
            bind: '{record.firstName}',
            label: 'First Name',
            name: 'firstName'
        },
        {
            xtype: 'textfield',
            bind: '{record.lastName}',
            label: 'Last Name',
            name: 'lastName'
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    itemId: 'save',
                    text: 'Save',
                    listeners: {
                        tap: 'onSaveTap'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'update',
                    text: 'Update',
                    listeners: {
                        tap: 'onUpdateTap'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'cancel',
                    text: 'Cancel',
                    listeners: {
                        tap: 'onCancelTap'
                    }
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    itemId: 'delete',
                    style: 'background-color: mistyrose',
                    text: 'Delete'
                }
            ]
        }
    ],
    listeners: {
        added: 'onFormPanelAdded'
    }

});