window.onload = function () {
    var swiper = new Swiper('.swiper-container-menu', {
        direction: 'vertical',
        slidesPerView: 14,
        spaceBetween: 0,
        freeMode: true,
    });
    $('document').bind('touchmove', function (e) {
        e.preventDefault();
    });
    var Html = '';
    $.ajax({
        type: "get",
        dataType: "json",
        url: './schollInfo.json',
        success: function (data) {
            menu_json = eval(data.menu);

            for (var i = 0; i < menu_json.length; i++) {
                Html += '<div class="swiper-slide">' + menu_json[i].school + '</div>';
            }
            $('#menu').html(Html);
            $(".swiper-container-menu .swiper-slide:first-of-type").addClass('active');

            swiper.update();
            ajaxMethord(menu_json,0);

            $('#menu').delegate('.swiper-slide', 'click', function () {
                $('#content').html('');
                var index=$(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                ajaxMethord(menu_json,index);
            });
        }
    });
    $('#content').delegate('.topic', 'click', function () {
        $(this).next('.info').slideToggle();
    });
};
function ajaxMethord(menu_json,index){
    var picTop='';
    for(var p=0;p<menu_json[index].city[0].imgPlace.length;p++){
        picTop+='<figure><a href='+menu_json[index].city[0].imgPlace[p][0]+' data-size='+menu_json[index].city[0].imgPlace[p][1]+'><div class="overHide"><img src='+menu_json[index].city[0].imgPlace[p][0]+' alt="Image"></div></a></figure>';
    }
    var content = `<div class="top">
        <p>尚德机构 <br> ${menu_json[index].city[0].mall} <br> <span> 教育学校·成人教育</span></p>
        <img src="images/logo.png" alt="logo" class="logo">
    </div>
    <div  class="info">
        <p class="place">
            <i class="iconfont icon-dingwei"></i> <span>${menu_json[index].city[0].place}</span>
        </p>
        <p class="phone">
            <i class="iconfont icon-shouji"></i> <span>${menu_json[index].city[0].time}</span>
        </p>
        <p class="photo">
            <i class="iconfont icon-dingdan"></i> <span>门店照片</span>
        </p>
        <div class="my-gallery">   
          ${picTop}
         </div>
        
    </div>`;
    for (var j = 1; j < menu_json[index].city.length; j++) {
        var imgBox='';

        for(var q=0;q<menu_json[index].city[j].imgPlace.length;q++){
            imgBox+='<figure><a href='+menu_json[index].city[j].imgPlace[q][0]+' data-size='+menu_json[index].city[j].imgPlace[q][1]+'><div class="overHide"><img src='+menu_json[index].city[j].imgPlace[q][0]+' alt="Image"></div></a></figure>';
        };
        console.log(imgBox);
        content += ` <div class="topic">${menu_json[index].city[j].mall}</div><div class="info"><p class="place"><i class="iconfont icon-dingwei"></i> <span>${menu_json[index].city[j].place}</span></p><p class="phone"><i class="iconfont icon-shouji"></i> <span>${menu_json[index].city[j].time}</span></p><p class="photo"><i class="iconfont icon-dingdan"></i> <span>门店照片</span></p><div class="my-gallery">${imgBox}</div></div>`
    }
    content+=`<div class="fix_qb xiaoneng" onclick="interactive.openNtkf('0','尚德机构')">
    <p>立即咨询分校老师</p>
</div>`;
    $('#content').append(content);
    initPhotoSwipeFromDOM('.my-gallery');
}
var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();
                return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
            }
        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[ hashData.gid - 1 ], true, true);
    }
};
// execute above function




