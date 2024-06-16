import React from "react";
import "./VideoDetails.scss";
import SubSection from "./SubSection/SubSection";
import CommentsInput from "./CommentsInput/CommentsInput";
import CommentsDisplay from "./CommentsDisplay/CommentsDisplay";

function VideoDetails({ video}) {
    return (
        <section className="video-details">
            <section className="video-details__text">
                <h1 className="video-details__text-title">{video.title}</h1>
                <SubSection video={video} />
                <p className="video-details__text-description">
                    {video.description}
                </p>
                <section className="video-details__text-comments">
                    <h3 className="video-details__text-comments-title">
                        {video.comments.length}
                        {" "}
                        {video.comments.length === 1 ? ("Comment") : ("Comments")}
                    </h3>
                    <CommentsInput />
                    <CommentsDisplay video={video} />
                </section>
            </section>
        </section>
    )
}
export default VideoDetails;