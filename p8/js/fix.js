window.onload = function () {
	document.body.style.zoom = "normal"; //避免zoom尺寸叠加
	let scale = document.body.clientWidth / 1080;
	document.body.style.zoom = scale;
	judgeClientForMobile();
};
(function () {
	var throttle = function (type, name, obj) {
		obj = obj || window;
		var running = false;
		var func = function () {
			if (running) {
				return;
			}
			running = true;
			requestAnimationFrame(function () {
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	};

	/* init - you can init any event */
	throttle("resize", "optimizedResize");
})();
window.addEventListener("optimizedResize", function () {
	document.body.style.zoom = "normal";
	let scale = document.body.clientWidth / 1080;
	document.body.style.zoom = scale;
	judgeClientForMobile();
});

/**
 * 判断客户端类型
 * true:移动端  false  PC端
 * @export
 * @return {*}
 */
function judgeClientForMobile() {
	let client = false;
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		//判断iPhone|iPad|iPod|iOS
		client = true;
	} else {
		client = false;
	}
	// alert(client);
}
