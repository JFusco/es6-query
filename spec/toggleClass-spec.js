'use strict';

import query from '../src/es6-query';
import $ from 'jquery';
import 'jasmine-jquery';

jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';

describe('Toggle class on DOM element', () => {
	beforeEach(() => {
		loadFixtures('add.class.html');
	});

	it('should be able to add and remove a class on single element', () => {
		const spec = query('#spec-add-container').toggleClass('toggle-spec-class');

		expect($('#spec-add-container')).toHaveClass('toggle-spec-class');

		spec.toggleClass('toggle-spec-class');

		expect($('#spec-add-container')).not.toHaveClass('toggle-spec-class');
	});

	it('should be able to add and remove a class on multiple elements', () => {
		const spec = query('.spec-text').toggleClass('toggle-spec-class');

		expect(spec.length).toEqual(2);
		expect($('.toggle-spec-class').length).toEqual(2);

		spec.toggleClass('toggle-spec-class');

		expect($('.spec-text')).not.toHaveClass('toggle-spec-class');
		expect(query('.toggle-spec-class')[0]).toBeUndefined();
		expect(query('.toggle-spec-class').length).toEqual(0);
	});
});