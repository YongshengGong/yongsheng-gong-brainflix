import "./CommentsInput.scss"
function CommentsInput() {
    return (
        <section className="mainBottom__videoDetails-comments-input">
            <span className="mainBottom__videoDetails-comments-input-avatar"></span>
            <form className="mainBottom__videoDetails-comments-input-form">
                <section className="mainBottom__videoDetails-comments-input-form-container">
                    <label className="mainBottom__videoDetails-comments-input-form-container-title">JOIN THE CONVERSATION</label>
                    <textarea className="mainBottom__videoDetails-comments-input-form-container-field" placeholder="Add a new comment"></textarea>
                </section>
                <button className="mainBottom__videoDetails-comments-input-form-button">COMMENT</button>
            </form>
        </section>
    )
}
export default CommentsInput;
