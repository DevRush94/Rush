// MIT License
// Copyright(c) 2019 DevRush94
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the "Software"), to deal
//  in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
// copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
function DeviceTrigger() {
 var DeviceWidth = window.innerWidth;
 document.body.classList.remove("xhd", "hd", "xl", "lg", "md", "sm", "xs", "big", "small")
 var device;
 if (DeviceWidth >= 1920) {
  device = document.body.className += ' xhd' + ' big';
 }
 else if (DeviceWidth >= 1600) {
  device = document.body.className += ' hd' + ' big';
 }
 else if (DeviceWidth >= 1366) {
  device = document.body.className += ' xl' + ' big';
 }
 else if (DeviceWidth >= 1024) {
  device = document.body.className += ' lg' + ' big';
 }
 else if (DeviceWidth >= 768) {
  device = document.body.className += ' md' + ' small';
 }
 else if (DeviceWidth >= 460) {
  device = document.body.className += ' sm' + ' small';
 }
 else {
  device = document.body.className += ' xs' + ' small';
 }
}
window.addEventListener("resize", DeviceTrigger);
window.addEventListener("load", DeviceTrigger);