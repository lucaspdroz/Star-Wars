import React from 'react'
import './style.scss';

export default function Modal({ children, onClose = () => { } }) {
    return (
        <div className="modal">
            <div className="content">
                <button onClick={onClose}>Pular você pode</button>
                {children}
            </div>
        </div>
    )
}
