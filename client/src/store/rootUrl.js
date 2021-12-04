let rootUrl = 'http://0.0.0.0';

if (typeof process !== 'undefined' && process?.env?.NODE_ENV === 'development') {
	rootUrl = 'http://localhost:3000/';
}

export default rootUrl;
