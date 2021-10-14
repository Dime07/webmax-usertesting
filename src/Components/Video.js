import { Player } from 'video-react';


export default function Video(){
    return(
        <div className="video bg-peach-light py-24 flex justify-center align-middle">
            <div style={{width: "800px", height: "fit-content"}}>
                <Player
                    autoplay="true"
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div>
        </div>
    )
}