import { FaUserNinja } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Get() {

    const [ users, setUsers ] = useState();
    const [email, setEmail] = useState('');

    const handleGetUsers = async () => {
        try {
            const response = await ClientUsers.getAllUsers();
            setUsers(response);
            console.log(users);
        } catch (e) {
            toast.error('Erro ao buscar usuários');
            console.log(e.response.data);
        }
    }

    useEffect(() => {
        handleGetUsers();
    }, [])

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Get novo usuário">
                    <FaUserNinja size={30} />
                </Title>

                <h1>Todos os usuarios</h1>

                {users &&
                    users.map((item, index) => (
                        <div className="container" id={index}>
                            <td>NOME: {item.nome}, EMAIL: {item.email}</td>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}