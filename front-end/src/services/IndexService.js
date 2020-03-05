// auth/auth-service.js
import axios from 'axios';

class IndexService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/',
            // withCredentials: true
        });
    }

    findAll = () => {
        return this.service.get('/all-box', )
            .then(response => response.data)
    }
    login = (username, password) => {
        return this.service.post('/login', {
                username,
                password
            })
            .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/currentUser', )
            .then(response => response.data)
    }

    logout = () => {
        return this.service.get('/logout', )
            .then(response => response.data)
    }
}

export default IndexService;