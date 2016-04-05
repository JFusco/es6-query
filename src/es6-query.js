'use strict';

import DOM from './es6-dom';

const query = node => {
	return new DOM(node);
};

query.dom = DOM.prototype = {
	addClass(name) {
		if(this.length > 1){
			let i;
			for(i = 0; i < this.length; i++){
				if(!query(this[i]).hasClass(name)){
					this[i].classList.add(name);
				}
			}
		}else{
			if(!query(this[0]).hasClass(name)){
				this[0].classList.add(name);
			}
		}

		return this;
	},

	hasClass(name) {
		let nodeHasClass = false;

		if(this.length > 1){
			let i;
			for(i = 0; i < this.length; i++){
				if(this[i].classList.contains(name) === true){
					nodeHasClass = true;

					break;
				}
			}
		}else{
			nodeHasClass = this[0].classList.contains(name);
		}

		return nodeHasClass;
	},

	removeClass : function(name){
		if(this.length > 1){
			let i;
			for(i = this.length - 1; i >= 0; i--){
				if(query(this[i]).hasClass(name)){
					this[i].classList.remove(name);
				}
			}
		}else{
			if(query(this[0]).hasClass(name)){
				this[0].classList.remove(name);
			}
		}

		return this;
	},

	toggleClass(name){
		return this[0].classList.toggle(name);
	},

	remove() {
		if(this.length > 1){
			let i;
			for(i = this.length - 1; i >= 0; i--){
				this[i].parentNode.removeChild(this[i]);
			}
		}else{
			this[0].parentNode.removeChild(this[0]);
		}

		return this;
	},

	get(index) {
		if(this.length === 1){
			throw('This method requires a nodeList. Please provide a class or tag.');
		}

		this[0] = this[index];

		this.length = 1;

		if(typeof this[0] === 'undefined'){
			throw('Element does not exist, please check your index that you provided and children available.');
		}

		return this;
	},

	data(name) {
		return this[0].getAttribute('data-' + name);
	}
};

export default query;