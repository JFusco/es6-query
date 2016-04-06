'use strict';

import query from '../src/es6-query';
import $ from 'jquery';

describe('Selecting a DOM element', () => {
	beforeEach(() => {
		loadFixtures('query.html');
	});

	it('should error when node is undefined', () => {
		expect((() => {
				query();
			})
		).toThrowError(Error);
	});

	it('should test query object', () => {
		const spec = query('.spec-div-class');

		expect(spec).toBeDefined();

		expect(spec[0].nodeType).toEqual(Node.ELEMENT_NODE);
		expect(spec).toEqual(jasmine.any(Object));
		expect(spec).toEqual(jasmine.objectContaining({
			0: $('.spec-div-class')[0],
			length: 1
		}));
	});

	it('should have a length of 0 if no node is found', () =>{
		const spec = query('dfgdfg');

		expect(spec[0]).toBeUndefined();
		expect(spec.length).toEqual(0);
	});

	it('should be able to select the body', () => {
		const spec = query('body');

		expect(spec.length).toEqual(1);
		expect(spec[0].nodeName.toLowerCase()).toBe('body');
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

		for(i = 0; i < length; i++){
			expect(spec[i].nodeName.toLowerCase()).toBe('span');
			expect(spec[i].className).toBe('spec-text');

			count++;
		}

		expect(count).toEqual(2);
	});
});