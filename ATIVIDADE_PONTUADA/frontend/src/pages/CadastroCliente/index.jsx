// src/pages/CadastroCliente/index.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

// Schema de Validação (as regras)
const validationSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  telefone: yup.string().required('O telefone é obrigatório'),
  formaPagamento: yup.string().required('A forma de pagamento é obrigatória'),
  endereco: yup.string().required('O endereço é obrigatório'),
});

function CadastroCliente() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  // Função chamada no envio (quando o formulário é válido)
  const onSubmit = async (data) => {
    try {
      await api.post('/clientes', data);

      toast.success('Cliente cadastrado com sucesso! ✅');
      reset();
      navigate('/clientes');

    } catch (error) {
      console.error('Erro no cadastro:', error);
      toast.error('Erro ao cadastrar cliente. 😥');
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Cliente</h1>
      
      <form className="form-cadastro" onSubmit={handleSubmit(onSubmit)}>
        
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome"
            {...register('nome')}
            className={errors.nome ? 'input-error' : ''}
          />
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            {...register('email')}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input 
            type="text" 
            id="telefone"
            {...register('telefone')}
            className={errors.telefone ? 'input-error' : ''}
          />
          {errors.telefone && <p className="error-message">{errors.telefone.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="formaPagamento">Forma de Pagamento</label>
          <input 
            type="text" 
            id="formaPagamento"
            {...register('formaPagamento')}
            className={errors.formaPagamento ? 'input-error' : ''}
          />
          {errors.formaPagamento && <p className="error-message">{errors.formaPagamento.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="endereco">Endereço</label>
          <input 
            type="text" 
            id="endereco"
            {...register('endereco')}
            className={errors.endereco ? 'input-error' : ''}
          />
          {errors.endereco && <p className="error-message">{errors.endereco.message}</p>}
        </div>

        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroCliente;