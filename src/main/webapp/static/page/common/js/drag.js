function drag(el) {
    var tag = document.getElementById(el);
    var clientW = document.body.clientWidth;
    var clientH = document.body.clientHeight;
    tag.onmousedown = function (e) {

        var e = e || window.event;

        var disX = tag.offsetLeft;
        var disY = tag.offsetTop;

        var x = e.pageX - disX;
        var y = e.pageY - disY;

        var width = tag.offsetWidth;
        var height = tag.offsetHeight;
        document.onmousemove = function (e) {
            var e = e || window.event;
            var left = e.pageX - x;
            var top = e.pageY - y;
            if (left < 0) {
                left = 0;
            }
            if (top < 0) {
                top = 0;
            }
            if (left >= clientW - width) {
                left = clientW - width;
            }
            if (top >= clientH - height) {
                top = clientH - height;
            }
            tag.style.left = left + "px";
            tag.style.top = top + "px";
        }
    }

    document.onmouseup = function () {
        document.onmousedown = null;
        document.onmousemove = null;
    };
}
