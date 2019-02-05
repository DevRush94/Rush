function DeviceTrigger() {
 document.getElementById("res").innerHTML = window.innerWidth;
 var DeviceWidth = window.innerWidth;
 var device;
 if (DeviceWidth >= 1920) {
  device = document.body.className = 'xhd';
 }
 else if (DeviceWidth >= 1600) {
  device = document.body.className = 'hd';
 }
 else if (DeviceWidth >= 1366) {
  device = document.body.className = 'xl';
 }
 else if (DeviceWidth >= 1024) {
  device = document.body.className = 'lg';
 }
 else if (DeviceWidth >= 768) {
  device = document.body.className = 'md';
 }
 else if (DeviceWidth >= 460) {
  device = document.body.className = 'sm';
 }
 else {
  device = document.body.className = 'xs';
 }
 document.getElementById("dev").innerHTML = device;

}
window.addEventListener("resize", DeviceTrigger);
window.addEventListener("load", DeviceTrigger);