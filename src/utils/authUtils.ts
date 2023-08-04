import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
export const decodeToken = (token: string) => {
	try {
		return jwtDecode(token);
	} catch {
		return null;
	}
};

export const verifyToken = async (accessToken) => {
	if (!accessToken) {
		// Access token is missing
		return false;
	}

	try {
		const { exp } = jwtDecode(accessToken);
		console.log('exp', exp);
		if (exp < Date.now() / 1000) {
			// Access token has expired
			// await refreshToken(); // Call the API function to refresh the token
			// return true;
		}
		return true;
	} catch (error) {
		console.error('Error decoding token:', error);
		return false;
	}
};

export const saveTokenToCookie = (token: string) => {
	localStorage.setItem('token', token);
};

export const getTokenFromCookie = () => {
	return Cookies.get('token') || null;
};

export const removeTokenFromCookie = () => {
	localStorage.removeItem('token');
};
