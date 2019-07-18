/*
 * File: app/view/PersonFormPanelViewController.js
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

Ext.define('SenchaCrud.view.PersonFormPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personformpanel',

    onSaveTap: function(button, e, eOpts) {
        var view = this.getView(),
            data = view.getValues();

        Ext.Ajax.request({
            url: 'http://localhost:8080/api/persons',
            method: 'POST',
            jsonData: data,
            success: function(response, opts) {
                console.log('success');
                var json = Ext.JSON.decode(response.responseText),
                    record = Ext.create('SenchaCrud.model.Person', json);
                Ext.getStore('People').add(record);
            },
            failure: function(response, opts) {
                console.log('failure');
            }
        });

        view.destroy();

    },

    onUpdateTap: function(button, e, eOpts) {
        var view = this.getView(),
            record = view.getRecord();
        delete record.data.id;

        Ext.Ajax.request({
            url: record.data._links.self.href,
            method: 'PUT',
            jsonData: record.data,
            success: function(response, opts) {
                console.log('success');
                record.commit();
            },
            failure: function(response, opts) {
                console.log('failure');
                record.reject();
            }
        });

        view.destroy();
    },

    onCancelTap: function(button, e, eOpts) {
        var view = this.getView(),
            record = view.getRecord();
        view.destroy();
        if (record) {
            record.reject();
        }
    },

    onDeleteTap: function(button, e, eOpts) {
        var view = this.getView(),
            record = view.getRecord();
        delete record.data.id;

        Ext.Ajax.request({
            url: record.data._links.self.href,
            method: 'DELETE',
            jsonData: record.data,
            success: function(response, opts) {
                console.log('success');
                Ext.getStore('People').remove(record);
            },
            failure: function(response, opts) {
                console.log('failure');
            }
        });

        view.destroy();
    },

    onFormPanelAdded: function(component, container, index, eOpts) {
        if (this.getView().getRecord()) {
            component.down('#save').hide();
        } else {
            component.down('#delete').hide();
            component.down('#update').hide();
        }
    }

});