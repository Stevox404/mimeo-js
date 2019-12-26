const Chance = require('chance');

function guessKeys(key, val, { shouldSeed, seed }) {
    if (typeof val === 'function') {
        const data = val();
        //Enums
        if (Array.isArray(data)) {
            return Chance(shouldSeed && (seed || val)).pickone(data);
        }
    }
    if (/email/i.test(key) && /.+?@.+\..+/.test(val)) {
        return Chance(shouldSeed && (seed || val)).email({ domain: 'mailinator.com' });
    }
    if (/firstName|fName/i.test(key) && typeof val === 'string') {
        return Chance(shouldSeed && (seed || val)).first();
    }
    if (/name/i.test(key) && typeof val === 'string') {
        if (val.split(' ').length > 1) {
            return Chance(shouldSeed && (seed || val)).name();
        } else {
            return Chance(shouldSeed && (seed || val)).last();
        }
    }
    if (/gender/i.test(key) && typeof val === 'string') {
        const gen = Chance(shouldSeed && (seed || val)).gender();
        return val.length > 1 ? gen : gen[0];
    }
    if (/d\.?o\.?b|date|birthday/i.test(key) && val instanceof Date) {
        return Chance(shouldSeed && (seed || val)).birthday();
    }
    if (/city|town/i.test(key) && typeof val === 'string') {
        return Chance(shouldSeed && (seed || val)).city();
    }

    return false;
}


module.exports = { guessKeys }
