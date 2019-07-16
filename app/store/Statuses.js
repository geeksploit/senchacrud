/*
 * File: app/store/Statuses.js
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

Ext.define('SenchaCrud.store.Statuses', {
    extend: 'Ext.data.Store',

    requires: [
        'SenchaCrud.model.Status'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Statuses',
            autoLoad: true,
            model: 'SenchaCrud.model.Status'
        }, cfg)]);
    }
});