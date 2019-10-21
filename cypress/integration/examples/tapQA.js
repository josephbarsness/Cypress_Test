describe('TapQA Test', function() {
    it('checks TapQA page', function() {
        cy.visit('https://www.tapqa.com/').wait(1000)
        // Clicking the responsive dropdown
        cy.get('#wrapper > header > div.fusion-header-v3.fusion-logo-left.fusion-sticky-menu-.fusion-sticky-logo-1.fusion-mobile-logo-1.fusion-mobile-menu-design-modern > div.fusion-header > div > div.fusion-mobile-menu-icons > a').click();
        // Selecting each page
        cy.request('/about-us/').get('<h1>About Us</h1>')
            .request('solutions/').get('<h1>Solutions</h1>')
            .request('events/').get('<h1>Events</h1>')
            .request('careers/').get('<h1>Careers</h1>')
            .request('partners/').get('<h1>Partners</h1>')
            .request('contact-us/').get('<h1>Contact Us</h1>')
    });
});