function hello() {
    var city = $.sliderLabel.text;
    var dialog = Ti.UI.createAlertDialog({
        message: 'You are now in '+city+'!',
        ok: 'Okay',
        title: 'Where am I?'
    });
    dialog.show();
    dialog.addEventListener('click', function (e) {
        $.helloButton.hide();
        $.helloButton.title = "Say wut?!";

        setTimeout(function showLabel() {
            $.helloButton.show();
        }, 2000);
    });
}

function updateLabel(e){
    if (e.value < 33) {
        $.sliderLabel.text = 'Nieuw-Vennep';
    } else if (e.value < 66) {
        $.sliderLabel.text = 'Amsterdam';
    } else {
        $.sliderLabel.text = 'Den Haag';
    }
}