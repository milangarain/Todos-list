import { getQueriesForElement } from '@testing-library/react';
import React from 'react';

export const Footer = () => {
    let myStyle = {
        position: 'absolute',
        color: 'green',
        top: '100vh',
        width: '100%',
        textAlign: 'center'
    }
    return (
        <div>
            <p className='bg-dark py-2' style = {myStyle}>Copyright &copy; TodoList</p>
        </div>
    )
}
