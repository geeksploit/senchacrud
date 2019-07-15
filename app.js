/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.2.5.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.7.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.7.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'Status'
    ],
    stores: [
        'Statuses'
    ],
    views: [
        'BoardGamesAdmin'
    ],
    name: 'SenchaCrud',

    launch: function() {
        Ext.create('SenchaCrud.view.BoardGamesAdmin', {fullscreen: true});
    }

});
