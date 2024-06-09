import "./Upload.scss"
import Header from "../../components/Header/Header";
function Upload() {
    return (
        <>
            <Header></Header>
            <main className="upload">
                <span className="upload__title">Upload Video</span>
                <section className="upload__thumbnail">
                    <span className="upload__thumbnail-title">VIDEO THUMBNAIL</span>
                    <img src="" alt="" className="upload__thumbnail-content"/>
                </section>
                <form className="upload__form">
                    <label className="upload__form-label1">
                        <span>TITLE YOUR VIDEO</span>
                        <input type="text" />
                    </label>
                    <label className="upload__form-label2">
                        <span>ADD A VIDEO DESCRIPTION</span>
                        <textarea type="text" />
                    </label>
                    <button className="upload__form-button-publish">PUBLISH</button>
                    <button className="upload__form-button-cancel">CANCEL</button>
                </form>
            </main>
        </>
    )
}
export default Upload;