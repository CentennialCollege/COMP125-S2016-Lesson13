var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//# sourceMappingURL=button.js.map