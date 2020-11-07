import React from 'react';
import './style.scss';

export default function Modal(props) {
    const { children, onClose } = props;

    return (
        <div className="modal">
            <div className="content">
                <button onClick={onClose}>Skip can you!</button>
                {children}
            </div>
        </div >
    )
}
