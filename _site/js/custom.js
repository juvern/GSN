$(document).ready(function() {

	    var feed = new Instafeed({
        get: 'user',
        limit: 4,
        resolution: 'thumbnail',
        userId: '5925624022',
        accessToken: '5925624022.1677ed0.6d71348a4f2d4fbfaa90f0f1dd276312',
        sortBy: 'most-recent',
        // template: '<div class="col insta"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"/></a></div>',
    });
    feed.run();
});