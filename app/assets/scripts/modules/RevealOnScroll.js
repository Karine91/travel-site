import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        const self = this;
        this.itemsToReveal.each(function() {
            const currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: () => {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: self.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;