import React from 'react'
import './style.scss'

export default function AtomCrawlText({ id_chapter, title, crawl }) {
    return (
        <div>
            <div className="fade"></div>
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                        <p>{id_chapter}</p>
                        <h3>{title}</h3>
                    </div>
                    <p>{crawl}</p>
                </div>
            </section>
        </div>
    )
}
