
function isStreamNode(el) {
    var name = el[0].tagName
    var w = el.width();
    var h = el.height();
    //console.log(name);
    if (name == "IFRAME" && w > 500 && w < 800 && h > 300 && h < 600) {
        console.log(el.width());
        return 1;
    }
    return 0;
}

function streamonly() {
    // First of all, find the dom element with video embed
    var stream_node = null;
    $('body *').each(function() {
        if (stream_node) {
            return;
        }
        if (isStreamNode($(this))) {
            stream_node = this;
        }
    });

    if (!stream_node) {
        console.log("stream node not found. Exit");
        return;
    }

    /*
     * For each element:
     *  - Dunno if element has @stream_node in descendants,
     *    else hide element
     */
    $('body *').each(function() {
        if (this == stream_node) {
            return;
        }

        //console.log("examine "+this);
        var hide_me = true;
        $(this).find('*').each(function() {
            if (this == stream_node) {
                hide_me = false;
            }
        });

        if (hide_me) {
            $(this).hide();
        }
    });
}

streamonly();


