# String-padding

Padding strings in [node](http://nodejs.org/).

## Installation

`$ npm install string-padding`

## Usage

    var pad = require('string-padding');
    pad(string [, length [, padding [, side ]]]);

- *string*: A string of text of any length.
- *length* (optional): The length the output string should be. Note that it doesn’t truncate the original string.
- *padding* (optional): The character(s) for padding. Yes, you could go crazy with multiple characters ;)
- *side* (optional): The side which should be padded; please use `pad.LEFT`, `pad.RIGHT` or `pad.BOTH`.

For those who are totally fine with prototyping strings, you can do that. If you do, you can skip the first parameter.

    var pad = require('string-padding');
    String.prototype.pad = pad.prototype;
    
    'Hello World!'.pad(16, '0'); // 0000Hello World!

Happy padding! :)