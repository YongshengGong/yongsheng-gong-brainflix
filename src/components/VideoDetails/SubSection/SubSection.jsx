import "./SubSection.scss";
function SubSection({ video }) {
    const time = new Date(video.timestamp).toLocaleDateString("en-us");
    return (
        <section className="mainBottom__videoDetails-subSection">
            <section className="mainBottom__videoDetails-subSection-container">
                <section className="mainBottom__videoDetails-subSection-container-container1">
                    <span className="mainBottom__videoDetails-subSection-container-container1-channel">By {video.channel}</span>
                    <span className="mainBottom__videoDetails-subSection-container-container1-time">{time}</span>
                </section>

                <section className="mainBottom__videoDetails-subSection-container-container2">
                    <span className="mainBottom__videoDetails-subSection-container-container2-views">{video.views}</span>
                    <span className="mainBottom__videoDetails-subSection-container-container2-likes">{video.likes}</span>
                </section>
            </section>
        </section>
    )
}
export default SubSection;