// frontend\src\pages\CadastroProduto\index.jsx


import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

const validationSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  lote: yup.string().required('O lote é obrigatório'),
  validade: yup.string().required('A validade é obrigatória'),
  categoria: yup.string().required('A categoria é obrigatória'),
  quantidade: yup.number()
    .typeError('A quantidade deve ser um número')
    .positive('A quantidade deve ser positiva')
    .integer('A quantidade deve ser um número inteiro')
    .required('A quantidade é obrigária'),
});

function CadastroProduto() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data) => {
    try {
      await api.post('/produtos', data);

      toast.success('Produto cadastrado com sucesso! ✅');
      reset();
      navigate('/produtos');

    } catch (error) {
      console.error('Erro no cadastro:', error);
      toast.error('Erro ao cadastrar produto. 😥');
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Produto</h1>
      
      <form className="form-cadastro" onSubmit={handleSubmit(onSubmit)}>
        
        <div className="form-group">
          <label htmlFor="nome">Nome do Produto</label>
          <input 
            type="text" 
            id="nome"
            {...register('nome')}
            className={errors.nome ? 'input-error' : ''}
          />
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lote">Lote</label>
          <input 
            type="text" 
            id="lote"
            {...register('lote')}
            className={errors.lote ? 'input-error' : ''}
          />
          {errors.lote && <p className="error-message">{errors.lote.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="validade">Validade</label>
          <input 
            type="text"
            id="validade"
            placeholder="Ex: 2026-12-31"
            {...register('validade')}
            className={errors.validade ? 'input-error' : ''}
          />
          {errors.validade && <p className="error-message">{errors.validade.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <input 
            type="text" 
            id="categoria"
            {...register('categoria')}
            className={errors.categoria ? 'input-error' : ''}
          />
          {errors.categoria && <p className="error-message">{errors.categoria.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade (Estoque)</label>
          <input 
            type="number"
            id="quantidade"
            {...register('quantidade')}
            className={errors.quantidade ? 'input-error' : ''}
          />
          {errors.quantidade && <p className="error-message">{errors.quantidade.message}</p>}
        </div>

        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroProduto;