import React from 'react'

export default (props) => {
    return (
        <div>
            <div className="bg-img-container random-bg-img"></div>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h3 className="is-size-3"><strong>{props.title}</strong></h3>
                        <p>{props.desc}</p>
                        <a className="button is-primary is-outlined is-medium">Buy</a>
                    </div>
                </div>
            </article>
        </div>
    )
}