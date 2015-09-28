/**
 * karma-codecov example
 */

(function ($) {
    'use strict';

    $.fn.hello = function (name) {

        this.text('Hello, ' + name + '!');
    };

    $.fn.fizzbuzz = function (count) {

        if (typeof count !== 'number') {

            throw new Error('the argument is not a number: ' + count);

        }

        if (count <= 0) {

            this.text('*NOTHING*');
            return;

        }

        var items = [];

        for (var i = 0; i < count; i++) {

        }

        this.text(items.join('<br />'));

    };

})(window.jQuery);
