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

        for (var i = 1; i <= count; i++) {

            if (i % 15 === 0) {
                items.push('FizzBuzz');
            } else if (i % 5 === 0) {
                items.push('Buzz');
            } else if (i % 3 === 0) {
                items.push('Fizz');
            } else {
                items.push(i);
            }
        }

        this.html(items.join('<br>'));

    };

})(window.jQuery);
