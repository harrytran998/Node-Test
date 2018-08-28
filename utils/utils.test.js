const utils = require('./utils');
const expect = require('expect');



it('Should add two number', () => {
    let res = utils.add(33, 22);
    expect(res).toBe(40).toBeA(50);
});

it('XXXX', () => {
    expect({
        name: 'Nhat',
        age: 24
    }).toExclude({
        age:23
    })
});