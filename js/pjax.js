function whenDOMReady() {
    // alert("1")
    // pjax加载完成（切换页面）后需要执行的函数和代码
    // var backgroundElement = document.querySelector('body'); // 将 '.your-background-element' 替换为你实际的背景图片元素选择器

    // 生成随机时间戳，用于刷新缓存
    var timestamp = new Date().getTime();

    // 更新背景图片 URL
    var randomImageUrl = 'https://www.dmoe.cc/random.php?' + timestamp;

    // 设置背景图片 URL
    let backing= 'url(' + randomImageUrl + ')';
    document.getElementById("web_bg").style.backgroundImage = backing;
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次

// whenDOMReady函数外放一些打开网站之后只需要执行一次的函数和代码，比如一些监听代码。
// 监听代码只需要执行一次即可，不需要每次加载pjax都执行，会出现一些Bug。至于为什么，我也不知道，可以自己试一下。