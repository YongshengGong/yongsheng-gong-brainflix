import "./NextVideos.scss"
import { Link } from "react-router-dom";
function NextVideos({ filteredList, api_key }) {

    return (
        <section className="mainBottom__next-videos">
            <span className="mainBottom__next-videos-title">NEXT VIDEOS</span>
            <section className="mainBottom__next-videos-display">
                {
                    filteredList.map(
                        video => {
                            return <article className="mainBottom__next-videos-display-video" key={video.id}>
                                <Link to={`/videos/${video.id}`} className="mainBottom__next-videos-display-video-left-image">
                                    <img src={`http://localhost:8080/${video.image}?api_key=${api_key}`} alt={video.title} />
                                </Link>
                                <section className="mainBottom__next-videos-display-video-right">
                                    <span className="mainBottom__next-videos-display-video-right-top">{video.title}</span>
                                    <span className="mainBottom__next-videos-display-video-right-bottom">{video.channel}</span>
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