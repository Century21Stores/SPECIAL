var car = {
	gaType:"Fiat", 
	pos:"500", 
	urlIMG:"white"
	textLink:"SHOP NOW"
	urlLINK: "https://www.c21stores.com/categories/home-seasonal-settings"
};


// HOME BGA 2BLE SEASONAL SETTINGS
function doubleHomeBGA() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 29;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMTAvMjcvMTQvMjkvNDQvNTQ1LzAxXzExV2VlazFfQkdBX1NlYXNvbmFsX1NldHRpbmcuanBnIl1d/01_11Week1_BGA_Seasonal_Setting.jpg?sha=4c2e6e38376d0a56";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/home-seasonal-settings";


    $('.product-grid li:nth-of-type('+ realPos +')').after(
        '<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
        '<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
        '<div class="product-grid-content-block__image"></div>'+
        '<div class="content-block-content content-block-content--center content-block-content--bottom">'+
        '<div class="content-block-content__container content-block-content__container--center">'+
        '<div class="content-block-content__message content-block-content__message--dark">'+
        '<p class="content-block-content__action content-block-content__action--button"><a name="BGA_Small_Spaces" class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
//      '<p class="content-block-content__action content-block-content__action--dark-text"><a target="_blank" class="text" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);
}



// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
var FixHeights;
var realPos = pos-1;
window.onresize = function(e) {
    clearTimeout(FixHeights);
    FixHeights = setTimeout(function() {
    // console.log('yay it works!');
    AdClassAll_Single(realPos, gaType);
    }, 100);
};

<script>
$(window).load(function() {
    var jm_bc2 = $('.breadcrumbs__node-group span:nth-of-type(2) a');
    var jm_bc3 = $('.breadcrumbs__node-group span:nth-of-type(3)');
    var jm_cat2 = jm_bc2.html();
    var jm_cat3 = jm_bc3.html();

	console.log('breadcrum2 :');
	console.log(jm_bc2);
	console.log('breadcrum3 :');
	console.log(jm_bc3);
	console.log('category2 : ' + jm_cat2);
	console.log('category3 : ' + jm_cat3);
});




 // BROWSE GRID AD CONSTRUCTOR 
function build_BGA(gaType, pos, urlIMG) {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 29;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMTAvMjcvMTQvMjkvNDQvNTQ1LzAxXzExV2VlazFfQkdBX1NlYXNvbmFsX1NldHRpbmcuanBnIl1d/01_11Week1_BGA_Seasonal_Setting.jpg?sha=4c2e6e38376d0a56";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/home-seasonal-settings";


    $('.product-grid li:nth-of-type('+ realPos +')').after(
        '<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
        '<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
        '<div class="product-grid-content-block__image"></div>'+
        '<div class="content-block-content content-block-content--center content-block-content--bottom">'+
        '<div class="content-block-content__container content-block-content__container--center">'+
        '<div class="content-block-content__message content-block-content__message--dark">'+
        '<p class="content-block-content__action content-block-content__action--button"><a name="BGA_Small_Spaces" class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
//      '<p class="content-block-content__action content-block-content__action--dark-text"><a target="_blank" class="text" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);
}
</script>