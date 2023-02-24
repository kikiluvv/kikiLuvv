// Get the canvas element and set its size
var canvas = document.getElementById('canvas'); //canvas 1
canvas.width = 16;
canvas.height = 16;

var canvas2 = document.getElementById('canvas2'); //canvas 2
canvas2.width = 32;
canvas2.height = 32;

var canvas3 = document.getElementById('canvas3'); //canvas 3
canvas3.width = 32;
canvas3.height = 32;

// Get the input elements
var input = document.getElementById('input');
var textColorPicker = document.getElementById('text-color-picker');
var backgroundColorPicker = document.getElementById('background-color-picker');
var fontSelector = document.getElementById('font-selector');
var borderRadiusSelector = document.getElementById('border-radius-selector');
var weightSelector = document.getElementById('weight-selector');
var xPosSelector = document.getElementById('x-pos-selector');
var yPosSelector = document.getElementById('y-pos-selector');
var shapeSelector = document.getElementById('shape-selector');


// Generate the favicon
function generateFavicon() {
  // Get the text from the input element
  var text = input.value;
  // Get the selected shape from the shape selector
  var shape = document.getElementById('shape-selector').value;
  // Add CSS class to HTML div if shape is roundedRect
  var div = document.getElementById('special');
  if (shape === 'rounded-rect') {
    special.style.display="flex";
  } else {
    special.style.display="none";
  }

  // Create the image data for the favicon on canvas 1
  var ctx = canvas.getContext('2d');
  ctx.font = 'bold ' + weightSelector.value / 2.1 + 'px ' + fontSelector.value; // user input font

  // Draw the selected shape for the favicon background on canvas 1
  ctx.fillStyle = backgroundColorPicker.value; // Set the background color
  switch (shape) {
    case 'circle':
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
      break;
    case 'square':
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      break;
    case 'rounded-rect':
      var borderRadius = borderRadiusSelector.value;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(borderRadius, 0);
      ctx.lineTo(canvas.width - borderRadius, 0);
      ctx.quadraticCurveTo(canvas.width, 0, canvas.width, borderRadius);
      ctx.lineTo(canvas.width, canvas.height - borderRadius);
      ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - borderRadius, canvas.height);
      ctx.lineTo(borderRadius, canvas.height);
      ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - borderRadius);
      ctx.lineTo(0, borderRadius);
      ctx.quadraticCurveTo(0, 0, borderRadius, 0);
      break;
  }
  ctx.fill(); // fill the shape with the background color

  // Set the font color and draw the text
  ctx.fillStyle = textColorPicker.value; // user input font color
  ctx.fillText(text, xPosSelector.value / 2, yPosSelector.value / 2);


  // Create the image data for the favicon on canvas 2
  var ctx2 = canvas2.getContext('2d');
  ctx2.font = 'bold ' + weightSelector.value + 'px ' + fontSelector.value; // user input font

  // Draw the selected shape for the favicon background
  ctx2.fillStyle = backgroundColorPicker.value; // Set the background color
  switch (shape) {
    case 'circle':
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      ctx2.beginPath();
      ctx2.arc(canvas2.width / 2, canvas2.height / 2, canvas2.width / 2, 0, 2 * Math.PI);
      break;
    case 'square':
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
      break;
    case 'rounded-rect':
      var borderRadius = borderRadiusSelector.value;
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      ctx2.beginPath();
      ctx2.moveTo(borderRadius, 0);
      ctx2.lineTo(canvas2.width - borderRadius, 0);
      ctx2.quadraticCurveTo(canvas2.width, 0, canvas2.width, borderRadius);
      ctx2.lineTo(canvas2.width, canvas2.height - borderRadius);
      ctx2.quadraticCurveTo(canvas2.width, canvas2.height, canvas2.width - borderRadius, canvas2.height);
      ctx2.lineTo(borderRadius, canvas2.height);
      ctx2.quadraticCurveTo(0, canvas2.height, 0, canvas2.height - borderRadius);
      ctx2.lineTo(0, borderRadius);
      ctx2.quadraticCurveTo(0, 0, borderRadius, 0);
      break;
  }
  ctx2.fill();
  // Set the font color and draw the text
  ctx2.fillStyle = textColorPicker.value; // user input font color
  ctx2.fillText(text, xPosSelector.value, yPosSelector.value);

  // Create the image data for the favicon on canvas 3
  var ctx3 = canvas3.getContext('2d');
  ctx3.font = 'bold ' + weightSelector.value + 'px ' + fontSelector.value; // user input font

  // Draw the selected shape for the favicon background
  ctx3.fillStyle = backgroundColorPicker.value; // Set the background color
  switch (shape) {
    case 'circle':
      // Clear the canvas before drawing new text
      ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
      ctx3.beginPath();
      ctx3.arc(canvas3.width / 2, canvas3.height / 2, canvas3.width / 2, 0, 2 * Math.PI);
      break;
    case 'square':
      ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
      ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
      break;
    case 'rounded-rect':
      var borderRadius = borderRadiusSelector.value;
      ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
      ctx3.beginPath();
      ctx3.moveTo(borderRadius, 0);
      ctx3.lineTo(canvas3.width - borderRadius, 0);
      ctx3.quadraticCurveTo(canvas3.width, 0, canvas3.width, borderRadius);
      ctx3.lineTo(canvas3.width, canvas3.height - borderRadius);
      ctx3.quadraticCurveTo(canvas3.width, canvas3.height, canvas3.width - borderRadius, canvas3.height);
      ctx3.lineTo(borderRadius, canvas3.height);
      ctx3.quadraticCurveTo(0, canvas3.height, 0, canvas3.height - borderRadius);
      ctx3.lineTo(0, borderRadius);
      ctx3.quadraticCurveTo(0, 0, borderRadius, 0);
      break;
  }
  ctx3.fill();
  // Set the font color and draw the text
  ctx3.fillStyle = textColorPicker.value; // user input font color
  ctx3.fillText(text, xPosSelector.value, yPosSelector.value);
}


// Text position reset button
const textResetButton = document.getElementById("text-reset-button");
// Add an event listener to the button
textResetButton.addEventListener("click", function() {
  // Reset the values of xPosSelector and yPosSelector to their defaults
  xPosSelector.value = 0;
  yPosSelector.value = 30;
});



function downloadFavicon() {
  // Create an array to hold the canvas data URLs
  var dataURLs = [canvas.toDataURL('image/png'), canvas2.toDataURL('image/png'), canvas3.toDataURL('image/png')];

  // Create a ZIP archive containing the canvas images
  var zip = new JSZip();
  for (var i = 0; i < dataURLs.length; i++) {
    var filename = 'favicon-' + (i + 1);
    // Add PNG image to zip
    zip.file(filename + '.png', dataURLs[i].split(',')[1], { base64: true });
    // Convert canvas to ICO format
    var canvasImg = new Image();
    canvasImg.src = dataURLs[i];
    var canvasICO = canvasToICO(canvasImg);
    // Add ICO image to zip
    zip.file(filename + '.ico', canvasICO, { binary: true });
  }

  // Prompt the user to download the ZIP archive
  zip.generateAsync({ type: 'blob' }).then(function (content) {
    var downloadLink = document.createElement('a');
    downloadLink.download = 'favicons.zip';
    downloadLink.href = URL.createObjectURL(content);
    downloadLink.click();
  });
}

function canvasToICO(canvasImg) {
  var canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(canvasImg, 0, 0, 32, 32);
  var imageData = ctx.getImageData(0, 0, 32, 32);
  return convertToICO(imageData);
}

function convertToICO(imageData) {
  var buffer = new ArrayBuffer(22 + imageData.data.length);
  var dv = new DataView(buffer);
  dv.setUint16(0, 0, true); // Reserved, must be 0
  dv.setUint16(2, 1, true); // Image type, 1 = ICO
  dv.setUint16(4, 1, true); // Number of images in ICO file, 1
  dv.setUint8(6, 32); // Width of image
  dv.setUint8(7, 32); // Height of image
  dv.setUint8(8, 0); // Number of colors in the color palette
  dv.setUint8(9, 0); // Reserved, must be 0
  dv.setUint16(10, 0, true); // Color planes, must be 0
  dv.setUint16(12, 32, true); // Bits per pixel
  dv.setUint32(14, imageData.data.length, true); // Size of bitmap data
  dv.setUint32(18, 22, true); // Offset of bitmap data
  for (var i = 0; i < imageData.data.length; i += 4) {
    var b = imageData.data[i];
    var g = imageData.data[i + 1];
    var r = imageData.data[i + 2];
    var a = imageData.data[i + 3];
    dv.setUint32(22 + i, (a << 24) | (r << 16) | (g << 8) | b, true);
  }
  return new Uint8Array(buffer);
}


// Add event listeners for live preview of changes
input.addEventListener('input', generateFavicon);
shapeSelector.addEventListener('input', generateFavicon);
textColorPicker.addEventListener('input', generateFavicon);
backgroundColorPicker.addEventListener('input', generateFavicon);
fontSelector.addEventListener('input', generateFavicon);
weightSelector.addEventListener('input', generateFavicon);
borderRadiusSelector.addEventListener('input', generateFavicon);
xPosSelector.addEventListener('input', generateFavicon);
yPosSelector.addEventListener('input', generateFavicon);
