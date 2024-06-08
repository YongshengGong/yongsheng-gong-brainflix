import "./CommentsInput.scss"
function CommentsInput() {
    return (
        <section className="video-details__comments-input">
            <span className="video-details__comments-input-avatar"></span>
            <form className="video-details__comments-input-form">
                <section className="video-details__comments-input-form-container">
                    <label className="video-details__comments-input-form-container-title">JOIN THE CONVERSATION</label>
                    <textarea className="video-details__comments-input-form-container-field" placeholder="Add a new comment"></textarea>
                </section>
                <button className="video-details__comments-input-form-button">COMMENT</button>
            </form>
        </section>
    )
}
export default CommentsInput;
