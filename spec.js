


describe('$.fn.hello', function () {

    it('puts "Hello, [given name]!" as its text content', function () {

        var elem = $('<div />');

        elem.hello('world');

        expect(elem.text()).to.equal('Hello, world!');

    });

});

describe('$.fn.fizzbuzz', function () {});
