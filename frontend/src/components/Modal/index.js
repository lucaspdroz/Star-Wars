import React, { useState } from 'react'
import AtomCrawlText from '../AtomCrawlText'

export default function Modal({ crawl, children, onClose = () => { } }) {
    return (
        <>
            <button onClick={onClose}>close</button>
            <div className="content">
                {children}
                <AtomCrawlText crawl={crawl} />
            </div>
        </>
    )
}
