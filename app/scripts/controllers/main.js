'use strict';

/**
 * @ngdoc function
 * @name gameTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameTestApp
 */
angular.module('gameTestApp')
  .controller('gameCtrl', function ($scope) {

    $scope.newGame = function (){
      // empty previous game states (score, tiles, board)
      // create and init board
      // init keyboard input listeners

      // play until win or lose condition is met
      // win if score hits 2048
      // lose if no more merge in every possible direction

      // play instruction
      // first move, create 2 random tiles, then for next moves, create 1 one random tile on the board
      // choose every tiles on the board
      // get directions from input listeners
      // choose furtherest possible within that directions
      // case1 if there is already a tile one move ahead
      // case2 if there isn't
      // case3 hitting the wall
      // if case 1 merge if there is one move ahead and number is same, only one ahead survives and its number doubles
      // if case 2 move to that space
      // if case 3 stay      

      // choose direction (n,w,s,e)
      // update score after move has been finished
    }

    $scope.updateScore = function (){

    }

    $scope.play = function () {

    }

    $scope.gameWinningCondition = function () {

    }

    $scope.gameLosingCondition = function () {

    }

    $scope.generateRandomTile = function () {

    }


  });
