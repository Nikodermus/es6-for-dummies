import slug from 'slug';
import base64 from 'base-64';
import url from './config';

export default function newUser(user, name, site) {
	return {
		user,
		name,
		site,
	};
}

export function createURL(name) {
	return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
	const photoURL = base64.encode(email);
	return `https://www.gravatar.com/avatar/${photoURL}`;
}
