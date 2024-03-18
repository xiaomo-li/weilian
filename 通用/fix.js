// 给根节点设置 id=root 即可

$(function(){
    $('#root').css('zoom','normal')
    let scale = document.body.clientWidth / 1080;
    $('#root').css('zoom',scale)

    window.addEventListener('resize',function(){
        var timer;
        return function(){
            if(timer) clearTimeout(timer);
            timer = setTimeout(function(){
                $('#root').css('zoom','normal')
                let scale = document.body.clientWidth / 1080;
                $('#root').css('zoom',scale)
            },100)
        }
    }())

    // 如果不是锚点跳转 则可以用下面这段代码实现平滑跳转
    // window.onload = function () {
    //     const targetElement = document.getElementById('buyBox'); // 获取跳转目标节点
    //     const offsetTop = targetElement.offsetTop ;
    //     $('.buy').click(function(){
    //         window.scroll({
    //             top: offsetTop * ($('div#root').css('zoom')) - 150,
    //             behavior: 'smooth' // 使用 smooth 实现平滑滚动
    //         });
    //     })   

    //     // $('.buy').click(function(){
    //     //     $('body,html').animate({'scrollTop':scrollNum - 300},500)
    //     // })      
    // };
})