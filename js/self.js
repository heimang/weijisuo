$(function () {
    //导航底边红色
    //左边
    $('#nav .navbar-nav').eq(0).find('a').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().children().removeClass('active');
    });
    //右边
    $('#nav .navbar-nav').eq(1).find('a').on('mouseenter',function () {
        $(this).addClass('active');
        $('#nav .navbar-nav').eq(0).find('a').removeClass('active');
    }).on('mouseleave',function () {
        $(this).removeClass('active');
    });
    //轮播图大小图切换 思想 大小图地址保存到标签自定义属性里
    $(window).on('resize', function () {
        $('#slide .carousel-inner .item').each(function (index, e) {
            var largeImage = $(e).data('large-image');
            var smallImage = $(e).data('small-image');
            if (window.innerWidth > 768) {
                $(e).html('<a href="#" style="background: url('+ largeImage +') no-repeat center" class="large-image"></a>');
            } else {
                $(e).html('<a href="#"><img src='+ smallImage + ' alt="" class="small-image"></a>');
            }
        })
    }).trigger('resize')//思想 触发一次
    // 提示框
    $('[data-toggle="tooltip"]').tooltip();

});