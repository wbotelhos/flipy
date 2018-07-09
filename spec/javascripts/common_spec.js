describe('common', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('is chainable', function() {
    // given
    var self = $('.flipy');

    // when
    var ref = self.flipy();

    // then
    expect(ref).toBe(self);
  });

  it ('has the right default options', function() {
    // given
    var options = $.flipy

    // when

    // then
    expect(options.openedClass).toEqual('flipy__trigger--opened');
    expect(options.speed).toEqual(200);
  });

  it ('receives the bind indicator', function() {
    // given
    var self = $('.flipy');

    // when
    self.flipy();

    // then
    expect(self.data('flipy')).toBeTruthy();
  });
});
