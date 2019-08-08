'use strict';

goog.provide('Blockly.Blocks.sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['sensors_getData'] = {
  /**
   * Block for getting data from a sensor.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSORS_GETDATA,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SENSORTYPE",
          "options": [
            [Blockly.Msg.SENSORS_GETDATA_BATTERY, 'BATTERY'],
            [Blockly.Msg.SENSORS_GETDATA_CAMERA, 'CAMERA'],
            [Blockly.Msg.SENSORS_GETDATA_INFRARED, 'INFRARED']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
        ],
      "category": Blockly.Categories.SENSORS_GETDATA,
      "extensions": ["colours_sensors","output_number"]
    })
  }
};
