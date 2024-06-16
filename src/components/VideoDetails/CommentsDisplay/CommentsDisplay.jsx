import "./CommentsDisplay.scss"
function CommentsDisplay({ video }) {
    return (
        <section className="mainBottom__videoDetails-comments-display">
            {
                video.comments.map(
                    (comment, index, comments) => {
                        const time = new Date(comment.timestamp).toLocaleDateString("en-us");
                        return <article className={index === comments.length - 1 ?
                            "mainBottom__videoDetails-comments-display-comment mainBottom__videoDetails-comments-display-comment--last" :
                            "mainBottom__videoDetails-comments-display-comment"}
                            key={comment.id}>
                            <span className="mainBottom__videoDetails-comments-display-comment-left"></span>
                            <section className="mainBottom__videoDetails-comments-display-comment-right">
                                <section className="mainBottom__videoDetails-comments-display-comment-right-top">
                                    <span className="mainBottom__videoDetails-comments-display-comment-right-top-name">{comment.name}</span>
                                    <span className="mainBottom__videoDetails-comments-display-comment-right-top-time">{time}</span>
                                </section>
                                <p className="mainBottom__videoDetails-comments-display-comment-right-bottom">{comment.comment}</p>
                            </section>
                        </article>
                    }
                )
            }
        </section>
    )
}
export default CommentsDisplay;