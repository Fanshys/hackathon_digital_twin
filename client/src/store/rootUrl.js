let rootUrl = 'http://45.134.255.154:30214';

if (typeof process !== 'undefined' && process?.env?.NODE_ENV === 'development') {
	rootUrl = 'http://localhost:3000/';
}

export default rootUrl;
