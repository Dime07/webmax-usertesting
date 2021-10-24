import { Player } from 'video-react';


export default function Video({colorVideo, url}){
    return(
        <div className="video bg-peach-light py-24 flex justify-center align-middle" style={{backgroundColor : colorVideo}}>
            <div className="video-wrap">
                {url == undefined &&(
                    <Player
                    autoplay="true"
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                )}
                {url !== undefined &&(
                    <Player
                    autoplay="true"
                    playsInline
                    poster="/assets/poster.png"
                    src={url}
                    />
                )}
                
            </div>
        </div>
    )
}