// search for elements with tag {tagname}
// that has the attribute in {hasattr}
// and test if {hasattr} contains the value in {checkattr}
// if true add new attribute in {newattr}
// and assign it the value in {newvalue}
var setAttr = function(tagname, hasattr, checkattr, newattr, newvalue) {
    for (var i = 0,
            elements = document.getElementsByTagName(tagname),
            testattr = new RegExp(checkattr),
            current; i < elements.length; i++) {
        current = elements[i];
        if (testattr.test(current.getAttribute(hasattr))) {
            current.setAttribute(newattr, newvalue);
        }
    }
};

var appendTag = function(tagname, hasattr, checkattr, newNode, customClass, customID) {
    var testattr = new RegExp(checkattr),
        el = document.createElement(newNode);
    for (var i = 0,
            elements = document.getElementsByTagName(tagname),
            current; i < elements.length; i++) {
        current = elements[i];
        if (testattr.test(current.getAttribute(hasattr))) {
            current.setAttribute("id", customID);
            current.setAttribute("oninput", "onInputFunc('" + customID + "', '" + customClass + "')");
            current.parentNode.insertBefore(el, current.lastChild);
            el.setAttribute("id", customID + '_' + customClass);
            el.setAttribute("class", customClass);
        }
    }
};

var onInputFunc = function(myid, myclass) {
    var current = document.getElementById(myid),
        getmaxlength = current.getAttribute('maxlength'),
        currentlength = getmaxlength - current.value.length,
        el = document.getElementById(myid + '_' + myclass);
    el.innerHTML = "(" + currentlength + " characters remaining)";
};

var makeid = function() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 12; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};

(function() {
    setAttr('input', 'name', 'TEXTBOX___1', 'maxlength', 20);
    setAttr('input', 'name', 'TEXTBOX___2', 'maxlength', 20);
    setAttr('input', 'name', 'TEXTBOX___3', 'maxlength', 20);
    setAttr('input', 'name', 'TEXTBOX___4', 'maxlength', 40);
    setAttr('input', 'name', 'TEXTBOX___5', 'maxlength', 40);

    appendTag('input', 'name', 'TEXTBOX___1', 'span', 'lengthTest', makeid());
    appendTag('input', 'name', 'TEXTBOX___2', 'span', 'lengthTest', makeid());
    appendTag('input', 'name', 'TEXTBOX___3', 'span', 'lengthTest', makeid());
    appendTag('input', 'name', 'TEXTBOX___4', 'span', 'lengthTest', makeid());
    appendTag('input', 'name', 'TEXTBOX___5', 'span', 'lengthTest', makeid());
})();
