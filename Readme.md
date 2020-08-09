Quick and dirty random data generator. 
Repo: https://github.com/Stevox404/mimeo-js/

Pass the sample data into the mimic function of the ```require(mimeo)``` object and get back similar data.

<br><br>

### Args
 - #### data {any}
 > The data to be mimicked

 - #### opts {shouldSeed | generatorOpts}
> Is either a boolean (shouldSeed) or an object(generatorOpts). See below.
>  ##### shouldSeed {boolean}
>You can get repeatable values by passing ``true`` as the second parameter of the ``mimic`` function
>
>  ##### generatorOpts {object}
>```
>{
>    seed {any}: The seed that will be used.
>}
>```

___
<br>

### Enums
You can choose an enum by passing a function that returns an array. Example:
```js
{
    grade: () => ['A', 'B', 'C', 'D', 'E']
}
```


___
<br>
<!-- DEPRECATED: Will not be removed but also will no longer be maintained -->
### ~~Mocker API Access~~
****DEPRECATED: Will not be removed but also will no longer be maintained**
Access the underlying mocker api by passing a function that returns an object with the following keys:
> * generator {string: Chance|Faker } - Generator API to access. Default "Chance"
> * fn {string} - The function to be called
> * args {array} - An array of arguments to be passed

Example:
```js
{
    name: () => ({fn: 'name', args: [{gender: male}]}),
    avatar: () => ({generator: 'Faker', fn: 'image.avatar'})
}
```

___
<br>

### Example:

```js
const mimic = require('mimeo').mimic;
const foo = { 
    email: 'foo@bar.com', 
    username: 'foo404',
    role: () => ['administrator', 'moderator', 'user'], 
    details: { 
        gender: 'male', 
        dob: new Date(), 
    } 
};

console.log(mimic(foo)); // Different each time
console.log(mimic(foo, true)); // Will always be same whenever ran
console.log(mimic(foo, {seed: 'someSeed')); // Will always be same whenever ran using same seed
```

Uses Chance (https://chancejs.com) by default under the hood.