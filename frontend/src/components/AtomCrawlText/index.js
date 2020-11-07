import React from 'react'
import './style.scss'

export default function AtomCrawlText({ id_chapter, title, crawl }) {
    return (
        <div>
            <div className="fade"></div>
            <section className="star-wars">
                <div className="crawl">
                    <p className="chapter">Episode {id_chapter}</p>
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <p className="text">{crawl}</p>
                </div>
            </section>
        </div>
    )
}
