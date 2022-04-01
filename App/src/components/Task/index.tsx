/**
 * Componente que renderiza uma tarefa
 */
import React from 'react';
import { connect } from 'react-redux';

const Task = ({ task }) => (
    <div key={task.id}>
        <h2>{task.description}</h2>
        <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
);

export default connect(state => ({task}))(Task);
