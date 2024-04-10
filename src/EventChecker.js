// eventCheckerWorker.js
// This will run the check every minute (as an example)
const CHECK_INTERVAL = 60000; // in milliseconds

self.addEventListener('message', (e) => {
  // Start the interval only if the correct message is received
  if (e.data === 'start') {
    setInterval(() => {
      // Notify the main thread that it's time to check for events
      self.postMessage({ action: 'checkEvents' });
    }, CHECK_INTERVAL);
  }
});
