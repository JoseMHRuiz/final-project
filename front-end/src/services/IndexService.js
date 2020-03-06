// auth/auth-service.js
import axios from 'axios';

class IndexService {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            // withCredentials: true
        });
    }

    findAll = () => {
        return this.service.get('/all-box', )
            .then(response => response.data)
    }
    getBoxDetails = id => this.service.get(`/filter-box/${id}/details`).then(response => response.data)

}

export default IndexService;