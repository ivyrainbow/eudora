$(function () {
    // 滑動至錨點位置
    $(".menu a,.icon_welcome").click(function () {
        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    // 滑動至卷軸0的位置
    $(".gotop").click(function () {

        $("html,body").animate({ scrollTop: 0 }, 1000);

    });

    //淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".gotop").stop().fadeTo("fast", .8);
        } else {
            $(".gotop").stop().fadeOut("fast");
        }
    });

    // smoove
    $('.smoove').smoove({

        offset: '40%',
        moveX: '-100px',
        moveY: '0'
    });

});