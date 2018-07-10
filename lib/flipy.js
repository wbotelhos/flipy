/*!
 * Flipy - Collapse and expand content
 *
 * The MIT License
 *
 * @author:  Washington Botelho
 * @doc:     wbotelhos.com/flipy
 * @version: 0.1.0
 *
 */

;
(function($) {
  'use strict';

  $.flipy = {
    openedClass: 'flipy__trigger--opened',
    speed:       200
  }

  $.fn.flipy = function(options) {
    var settings = $.extend({}, $.flipy, options);

    return this.each(function() {
      return (new $.flipy.Flipy(this, settings))._create();
    });
  }

  $.flipy.Flipy = (function() {
    var Flipy = function(element, options) {
      this.el      = $(element);
      this.element = element;

      this.options = $.extend({}, $.flipy, options, this.el.data());
    }

    Flipy.prototype = {
      _bind: function() {
        this.trigger.on('click.flipy', this.el, function() {
          this.content.slideToggle(this.options.speed);
          this.trigger.toggleClass(this.options.openedClass);
        }.bind(this));
      },

      _create: function() {
        this._markup();
        this._bind();

        this.el.data('flipy', this);

        return this;
      },

      _markup: function() {
        this.content = this.el.find('.flipy__content');
        this.trigger = this.el.find('.flipy__trigger');
      }
    };

    return Flipy;
  })();
})(jQuery);
