var regexp = /^[a-zA-Z0-9]{0,10}$/;
var check = "EAF34F99-7D44-EB11-A813-000D3A99BA4C";
if (check.search(regexp) === -1)
    { alert('invalid'); }
else
    { alert('valid'); }
// Expectation: Invalid, too many characters and contains hyphens


var regexp = /^[a-zA-Z0-9]{0,10}$/;
var check = "WEB0016499";
if (check.search(regexp) === -1)
    { alert('invalid'); }
else
    { alert('valid'); }
// Expectation: Valid, Within Criteria


var regexp = /^[a-zA-Z0-9]{0,10}$/;
var check = "HLTHCENFLD";
if (check.search(regexp) === -1)
    { alert('invalid'); }
else
    { alert('valid'); }
// Expectation: Valid, Within Criteria

var regexp = /^[a-zA-Z0-9]{0,10}$/;
var check = "WEB00150018";
if (check.search(regexp) === -1)
    { alert('invalid'); }
else
    { alert('valid'); }
// Expectation: invalid due to too many characters

