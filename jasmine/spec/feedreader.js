$(function () {
    var body = $('body'),
        menuIcon = $('.menu-icon-link'),
        container = $('.feed'),
        entry = $('.entry'),
        title = $('.header-title');

    // Feeds test suite
    describe('RSS Feeds', function () {

        // Test if feeds exist
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test if feeds URL exist
        it('URL is defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });

        // Test if feeds name exist
        it('name is defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });

    });


    // Menu test suite
    describe('The menu', function () {

        // Test if menu is hidden by default
        it('is hidden', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // Test if menu icon works
        it('icon works', function () {
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

    // Initial Entries test suite
    describe('Initial Entries', function () {

        // Load initial feeds
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        // Test if feed entries exist
        it('are loaded', function (done) {
            expect(container.find(entry).length).not.toBeLessThan(0);
            done();
        });

    });

    // New Feed Selection test suite
    describe('New Feed Selection', function () {
        var initialTitle = title.html(),
            initialEntries = container.html();
        
        // Switch feeds provider
        beforeEach(function (done) {
            loadFeed(1, function () {
                done();
            });
        });

        // Test if feed entries switch
        it('switch feeds', function (done) {
            expect(title.html()).not.toEqual(initialTitle);
            expect(container.html()).not.toEqual(initialEntries);
            done();
        });

    });
}());
