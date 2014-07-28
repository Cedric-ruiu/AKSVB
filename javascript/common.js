$(document).ready(function()
{
    var action = false;


    /* ==========================================================================
       Slideshow
       ========================================================================== */
    if($('#slideshow').length)
    {
        if($('html').hasClass('lt-ie9'))
        {
            setTimeout(function()
            {
                $('#slideshow').bxSlider({auto:true});
            }, 2000);
        }
        else
        {
            $('#slideshow').bxSlider({auto:true});
        }
    }


    /* ==========================================================================
        PLACEHOLDER SUPPORT
    ========================================================================== */
    
    // Ajoute la fonctionnalité placeholder des formulaires pour les navigateurs ne le supportant pas
    if(!Modernizr.input.placeholder)
    {
        $('input').placeholder();
    }


    /* ==========================================================================
        MENU
    ========================================================================== */

    // Ajout d'une classe sur le boutton du menu correspondant à la page courante
    if(typeof(menu_active)!='undefined')
    {
        $(menu_active).addClass('on');
    }

    $('#control-menu-mobile').on('click', function() {
        if($(this).hasClass('on'))
        {
            $('#header-menu').velocity("slideUp", { duration: 500 })
        }
        else
        {
            $('#header-menu').velocity("slideDown", { duration: 500 })
        }
        $(this).toggleClass('on');
        
        //$('#header-menu').slideToggle();
    });
    
     $('#control-lang').on('click', function() {
        $(this).toggleClass('on');
    });


    /* ==========================================================================
        ADDITIONNAL EVENT BOX & FORM
    ========================================================================== */

    // Ferme le div parent lors d'un clique sur un bouton possédant la classe 'close'
    $('.close').on('click', function()
    {
        $(this).parent().fadeOut();
    });

    // Evite qu'un formulaire soit soumis plusieurs fois et ajoute une classe 'on' sur le boutton submit
    $('form').submit(function()
    {
        if(action===false)
        {
            action = true;
            $(this).addClass('on');
        }
        else
        {
            return false;
        }
    });


    /* ==========================================================================
        GMAPS
    ========================================================================== */
    
    // Instanciation de la carte
    var map = new GMaps({
        div: '#gmaps',
        lat: 48.5680081,
        lng: 7.7551335
    });

    // Ajout d'un marqueur
    var marker = map.addMarker({
        lat: 48.566542,
        lng: 7.7551067,
        title: 'Salle de AKSVB à l\'école du Neufeld',
        infoWindow: {
            content: '<div class="info" style="width:200px;"><div class="aksvb-logo-min-r"></div><p class="font-bold">Ecole du Neufeld</p><p>1, rue de Sundgau<br>67000 Strasbourg</p><a target="_blank" href="https://www.google.fr/maps/place/Ecole+du+Neufeld/@48.5658764,7.7566517,16z/data=!4m2!3m1!1s0x0:0xabba55e97668c48">Voir le plan complet</a></div>',
            maxWidth: 250
        }
    });

    // Ouvre automatiquement le marqueur
    marker.infoWindow.open(marker.map, marker);


    /* ==========================================================================
       Smooth Scrolling Anchor
       ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').velocity(
                        'scroll', {offset: target.offset().top, duration: 1000}
                    );
                return false;
            }
        }
    });

});


