
$(document).ready(function(){
    // 1st get text from input box and display it on page
    $("#btn-add").on("click", function(){
     item = $("#input-items").val();
    $('.ul-theList').prepend("<li class='shopList'>" + item + "</li>");
})

$(document).on('click', '.shopList', function () {
    $(this).toggleClass('strike');
})
$(document).on('dblclick','.shopList',function(){
    $(this).remove();
})
    
});