import { FaUserNinja } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Create() {

    const {users, setUsers} = useState([{}]);
    const {user, setUser} = useState({});
    const [email, setEmail] = useState('');

    const handleGetUsers = async () => {
        try {
            const response = await ClientUsers.getAllUsers();
            setUser(response);
        } catch (e) {
            toast.error('Erro ao buscar usuários');
        }
    }	
    
    const handleGetUserByEmail = async () => {
        try {
            const response = await ClientUsers.getUserbyEmail({email});
            setUser(response);
        } catch (e) {
            toast.error('Erro ao buscar usuário');
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

                {
                    users.map((item, index) => {
                        return (
                            <div className="container" id={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </div>
                        )
                    })
                }

                <h1>Usuario por id</h1>


                <form className="form-profile" onSubmit={handleGetUserByEmail}>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Salvar</button>
                </form>
                {
                    users.map((item, index) => {
                        return (
                            <div className="container" id={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}