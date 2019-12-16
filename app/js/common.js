(function() {
    function Wheel(params) {
        var defaultOp = {
            scroll: true,
            spin: 0,
            duration: 5000
        };
        var options = $.extend(defaultOp, params);
        var popup = $('.xmas20wheel'),
            wheel = $('.xmas20wheel__wheel');

        this.spin = spin;
        this.open = function() {
            popup.fadeIn(400);
            $('body').css("overflow", "hidden");
        }
        this.close = function() {
            popup.fadeOut(400, function() {
                wheel.removeClass('spin');
                $('body').css("overflow", "auto");
            });
            if (options.scroll && options.spin > 0) toForm()
        }

        ;(function() {
            $('.xmas20wheel__btn').on('click', function(event) {
                spin()
            });
        })()

        function spin() {
            if (options.spin === 0) {
                wheel.addClass('spin');
                $('.xmas20wheel__wheel_roulette').css('animation-duration', options.duration / 1000 + 's');
                options.spin = 1;
                setTimeout(function() {
                    win();
                }, options.duration)
            }
        }

        function win() {
            console.log(1)
            wheel.addClass('win');
        }

        function toForm() {
            var a = $('.js_submit');
            var b = a.closest('form');

            if ($('form#toform').length) {
                a = $('#toform .js_submit');
                b = a.closest('form#toform');
            }

            if (b.length && a.is(':visible')) {
                $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
            }
        }
    }
    window.Xmas20Wheel = Wheel
}());

$(function() {

    var xmas20wheel = new Xmas20Wheel()
    $('.b-blackFridayWheel__btn').on('click', function(event) {
        event.preventDefault();
        wheel.spin()
        setTimeout(function() {
            wheel.won()
        }, 5500)
        setTimeout(function() {
            wheel.close()
        }, 9500)
    });
    $('.b-blackFridayWheel__close').on('click', function(event) {
        event.preventDefault();
        wheel.close()
    });

    // РґР»СЏ С‚РµСЃС‚Р°

    $('.open').on('click', function(event) {
        event.preventDefault();
        wheel.open()
    });

});