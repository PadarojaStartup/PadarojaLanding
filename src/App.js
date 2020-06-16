import './style/main.scss';
import React, { Component } from 'react';

class App extends Component {
    state = {
        currentPageNumber: 1
    };

    getScroll = refIndex => () => {
        window.scrollTo({
            top: this[refIndex].current.offsetTop,
            behavior: 'smooth'
        });
        this.setState({ currentPageNumber: refIndex });
    };

    getRef = refIndex => {
        if (this[refIndex]) {
            return this[refIndex];
        }
        this[refIndex] = React.createRef();
        return this[refIndex];
    };

    getBarItemClassName = refIndex => {
        const { currentPageNumber } = this.state;
        let className = 'bar__item';
        if (currentPageNumber === refIndex) {
            className += ' bar__item--active';
        }
        return className;
    };

    renderBar = () =>
        <div className="bar">
            <div className="bar__item-container">
                <div className={this.getBarItemClassName(1)} onClick={this.getScroll(1)}></div>
            </div>
            <div className="bar__space"></div>
            <div className="bar__divider"></div>
            <div className="bar__space"></div>
            <div className="bar__item-container">
                <div className={this.getBarItemClassName(2)} onClick={this.getScroll(2)}></div>
            </div>
            <div className="bar__space"></div>
            <div className="bar__divider"></div>
            <div className="bar__space"></div>
            <div className="bar__item-container">
                <div className={this.getBarItemClassName(3)} onClick={this.getScroll(3)}></div>
            </div>
            <div className="bar__space"></div>
            <div className="bar__divider"></div>
            <div className="bar__space"></div>
            <div className="bar__item-container">
                <div className={this.getBarItemClassName(4)} onClick={this.getScroll(4)}></div>
            </div>
        </div>;

    render() {
        return (
            <div className="app">
                <div className="page top-page" ref={this.getRef(1)}>
                    {this.renderBar()}
                    <div className="top-page__body">
                        <div className="top-page__header">
                            Plan your travel quickly and easily
                        </div>
                        <div className="top-page__subheader">
                            Our self-service travel planning service helps you plan your trip in one evening.
                        </div>
                        <a href="" className="button button--dark">
                            Get started
                        </a>
                        <div className="top-page__slider slider"></div>
                    </div>
                </div>

                <div className="page how-it-works-page" ref={this.getRef(2)}>
                    {this.renderBar()}
                    <div className="how-it-works-page__body">
                        <div className="how-it-works-page__header">
                            How it works
                        </div>
                        <div className="how-it-works-page__steps-container">
                            <div className="how-it-works-page__steps-line">
                                <div className="how-it-works-page__step">
                                    <div className="how-it-works-page__step-header">
                                        Step 1
                                    </div>
                                    <div className="how-it-works-page__step-image">
                                        <img src="step-1.jgp" alt="" />
                                    </div>
                                    <div className="how-it-works-page__step-subheader">
                                        Choose the best tickets and accommodation
                                    </div>
                                </div>
                                <div className="how-it-works-page__step">
                                    <div className="how-it-works-page__step-header">
                                        Step 2
                                    </div>
                                    <div className="how-it-works-page__step-image">
                                        <img src="step-2.jgp" alt="" />
                                    </div>
                                    <div className="how-it-works-page__step-subheader">
                                        Select departure city and travel dates
                                    </div>
                                </div>
                                <div className="how-it-works-page__step">
                                    <div className="how-it-works-page__step-header">
                                        Step 3
                                    </div>
                                    <div className="how-it-works-page__step-image">
                                        <img src="step-3.jgp" alt="" />
                                    </div>
                                    <div className="how-it-works-page__step-subheader">
                                        Get personalized recommendations and choose the right route
                                    </div>
                                </div>
                            </div>
                            <div className="how-it-works-page__steps-line">
                                <div className="how-it-works-page__step">
                                    <div className="how-it-works-page__step-header">
                                        Step 4
                                    </div>
                                    <div className="how-it-works-page__step-image">
                                        <img src="step-4.jgp" alt="" />
                                    </div>
                                    <div className="how-it-works-page__step-subheader">
                                        Pay all in one click with no commissions
                                    </div>
                                </div>
                                <div className="how-it-works-page__step">
                                    <div className="how-it-works-page__step-header">
                                        Step 5
                                    </div>
                                    <div className="how-it-works-page__step-image">
                                        <img src="step-5.jgp" alt="" />
                                    </div>
                                    <div className="how-it-works-page__step-subheader">
                                        Your perfect trip is ready!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page features-page" ref={this.getRef(3)}>
                    {this.renderBar()}
                    <div className="features-page__body">
                        <div className="features-page__header">
                            Features
                        </div>
                        <div className="features-page__items-container">
                            <div className="features-page__items-line">
                                <div className="features-page__item">

                                </div>
                                <div className="features-page__item">

                                </div>
                                <div className="features-page__item">

                                </div>
                            </div>
                            <div className="features-page__items-line">
                                <div className="features-page__item">

                                </div>
                                <div className="features-page__item">

                                </div>
                                <div className="features-page__item">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page destinations-page" ref={this.getRef(4)}>
                    {this.renderBar()}
                    <div className="destinations-page__body">
                        <div className="destinations-page__header">
                            Travel destinations
                        </div>
                        <div className="destinations-page__items-container slider">
                            <div className="destinations-page__item">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="footer__left">
                        <img src="/images/footer-logo.svg" alt="" />
                        <div className="footer__label">
                            © 2020 ‐ Winc® All rights reserved
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__column">
                            <a href="" className="footer__label footer__link">F.A.Q.</a>
                            <a href="" className="footer__label">Contact us</a>
                        </div>
                        <div className="footer__column">
                            <a href="" className="footer__label">Connect with us</a>
                            <a href="" className="footer__label footer__link">michelle.rivera@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
