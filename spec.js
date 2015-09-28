


describe('$.fn.hello', function () {

    it('puts "Hello, [given name]!" as its text content', function () {

        var elem = $('<div />');

        elem.hello('world');

        expect(elem.text()).to.equal('Hello, world!');

    });

});

describe('$.fn.fizzbuzz', function () {

    it('fills its content with fizz buzz counting under the given number', function () {

        var elem = $('<div />');

        elem.fizzbuzz(5);

        expect(elem.html()).to.equal('1<br>2<br>Fizz<br>4<br>Buzz');

        elem.fizzbuzz(15);

        expect(elem.html()).to.equal('1<br>2<br>Fizz<br>4<br>Buzz<br>Fizz<br>7<br>8<br>Fizz<br>Buzz<br>11<br>Fizz<br>13<br>14<br>FizzBuzz');

    });

});
