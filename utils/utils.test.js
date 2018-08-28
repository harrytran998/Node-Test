const utils = require('./utils');


it('Should add two number', () => {
    const res = utils.add(33, 22);
    if (res !== 43) {
        throw new Error('value not correct !');
    }
});