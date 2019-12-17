(function() {
    function Wheel(params) {
        var defaultOp = {
            scroll: true,
            spin: 0,
            duration: 5000,
            timer: 1500
        };
        var options = $.extend(defaultOp, params);
        var popup = $('.xmas20wheel'),
            container = $('.xmas20wheel__container'),
            wheel = $('.xmas20wheel__wheel'),
            roulette = $('.xmas20wheel__wheel_roulette'),
            spinBtn = $('.xmas20wheel__btn'),
            closeBtn = $('.xmas20wheel__close');

        $(function() {
            $('head').append($('<style />').html('.fixedBody {overflow: hidden}'));
            setTimeout(function() {
                open();
            }, options.timer);
            spinBtn.on('click', spin);
            closeBtn.on('click', close);
        })

        function open() {
            $('body').addClass('fixedBody');
            popup.fadeIn(400, function() {
                container.addClass('show').css('transition-duration', '.4s')
            });
        }

        function close() {
            container.removeClass('show').css('transition-duration', '.4s')
            setTimeout(function() {
                popup.fadeOut(400, function() {
                    wheel.removeClass('spin');
                    $('body').removeClass('fixedBody');
                });
                if (options.scroll && options.spin > 0) toForm()
            }, 100)
        }

        function spin() {
            if (options.spin === 0) {
                options.spin = 1;
                roulette.css('animation-duration', options.duration / 1000 + 's');
                wheel.addClass('spin');
                setTimeout(function() { win() }, options.duration)
            }
        }

        function win() {
            wheel.addClass('win');
            setTimeout(function() { close() }, 1200)
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
});