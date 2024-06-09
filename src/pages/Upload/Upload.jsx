import "./Upload.scss"
import Header from "../../components/Header/Header";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
function Upload() {
    const nav = useNavigate();
    function handlePublish(e) {
        e.preventDefault();
        if (!e.target.title.value) {
            e.target.title.style.borderColor = "#D22D2D";
            e.target.description.style.borderColor = "#E1E1E1";
        }
        else if (!e.target.description.value) {
            e.target.title.style.borderColor = "#E1E1E1";
            e.target.description.style.borderColor = "#D22D2D";
        }
        else {
            e.target.description.style.borderColor = "#E1E1E1";
            e.target.title.style.borderColor = "#E1E1E1";
            const user = confirm(`The video has been uploaded successfully✅\nClick "OK" to go back to homepage.`);
            if (user === true) {
                nav("/");
            }
        }
    }
    return (
        <>
            <Header></Header>
            <main className="upload">
                <span className="upload__title">Upload Video</span>
                <section className="upload__thumbnail">
                    <span className="upload__thumbnail-title">VIDEO THUMBNAIL</span>
                    <img src={uploadImage} alt="" className="upload__thumbnail-content" />
                </section>
                <form className="upload__form" onSubmit={e => handlePublish(e)}>
                    <label className="upload__form-label1">
                        <span>TITLE YOUR VIDEO</span>
                        <input type="text" placeholder="Add a title to your video" name="title" />
                    </label>
                    <label className="upload__form-label2">
                        <span>ADD A VIDEO DESCRIPTION</span>
                        <textarea type="text" placeholder="Add a description to your video" name="description" />
                    </label>
                    <section className="upload__form-button">
                        <button type="submit" className="upload__form-button-publish">PUBLISH</button>
                        <button className="upload__form-button-cancel">CANCEL</button>
                    </section>
                </form>
            </main>
        </>
    )
}
export default Upload;