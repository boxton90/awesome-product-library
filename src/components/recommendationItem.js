import React from 'react'

export default (props) => {
    return (
        <article className="media">
            <div className="media-left">
                <figure className="image is-128x128">
                    <img src="https://source.unsplash.com/random/128x128" alt="Image"></img>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{props.title}</strong>
                        <br></br>
                        {props.desc}
                  </p>
                  <a className="button is-primary is-outlined">Buy</a>
                </div>
            </div>
        </article>
    )
}