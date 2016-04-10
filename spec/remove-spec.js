'use strict';

import query from '../src/es6-query';
import $ from 'jquery';

jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';

describe('Removing DOM element', () => {
	beforeEach(() => {
		loadFixtures('query.html');
	});

	it('should remove a single element and it\'s children from the DOM', () => {
		query('#spec-div-container').remove();

		expect(query('#spec-div-container')[0]).toBeNull();
		expect($('#spec-div-container').length).toEqual(0);
	});

	it('should remove multiple elements and it\'s children from the DOM', () => {
		query('.spec-text').remove();

		expect(query('.spec-text')[0]).toBeUndefined();
		expect(query('.spec-text').length).toEqual(0);
		expect($('.spec-text').length).toEqual(0);
	});
});