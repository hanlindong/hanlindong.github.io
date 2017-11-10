window.onload = function () {
    // banner开始i
    var bannerHtml='';
    $.ajax({
        type: "get",
        dataType: "json",
        url: 'http://henrydong.com/weixin/css/resource.json',
        success: function (data) {
            json = eval(data.resource);
            for(var i=0; i<json.length; i++)
            {
                bannerHtml+='<div class="swiper-slide"><img class="banner_img" src='+json[i].image+'><p class="subtitle">'+json[i].subtitle+'</p></div>'
            }
            $('#banner').html(bannerHtml);
            $('.swiper-nav').append('<div class="swiper-pagination swiper-page"></div>');
            var swiperBanner = new Swiper('.swiper-nav', {
                pagination: {
                    el: '.swiper-page',
                    init: false
                },
                autoplay:true
            });
            swiperBanner.init();
        }
    });

    ajaxMethord(1);

    // tab开始
    var tabSwiper = new Swiper('.swiper-tab-Page',{
        on: {
            slideChangeTransitionStart: function(){
                // alert(this.activeIndex);
                var tab_index=this.activeIndex+1;
                $('.tabs li:nth-of-type('+tab_index+')').addClass('active').siblings().removeClass('active');
                ajaxMethord(tab_index);

            }
        }
    });

    $('.tabs li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        tabSwiper.slideTo(index);
        var number=index+1;
        ajaxMethord(number);

    });


};


function ajaxMethord(number){
    var titleInner='';
    $.ajax({
        type: "get",
        dataType: "json",
        url: 'http://henrydong.com/weixin/css/titleSource-'+number+'.json',
        success: function (data) {
            json = eval(data.titleSource);
            for(var i=0; i<json.length; i++)
            {
                titleInner+='<div class="titleBox"><a href='+json[i].link+'><img class="titleImg" src='+json[i].image+'><div><p class="title">'+json[i].title+'</p><p class="dec">'+json[i].subtitle+'</p></a></div></div>'
                console.log(json[i].link)
            }
            $('.swiper-title div.swiper-slide:nth-child('+number+')').html(titleInner);

        }
    });
}

