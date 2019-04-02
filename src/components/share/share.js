import React from 'react'
import twitterIcon from '../../assets/images/twitter.png'
import fbIcon from '../../assets/images/facebook.png'
import './share.scss'

const Share = props => {

    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by Gastroverdict`;

    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}`;

    return (
        <div className="share">
            <h3 className="share__title">Share</h3>
            <ul className="share__items">
                <li>
                    <a href={fb} target="blank">
                        <img src={fbIcon} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href={twitter} target="blank">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Share;