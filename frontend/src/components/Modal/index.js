import React from 'react'
import AtomCrawlText from '../AtomCrawlText'
import './style.scss';

export default function Modal({ crawl, children, onClose = () => { } }) {
    return (
        <div className="modal">
            <div className="content">
                <button onClick={onClose}>Pular você pode</button>
                {children}
            </div>
        </div>
    )
}
