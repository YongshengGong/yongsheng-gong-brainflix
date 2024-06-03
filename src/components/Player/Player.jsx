import "./Player.scss"
function Player({video}){
    return (
        <video className="player"
        poster={video.image} controls>
        </video>
    )
}
export default Player;