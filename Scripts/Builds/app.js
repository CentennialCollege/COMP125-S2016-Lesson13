var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        /**
         * Creates an instance of Label.
         *
         * @param {string} labelString
         * @param {string} labelFont
         * @param {string} labelColour
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function Label(labelString, labelFont, labelColour, x, y, isCentered) {
            _super.call(this, labelString, labelFont, labelColour);
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        /**
         * Creates an instance of Button.
         *
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function Button(pathString, x, y, isCentered) {
            _super.call(this, pathString);
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            this.on("mouseover", this._mouse_over, this);
            this.on("mouseout", this._mouse_out, this);
        }
        /**
         * This event handler triggers when the mouse is over the button
         *
         * @private
         * @method _mouse_over
         * @return {void}
         */
        Button.prototype._mouse_over = function () {
            this.alpha = 0.7; // 30% transparent
            this.rotation += 20;
        };
        /**
         * This event handler triggers when the mouse leaves the button
         *
         * @private
         * @method _mouse_out
         * @return {void}
         */
        Button.prototype._mouse_out = function () {
            this.alpha = 1.0; // 100% solid
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
/// <reference path="objects/label.ts"/>
/// <reference path="objects/button.ts"/>
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
var core;
(function (core) {
    "use strict";
    var canvas;
    core.CANVAS_WIDTH = 320;
    core.CANVAS_HEIGHT = 320;
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
        // after everything is set up - call main
        main();
    }
    /**
     * Utility Method to set the bounds of an object
     *
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    /**
     * Event method that triggers every frame
     *
     * @method gameLoop
     */
    function gameLoop() {
        //helloLabel.rotation += 5;
        // checkbounds for x and y
        helloLabel.x = checkBounds(helloLabel.x, core.CANVAS_WIDTH);
        helloLabel.y = checkBounds(helloLabel.y, core.CANVAS_HEIGHT);
        // change direction and speed for x and y
        if ((helloLabel.y == core.CANVAS_HEIGHT) || (helloLabel.y == 0)) {
            dy = Math.floor(Math.random() * 5) + 1;
            yDirection *= -1;
        }
        if ((helloLabel.x == core.CANVAS_WIDTH) || (helloLabel.x == 0)) {
            dx = Math.floor(Math.random() * 5) + 1;
            xDirection *= -1;
        }
        helloLabel.y += (yDirection * dy);
        helloLabel.x += (xDirection * dx);
        stage.update(); // refresh the stage container
    }
    function clickMeButton_clicked() {
        helloLabel.text = (helloLabel.text === "Hello World!") ? "Good Bye!" : "Hello World!";
    }
    // everything happens here
    function main() {
        // label object
        helloLabel = new objects.Label("Hello World!", "40px Consolas", "#000000", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(helloLabel);
        // button bitmap
        clickMeButton = new objects.Button("../Assets/images/clickMeButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButton_clicked);
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map