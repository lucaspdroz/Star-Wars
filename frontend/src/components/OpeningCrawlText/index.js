import React from 'react'

export default function OpeningCrawlText({ id_chapter, title, text }) {
    return (
        <div className="opening-crawl-text">
            <h2 className="id_chapter">{id_chapter}</h2>
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
        </div>
    )
}
