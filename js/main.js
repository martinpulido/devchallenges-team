var MyTeam = {
        controller: null,
        init: function(){
            MyTeam.controller = new ScrollMagic.Controller();
            if ($('.section-team').length){
                $('.section-team').each(function(){
                    // Switch/Case to launch animation accoding to class
                    switch (true){
                        case $(this).hasClass('animate1'):
                            MyTeam.animate1($(this));
                            break;
                        case $(this).hasClass('animate2'):
                            MyTeam.animate2($(this));
                            break;
                    }
                })
            }
        },
        animate1: function(obj){
            /* 
             * Animate 1: Fade In and move cards one after one, when *container* hits at the middle height of viewport
            */
            if (obj.hasClass("animate1")) {
                var tweenCard = TweenMax.staggerFromTo(obj.find(".card-member"), 0.4, { opacity: '0', transform: 'translate(0, 40px)', ease: Power0.easeNone }, { opacity: '1', transform: 'translate(0,0)', ease: Power0.easeNone }, 0.2);
                new ScrollMagic.Scene({ triggerElement: obj[0], reverse: false, triggerHook: 1 })
                    .setTween(tweenCard)
                    //.addIndicators()
                    .addTo(MyTeam.controller);
            }
        },
        animate2: function (obj) {
            /* 
            * Animate 2: Fade In and move cards one by one, when *each card* hits at the bottom height of viewport. (When enter into viewport)
            */
            if (obj.hasClass("animate2")) {
                obj.find(".card-member").each(function(){
                    var $card = $(this);
                    var tweenCard = TweenMax.fromTo($card, 0.4, { transform: 'translate(0,40px)', opacity: '0', ease: Power0.easeNone }, { transform: 'translate(0,0)', opacity: '1', ease: Power0.easeNone }, 0.2);
                    
                    new ScrollMagic.Scene({ triggerElement: this, reverse: false, triggerHook: 1 }) // 'this' on 'triggerElement' indicates each 'card-member' element
                        .setTween(tweenCard)
                        //.addIndicators()
                        .addTo(MyTeam.controller);
                })
            }
        }
};

$(document).ready(function(){
    MyTeam.init();
})