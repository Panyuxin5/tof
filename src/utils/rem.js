function setRootFontSize() {
  let rem, rootWidth;
  let rootHtml = document.documentElement;
  //限制展现页面的最小宽度
  rootWidth = rootHtml.clientWidth < 1366 ? 1366 : rootHtml.clientWidth;
  // 19.2 = 设计图尺寸宽 / 100（ 设计图的rem = 100 ）
  rem = rootWidth / 19.2;
  // 动态写入样式
  rootHtml.style.fontSize = `${rem}px`;
}
setRootFontSize();
window.onresize = function () {
  setRootFontSize()
}
