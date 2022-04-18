import { ProdType } from './Building';

type Actions = {
	type : string,
	payload? : number,
	id? : string
}

export default (state: ProdType[], { type, payload, id }: Actions) => {
	switch (type) {

	case '+': {
		let newState  = state.map((prod: ProdType, i)=> {
			if (prod.id === id) {
				prod.amount += 1;
			}
			return prod;
		});
		return [...newState];
	}

	case '-': {
		let newState  = state.map((prod: ProdType)=> {
			if (prod.id === id) {
				if(prod.amount <= 0) {
					prod.amount = 0;
				}
				else prod.amount -= 1;
			}
			return prod;
		});
		return [...newState];
	}

	case 'reset': {
		let newState  = state.map((prod: ProdType)=> {
			prod.amount = 0;
			return prod;
		});
		return [...newState];
	}

	default:
		return state
	}
}
