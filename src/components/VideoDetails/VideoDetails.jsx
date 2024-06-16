import React from "react";
import "./VideoDetails.scss";
import SubSection from "./SubSection/SubSection";
import CommentsInput from "./CommentsInput/CommentsInput";
import CommentsDisplay from "./CommentsDisplay/CommentsDisplay";

function VideoDetails({ video }) {
    return (
        <section className="mainBottom__videoDetails">
            <h1 className="mainBottom__videoDetails-title">{video.title}</h1>
            <SubSection video={video} />
            <p className="mainBottom__videoDetails-description">
                {video.description}
            </p>
            <section className="mainBottom__videoDetails-comments">
                <h3 className="mainBottom__videoDetails-comments-title">
                    {video.comments.length}
                    {" "}
                    {video.comments.length <=1 ? ("Comment") : ("Comments")}
                </h3>
                <CommentsInput />
                <CommentsDisplay video={video} />
            </section>
        </section>
    )
}
export default VideoDetails;