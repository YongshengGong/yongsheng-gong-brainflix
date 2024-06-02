import "./CommentsDisplay.scss"
function CommentsDisplay({ video }) {
    return (
        <section className="video-details__container-comments-display">
            {
                video.comments.map(
                    comment => {
                        return <article className="video-details__container-comments-display-comment">
                                  <span className="video-details__container-comments-display-comment-left"></span>
                                  <section className="video-details__container-comments-display-comment-right">
                                    <section className="video-details__container-comments-display-comment-right-top">
                                       <span className="video-details__container-comments-display-comment-right-top-name">{comment.name}</span>
                                       <span className="video-details__container-comments-display-comment-right-top-time">{comment.timestamp}</span>
                                    </section>   
                                    <p className="video-details__container-comments-display-comment-right-bottom">{comment.comment}</p>
                                  </section>
                               </article>
                    }
                )
            }
        </section>
    )
}
export default CommentsDisplay;