import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './AnimatedText.css';

function AnimatedText() {
    const textArray = [
        "Front-End Developer",
        "Freelancer",
        "Web Developer",
        "OpenSourceContributor"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-wrapper">
            <TransitionGroup>
                <CSSTransition
                    key={currentIndex}
                    timeout={500}
                    classNames="fade"
                >
                    <div className="text-content">
                        {textArray[currentIndex]}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default AnimatedText;
