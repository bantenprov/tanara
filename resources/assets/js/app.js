import 'bootstrap';

(function ($) {
  'use strict';

  $(function () {

    //== Initialize Bootstrap tooltip with `data-toggle="tooltip"`.

    $('[data-toggle="tooltip"]').tooltip();

    //== Initialize Bootstrap popover with `data-toggle="popover"`.

    $('[data-toggle="popover"]').popover();

  });

}(jQuery));
