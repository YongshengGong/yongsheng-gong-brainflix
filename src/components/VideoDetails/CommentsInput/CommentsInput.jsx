function CommentsInput() {
    return (
        <section className="video-details__comments-input">
            <span className="video-details__comments-input-avatar"></span>
            <form className="video-details__comments-input-form">
                <label className="video-details__comments-input-form-title">JOIN THE CONVERSATION</label>
                <textarea className="video-details__comments-input-form-field"></textarea>
                <button className="video-details__comments-input-form-button">COMMENT</button>
            </form>
        </section>
    )
}
export default CommentsInput;