
$('.article-photo img').each(function () {
    var a = new Array();
    var src = $(this).attr('src');
    var des = $(this).parent().next('span').html();
    var data_size = $(this).attr('data-size');
    a.push(src);
    var html = "";
    $.each(a, function (index) {
        html += '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/' + 'ImageObject">' +
            '<a href="' + a[index] + '" ' + 'itemprop="contentUrl" data-size="' + data_size + '">' +
            '<img src="' + a[index] + '" ' + 'itemprop="thumbnail" alt="Image description" />' +
            '</a>' +
            '<figcaption itemprop="caption description">' + des + '</figcaption>' +
            '</figure>';
    });
    $('.my-gallery').append(html);
    // console.log(des);
});
$('.article-photo img').click(function (e) {
    e.preventDefault();
    var src = $(this).attr('src');
    $('.my-gallery a[href$="' + src + '"]').click();
    //
    //alert('a');
    //initPhotoSwipeFromDOM('.my-gallery');
});
