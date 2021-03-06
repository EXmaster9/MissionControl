var util                      = require('util');
var castv2Cli                 = require('castv2-client');
var RequestResponseController = castv2Cli.RequestResponseController;

function MediaReceiverController(client, sourceId, destinationId) {
  RequestResponseController.call(this, client, sourceId, destinationId, 'urn:x-cast:com.barkley.moonshot.atmosphere');
  this.once('close', onclose);
  var self = this;
  function onclose() {
    self.stop();
  }

  this.on('message', function(message){
    if(message.type == 'MEDIA-STATUS') self.emit('media-status', message);
    if(message.type == 'VISIBILITY') self.emit('visibility-status', message);
  });
}

util.inherits(MediaReceiverController, RequestResponseController);


// videoId (optional) : the video id to load
// host (optional)    : youtube or vimeo
// action  (required) : 'play' || 'pause' || 'next' || 'prev'
MediaReceiverController.prototype.control = function(opts){
  this.request(opts);
};


module.exports = MediaReceiverController;
