function Controller() {
    function hello() {
        var city = $.sliderLabel.text;
        var dialog = Ti.UI.createAlertDialog({
            message: "You are now in " + city + "!",
            ok: "Okay",
            title: "Where am I?"
        });
        dialog.show();
        dialog.addEventListener("click", function() {
            $.helloButton.hide();
            $.helloButton.title = "Say wut?!";
            setTimeout(function() {
                $.helloButton.show();
            }, 2e3);
        });
    }
    function updateLabel(e) {
        $.sliderLabel.text = 33 > e.value ? "Nieuw-Vennep" : 66 > e.value ? "Amsterdam" : "Den Haag";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "amsterdam";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.amsterdam = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "amsterdam"
    });
    $.__views.amsterdam && $.addTopLevelView($.__views.amsterdam);
    $.__views.slider = Ti.UI.createSlider({
        top: 50,
        width: "100%",
        id: "slider",
        min: "0",
        max: "100",
        value: "50"
    });
    $.__views.amsterdam.add($.__views.slider);
    updateLabel ? $.__views.slider.addEventListener("change", updateLabel) : __defers["$.__views.slider!change!updateLabel"] = true;
    $.__views.sliderLabel = Ti.UI.createLabel({
        top: "100",
        id: "sliderLabel"
    });
    $.__views.amsterdam.add($.__views.sliderLabel);
    $.__views.helloButton = Ti.UI.createButton({
        top: "150",
        id: "helloButton",
        title: "Say hello!"
    });
    $.__views.amsterdam.add($.__views.helloButton);
    hello ? $.__views.helloButton.addEventListener("click", hello) : __defers["$.__views.helloButton!click!hello"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.slider!change!updateLabel"] && $.__views.slider.addEventListener("change", updateLabel);
    __defers["$.__views.helloButton!click!hello"] && $.__views.helloButton.addEventListener("click", hello);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;