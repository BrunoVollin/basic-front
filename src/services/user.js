import client from './config';

const userPath = '/user';

const ClientUsers = {
    async createUser(data) {
        try {
            console.log(data)
            const response = await client.post(`${userPath}/create`, data);
            return response;
        } catch (e) {
            throw e;
        }
    },
    
    async updateUser(data) {
        try {
            const response = await client.put(`${userPath}/update`, data);
            return response;
        } catch (e) {
            throw e;
        }
    },

    async deleteUser(data) {
        try {
            const response = await client.delete(`${userPath}/delete/${data.email}`);
            return response;
        } catch (e) {
            throw e;
        }
    },

    async getUserbyEmail(email) {
        try {
            const response = await client.get(`${userPath}/listUser`, {
                email
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    },

    async getAllUsers() {
        try {
            const response = await client.get(`${userPath}/list`);
            console.log(response.data);
            return response.data;
        } catch (e) {
            throw e;
        }
    },
};

export default ClientUsers;