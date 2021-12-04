let rootUrl = '/';

if (process?.env?.NODE_ENV === 'development') {
	rootUrl = 'http://localhost:3000/';
}

export default rootUrl;
