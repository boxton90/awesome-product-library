import React from 'react'

export default (props) => {
    
    const bgImgContainerStyle = {
        backgroundImage: `url('${props.img}')`
    }
    
    return (
        <div>
            <div className="bg-img-container" style={bgImgContainerStyle} alt={props.title}></div>
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