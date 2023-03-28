import decode from 'jwt-decode';

class AuthService {
    //Decode json web token to grab user data
    getProfile() {
        return decodeURI(this.getToken());
    }

    //Grab token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    loggedIn() {
        const token = this.getToken();
        //Check if token is expired and valid
        return !!token && !this.isTokenExpired(token); //If token is not expired and is valid, return true
    }

    isTokenExpired(token) {
        try {
            const decodedToken = decode(token);
            return decodedToken.exp < Date.now() / 1000;
        } catch (error) {
            return false;
        }
    }

    login(tokenId) {
        localStorage.setItem('id_token');
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

const authService = new AuthService();
export default authService;