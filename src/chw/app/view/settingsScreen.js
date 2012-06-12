/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Ext.define('motechScheduleTracking.view.settingsScreen', {
    extend: 'Ext.Panel',
    config: {
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'MoTeCH mForms 0.80'
        }, {
            xtype: 'container',
            centered: true,
            width: '100%',
            padding: '30px',
            items: [{
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'middle'
                },
                padding: '30px',
                items: [{
                    xtype: 'label',
                    html: 'Settings<br>'
                }]
            }, {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'middle'
                },
                items: [{
                    xtype: 'button',
                    text: 'Connection',
                    id: 'settingsConnection',
                    width: '100%'
                }, {
                    xtype: 'button',
                    text: 'Cancel',
                    id: 'settingsCancel',
                    width: '100%',
                    ui: 'decline'
                }]
            }]
        }]
    }

})