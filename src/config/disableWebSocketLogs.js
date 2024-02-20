
console.log = function() {};

WebSocket.prototype.originalConsoleLog = console.log;
WebSocket.prototype.consoleLogDisabled = true;
console.log = function() {
  if (WebSocket.prototype.consoleLogDisabled) {
    return;
  }
  WebSocket.prototype.originalConsoleLog.apply(console, arguments);
};