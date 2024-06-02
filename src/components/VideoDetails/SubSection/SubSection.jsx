function SubSection({video}) {
    return (
        <section className="video-details__subSection">
            <span className="video-details__subSection-channel">By {video.channel}</span>
            <span className="video-details__subSection-views">{video.views}</span>
            <span className="video-details__subSection-time">{video.timestamp}</span>
            <span className="video-details__subSection-likes">{video.timestamp}</span>
            <span  >{video.likes}</span>
        </section>
    )
}
export default SubSection;