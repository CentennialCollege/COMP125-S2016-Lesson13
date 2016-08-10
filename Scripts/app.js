/// <reference path="objects/label.ts"/>
/**
 * FileName: app.js
 *
 * @author Tom Tsiliopoulos
 * @date August 3, 2016
 *
 * StudentID: 300818557
 *
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var CANVAS_WIDTH = 320;
    var CANVAS_HEIGHT = 320;
    var stage;
    var helloLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    var clickMeButton;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        canvas.setAttribute("width", "320");
        canvas.setAttribute("height", "320");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enable mouse over events
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    function gameLoop() {
        //helloLabel.rotation += 5;
        // checkbounds for x and y
        helloLabel.x = checkBounds(helloLabel.x, CANVAS_WIDTH);
        helloLabel.y = checkBounds(helloLabel.y, CANVAS_HEIGHT);
        // change direction and speed for x and y
        if ((helloLabel.y == CANVAS_HEIGHT) || (helloLabel.y == 0)) {
            dy = Math.floor(Math.random() * 5) + 1;
            yDirection *= -1;
        }
        if ((helloLabel.x == CANVAS_WIDTH) || (helloLabel.x == 0)) {
            dx = Math.floor(Math.random() * 5) + 1;
            xDirection *= -1;
        }
        helloLabel.y += (yDirection * dy);
        helloLabel.x += (xDirection * dx);
        stage.update(); // refresh the stage container
    }
    function main() {
        helloLabel = new objects.Label("Hello World!", "40px Consolas", "#000000", CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5, true);
        stage.addChild(helloLabel);
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map