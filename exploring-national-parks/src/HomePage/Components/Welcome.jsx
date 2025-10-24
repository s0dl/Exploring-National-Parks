import React from 'react'
import { useEffect } from 'react'

/**
 * Component representing the welcome section of the homepage.
 * @module Welcome
 * @memberof HomePage
 * @returns {JSX.Element} The rendered welcome section.
 */
const Welcome = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <div className = "welcome">
            <h1 className = "welcome-title">Explore National Parks</h1>
            <p className = "welcome-text">
                Welcome to Exploring National Parks! This web app is designed to help you find the perfect national park for your next trip. 
                Click on the "Park Search" button to search for a park by activity, or click on the "Plan A Trip" button to plan a trip to a park you've already selected.
            </p>
            <div>
                <a className="twitter-timeline" data-lang="en" data-height="300"  href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw">Tweets by TempleUniv</a> 
            </div>
        </div>
    )
}

export default Welcome