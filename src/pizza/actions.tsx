type ObjArg = {
	type: string,
	payload: number,
	id: string,
};

export function increment(id: string):ObjArg {
	return {
		type: '+',
		payload: 1,
		id
	}
}

export function decrement(id: string):ObjArg {
	return {
		type: '-',
		payload: 1,
		id
	}
}