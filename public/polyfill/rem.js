const viewportWidth = 375;
// 基准大小
const baseSize = 16;
// 设置 rem 函数
function setRem() {
    const scale = document.documentElement.clientWidth / viewportWidth;
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
};

// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () { setRem() }