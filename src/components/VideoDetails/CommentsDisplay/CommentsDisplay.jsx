import "./CommentsDisplay.scss"
function CommentsDisplay({ video }) {
    return (
        <section className="video-details__text-comments-display">
            {
                video.comments.map(
                    (comment, index, comments) => {
                        const time = new Date(comment.timestamp).toLocaleDateString("en-us");
                        return <article className={index === comments.length - 1 ?
                            "video-details__text-comments-display-comment video-details__text-comments-display-comment--last" :
                            "video-details__text-comments-display-comment"}
                            key={comment.id}>
                            <span className="video-details__text-comments-display-comment-left"></span>
                            <section className="video-details__text-comments-display-comment-right">
                                <section className="video-details__text-comments-display-comment-right-top">
                                    <span className="video-details__text-comments-display-comment-right-top-name">{comment.name}</span>
                                    <span className="video-details__text-comments-display-comment-right-top-time">{time}</span>
                                </section>
                                <p className="video-details__text-comments-display-comment-right-bottom">{comment.comment}</p>
                            </section>
                        </article>
                    }
                )
            }
        </section>
    )
}
export default CommentsDisplay;