function CommentsDisplay({ video }) {
    return (
        <section className="video-details__comments-display">
            {
                video.comments.map(
                    comment => {
                        return <article className="video-details__comments-display-comment">
                            <span className="video-details__comments-display-comment-left"></span>
                            <section className="video-details__comments-display-comment-right">
                                <span className="video-details__comments-display-comment-right-name">{comment.name}</span>
                                <span className="video-details__comments-display-comment-right-time">{comment.timestamp}</span>
                                <p className="video-details__comments-display-comment-right-content">{comment.comment}</p>
                            </section>
                        </article>
                    }
                )
            }
        </section>
    )
}
export default CommentsDisplay;