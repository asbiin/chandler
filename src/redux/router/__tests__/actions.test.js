import {back, navigate} from '../actions';
import * as types from '../types';

describe('Router', () => {
  describe('Actions', () => {
    it('back', () => {
      expect(back()).toEqual({
        type: types.BACK,
      });
    });
    it('navigate', () => {
      const routeName = 'ROUTE';

      expect(navigate(routeName)).toEqual({
        type: types.NAVIGATE,
        routeName,
      });
    });
  });
});
it('back', () => {
  expect(back()).toEqual({
    type: 'Navigation/BACK',
  });
});
