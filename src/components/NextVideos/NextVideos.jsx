import "./NextVideos.scss"

function NextVideos({videos,check}) {
    function handleClick(id){
       check(id);
    }
    return (
        <section className="next-videos">
            <span className="next-videos__title">NEXT VIDEOS</span>
            <section className="next-videos__display">
                {
                    videos.map(
                        video => {
                            return <article className="next-videos__display-video" key={video.id}>
                                      <img className="next-videos__display-video-left-image"
                                         src={video.image} 
                                         alt={video.description} 
                                         onClick={()=>{handleClick(video.id)}}
                                      />
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