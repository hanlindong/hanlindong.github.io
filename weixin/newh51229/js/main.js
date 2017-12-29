// $('body,html').bind('touchmove', function (e) {
//     e.preventDefault()
// });
var arr_title_pic = [
    [
        "images/title_1.png",
        '572',
        '49'
    ],
    [
        "images/title_2.png",
        '440',
        '49'
    ],
    [
        "images/title_3.png",
        '342',
        '49'
    ],
    [
        "images/title_4.png",
        '596',
        '49'
    ],
    [
        "images/title_5.png",
        '436',
        '49'
    ]
];
var title_num = Math.floor(Math.random() * 5);
var title_url=arr_title_pic[title_num][0];
var title_width=arr_title_pic[title_num][1];
var title_height=arr_title_pic[title_num][2];
function preImage(url, callback, wo) {
    var img = new Image(); //创建一个Image对象，实现图片的预下载
    img.src = url;
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
        callback.call(img, wo.x, wo.y, wo.width, wo.height);
        return; // 直接返回，不用再处理onload事件
    }
    img.onload = function () { //图片下载完毕时异步调用callback函数。
        callback.call(img, wo.x, wo.y, wo.width, wo.height);//将回调函数的this替换为Image对象
    };
}

var obj = [
    {
        "animalSrc": {
            "url": "images/animal_1",
            "width": 211,
            "height": 518
        },
        "word_80": [
            [
                {
                    "url": "images/word_10.png",
                    "width": 235,
                    "height": 55
                },
                {
                    "url": "images/xxtx.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_8.png",
                    "width": 355,
                    "height": 57
                },
                {
                    "url": "images/jb.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_14.png",
                    "width": 476,
                    "height": 56
                },
                {
                    "url": "images/bxxs.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_13.png",
                    "width": 174,
                    "height": 54
                },
                {
                    "url": "images/clh.png",
                    "width": 362,
                    "height": 267
                }
            ]
        ],
        "word_90": [
            [
                {
                    "url": "images/90word_15.png",
                    "width": 112,
                    "height": 54
                },
                {
                    "url": "images/zwyy.png",
                    "width": 374,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_16.png",
                    "width": 114,
                    "height": 56
                },
                {
                    "url": "images/zwyy.png",
                    "width": 374,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_17.png",
                    "width": 112,
                    "height": 43
                },
                {
                    "url": "images/zwyy.png",
                    "width": 374,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_18.png",
                    "width": 235,
                    "height": 56
                },
                {
                    "url": "images/ycwdr.png",
                    "width": 312,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_20.png",
                    "width": 476,
                    "height": 56
                },
                {
                    "url": "images/bxxs.png",
                    "width": 311,
                    "height": 267
                }
            ]
        ]
    },
    {
        "animalSrc": {
            "url": "images/animal_2",
            "width": 274,
            "height": 575
        },
        "word_80": [
            [
                {
                    "url": "images/word_11.png",
                    "width": 116,
                    "height": 55
                },
                {
                    "url": "images/lh.png",
                    "width": 341,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_19.png",
                    "width": 235,
                    "height": 57
                },
                {
                    "url": "images/lyd.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_12.png",
                    "width": 173,
                    "height": 51
                },
                {
                    "url": "images/clh.png",
                    "width": 362,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_16.png",
                    "width": 233,
                    "height": 55
                },
                {
                    "url": "images/yxss.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_17.png",
                    "width": 112,
                    "height": 55
                },
                {
                    "url": "images/cgxct.png",
                    "width": 368,
                    "height": 267
                }
            ]
        ],
        "word_90": [
            [
                {
                    "url": "images/90word_9.png",
                    "width": 173,
                    "height": 51
                },
                {
                    "url": "images/xxtx.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_10.png",
                    "width": 174,
                    "height": 54
                },
                {
                    "url": "images/clh.png",
                    "width": 362,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_14.png",
                    "width": 175,
                    "height": 55
                },
                {
                    "url": "images/zwyy.png",
                    "width": 374,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_19.png",
                    "width": 115,
                    "height": 56
                },
                {
                    "url": "images/shyytd.png",
                    "width": 386,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_21.png",
                    "width": 233,
                    "height": 56
                },
                {
                    "url": "images/zlyg.png",
                    "width": 362,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_22.png",
                    "width": 112,
                    "height": 55
                },
                {
                    "url": "images/zlyg.png",
                    "width": 362,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_25.png",
                    "width": 115,
                    "height": 55
                },
                {
                    "url": "images/wylqdsq.png",
                    "width": 416,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_26.png",
                    "width": 171,
                    "height": 56
                },
                {
                    "url": "images/lyd.png",
                    "width": 311,
                    "height": 267
                }
            ]
        ]
    },
    {
        "animalSrc": {
            "url": "images/animal_3",
            "width": 369,
            "height": 495
        },
        "word_80": [
            [
                {
                    "url": "images/word_4.png",
                    "width": 115,
                    "height": 55
                },
                {
                    "url": "images/ssh.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_5.png",
                    "width": 116,
                    "height": 55
                },
                {
                    "url": "images/ssh.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_7.png",
                    "width": 114,
                    "height": 51
                },
                {
                    "url": "images/jdyy.png",
                    "width": 335,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_9.png",
                    "width": 116,
                    "height": 56
                },
                {
                    "url": "images/jb.png",
                    "width": 311,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_15.png",
                    "width": 296,
                    "height": 56
                },
                {
                    "url": "images/llmx.png",
                    "width": 328,
                    "height": 267
                }
            ]
        ],
        "word_90": [
            [
                {
                    "url": "images/90word_11.png",
                    "width": 116,
                    "height": 55
                },
                {
                    "url": "images/shyytd.png",
                    "width": 286,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_13.png",
                    "width": 174,
                    "height": 54
                },
                {
                    "url": "images/lnbzb.png",
                    "width": 365,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_4.png",
                    "width": 115,
                    "height": 55
                },
                {
                    "url": "images/lh.png",
                    "width": 341,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_5.png",
                    "width": 116,
                    "height": 55
                },
                {
                    "url": "images/lh.png",
                    "width": 341,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_6.png",
                    "width": 114,
                    "height": 56
                },
                {
                    "url": "images/lh.png",
                    "width": 341,
                    "height": 267
                }
            ]
        ]
    },
    {
        "animalSrc": {
            "url": "images/animal_4",
            "width": 512,
            "height": 511
        },
        "word_80": [
            [
                {
                    "url": "images/word_1.png",
                    "width": 115,
                    "height": 55
                },
                {
                    "url": "images/wynl.png",
                    "width": 368,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_2.png",
                    "width": 173,
                    "height": 57
                },
                {
                    "url": "images/qxdz.png",
                    "width": 423,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_3.png",
                    "width": 173,
                    "height": 51
                },
                {
                    "url": "images/qxdz.png",
                    "width": 423,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_6.png",
                    "width": 236,
                    "height": 55
                },
                {
                    "url": "images/qyfy.png",
                    "width": 286,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/word_18.png",
                    "width": 115,
                    "height": 55
                },
                {
                    "url": "images/cgxct.png",
                    "width": 368,
                    "height": 267
                }
            ]
        ],
        "word_90": [
            [
                {
                    "url": "images/90word_1.png",
                    "width": 115,
                    "height": 56
                },
                {
                    "url": "images/qxdz.png",
                    "width": 423,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_2.png",
                    "width": 112,
                    "height": 57
                },
                {
                    "url": "images/mymb.png",
                    "width": 363,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_3.png",
                    "width": 113,
                    "height": 57
                },
                {
                    "url": "images/mymb.png",
                    "width": 363,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_8.png",
                    "width": 233,
                    "height": 56
                },
                {
                    "url": "images/xx.png",
                    "width": 328,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_7.png",
                    "width": 116,
                    "height": 55
                },
                {
                    "url": "images/xx.png",
                    "width": 328,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_23.png",
                    "width": 112,
                    "height": 55
                },
                {
                    "url": "images/cgxct.png",
                    "width": 368,
                    "height": 267
                }
            ],
            [
                {
                    "url": "images/90word_24.png",
                    "width": 115,
                    "height": 55
                },
                {
                    "url": "images/cgxct.png",
                    "width": 368,
                    "height": 267
                }
            ]
        ]
    }
]
var animal_length = obj.length;
var animal_random = Math.floor(Math.random() * animal_length);
var animal_url = obj[animal_random].animalSrc.url;
var animal_width = obj[animal_random].animalSrc.width;
var animal_height = obj[animal_random].animalSrc.height;

var keywords_length = obj[animal_random].word_80.length;
var keywords_random = Math.floor(Math.random() * keywords_length);


window.onload = function () {
    $('.main_btn').click(function () {
        var name = $('.name').val();
        var old = $('#oldSelect').val();
        if (!name) {
            alert('请输入您的名字');
            return
        }
        if (!old) {
            alert('请选择您的段位');
            return
        }
        if (old == 80) {
            var keywords_url = obj[animal_random].word_80[keywords_random][0].url;
            var keywords_width = obj[animal_random].word_80[keywords_random][0].width;
            var keywords_height = obj[animal_random].word_80[keywords_random][0].height;

            var text_url = obj[animal_random].word_80[keywords_random][1].url;
            var text_width = obj[animal_random].word_80[keywords_random][1].width;
            var text_height = obj[animal_random].word_80[keywords_random][1].height;
        } else {
            var keywords_url = obj[animal_random].word_90[keywords_random][0].url;
            var keywords_width = obj[animal_random].word_90[keywords_random][0].width;
            var keywords_height = obj[animal_random].word_90[keywords_random][0].height;

            var text_url = obj[animal_random].word_90[keywords_random][1].url;
            var text_width = obj[animal_random].word_90[keywords_random][1].width;
            var text_height = obj[animal_random].word_90[keywords_random][1].height;
        }

        $('body').addClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
        // *************************************canvas绘制代码开始*************************************

        var canvas = document.createElement('canvas');
        var $wjb = $(canvas);
        // var canvasHeight = window.innerHeight;
        // var canvasWidth = window.innerWidth;
        var canvasHeight = window.screen.height;
        var canvasWidth = window.screen.width;
        // alert(height2+'+'+width2)
        $wjb.attr('width', canvasWidth * 2);
        $wjb.attr('height', canvasHeight * 2);
        $wjb.css('width', canvasWidth + 'px');
        $wjb.css('height', canvasHeight + 'px');
        // $wjb.css('background', '#ffd85a');
        var my_canvas = $wjb[0];
        var context = my_canvas.getContext("2d");
        var changeScale = canvasWidth / 375;
        // $('.part02')[0].appendChild(canvas);
        context.fillStyle = '#ffd85a';
        context.fillRect(0, 0, canvasWidth * 2, canvasHeight * 2);





        // bg pic 开始
        preImage('images/11.png', function (x, y, width, height) {
            context.save();
            // context.rotate(10*Math.PI/180);
            context.drawImage(this, (canvasWidth * 2 - width * changeScale) / 2, y * changeScale, width * changeScale, height * changeScale);


            //设置字体样式
            context.font = "36px Courier New";
            //设置字体填充颜色
            context.fillStyle = "#efcb55";
            //从坐标点(50,50)开始绘制文字
            context.textAlign = "center";
            // context.fillText(name + "的2018年，适合干这些事情呢", canvasWidth, (canvasHeight * 2 - 200));
            // context.fillText(name + "的2018年，适合干这些事情呢", canvasWidth, (canvasHeight*2-220));
            context.fillText(name + "的2018年，适合干这些事情呢", canvasWidth, 990*changeScale);

            context.restore();
        }, {"x": 10, "y": 250, "width": 710, "height": 789});


        // animal   开始
        preImage(animal_url + '.png', function (x, y, width, height) {
            context.save();
            // context.rotate(10*Math.PI/180);
            context.drawImage(this, x * changeScale, y * changeScale, width * changeScale, height * changeScale);


            //text   开始
            preImage(text_url, function (x, y, width, height) {
                context.save();
                // context.rotate(10*Math.PI/180);
                context.drawImage(this, x * changeScale, y * changeScale, width * changeScale, height * changeScale);
                context.restore();
            }, {"x": 80, "y": 1206 - 330 - text_height, "width": text_width, "height": text_height});
            context.restore();

            // title picture 开始
            preImage(title_url, function (x, y, width, height) {
                context.save();
                // context.rotate(10*Math.PI/180);
                context.drawImage(this, (canvasWidth * 2 - width * changeScale ) / 2, y * changeScale, width * changeScale, height * changeScale);
                context.restore();
            }, {"x": 10, "y": 180, "width": title_width, "height":title_height });


            //keywords   开始
            preImage(keywords_url, function (x, y, width, height) {
                context.save();
                // context.rotate(10*Math.PI/180);
                context.drawImage(this, x * changeScale, y * changeScale, width * changeScale, height * changeScale);
                context.restore();
            }, {"x": (750 - keywords_width) / 2, "y": 310, "width": keywords_width, "height": keywords_height});

        }, {"x": 684 - animal_width, "y": 1206 - 293 - animal_height, "width": animal_width, "height": animal_height});







        //二维码   开始
        preImage('images/10.png', function (x, y, width, height) {
            context.save();
            // context.rotate(10*Math.PI/180);
            context.drawImage(this, x * changeScale, y * changeScale, width * changeScale, height * changeScale);
            context.restore();
        }, {"x": 750 - 289 - 20, "y": 1206 - 127 - 20, "width": 289, "height": 127});
        // top pic
        preImage("images/2.png", function (x, y, width, height) {
            context.save();
            // context.rotate(10*Math.PI/180);
            context.drawImage(this, x, y, width * changeScale, height * changeScale);
            context.restore();
        }, {"x": 0, "y": 0, "width": 750, "height": 169});




        setTimeout(function () {
            var base64 = canvas.toDataURL("image/jpeg", 1.0);
            $('#base').attr('src', base64);
        }, 3000);
        // *************************************canvas绘制代码结束*************************************

        setTimeout(function () {
            $('.part01').hide();
            $('.part02').show();
            $('body').removeClass('page-is-changing');
        }, 4000);
    });
};






