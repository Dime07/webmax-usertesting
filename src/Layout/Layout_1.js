import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Solusi from "../Components/Solusi";
import Fitur from "../Components/Fitur";
import Testimoni from "../Components/Testimoni";
import Garansi from "../Components/Garansi";
import Diskon from "../Components/Diskon";
import { useState } from "react";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
// ------MODAL-----
import Modal from 'react-modal';
import ButtonEdit from "../Components/ButtonEdit";
import ModalHero from "../Components/Modal/ModalHero";
import ModalSolusi from "../Components/Modal/ModalSolusi";
import ModalVideo from "../Components/Modal/ModalVideo";
import ModalFitur from "../Components/Modal/ModalFitur";
import ModalTestimoni from "../Components/Modal/ModalTestimoni";
import ModalDiskon from "../Components/Modal/ModalDiskon";
import ModalCTA from "../Components/Modal/ModalCTA";
import ModalFooter from "../Components/Modal/ModalFooter";
import ModalGaransi  from "../Components/Modal/ModalGaransi";

import Video from "../Components/Video";
import axios from "axios";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor : '#19162B',
      width : '65%',
      borderRadius : '10px',
    },

  };

// import ReactDOMServer from 'react-dom/server'



export default function Layout_1() {
    const [warna, setWarna] = useState("#FF8D50")
    const [data, setData] = useState([]);
    const [inputdata, setInputdata] = useState();
    function getColor(color){
        setWarna(color)
        console.log(warna)
    }

    // useEffect(() => {
    //     ambildata();
    // }, [])

    //----- get api -----
    // function ambildata() { 
    //     axios
    //     .get(`http://localhost:8000/api/shops/shop_style/1`)
    //     .then((res)=>{
    //       setData(res.data)
         
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
      
    // }

    function storeData(inputdata) { 
        // console.log(inputbook);
        // alert("Data berhasil ditambahkan!")
        axios
          .put("http://localhost:8000/api/shops/shop_style/1", inputdata)
          .then(()=>{
            setInputdata((prevdata) => [...prevdata, inputdata]);
          })
          .catch((error) => {
            console.log(error.response.data);
          })
      }
    
      console.log(inputdata)
    
    
    // let coba = ReactDOMServer.renderToString(<Navbar />);
    // console.log(coba);

    // ----modal hero section----- 
    const [modalHeroIsOpen, setIsHeroOpen] = useState(false);

    function openModalHero() {
        setIsHeroOpen(true);
    }

    function closeModalHero() {
        setIsHeroOpen(false);
    }

    // -----modal solusi section------
    const [modalSolusiIsOpen, setIsSolusiOpen] = useState(false);

    function openModalSolusi() {
        setIsSolusiOpen(true);
    }

    function closeModalSolusi(){
        setIsSolusiOpen(false)
    }

    // -----modal video section-----
    const [modalVideoIsOpen, setIsVideoOpen] = useState(false);

    function openModalVideo() {
        setIsVideoOpen(true);
    }

    function closeModalVideo(){
        setIsVideoOpen(false)
    }

    // ----modal Fitur Section----
    const [modalFiturIsOpen, setIsFiturOpen] = useState(false);

    function openModalFitur() {
        setIsFiturOpen(true);
    }

    function closeModalFitur(){
        setIsFiturOpen(false)
    }

    // ----modal testimoni ----
    const [modalTestimoniIsOpen, setIsTestimoniOpen] = useState(false);

    function openModalTestimoni() {
        setIsTestimoniOpen(true);
    }

    function closeModalTestimoni(){
        setIsTestimoniOpen(false)
    }

    // --- modal garansi-----
    const [modalGaransiIsOpen, setIsGaransiOpen] = useState(false);

    function openModalGaransi() {
        setIsGaransiOpen(true);
    }

    function closeModalGaransi(){
        setIsGaransiOpen(false)
    }

    //--- modal diskon
    const [modalDiskonIsOpen, setDiskonIsOpen] = useState(false);

    function openModalDiskon() {
        setDiskonIsOpen(true);
    }

    function closeModalDiskon(){
        setDiskonIsOpen(false)
    }

     //--- modal CTA
     const [modalCTAIsOpen, setCTAIsOpen] = useState(false);

     function openModalCTA() {
         setCTAIsOpen(true);
     }
 
     function closeModalCTA(){
         setCTAIsOpen(false)
     }

      //--- modal Footer
      const [modalFooterIsOpen, setFooterIsOpen] = useState(false);

      function openModalFooter() {
          setFooterIsOpen(true);
      }
  
      function closeModalFooter(){
          setFooterIsOpen(false)
      }

     

    return(
        <div className="Layout-1 ">
            <div id="navbar">
                {/* Navbar */}
                <Navbar />
            </div>
            {/* hero section */}
            <div className="hero-edit relative">
                <Hero headercolor={warna} konten={data}/>
                <div onClick={openModalHero} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalHeroIsOpen}
                    onRequestClose={closeModalHero}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalHero sendColor={getColor} sendData={storeData}/>
                </Modal>
            </div>
            {/* solsusi section */}
            <div className="solusi-edit relative">
                <Solusi />
                <div onClick={openModalSolusi} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalSolusiIsOpen}
                    onRequestClose={closeModalSolusi}
                    style={customStyles}
                    contentLabel="Example Modal"
                >  
                    <ModalSolusi />
                    
                </Modal>
            </div> 

            <div className="video-edit relative">
                <Video />
                <div onClick={openModalVideo} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalVideoIsOpen}
                    onRequestClose={closeModalVideo}
                    style={customStyles}
                    contentLabel="Example Modal"
                >  
                    <ModalVideo />
                    
                </Modal>
            </div>

            <div className="fitur-edit relative">
                <Fitur />
                <div onClick={openModalFitur} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalFiturIsOpen}
                    onRequestClose={closeModalFitur}
                    style={customStyles}
                    contentLabel="Example Modal"
                >  
                    {/* FITUR BELUM SELESAI MODALNYA */}
                    <ModalFitur />
                    
                </Modal>
            </div>

            <div className="testimoni-edit relative">
                <Testimoni />
                <div onClick={openModalTestimoni} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalTestimoniIsOpen}
                    onRequestClose={closeModalTestimoni}
                    style={customStyles}
                    contentLabel="Example Modal"
                >  
                    <ModalTestimoni />
                    
                </Modal>
            </div>
            
            <div  className="Garansi-edit relative">
                <Garansi />
                <div onClick={openModalGaransi} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalGaransiIsOpen}
                    onRequestClose={closeModalGaransi}
                    style={customStyles}
                    contentLabel="Example Modal"
                >  
                    <ModalGaransi />
                    
                </Modal>
            </div>

            <div className="Diskon-edit relative">
                <Diskon />
                <div onClick={openModalDiskon} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalDiskonIsOpen}
                    onRequestClose={closeModalDiskon}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalDiskon />
                </Modal>
            </div>

            <div className="cta-edit relative">
                <CTA />
                <div onClick={openModalCTA} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalCTAIsOpen}
                    onRequestClose={closeModalCTA}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalCTA />
                </Modal>
            </div>

            <div className="footer-edit relative">
                <Footer />
                <div onClick={openModalFooter} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalFooterIsOpen}
                    onRequestClose={closeModalFooter}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalFooter />
                </Modal>
            </div>


        </div>
    )
}