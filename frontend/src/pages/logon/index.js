import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


export default function Logon() {

   const [id, setId] = useState('');

   const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    const data = {id};

    try{
        const response = await api.post('/sessions',data);
        localStorage.setItem('ongId',id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');
    }catch(error){
        setId('');
        alert('Erro no login, tente novamente');
    }
  }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                     placeholder="Sua ID" 
                     value={id}
                     onChange={e => setId(e.target.value)}
                     />
                    <button type="submit" className="button" >Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={herosImg} alt="Heroes" />
        </div>
    );
}