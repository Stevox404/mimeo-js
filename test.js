process.env.NODE_ENV = 'test';

const mimic = require('./index.js').mimic;
const chai = require('chai');
const expect = chai.expect;

describe('Test:', () => {
    it('Should get a random string', (done) => {
        const rnd = mimic('hippopotumus');
        expect(rnd).to.be.a('string');
        done();
    });
    it('Should get a random (unformatted) string date', (done) => {
        const rnd = mimic('12/05/2005');
        expect(rnd).to.be.a('string');
        expect(Number.isNaN(Date.parse(rnd))).to.be.equal(false);
        done();
    });
    it('Should get a random sentence', (done) => {
        const rnd = mimic('Hello there World!');
        const numWords = rnd.split(' ').length;
        expect(rnd).to.be.a('string');
        expect(numWords).to.be.greaterThan(1);
        done();
    });
    it('Should choose from list', (done) => {
        const rnd = mimic((chance) => chance.pickone(['A', 'B', 'C', 'D', 'E']));
        expect(rnd).to.be.oneOf(['A', 'B', 'C', 'D', 'E']);
        done();
    });
    it('Should get a random number', (done) => {
        const rnd = mimic(-274);
        expect(rnd).to.be.a('number').is.not.NaN;
        done();
    });
    it('Should get a random double', (done) => {
        const rnd = mimic(-3.14);
        expect(rnd).to.be.a('number').is.not.NaN;
        done();
    });
    it('Should get a random boolean', (done) => {
        const rnd = mimic(true);
        expect(rnd).to.be.a('boolean')
        done();
    });
    it('Should get a random array', (done) => {
        const rnd = mimic([1, 2, [345, 6, 23], 40]);
        expect(rnd).to.be.an('array')
        expect(rnd[0]).to.be.a('number')
        expect(rnd[2]).to.be.an('array')
        done();
    });
    it('Should get a random date', (done) => {
        const rnd = mimic(new Date());
        expect(rnd instanceof Date).to.be.equal(true);
        done()
    });
    it('Should get a random object', (done) => {
        const rnd = mimic(
            { 
                email: 'foo@bar.com', 
                username: 'foo404',
                profilePic: 'http://mypic.com',
                role: (chance) => {
                    return chance.pickone(['administrator', 'moderator', 'user'])                    
                }, 
                empDate: new Date(),
                details: { 
                    gender: 'male', 
                    dob: new Date(), 
                } 
            }
        );
        expect(rnd).to.be.an('Object');
        expect(rnd).to.have.property('email').which.is.a('string');
        expect(rnd).to.have.property('username').which.is.a('string');
        expect(rnd).to.have.property('profilePic').which.match(/^http/);
        expect(rnd).to.have.property('role').which.is.oneOf(['administrator', 'moderator', 'user']);
        expect(rnd).to.have.property('details').which.is.an('Object')
            .with.property('gender').which.is.a('string');
        expect(rnd).to.have.property('details').which.is.an('Object')
            .with.property('dob').which.is.a('Date');
        done();
    });

    it('should use provided seed if any', (done) => {
        const strA = mimic('Test string A', true);
        const strB = mimic('Test string B', {seed: 'some seed'});

        expect(strA).to.not.be.equal(strB);
        done()
    });
});