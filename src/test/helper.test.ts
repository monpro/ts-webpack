import {sum} from '../utils/helper';

describe('sum function', () => {
    it('adds two numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });
});