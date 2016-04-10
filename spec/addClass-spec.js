'use strict';

import query from '../src/es6-query';
import $ from 'jquery';
import 'jasmine-jquery';

jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';

describe('Adding class to DOM element', () => {
	beforeEach(() => {
		loadFixtures('add.class.html');
	});

	it('should be able to select an element by a string ID and add a class', () => {
		const spec = query('#spec-add-container').addClass('added-spec-class');

		expect($('#spec-add-container')).toHaveClass('added-spec-class');
	});

	it('should be able to select multiple elements with classes and add additional classes', () => {
		const spec = query('.spec-text').addClass('added-spec-text-class');

		expect($('.spec-text')[0]).toHaveClass('added-spec-text-class');
		expect($('.spec-text')[1]).toHaveClass('added-spec-text-class');
	});

	it('should be able to select multiple tags and add classes', () => {
		const spec = query('p').addClass('added-spec-p-class');

		expect($('p')).toHaveClass('added-spec-p-class');
	});
});