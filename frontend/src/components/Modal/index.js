import React, { useState } from 'react'
import AtomCrawlText from '../AtomCrawlText'

export default function Modal({ children }) {
    return (
        <>
            {/* <button onClick={() => setIsVisible(false)}>close</button> */}
            <div className="content">
                {children}
            </div>
            {/* <AtomCrawlText crawl={crawl} /> */}
        </>
    )
}
