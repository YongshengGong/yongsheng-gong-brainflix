import React from "react";
import "./VideoDetails.scss";
import SubSection from "./SubSection/SubSection";
import CommentsInput from "./CommentsInput/CommentsInput";
import CommentsDisplay from "./CommentsDisplay/CommentsDisplay";

function VideoDetails({ video }) {
    return (
        <section className="video-detail">
            <video className="video-detail__player"
                poster={video.image} controls>
            </video>
            <section className="video-details">
                <h1 className="video-details__title">{video.title}</h1>
                <SubSection video={video} />
                <p className="video-details__description">
                    {video.description}
                </p>
                <section className="video-details__comments">
                    <h3 className="video-details__comments-title">
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