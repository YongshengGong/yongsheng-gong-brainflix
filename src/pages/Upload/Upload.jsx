import "./Upload.scss"
import Header from "../../components/Header/Header";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
function Upload() {
    return (
        <>
            <Header></Header>
            <main className="upload">
                <span className="upload__title">Upload Video</span>
                <section className="upload__thumbnail">
                    <span className="upload__thumbnail-title">VIDEO THUMBNAIL</span>
                    <img src={uploadImage} alt="" className="upload__thumbnail-content" />
                </section>
                <form className="upload__form">
                    <label className="upload__form-label1">
                        <span>TITLE YOUR VIDEO</span>
                        <input type="text" placeholder="Add a title to your video" />
                    </label>
                    <label className="upload__form-label2">
                        <span>ADD A VIDEO DESCRIPTION</span>
                        <textarea type="text" placeholder="Add a description to your video" />
                    </label>
                    <section className="upload__form-button">
                        <button className="upload__form-button-publish">PUBLISH</button>
                        <button className="upload__form-button-cancel">CANCEL</button>
                    </section>
                </form>
            </main>
        </>
    )
}
export default Upload;