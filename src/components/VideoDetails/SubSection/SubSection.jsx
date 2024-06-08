import "./SubSection.scss";
function SubSection({ video }) {
    const time = new Date(video.timestamp).toLocaleDateString("en-us");
    return (
        <section className="video-details__subSection">
            <section className="video-details__subSection-container">
                <section className="video-details__subSection-container-container1">
                    <span className="video-details__subSection-container-container1-channel">By {video.channel}</span>
                    <span className="video-details__subSection-container-container1-time">{time}</span>
                </section>

                <section className="video-details__subSection-container-container2">
                    <span className="video-details__subSection-container-container2-views">{video.views}</span>
                    <span className="video-details__subSection-container-container2-likes">{video.likes}</span>
                </section>
            </section>
        </section>
    )
}
export default SubSection;