'use strict';

/**
 * @ngdoc function
 * @name gameTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gameTestApp
 */
angular.module('gameTestApp')
  .service('gameBoard', function () {
    var grid = [];

  });

  .service('keyboardManager', function ($document) {
    var keyMap = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };

    this.attachHandler = function() {
      $document.bind('keydown', function(evt) {
        var key = keyMap[evt.which];
        if (key) {
          evt.preventDefault();
          keydownHandler(key, evt);
        }
      })
    }


  });
