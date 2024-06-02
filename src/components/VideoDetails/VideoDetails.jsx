import React from "react";
import "./VideoDetails.scss";
import SubSection from "./SubSection/SubSection";
import CommentsInput from "./CommentsInput/CommentsInput";
function VideoDetails({video}) {
    return (
        <section className="video-details">
             <video className="video-details__play" poster={video.image} controls></video>
             <h1 className="video-details__title">{video.title}</h1>
             <SubSection video={video}/>
             <p className="video-details__description">
                {video.description}
             </p>
             <section className="video-details__comments">
                 <h3 className="video-details__comments-title">{video.comments.length} {video.comments.length===1?("Comment"):("Comments")}</h3>
                 <CommentsInput video={video}/>
                 <section className="video-details__comments-display">
                     {
                        video.comments.map(
                            comment=>{
                               return <article className="video-details__comments-display-comment">
                                          <span className="video-details__comments-display-comment-left"></span>
                                          <section className="video-details__comments-display-comment-right">
                                               <span className="video-details__comments-display-comment-right-name">{comment.name}</span>
                                               <span className="video-details__comments-display-comment-right-time">{comment.timestamp}</span>
                                               <p className="video-details__comments-display-comment-right-content">{comment.comment}</p>
                                          </section>
                                      </article>
                            }
                        )
                     }
                 </section>
             </section>
        </section>
    )
}
export default VideoDetails;