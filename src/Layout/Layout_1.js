import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Solusi from "../Components/Solusi"
import Modal from 'react-modal';
import { useState } from "react";
import ButtonEdit from "../Components/ButtonEdit";
import ModalHero from "../Components/ModalHero";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor : '#19162B',
      width : '650px',
      borderRadius : '10px'
    },
  };

// import ReactDOMServer from 'react-dom/server'

export default function Layout_1() {
    
    // let coba = ReactDOMServer.renderToString(<Navbar />);
    // console.log(coba);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [warna, setWarna] = useState("#FF8D50")

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function getColor(color){
        setWarna(color)
        console.log(warna)
    }
    
    return(
        <div className="Layout-1 ">
            <div id="navbar">
                {/* Navbar */}
                <Navbar />
                {/* hero section */}
                <div className="hero-edit relative">
                    <Hero headercolor={warna}/>
                    <div onClick={openModal} className="cursor-pointer button-edit-div">
                        <ButtonEdit  />
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <ModalHero sendColor={getColor}/>
                    </Modal>
                </div>
                {/* solsusi section */}
                <div className="solusi-edit relative">
                    <Solusi />
                </div> 
            </div>

        </div>
    )
}