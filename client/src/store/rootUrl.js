let rootUrl = 'http://45.134.255.154:80';

if (typeof process !== 'undefined' && process?.env?.NODE_ENV === 'development') {
	rootUrl = 'http://localhost:80/';
}

export default rootUrl;

