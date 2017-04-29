# aws-iot-dht-sensor
Example using AWS IoT sdk with the DHT11 sensor

# Dependencies
node-dht-sensor module
`https://github.com/momenso/node-dht-sensor`

aws-iot-device-sdk module
`https://github.com/aws/aws-iot-device-sdk-js`

# Running the application

```
npm init -f
npm install aws-iot-device-sdk -S
npm install node-dht-sensor -S
npm start
```

# Notes
This assumes that the setup for 

Credentials are generated from `https://us-west-2.console.aws.amazon.com/iotv2/home?region=us-west-2#/connectdevice/`