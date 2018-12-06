var dp=jQuery;

dp(document).ready(function() {
    Grid.init();
    dp("#backtotop").backToTop();
    var videobackground = new dp.backgroundVideo(dp('.home-video'), {
        "align": "centerXY",
        "muted": "muted",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "cn_s1",
        "types": ["mp4", "ogg", "webm"]
    });

    dp(".animatez").waypoint(function (direction) {
        var effect = dp(this).attr('data-effect');
        dp(this).removeClass('animatez');
        dp(this).addClass('animated ' + effect);
    }, {offset: '70%'});

});
