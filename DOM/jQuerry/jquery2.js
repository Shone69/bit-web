$(function () {

    var imageLinksList = ["https://www.w3schools.com/howto/img_fjords.jpg",
        "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg",
        "https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg",
        "https://www.w3schools.com/w3css/img_lights.jpg", "https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg",
        "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
        "https://ak.picdn.net/assets/cms/17d705f0349ed08f5387b39c7644054a59affe52-LOHP_vector_module_shutterstock_307324316.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5AmMZBwBfWxpKlmb7ArGtaDfYr3r6lyj4gcuXY9mHSPuCUg0",
        "https://static.pexels.com/photos/67843/splashing-splash-aqua-water-67843.jpeg"
    ]

    var insert = $("#insert");

    for (var i = 0; i < imageLinksList.length; i++) {
        var image = $("<img>");
        image.attr("src", imageLinksList[i]);
        var imageWidth = Math.ceil(Math.random() * 600);
        image.attr("width", imageWidth + "px");
        image.addClass("slike");
        
        image.css("margin", "50px");
        if (imageWidth > 200) {
            image.css({
                "border": "5px solid green"
            });
        }

        insert.append(image);
        // image.fadeIn(5000);
    }
    // $('img').hide(2000).delay(500).fadeIn(1500);

    var galleryTitle = $("<h1>Galerry Title</h1>");
    insert.before(galleryTitle);



    var $slike = $(".slike");
    $slike.on('click', move);

    function move () {
        $slike.animate({
            position: "relative",
            left: "100px",
            top: "100px",
        });

};
});