importScripts('./jsQR.js');

onmessage = function(e) {
    const imageData = e.data;
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });

    postMessage(code);
}