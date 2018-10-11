Quick and dirty random data generator. 

Repo: https://github.com/Stevox404/mimeo-js/

No need for documentation. 
Just pass the sample data into the mimic function of the ```require(mimeo)``` object and get back similar data.

You can choose an enum by passing a function that returns an array. Example:
```
{
    grade: () => ['A', 'B', 'C', 'D', 'E']
}
```

Uses Chance (https://chancejs.com) under the hood.

Example:

```
const mimic = require('mimeo').mimic;
const foo = mimic(
    { 
        email: 'foo@bar.com', 
        username: 'foo404',
        role: () => ['administrator', 'moderator', 'user'], 
        details: { 
            gender: 'male', 
            dob: new Date(), 
        } 
    }
);

console.log(foo);
```
