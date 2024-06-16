import "./Player.scss"
function Player({video,api_key}) {
    return (
        <video className="Player"
            poster={`http://localhost:8080/${video.image}?api_key=${api_key}`} controls>
        </video>

    )
}
export default Player;