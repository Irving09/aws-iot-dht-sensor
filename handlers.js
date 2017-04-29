module.exports = {
	onConnect: function() {
		console.log('Successfully connected');
	},
	onClose: function() {
		console.log('connection closed');
	},
	onReconnect: function() {
		console.log('reconnecting...');
	},
	onOffline: function() {
		console.log('offline');
	},
	onError: function(error) {
		console.log('error', error);
	},
	onMessage: function(topic, payload) {
		console.log('message', topic, payload.toString());
	},
};