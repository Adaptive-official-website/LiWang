(function () {
    document.write(`<link rel="stylesheet" href="./style/header.css">`)
})();
var _header = `<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <section class="container">
            <div class="row">
                <!--导航-->
                <div class="container-fluid col-sm-12">
                    <div class="navbar-header">
                        <a type="button" class="navbar-toggle NavBtn" data-toggle="collapse"
                           data-target="#example-navbar-collapse">
                            <!--<span class="sr-only">切换导航</span>-->
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                        <a class="navbar-brand" href="#"><img src="./images/logo.png" class="Login-nav"
                                                              alt="图片加载失败"></a>
                        <a href="javascript:;" class="navbar-brand-img navbar-toggle">En</a>
                        <a href="javascript:;" class="navbar-brand-img navbar-toggle MobileSearch"><img
                                src="./images/icon_research.png"
                                alt="图片加载失败"></a>
                    </div>
                    <div class="search"><input type="text" placeholder="请输入产品型号"><img
                            src="./images/icon-fangdajing-01.svg" alt="图片加载失败"><i>En</i></div>
                    <div class="collapse navbar-collapse" id="example-navbar-collapse">
                        <ul class="nav navbar-nav navClick">
                            <li><a href="./home.html"><span>Home</span></a></li>
                            <li data-type="1" class="dropdown"><a href="./product.html" ><span>Products</span></a>
                                <div class="dropdown-menu proDetails">
                                        <div class="classify">
                                            <h3>有机颜料 <img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span><a href="./product.html?about=0">油墨用有机颜料</a></li>
                                                <li><span></span><a href="./product.html?about=1">涂料用有机颜料</a></li>
                                                <li><span></span><a href="./product.html?about=2">塑胶用有机颜料</a></li>
                                            </ul>
                                        </div>
                                        <div class="proDetailsLine"></div>
                                        <div class="classify col">
                                            <h3>荧光颜料 <img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span>水性荧光颜料</li>
                                                <li><span></span>塑胶荧光颜料</li>
                                            </ul>
                                        </div>
                                    <div class="proDetailsLine"></div>
                                        <div class="classify">
                                            <h3>水性色浆 <img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span>8系列水性色浆</li>
                                                <li><span></span>B系列水性色浆</li>
                                            </ul>
                                        </div>
                                    </div>
                            </li>
                            <li data-type="2"  class="dropdown dropdown-1">
                                <a href="./about.html" >
                                    <span>About</span>
                                </a>
                                     <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./about.html?about=0">企业简介</a></li>
                                    <li><a href="./about.html?about=1">企业荣誉</a></li>
                                    <li><a href="./about.html?about=2">绿色丽王</a></li>
                                    <li><a href="./about.html?about=3">视频中心</a></li>
                                </ul>
                            </li>
                            <li data-type="3" class="dropdown dropdown-1"><a href="./strength.html"><span>Lynwon</span> </a>
                             <ul class="dropdown-menu dropdown-menu-1 strengthNav">
                                    <li><a href="./strength.html?about=0">全面的检测中心</a></li>
                                    <li><a href="./strength.html?about=1">整洁的生产车间</a></li>
                                    <li><a href="./strength.html?about=2">优雅的企业环境</a></li>
                                    <li><a href="./strength.html?about=3">领先的污水处理</a></li>
                                    <li><a href="./strength.html?about=4">先进的检测设备</a></li>
                                </ul>
                            </li>
                            <li data-type="4"  class="dropdown dropdown-1"><a href="./news.html"><span> News</span></a>
                            <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./news.html?about=0">丽王新闻</a></li>
                                    <li><a href="./news.html?about=1">行业资讯</a></li>
                                </ul> 
                            </li>
                            <li data-type="5" class="dropdown dropdown-1"><a href="./contactUs.html"><span>Contact us</span></a>
                         
                             <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./contactUs.html?about=0">联系我们</a></li>
                                    <li><a href="./contactUs.html?about=1">在线留言</a></li>
                                    <li><a href="./contactUs.html?about=2">人才招聘</a></li>
                                </ul>               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="one"></div>
        <div class="two"></div>
        <div class="pull-down">
            <div class="close-search"><span></span><span></span></div>
            <div class="startSearch"><img src="./images/icon_research.png" alt="图片加载失败"><input type="text"placeholder="输入产品型号">
                <p>点击进行搜索</p>
            </div>
        </div>
    </nav>`;
var _mobileHeader =`<div class="mobileHeader">
    <div class="navHeader">
        <a href="javascript:;" class="logo"><img src="./images/logo.png" alt=""></a>
        <div class="navLeft">
            <span>En</span>
            <span><img src="images/icon_research.png" alt="" class="MobileSearch"></span>
            <div class="couser">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </div>
    <ul class="ulNav">
        <li><a href="./home.html">首页</a></li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-2">产品中心</a>
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
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-3">关于丽王</a>
            <ul class="collapse secondLevel" id="content-3">
                <li><a href="./about.html?about=0">企业简介</a></li>
                <li><a href="./about.html?about=1">企业荣誉</a></li>
                <li><a href="./about.html?about=2">绿色丽王</a></li>
                <li><a href="./about.html?about=3">视频中心</a></li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-two">丽王实力</a>
              <ul class="collapse secondLevel" id="content-two">
                                    <li><a href="./strength.html?about=0">全面的检测中心</a></li>
                                    <li><a href="./strength.html?about=1">整洁的生产车间</a></li>
                                    <li><a href="./strength.html?about=2">优雅的企业环境</a></li>
                                    <li><a href="./strength.html?about=3">领先的污水处理</a></li>
                                    <li><a href="./strength.html?about=4">先进的检测设备</a></li>
                                </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-one">企业动态</a>
             <ul class="collapse secondLevel" id="content-one">
                                    <li><a href="./news.html?about=0">丽王新闻</a></li>
                                    <li><a href="./news.html?about=1">行业资讯</a></li>
             </ul> 
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-1">联系我们</a>
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
</div>`


//头部发生的事件
$(function () {
    if (_aboutHt <= 1024) {
        $('.search').addClass('unShow');
        $('body').prepend(_mobileHeader);
    }
    if(_aboutHt>786){

        $('body').prepend(_header);
    }else{  //添加点击事件
        $('.MobileSearch').click(function () {
            $('.pull-down').addClass('navClickAn');
        });
        $('.close-search').click(function () {
            $('.pull-down').removeClass('navClickAn');
        });
        $('.about-container').css({
            marginBottom:'1rem'
        });
        $('.about-container-left').addClass('unShow');
    }
// 头部点击事件
    $('.navClick>li').click(function () {

        var _type = $(this).attr('data-type');
        sessionStorage.setItem("dataType", _type);
        $(this).addClass('activeH').siblings().removeClass('activeH');
    });
    var _value = sessionStorage.getItem("dataType");
    if(_value){
        $('.navClick>li[data-type='+_value+']').addClass('activeH')
    }
    $('.navbar .nav>.dropdown').hover(function () {
        $(this).find('.dropdown-menu-1').css({display:'block'});
        $('.one').css({'display':'block'});
        $(this).addClass('shade');
        var me = $(this);
        $('.one').hover(function () {
            $('.shade').find('.dropdown-menu-1').css({display:'block'})
        },function () {
            $(this).css({'display':'none'});
            $('.shade').find('.dropdown-menu-1').css({display:'none'})
            me.removeClass('shade')
        });
    },function () {
        // $('.one').css({'display':'none'})
        if($('.shade').length>1){
            $(this).removeClass('shade')
        }
        $(this).find('.dropdown-menu-1').css({display:'none'});
    });
    $('.navbar .nav>li:nth-child(2).dropdown').hover(function () {
        $('.two').css({'display':'flex'})
    },function () {
        $('.two').css({'display':'none'})
    });

    //导航头部图片显示
    $('.classify h3').hover(function () {
        $(this).find('img').css({'display':'block'})
    },function () {
        $(this).find('img').css({'display':'none'})
    })
    //手机端导航按钮
    var a = false
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