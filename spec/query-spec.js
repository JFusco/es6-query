'use strict';

import query from '../src/es6-query';
import $ from 'jquery';

require('jasmine-jquery');

jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';

describe('Removing DOM element', () => {
	beforeEach(() => {
		loadFixtures('query.html');
	});

	it('should remove a single element and it\'s children from the DOM', () => {
		query('#spec-div-container').remove();

		expect($('#spec-div-container').length).toEqual(0);
	});

	it('should remove multiple elements and it\'s children from the DOM', () => {
		query('.spec-text').remove();

		expect($('.spec-text').length).toEqual(0);
	});
});

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

describe('Selecting a DOM element', () => {
	beforeEach(() => {
		loadFixtures('query.html');
	});

	it('should be able to select a single element by ID', () => {
		const spec = query('#spec-div-container');

		expect(spec[0].nodeName.toLowerCase()).toBe('div');
		expect(spec[0].id).toBe('spec-div-container');
	});

	it('should be able to return a single element by native "getElementById" method', () => {
		const spec = query(document.getElementById('spec-div-container'));

		expect(spec[0].nodeName.toLowerCase()).toBe('div');
		expect(spec[0].id).toBe('spec-div-container');
	});

	it('should be able to select a single element by className', () => {
		const spec = query('.spec-text')[0];

		expect(spec.node).toBeUndefined();
		expect(spec.nodeName.toLowerCase()).toBe('span');
		expect(spec.className).toBe('spec-text');
	});

	it('should be able to return a single element by native "getElementsByClassName" method', () => {
		const spec = query(document.getElementsByClassName('spec-text')[0]);

		expect(spec[0].nodeName.toLowerCase()).toBe('span');
		expect(spec[0].className).toBe('spec-text');
	});

	it('should be able to return a single element by native "querySelectorAll" method', () => {
		const spec = query(document.querySelectorAll('.spec-text')[0]);

		expect(spec[0].nodeName.toLowerCase()).toBe('span');
		expect(spec[0].className).toBe('spec-text');
	});

	it('should be able to select multiple elements by className', () => {
		const spec = query('.spec-text');
		const length = spec.length;

		let count = 0,
			i;

		expect(spec.length).toBeGreaterThan(0);
		expect(spec.length).toEqual(2);

		for(i = 0;i < length; i++){
			expect(spec[i].nodeName.toLowerCase()).toBe('span');
			expect(spec[i].className).toBe('spec-text');

			count++;
		}

		expect(count).toEqual(2);
	});
});