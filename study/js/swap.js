/**
 * Created by mark on 16/12/15.
 */
/////////
//页面滑动 //
/////////

/**
 * [Swipe description]
 * @param {[type]} container [页面容器节点]
 * @param {[type]} options   [参数]
 */
function Swipe(container) {
    //获取第一个子节点
    var element = container.find(":first");

    //滑动对象
    var swipe = {};

    //li页面数量
    var slides = element.find("li");

    //获取容器尺寸
    var width = container.width();
    var height = container.height();

    //设置li页面总宽度
    element.css({
        width: (slides.length * width) + 'px',
        height: height + 'px'
    });

    //设置每一个页面li的宽度
    $.each(slides, function(index) {
        var slide = slides.eq(index); //获取到每一个li元素
        slide.css({
            width: width + 'px',
            height: height + 'px'
        });
        console.log("slides???")
        console.log("w"+width);


    });

    //监控完成与移动
    swipe.scrollTo = function(x, speed) {
        console.log("x "+x);
        //执行动画移动
        // css操作
        element.css({
            'transition-timing-function' : 'linear',
            'transition-duration'        : speed + 'ms',
            // 'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
            'transform'                  : 'translateX(-' + x+ 'px)'

    });
        console.log("swipe???")
        return this;
    };

    return swipe;
}