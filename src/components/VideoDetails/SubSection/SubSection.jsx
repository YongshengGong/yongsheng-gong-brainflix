import "./SubSection.scss";
function SubSection({ video }) {
    const time = new Date(video.timestamp).toLocaleDateString("en-us");
    return (
        <section className="video-details__container-subSection">
            <section className="video-details__container-subSection-container1">
                <span className="video-details__container-subSection-container1-channel">By {video.channel}</span>
                <span className="video-details__container-subSection-container1-time">{time}</span>
            </section>

            <section className="video-details__container-subSection-container2">
                <span className="video-details__container-subSection-container2-views">{video.views}</span>
                <span className="video-details__container-subSection-container2-likes">{video.likes}</span>
            </section>
        </section>
    )
}
export default SubSection;