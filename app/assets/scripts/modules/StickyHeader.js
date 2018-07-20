import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.on('load', () => {
            Waypoint.refreshAll();
        });
    }

    addSmothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: (direction) => {
                if (direction == 'down') {
                    this.siteHeader.addClass('site-header--dark');
                    this.siteHeader.find('.btn').addClass('btn--orange');
                } else {
                    this.siteHeader.removeClass('site-header--dark');
                    this.siteHeader.find('.btn').removeClass('btn--orange');
                }
            }
        });
    }

    createPageSectionWaypoints() {
        const self = this;
        this.pageSections.each(function() {
            let currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if (direction == 'down') {
                        let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        self.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');   
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if (direction == 'up') {
                        let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        self.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');   
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;