import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
        <div className='text-center mt-3'>         
          <h1>
              [icon]
              Lista de Tarefas
            </h1>
        </div>        
        {/* add tesk input */}
        <div className='text-center mt-3'>
          <input type='text' className='form-control col-8' placeholder='Adicionar Tarefa' />
          <button className='btn btn-success col-2'>Adicionar</button>
        </div>

        <hr className="col-6 mx-auto" />

        {/* list of tasks */}
        <div className='text-center mt-3 container'>
          {/* for each task display input editable, button to change status and button to delete*/}
          <div className="col-8">
            <div className="row d-flex w-100 justify-content-center">
              <div className="col-10">
                <div className="col-8">
                  <input type='text' className='form-control' value="Descrição tarefa 1" />                
                </div>
                <button className='btn btn-success col-2' title='Concluir'>Concluir</button>
                <button className='btn btn-danger col-2'>Excluir</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
