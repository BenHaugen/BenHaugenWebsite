import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'


import thumb03 from '../assets/images/thumbs/pickup3.png'
import thumb04 from '../assets/images/thumbs/pro.png'
import thumb05 from '../assets/images/thumbs/cards.png'
import thumb06 from '../assets/images/thumbs/event.png'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import ben from '../assets/images/ben3.jpg'

const DEFAULT_IMAGES = [
    { id: '3', src: full03, thumbnail: thumb03, caption: <a href="https://benhaugen.github.io/pickupfrontend/" target="_blank">PickUp</a>, description: 'Built with React.js, Ruby on Rails and PostgreSQL, PickUp allows users to search their area for a variety of pick-up sports games. Users can also organize their own pick-up games.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: <a href="https://pro-fitness.herokuapp.com/" target="_blank">Pro Fitness</a>, description: 'Created primarily with Ruby on Rails, Pro Fitness allows users to input past workouts, look at their progressions and get inspiration on workouts to do in the future.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: <a href="https://basketballcards.herokuapp.com/" target="_blank">Basketball Cards</a>, description: 'This React.js application allows users to view current and former NBA players, add them to their roster and see if their team can outscore some of the greatest historical teams in NBA history!'},
    { id: '6', src: full06, thumbnail: thumb06, caption: <a href="https://eventmatcher2019.herokuapp.com/" target="_blank">EventMatchr</a>, description: 'Using vanilla JavaScript and TicketMasters API, EventMatchr allows users to look for events in their area, save favorited events and purchase tickets through TicketMaster affiliates.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                      <img src={ben} alt="ben" />
                        <header className="major">
                            <h2>How I Got Here</h2>
                        </header>
                        <p>Before starting my coding career at Flatiron, I worked in a variety of different roles, all around the world. Most recently I have had the pleasure of teaching younger kids. In the United States, I was involved in a few different programs in which I taught children the fundamentals of both golf and tennis. Abroad, specifically Spain and Vietnam, I taught English as a second language to mostly elementary school students. </p>
                        <p>These experiences, especially teaching English, really helped sharpen my mind and allowed me to become an excellent communicator. When people don’t speak the same language as you, having effective communication that goes beyond just words is integral. This particular skill has allowed for a pretty smooth transition into code because I didn’t always speak the coding “language” that my peers or instructors taught, but I was still able to effectively communicate with them and have a good understanding of what was going on. This will be really beneficial as my coding career progresses. My other jobs in sports, sales and customer service have made me a really well rounded person and I know that I can thrive in any work environment I am put in.</p>
                        <p>I decided to make a career change and attend Flatiron because I really want to be able to help create the sorts of things that I use every day. Websites and applications are something that I have used not only in my spare time but during all my jobs as well. It would be extremely difficult to teach another language without some of the tools that amazing developers have created. Technology isn’t just the future, it’s the present and I really want to put my brain power to the ultimate test and help create applications that will be used by tens of thousands of people and really help benefit their way of life. Web applications don’t just bring joy to peoples’ lives but they make them easier and much less stressful. I want to be a part of that. </p>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, thumbnail, caption, description }) => ({

                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>If you think I would be a good fit for your organization or simply want to learn a little more about me, please do not hesitate to reach out.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">


                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        360-907-2076
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        benhaugen88@gmail.com
                                    </li>
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        4541 W Sheridan St<br />
                                        Seattle, WA 98199<br />
                                        United States
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex