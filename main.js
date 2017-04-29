/* Dependencies */
const AWSIoT = require('aws-iot-device-sdk');
const DHTsensor = require('node-dht-sensor');

/* Instantiate device module */
const credentials = require('./credentials');
const DEVICE = AWSIoT.device(credentials);

/* Register event handlers */
const Handlers = require('./handlers.js');

DEVICE.on('connect', Handlers.onConnect);
DEVICE.on('close', Handlers.onClose);
DEVICE.on('reconnect', Handlers.onReconnect);
DEVICE.on('offline', Handlers.onOffline);
DEVICE.on('error', Handlers.onError);
DEVICE.on('message', Handlers.onMessage);

/* Register AWS Topic subscriptions */
DEVICE.subscribe('MyPresentationTopic');

/* DHT Sensor application logic */
function test() {
   let SENSOR_TYPE = 11;
   let GPIO_PIN = 17;

   DHTsensor.read(SENSOR_TYPE, GPIO_PIN, (err, tmp, humidity) => {
      let sensorData = JSON.stringify({
         err: err, 
         tmp: tmp,
         humidity: humidity
      });
      console.log(sensorData);

      DEVICE.publish('MyPresentationTopic', sensorData);
   });
}

/* Invoke sensor reading */
setInterval(test, 3000);