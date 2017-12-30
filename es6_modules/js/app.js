import {
	uniq,
} from 'lodash';
import Howler from 'howler';
import {
	api_key,
} from '../src/config';
import User, {
	createURL,
	gravatar,
} from '../src/user';

const ages = [1, 2, 4, 2, 1, 1, 34],
	nd = new User('dermus', 'nicolas', 'n.d'),
	nd_url = createURL(nd.name),
	nd_img = gravatar(nd.site);

console.log(ages, nd, nd_url, nd_img);
