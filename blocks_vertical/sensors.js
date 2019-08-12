'use strict';
/**
 * @author LASTiMP
 */
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
          "type": "input_value",
          "name": "NUM"
        },
        {
          "type": "field_dropdown",
          "name": "SENSORTYPE",
          "options": [
            [Blockly.Msg.SENSORS_GETDATA_BATTERY, 'Battery'],
            [Blockly.Msg.SENSORS_GETDATA_CAMERA, 'Camera'],
            [Blockly.Msg.SENSORS_GETDATA_INFRARED, 'Infrared'],
            [Blockly.Msg.SENSORS_GETDATA_ULTRASONIC, 'Ultrasonic'],        // 超声波传感器
            [Blockly.Msg.SENSORS_GETDATA_ENCODER, 'Encoder'],              // 编码器
            [Blockly.Msg.SENSORS_GETDATA_PHOTORESISTANCE, 'Photoresistance'],// 光敏电阻
            [Blockly.Msg.SENSORS_GETDATA_TEMPERATURE, 'Temperature'],      // 温度传感器
            [Blockly.Msg.SENSORS_GETDATA_HUMIDITY, 'Humidity'],            // 湿度传感器
            [Blockly.Msg.SENSORS_GETDATA_AIRPRESSURE, 'Air Pressure'],      // 气压传感器
            [Blockly.Msg.SENSORS_GETDATA_ANGULARVELOCITY, 'Angular Velocity'],// 角速度传感器
            [Blockly.Msg.SENSORS_GETDATA_ACCELERATION, 'Acceleration'],      // 加速度传感器
            [Blockly.Msg.SENSORS_GETDATA_GEOMAGNETISM, 'Geomagnetism'],      // 地磁传感器
            [Blockly.Msg.SENSORS_GETDATA_CARBONDIOXIDE, 'Carbon Dioxide'],   // 二氧化碳传感器
            [Blockly.Msg.SENSORS_GETDATA_VIBRATION, 'Vibration'],            //震动传感器
            [Blockly.Msg.SENSORS_GETDATA_INCLINATION, 'Inclination'],        //倾斜传感器
          ]
        }
        ],
      "category": Blockly.Categories.SENSORS_GETDATA,
      "extensions": ["colours_sensors","output_number"]
    })
  }
};

Blockly.Blocks['sensors_transferData'] = {
  /**
   * Block to transfer data to a sensor.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSORS_TRANSTERDATATO,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        },
        {
          "type": "field_dropdown",
          "name": "SENSORTYPE",
          "options": [
            [Blockly.Msg.SENSORS_TRANSTERDATATO_WHEEL, 'Wheel'],
            [Blockly.Msg.SENSORS_TRANSTERDATATO_LED, 'led'],
            [Blockly.Msg.SENSORS_TRANSTERDATATO_DIGI, 'digi'],
            [Blockly.Msg.SENSORS_TRANSTERDATATO_DIGI_ZXM, 'zxm digi']
  ]
        }
      ],
      "category": Blockly.Categories.SENSORS_GETDATA,
      "extensions": ["colours_sensors","shape_statement"]
    })
  }
};
