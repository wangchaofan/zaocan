/**
 * Created by wangchaofan on 15/7/15.
 */
require(['jquery','swiper'], function ($, Swiper) {
    $(document).ready(function () {
        $('#tohome').addClass('current');

        if($('.swiper-slide').length > 1) {
            new Swiper('.swiper-container', {
                pagination: '.pagination',
                loop: true,
                grabCursor: true,
                paginationClickable: true,
                autoplay: 3000,
                hashnav: true,
                longSwipesRatio: 0.2
            });
        }

        //选择城市
        $('.btn-city-select').on('click', function () {
            var selectDom = $(this).parent(),
                icon = $(this).find('.icon');
            if(selectDom.hasClass('selected')) {
                selectDom.removeClass('selected');
                icon.removeClass('icon-arrow-up').addClass('icon-arrow-down');
                $('.body-shadow').hide();
                //$('#districts,.show-more, .not-find').css('visibility', 'visible');
            } else {
                $(this).parent().addClass('selected');
                $('.body-shadow').show();
                //$('#districts,.show-more, .not-find').css('visibility', 'hidden');
                icon.removeClass('icon-arrow-down').addClass('icon-arrow-up');
            }
        });
    });
});