$(document).ready(function()
{
    if(typeof(menu_active)!='undefined') {
        $(menu_active).addClass("active");
    }

    $('.close').on('click', function()
    {
        $(this).parent().fadeOut();
    });

});
