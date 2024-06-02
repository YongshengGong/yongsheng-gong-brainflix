import "./SubSection.scss";
function SubSection({ video }) {
  const time=new Date(video.timestamp).toLocaleDateString("en-us");
    return (
        <section className="video-details__container-subSection">
            <span className="video-details__container-subSection-channel">By {video.channel}</span>
            <span className="video-details__container-subSection-views">{video.views}</span>
            <span className="video-details__container-subSection-time">{time}</span>
            <span className="video-details__container-subSection-likes">{video.likes}</span>
        </section>
    )
}
export default SubSection;