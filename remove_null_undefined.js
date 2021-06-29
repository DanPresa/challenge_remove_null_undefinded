// Given this object...
const myObj = {
	a: 'foo',
	b: 'bar',
	c: null,
	d: undefined,
	e: 0,
	f: {
		a: 'fuz',
		b: null,
		c: {
			a: 'biz',
			b: 'buz',
			c: [
				{
					a: 'foo',
					b: 'bar',
					c: null,
					d: undefined,
					e: 0,
					f: false,
				},
				{
					a: 'foo',
					b: 'bar',
					c: null,
					d: undefined,
					e: 0,
				},
				{
					a: 'foo',
					b: 'bar',
					c: null,
					d: undefined,
					e: 0,
				},
			],
		},
	},
};

// ...refactor this function to omit all `null` and `undefined` values from
// every object reference in the `myObj` tree. Please note that `myObj` should not be mutated.

const cleanse = (obj) => {
	for (var key in obj) {
		if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
			delete obj[key];
		} else if (typeof obj[key] === 'object') {
			cleanse(obj[key]);
		}
	}

	return obj;
};

console.log(cleanse(myObj));
