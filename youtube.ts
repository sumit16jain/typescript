//defining a class
class YouTubeVideo{
//fields or properties
public videoTitle:string;
public views:number;
public like:number;
public dislike:number;
public share:number;
public subscribe:string;
public Downloads:number;


//a constructor which is used to initialize a class fields
constructor(videoTitle:string,views:number,like:number,dislike:number,share:number,subscribe:string,Downloads:number){
    this.videoTitle=videoTitle;
    this.views=views;
    this.like=like;
    this.dislike=dislike;
    this.share=share;
    this.subscribe=subscribe;
    this.Downloads=Downloads;
    
}//end constructor

getVideoTitle=()=>{
    return this.videoTitle
}

getNumberOfViews=()=>{
    return this.views
}

getNumberOfLikes=()=>{
    return this.like
}

getNumberOfDislike=()=>{
    return this.dislike
}

getNumberOFShares=()=>{
    return this.share
}

getUserSubscribed=()=>{
    return this.subscribe
}

getTimesVideoDownloaded=()=>{
    return this.Download
}

}//end class

let youtubeObj=new YouTubeVideo("how to play poker",15000,350,25,5000,"3k",200)
let VideoTitle=youtubeObj.getVideoTitle()
let NumberOfViews=youtubeObj.getNumberOfViews()
let NumberOfLikes=youtubeObj.getNumberOfLikes()
let NumberOfDislikes=youtubeObj.getNumberOfDislike()
let NumberOfShares=youtubeObj.getNumberOFShares()
let UserSubscribed=youtubeObj.getUserSubscribed()
let TimesVideoDownloaded=youtubeObj.getTimesVideoDownloaded()

console.log(VideoTitle)
console.log(NumberOfViews)
console.log(NumberOfLikes)
console.log(NumberOfDislikes)
console.log(NumberOfShares)
console.log(UserSubscribed)
console.log(TimesVideoDownloaded)

