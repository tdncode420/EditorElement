export default (()=>{
    'use strict';

    /* Added to hold the cleared contents so that they may be reverted if needed */
    HTMLTextAreaElement.prototype.cache = [];

    /** Get Caret Position
     * 
     * @method getCaretPosition
     * 
     * @description Get the current position of the caret within
     * 
     * @returns {number} 
     */
    HTMLTextAreaElement.prototype.getCaretPosition = function () {
        return this.selectionStart
    };

    /** Set Caret Position
     * 
     * @method setCaretPosition
     * 
     * @description Set the current position of the caret within
     * 
     * @param {number} position - the index at which to set the caret at
     * 
     */
    HTMLTextAreaElement.prototype.setCaretPosition = function (position) {
        this.selectionStart = position;
        this.selectionEnd = position;
        this.focus()
    };


    /** Has Selection
     * 
     * @method hasSelection
     * 
     * @description Checks if any area within is currently highlighted/selected
     * 
     * @returns {boolean}
     */
    HTMLTextAreaElement.prototype.hasSelection = function () {
        return this.selectionStart != this.selectionEnd;
    };


    /** Get Selection Text
     * 
     * @method getSelectionText
     * 
     * @description Returns the value of the currently selected text characters
     * 
     * @returns {str}
     */
    HTMLTextAreaElement.prototype.getSelectedText = function () {
        return this.value.substring(this.selectionStart, this.selectionEnd)
    };


    /** Set Selection
     * 
     * @method setSelection
     * 
     * @description Select/highlight specific characters within
     * 
     * @param {number} start - the starting index value
     * @param {number} end - the ending index value
     */
    HTMLTextAreaElement.prototype.setSelection = function (start, end) {
        this.selectionStart = start;
        this.selectionEnd = end;
        this.focus();
    };


    /** Replace Selected Text
     * 
     * @method replaceSelectedText
     * 
     * @description Replace the currently selected text with the provided 'str' arg
     * 
     * @param {str} replacement - the replacement value
     */
    HTMLTextAreaElement.prototype.replaceSelectedText = function (replacement) {
        let temp = this.value;
        this.value = temp.substring(0, this.selectionStart) + replacement + temp.substring(this.selectionEnd + 1);
    };


    /** Quote Selected Text
     * 
     * @method quoteSelectedText
     * 
     * @description Surround the currently selected/highlighted text with quotes ("" | '')
     * 
     * @param {boolean} [double=true] - use double quotes; use false for single quotes 
     */
    HTMLTextAreaElement.prototype.quoteSelectedText = function (double = true) {
        let quote = double ? '"' : "'";
        let selected = quote + this.value.substring(this.selectionStart, this.selectionEnd) + quote;
        this.value = temp.substring(0, this.selectionStart) + selected + temp.substring(this.selectionEnd + 1);
    };


    /** Wrap Selection Text
     * 
     * @method wrapSelectedText
     * 
     * @description Wrap the currently selected/highlighted text with the provided arg
     * 
     * @param {str} wrapper - the char/s to wrap the given characters with
     */
    HTMLTextAreaElement.prototype.wrapSelectedText = function (wrapper) {
        let selected = wrapper + this.value.substring(this.selectionStart, this.selectionEnd) + wrapper;
        this.value = temp.substring(0, this.selectionStart) + selected + temp.substring(this.selectionEnd + 1);
    };


    /** Clear
     * 
     * @method clear
     * 
     * @description Clear the value within
     * 
     * 
     */
    HTMLTextAreaElement.prototype.clear = function () {
        this.cache.append(this.value);
        this.value = "";
    };


    /** Undo Last Clear
     * 
     * @method undoLastClear
     * 
     * @description Undo and set the contents of the last clear (if any)
     * 
     */
    HTMLTextAreaElement.prototype.undoLastClear = function () {
        if (this.cache.length > 0) {
            this.value = this.cache.pop();
        } else {
            console.log("This textarea's cache is empty")
        }
    };

    /** Register Selected Event
     * 
     * @method registerSelectedEvent
     * 
     * @description Register a callback for when a "selection event" occurs.
     * The value of the selection will be passed as the one and 
     * only arg.
     * 
     * A "selection event" is a custom add-on event that fires
     * whenever the user selects any text
     * 
     * @param {function} callback - the callback to invoke on event
     */
    HTMLTextAreaElement.prototype.registerSelectedEvent = function (callback) {
        this.onmouseup = this.onkeyup = function (e) {
            if (this.hasSelection()) {
                callback(this.getSelectedText());
            }
            this.focus()
        };
    }
})();