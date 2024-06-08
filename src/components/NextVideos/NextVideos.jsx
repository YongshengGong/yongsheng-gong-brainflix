import "./NextVideos.scss"
import { Link } from "react-router-dom";
function NextVideos({ filteredList }) {

    return (
        <section className="next-videos">
            <span className="next-videos__title">NEXT VIDEOS</span>
            <section className="next-videos__display">
                {
                    filteredList.map(
                        video => {
                            return <article className="next-videos__display-video" key={video.id}>
                                <Link to={`/videos/${video.id}`} className="next-videos__display-video-left-image">
                                    <img src={video.image} alt={video.description} />
                                </Link>
                                <section className="next-videos__display-video-right">
                                    <span className="next-videos__display-video-right-top">{video.title}</span>
                                    <span className="next-videos__display-video-right-bottom">{video.channel}</span>
                                </section>
                            </article>
                        }
                    )
                }
            </section>
        </section>
    )
}
export default NextVideos;