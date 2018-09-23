//defining a class
var YouTubeVideo = /** @class */ (function () {
    //a constructor which is used to initialize a class fields
    function YouTubeVideo(videoTitle, views, like, dislike, share, subscribe, Download) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.getNumberOfLikes = function () {
            return _this.like;
        };
        this.getNumberOfDislike = function () {
            return _this.dislike;
        };
        this.getNumberOFShares = function () {
            return _this.share;
        };
        this.getUserSubscribed = function () {
            return _this.subscribe;
        };
        this.getTimesVideoDownloaded = function () {
            return _this.Download;
        };
        this.videoTitle = videoTitle;
        this.views = views;
        this.like = like;
        this.dislike = dislike;
        this.share = share;
        this.subscribe = subscribe;
        this.Download = Download;
    } //end constructor
    return YouTubeVideo;
}()); //end class
var youtubeObj = new YouTubeVideo("how to play poker", 15000, 350, 25, 5000, "3k", 200);
var VideoTitle = youtubeObj.getVideoTitle();
var NumberOfViews = youtubeObj.getNumberOfViews();
var NumberOfLikes = youtubeObj.getNumberOfLikes();
var NumberOfDislikes = youtubeObj.getNumberOfDislike();
var NumberOfShares = youtubeObj.getNumberOFShares();
var UserSubscribed = youtubeObj.getUserSubscribed();
var TimesVideoDownloaded = youtubeObj.getTimesVideoDownloaded();
console.log(VideoTitle);
console.log(NumberOfViews);
console.log(NumberOfLikes);
console.log(NumberOfDislikes);
console.log(NumberOfShares);
console.log(UserSubscribed);
console.log(TimesVideoDownloaded);
