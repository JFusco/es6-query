'use strict';

export default class DOM {
	constructor(node) {
		if(typeof node === 'undefined' || node === ''){
			throw('You must define a class, id or a tag');
		}

		if(typeof node.nodeType !== 'undefined'){
			this[0] = node;

			this.length = 1;

			return this;
		}

		if(node === 'body' && document.body){
			this[0] = document.getElementsByTagName('body')[0];

			this.length = 1;

			return this;
		}

		if(typeof node !== 'string'){
			this[0] = node;

			this.length = 1;

			return this;
		}

		const char = node.charAt(0);

		let nodes = null,
			nodeLength = 0;

		if(char === '#'){
			this[0] = document.getElementById(node.substr(1));

			this.length = 1;

			return this;
		}

		if(char === '.'){
			nodes = document.querySelectorAll(node);
			nodeLength = nodes.length;

			let i;
			for (i = 0; i < nodeLength; i++) {
				this[i] = nodes[i];
			}

			this.length = nodes.length;

			return this;
		}

		if(typeof this[0] === 'undefined'){
			nodes = document.getElementsByTagName(node);
			nodeLength = nodes.length;

			let y;
			for(y = 0; y < nodeLength; y++) {
				this[y] = nodes[y];
			}

			this.length = nodes.length;

			return this;
		}
	}
}