import "./Upload.scss"
import Header from "../../components/Header/Header";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Upload() {
    const nav = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({ title: false, description: false });

    function handlePublish(e) {
        e.preventDefault();
        let newErrors = { title: false, description: false };
        if (!title) {
            newErrors.title = true;
        }
        if (!description) {
            newErrors.description = true;
        }
        setErrors(newErrors);
        if (!newErrors.title && !newErrors.description) {
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
                    <img src={uploadImage} alt="An athlete getting ready to sprint" className="upload__thumbnail-content" />
                </section>
                <form className="upload__form" onSubmit={e => handlePublish(e)}>
                    <label className="upload__form-label1">
                        <span>TITLE YOUR VIDEO</span>
                        <input type="text"
                            placeholder="Add a title to your video"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className={errors.title ?
                                'upload__form-label1-input upload__form-label1-input--error' :
                                'upload__form-label1-input'}
                        />
                    </label>
                    <label className="upload__form-label2">
                        <span>ADD A VIDEO DESCRIPTION</span>
                        <textarea type="text"
                            placeholder="Add a description to your video"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className={errors.description ?
                                'upload__form-label2-textArea upload__form-label2-textArea--error' :
                                'upload__form-label2-textArea'}
                        />
                    </label>
                    <section className="upload__form-button">
                        <button type="submit" className="upload__form-button-publish">PUBLISH</button>
                        <button type="button" className="upload__form-button-cancel"
                            onClick={() => { setDescription(""); setTitle(""); setErrors({ title: false, description: false }) }}
                        >CANCEL</button>
                    </section>
                </form>
            </main>
        </>
    )
}
export default Upload;