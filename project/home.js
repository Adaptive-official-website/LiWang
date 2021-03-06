$(function () {
    // 初始化轮播图
    $(document).ready(function () {
        $('#circleContent').carousel({interval: 2000});//每隔5秒自动轮播
    });
    //鼠标进入进行显示,鼠标离开则消失
    var _paging = $('.circleContent');
    $('#circleContent').hover(function () {
        _paging.removeClass('unShow')
    }, function () {
        _paging.addClass('unShow')
    });
    // // 头部点击事件
    $('.navClick>li').click(function () {
        var _type = $(this).attr('data-type');
        sessionStorage.setItem("dataType", _type);
        $(this).addClass('activeH').siblings().removeClass('activeH')
    });
    var _value = sessionStorage.getItem("dataType");
    if (_value) {
        $('.navClick>li[data-type=' + _value + ']').addClass('activeH')
    }
    //铲平中心

    var _productCenterMobile = `<div class=" proMobCen">产品中心</div>
                        <div class="materialsMob">
                        
                            <img src="./images/btn_-FluorescentPigments.png" alt="图片加载失败">
                       
                            <img src="./images/btn_ColorPaste.png" alt="图片加载失败">
                     
                            <a href="./product.html?about=0"><img src="./images/btn_OrganicPigments.png" alt="图片加载失败"></a>
                        </div>`;

    var journalism = ` <div class="col-md-6 col-xs-12">
                    <img src="./images/images-02.jpg" alt="图片加载失败" class="img-responsive">
                </div>
                    <div class="journalism-content">
                    <div class="col-md-6 col-xs-12">
                        <div class="row">
                            <div class="col-xs-6 col-xs-offset-4 col-sm-6 col-sm-offset-3">
                             <img src="./images/logo-icon.png" alt="图片加载失败">
                            &nbsp;<span class="title">新闻资讯</span>
                        </div>
                        </div>
                        <div class="row">
                            <ul class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 journalismMobile HomeNews">
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                    <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                     <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                     <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                     <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
    // 当小于768的时候，进行只轮播一个
    var _example = `  <div class="row">
                    <div class="col-md-2 col-sm-6 col-xs-10 col-md-offset-5 col-sm-offset-3 col-xs-offset-1 dreamSlogan">
                        <img src="./images/title_honor.png" alt="图片加载失败">
                    </div>
                </div>
<div id="example" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <ul class="row item active">
                            <li class="col-xs-12">
                                <img src="images/1.png" srcset="images/1.png 1x,images/1.png 2x" class="img-responsive" style="width: 80%;height: 3rem;">
                            </li>
                        </ul>
                        <ul class="row item">
                            <li class="col-xs-12">
                                <img src="images/1.png" srcset="images/1.png 1x,images/1.png 2x" class="img-responsive" style="width: 80%;height: 3rem;">
                            </li>
                        </ul>
                    </div>
                   <a class=" left" href="#example" data-slide="prev"><img src="./images/jiantou-rongyu.png" alt="图片加载失败"
                                                                            class="footerLeftMob"></a>
                    <a class=" right" href="#example" data-slide="next"><img src="./images/jiantou-rongyu.png" alt="图片加载失败"
                                                                             class="footerRightMob"></a>
                </div>`;

    var _mobileHeader = `<div class="mobileHeader">
    <div class="navHeader">
        <a href="javascript:;" class="logo"><img src="./images/logo.png" alt=""></a>
        <div class="navLeft">
            <span>En</span>
            <span><img src="images/icon_research.png"  class="MobileSearch"></span>
            <div class="couser">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </div>
    <ul class="ulNav">
        <li><a href="javascript:;">首页</a></li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-2">产品中心<i>+</i></a>
            <ul class="collapse secondLevel" id="content-2">
                <li><a href="javascript:;" data-toggle="collapse" data-target="#content-4">有机颜料</a>
                    <ul class="collapse secondLevel" id="content-4">
                        <li><a href="./product.html?about=0">油墨用有机颜料</a></li>
                        <li><a href="./product.html?about=1">涂料用有机颜料</a></li>
                        <li><a href="./product.html?about=2">塑胶用有机颜料</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;"  data-toggle="collapse" data-target="#content-5">荧光颜料</a>
                    <ul class="collapse secondLevel" id="content-5">
                        <li><a href="./about.html?about=0">水性荧光颜料</a></li>
                        <li><a href="./about.html?about=1">塑胶荧光颜料</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;" data-toggle="collapse" data-target="#content-5">水性色浆</a>
                    <ul class="collapse secondLevel" id="content-6">
                        <li><a href="./about.html?about=0">8系列水性色浆</a></li>
                        <li><a href="./about.html?about=1">B系列水性色浆</a></li>
                           <li><a href="./about.html?about=1">F系列水性色浆</a></li>
                        <li><a href="./about.html?about=1">Q系列水性色浆</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-3">关于丽王<i>+</i></a>
            <ul class="collapse secondLevel" id="content-3">
                <li><a href="./about.html?about=0">企业简介</a></li>
                <li><a href="./about.html?about=1">企业荣誉</a></li>
                <li><a href="./about.html?about=2">绿色丽王</a></li>
                <li><a href="./about.html?about=3">视频中心</a></li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-two">丽王实力<i>+</i></a>
        <ul class="collapse secondLevel" id="content-two">
                                    <li><a href="./strength.html?about=1">全面的检测中心</a></li>
                                    <li><a href="./strength.html?about=2">整洁的生产车间</a></li>
                                    <li><a href="./strength.html?about=3">优雅的企业环境</a></li>
                                    <li><a href="./strength.html?about=4">领先的污水处理</a></li>
                                    <li><a href="./strength.html?about=5">先进的检测设备</a></li>
                                </ul>
                                </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-one">企业动态<i>+</i></a>
               <ul class="collapse secondLevel" id="content-one">
                                    <li><a href="./news.html?about=0">丽王新闻</a></li>
                                    <li><a href="./news.html?about=1">行业资讯</a></li>
             </ul> 
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-1">联系我们<i>+</i></a>
            <ul class="collapse secondLevel" id="content-1">
                <li><a href="./contactUs.html?about=0">联系我们</a></li>
                <li><a href="./contactUs.html?about=1">在线留言</a></li>
                <li><a href="./contactUs.html?about=2">人才招聘</a></li>
            </ul></li>
    </ul>
     <div class="pull-down">
            <div class="close-search"><span></span><span></span></div>
            <div class="startSearch"><img src="./images/icon_research.png" alt="图片加载失败"><input type="text"placeholder="输入产品型号">
                <p>点击进行搜索</p>
            </div>
        </div>
</div>`;
    // 手机端的屏幕
    //根据屏幕宽度进行适配

    if (_homeHt > 768) {
        // $('.advantage-1').css({
        //     margin: '0 1.8rem'
        // });
        $('.Pro_one').css({marginLeft: '35'})
    } else {
        // $('.dreamsColor').css({marginTop: 20})
        $('.HomeProduct>div>div:nth-child(1)').addClass('productCenter');
        //图片交换位置
        $('.journalism').html(journalism);
        $('.bottomLun').html(_example);
        $('.milestone-left').css({
            width: '100%'
        })
        _news.updatePanel();
        $('.lineFont-1').addClass('overtop')
        // $('.growUp').html(_growUp);
        $('.productCenterMobile').html(_productCenterMobile);


    }
    if (_homeHt <= 1024) {

        $('.search').addClass('unShow');
        $('.fixedTop').html(_mobileHeader)
        var _c = true
        $('.ulNav > li >a').click(function () {
            _c = !_c;
            if(_c){
                $(this).find('i').html('+')
            }else{
                $(this).find('i').html('-')

            }
        })
        //添加点击事件
        $('.MobileSearch').click(function () {
            $('.pull-down').addClass('navClickAn');
        });
        $('.close-search').click(function () {
            $('.pull-down').removeClass('navClickAn');
        })
    }
    if (_homeHt == 1024) {
        $('.lineFont').css({
            lineHeight: 32 + 'px'
        });
        $('.yearTime').css({
            lineHeight: 32 + 'px'
        });
        $('.line-p').css({
            top: -15 + 'px'
        })
    }
    if (_homeHt >= 1024) {
        $('.ground').addClass('reason')
    }
    //荣誉轮播
    var carousels = $('.carousel');
    carousels.each(function () {
        var $obj = $(this);
        var $inner = $obj.find('.carousel-inner');

        var id = 'uuid' + new Date().getTime();
        $obj.addClass(id);

        if ($obj.data('shift') === 1) {
            var items = $obj.find('.item > [class*="col-"]'),
                visibleCnt = $obj.find('.item:first [class*="col-"]').length,
                wrapper = "";

            // 内置CSS样式
            var rule_base = '.carousel.' + id + ' .carousel-inner > .item',
                styles = $('<style></style>'),
                rules = [];
            rules[0] = rule_base + '.next {left: ' + (100 / visibleCnt) + '%; transform: none;}';
            rules[1] = rule_base + '.active {left: 0;}';
            rules[2] = rule_base + '.active.left {left: -' + (100 / visibleCnt) + '%; transform: none;}';
            rules[3] = rule_base + '.next.left {left: 0;}';
            rules[4] = rule_base + '.active.right {left: ' + (100 / visibleCnt) + '%; transform: none;}';
            rules[5] = rule_base + '.prev.right {left: 0;}';
            rules[6] = rule_base + '.prev {left: -' + (100 / visibleCnt) + '%; transform: none;}';
            for (var i = 0; i < rules.length; i++) {
                styles.append(rules[i]);
            }
            $obj.prepend(styles);

            // 重构旋转木马的HTML结构
            for (var i = 0; i < $(items).length; i++) {
                var $item = $(items[i]);
                var parent = $item.parent();
                if (parent.hasClass('item')) {
                    if (!wrapper.length) {
                        wrapper = parent.clone().removeClass('active').html('');
                    }
                    $item.unwrap();
                }
                var itemGroup = [$item];
                for (var x = 1; x < visibleCnt; x++) {
                    var a = i + x;
                    var next = $(items[a]);
                    if (!next.length) {
                        next = $(items[(a - $(items).length)]);
                    }
                    itemGroup[x] = next.clone();
                }
                var newSet = wrapper.clone().html(itemGroup);
                if (i == 0) {
                    newSet.addClass('active');
                }
                newSet.appendTo($inner);
            }
        }
    });

    $(window).scroll(function () {
        var _heigth = $('#circleContent').height();
        $('#circleContent').animate({marginTop: -_heigth}, 1000);

        setTimeout(function () {
            $('.navbar').addClass('navbar-fixed-top');
            if (_homeHt > 768) {
                $('.dreamsColor').css({
                    marginTop: 143 + 'px'
                })
            }
        }, 1000);
    })
    //头部导航鼠标进入导航事件
    $('.navbar .nav>.dropdown-1').hover(function () {
        // $('.one').css({'display': 'block'})
        $(this).find('.dropdown-menu-1').css({display: 'block'});
        $('.one').css({'display': 'block'});
        $(this).addClass('shade');
        var me = $(this);
        $('.one').hover(function () {
            $('.shade').find('.dropdown-menu-1').css({display: 'block'})
        }, function () {
            $(this).css({'display': 'none'});
            $('.shade').find('.dropdown-menu-1').css({display: 'none'})
            me.removeClass('shade')
        })
    }, function () {
        if ($('.shade').length > 1) {
            $(this).removeClass('shade')
        }
        $(this).find('.dropdown-menu-1').css({display: 'none'});
    });
    $('.navbar .nav>li:nth-child(2).dropdown').hover(function () {
        $('.two').css({'display': 'flex'})
    }, function () {
        $('.two').css({'display': 'none'})
    })
    $('.homeTop').hover(function () {
        $('.one').css({display:'none'})
    })
    //导航头部图片显示
    $('.classify h3').hover(function () {
        $(this).find('img').css({'display': 'block'})
    }, function () {
        $(this).find('img').css({'display': 'none'})
    })
    // 手机端的头部
    var a = false;
    $('.couser').click(function () {
        a = !a;
        if (a) {
            $('.couser>.bar:nth-child(2)').css({opacity: 0});
            $('.couser>.bar:nth-child(1)').addClass('deg');
            $('.couser>.bar:nth-child(3)').addClass('deg1');
            $('.ulNav').addClass('dianji')
        } else {
            $('.couser>.bar:nth-child(2)').css({opacity: 1});
            $('.couser>.bar:nth-child(1)').removeClass('deg');
            $('.couser>.bar:nth-child(3)').removeClass('deg1');
            $('.ulNav').removeClass('dianji')
        }

    })
});
var _news = {
    updatePanel: function () {
        var me = this
        $.get(`http://test.tron-m.com/lynwon-api/news/list.do?page=1&rows=4&category=zixun`, function (res) {
            me.createHtml(res.result.content)
        })
    },
    createHtml: function (v) {
        var _html = '';
        v.map((v, i) => {
            _html += `   <li>
                                    <h3>${v.title}</h3>
                                    <div class="newsContent">
                                        ${v.context}
                                    </div>
                                    <a href=news.html?id=${v.id} target="_blank">了解更多>></a>
                                </li>`
        })
        $('.HomeNews').html(_html)
    }
};
$(function () {
    _news.updatePanel();
});
//搜索导航
$(function () {
    $('.search img').click(function () {
        var _val = $('.search input').val();
        window.location.href = './product.html?val='+_val
    })
});