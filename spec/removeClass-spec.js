'use strict';

import query from '../src/es6-query';
import $ from 'jquery';
import 'jasmine-jquery';

jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';

describe('Removing class from DOM element', () => {
	beforeEach(() => {
		loadFixtures('remove.class.html');
	});

	it('should be able to select an element by a string ID and remove a class', () => {
		const spec = query('#spec-remove-container').removeClass('spec-id-remove');

		expect($('#spec-remove-container')).not.toHaveClass('spec-id-remove');
	});

	it('should be able to select multiple elements with classes and remove all matched classes', () => {
		const spec = query('.spec-text').removeClass('spec-remove');

		expect($('.spec-text')[0]).not.toHaveClass('spec-remove');
		expect($('.spec-text')[1]).not.toHaveClass('spec-remove');
	});

	it('should be able to select multiple tags and remove classes', () => {
		const spec = query('p').removeClass('spec-p-remove');

		expect($('p')).not.toHaveClass('spec-p-remove');
	});
});