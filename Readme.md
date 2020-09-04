Mimic sample data.

### Migration to v2
>See <a href="#functions">Functions</a>

<br><br>

### Usage
```js 
const mimic = require('mimeo-js').mimic;
const sampleData = {
    name: 'John Doe',
    gender: (chance) => chance.pickone(['male','female']);
}

console.log(mimic(sampleData)); // Different each time
console.log(mimic(sampleData, true)); // Will always be same whenever ran
console.log(mimic(sampleData, {seed: 'someSeed')); // Will always be same whenever ran using same seed

```

### Args
 - #### data {any}
 > The data to be mimicked. Tries to get an approximately similar data item. 
   
> #####  Objects
> Objects have each key recursively called.

<a id='functions'></a>
> #####  Functions
> If the data value is a function, it is called with one parameter, a [chance](https://chancejs.com) instance. The mimicked value will be the return value of the function:


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