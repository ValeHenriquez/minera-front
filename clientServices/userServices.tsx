import axios from 'axios';

interface UserService {
    login(username: string, password: string): Promise<any>;
}

export const userServiceFactory = (): UserService => {
    function login(username: string, password: string): Promise<any> {
        return axios.post(`/api/auth`, { username, password });
    }

    return { login };
};

export default {
    userServiceFactory,
};