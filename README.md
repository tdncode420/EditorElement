# EDITOR ELEMENT (CUSTOM)

A custom "editor" element. This is nothing more than an extended class from the `<HTMLTextAreaElement>` with additional methods to provided a more "editor type" feel, as opposed to the simple and basic feel of a normal `<textarea>`.

## HOW TO USE

1) Import the module

    Use as ECMAscript:

    ```html
    <script src="path/to/index.js"><script>
    ```

    Use as module:

    ```js
    import defaultExport from "path/to/index.mod.js"
    ```

2) Obtain a reference to a `<textarea>` element

    ```js
    const myTextArea = document.querySelector('textarea')
    console.log(myTextArea.__proto__) // >> HTMLTextAreaElementPrototype {...custom methods}
    ```

## ADDED METHODS

- **getSelectedText**
  - Get the value of the currently selected text characters
  - `@returns` {str}

- **quoteSelectedText**
  - Surround the currently selected/highlighted text with quotes ("" | '')
  - `@param` {boolean} [double = true] - use double quotes; use false for single quotes

- **replaceSelectedText**
  - Replace the currently selected text with the provided 'str' arg
  - `@param` {str} replacement - the replacement value

- **wrapSelectedText**
  - Wrap the currently selected/highlighted text with the provided arg
  - `@param` {str} wrapper - the char/s to wrap the given characters with

- **getCaretPosition**
  - Get the current position of the caret within
  - `@returns` {number}

- **setCaretPosition**
  - Set the current position of the caret within
  - `@param` {number} position - the index at which to set the caret at

- **hasSelection**
  - Checks if any area within is currently highlighted/selected
  - `@returns` {boolean}

- **setSelection**
  - Select/highlight specific characters within
  - `@param` {number} start - the starting index value
  - `@param` {number} end - the ending index value

- **clear**
  - Clear this text area

- **undoLastClear**
  - Undo and set the contents of the last clear (if any)

- **registerSelectedEvent**
  - Register a callback for when a "selection event" occurs.
The value of the selection will be passed as the one and only arg. A "selection event" is a custom add-on event that fires
whenever the user selects any text
  - `@param` {function} callback - the callback to invoke on event
