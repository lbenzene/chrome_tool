function $(id) {
    if (id.charAt(0) == '#') {
        id = id.substr(1);
    };
    return document.getElementById(id);
}

$.prototype.css = function(attr, value) {
    switch (arguments.length) {
        case 1:
            if (typeof arguments[0] == "object") {    //批量设置属性
                for (var i in attr) this.style[i] = attr[i]
            }
            else {    // 读取属性值
                return this.currentStyle ? this.currentStyle[attr] : getComputedStyle(this, null)[attr]
            }
            break;
        case 2:
            //设置属性
            this.style[attr] = value;
            break;
        default:
            return "";
    }
};

function css(obj, attr, value) {
    switch (arguments.length) {
        case 2:
            if (typeof arguments[1] == "object") {    //批量设置属性
                for (var i in attr) obj.style[i] = attr[i]
            }
            else {    // 读取属性值
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
            }
            break;
        case 3:
            //设置属性
            obj.style[attr] = value;
            break;
        default:
            return "";
    }
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls))
        obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

String.prototype.trim = function() {
   return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim = function() {
   return this.replace(/(^\s*)/g, "");
}
String.prototype.rtrim = function() {
   return this.replace(/(\s*$)/g, "");
}

function switch_color(cstr) {
    cstr = cstr.trim();
    var R, G, B;
    var match;
    if (match = cstr.match(new RegExp('^#([0-9a-fA-F]{2}){3}'))) {
        R = parseInt(match[0].substr(1, 2), 16);
        G = parseInt(match[0].substr(3, 2), 16);
        B = parseInt(match[0].substr(5, 2), 16);
        // console.log(R);
        // console.log(G);
        // console.log(B);
    } else if (true) {

    };
    if (R + B + G < 127 * 3 ) {
        $('#colour-transform-output').style.color = "#EBEBEB";
    } else {
        $('#colour-transform-output').style.color = "#141414";
    }
    $('#colour-transform-output').style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
    // $('#colour-transform-output').css('backgroundColor', "rgb(" + R + "," + G + "," + B + ")");
    var HTML = '';
    HTML += '<a tabindex="0">#' + R.toString(16) + G.toString(16) + B.toString(16) + '</a>';
    HTML += '<a tabindex="1">rgb(' + R + ', ' + G + ', ' + B + ')</a>'
    $('#colour-transform-output').innerHTML = HTML;
}

function init() {
    $('#now-dispaly').addEventListener('click', function() {
        $('#tool-list').style['display'] = "block";
    });

    $('#colour-transform-start').addEventListener('click', function() {
        switch_color($('#colour-transform-input').value);
    })
}


document.addEventListener('DOMContentLoaded', init);