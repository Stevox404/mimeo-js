Quick and dirty random data generator. 

No need for documentation. 
Just pass the sample data into the mimic function of the ```require(mimeo)``` object and get back similar data.

Uses Chance (https://chancejs.com) under the hood.

Example:

```
const mimic = require('mimeo').mimic;
const foo = mimic(
    { 
        email: 'foo@bar.com', 
        bar: 404, 
        baz: { 
            test: 44, 
            data: true 
        } 
    }
);

console.log(foo);
```
