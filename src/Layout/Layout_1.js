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
import ButtonSetting from "../Components/ButtonSetting";
import ButtonWriting from "../Components/ButtonWriting";
import ModalHero from "../Components/Modal/ModalHero";
import ModalSolusi from "../Components/Modal/ModalSolusi";
import ModalVideo from "../Components/Modal/ModalVideo";
import ModalFitur from "../Components/Modal/ModalFitur";
import ModalTestimoni from "../Components/Modal/ModalTestimoni";
import ModalDiskon from "../Components/Modal/ModalDiskon";
import ModalCTA from "../Components/Modal/ModalCTA";
import ModalFooter from "../Components/Modal/ModalFooter";
import ModalGaransi  from "../Components/Modal/ModalGaransi";
import ModalSett from "../Components/Modal/ModalSett";
import ModalWriting from "../Components/Modal/ModalWriting";

// -----Default gambar
import heroImg from "../Assets/Images/hero-img.png"
import ctaImg from "../Assets/Images/CTA-img.png"
import diskonimage from "../Assets/Images/diskon-img.png"
import fiturImg from "../Assets/Images/fitur-img.png"
import garansiimg from "../Assets/Images/garansi-img.png"
import logo_bakery from "../Assets/Images/RumahBakery.png"

import Video from "../Components/Video";
// import axios from "axios";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor : '#19162B',
      width : '70%',
      height : 'fit-content',
      borderRadius : '10px',
    },

  };


// import ReactDOMServer from 'react-dom/server'



export default function Layout_1() {
    const [warna, setWarna] = useState("#FF8D50")
    const [data, setData] = useState([]);
    const [inputdata, setInputdata] = useState();

    const [heroDummy, setHeroDummy] = useState(
        {
            judul : "Roti panggang, untuk kebutuhan kamu setiap hari",
            deskripsi : "Kami menyediakan berbagai macam roti yang siap kamu bawa pulang",
            bgcolor : "#FEF1E6",
            colorJudul : "#FF8D50",
            colorDeskripsi : "#FF8D50",
            colorTombol : "#FF8D50",
            tombol : "Jelajahi Sekarang"

        }
    );

    const [solusiDummy, setSolusiDummy] = useState(
        {
            judul : "Anda sulit untuk menemukan roti yang memenuhi kebutuhan nutrisi anda?",
            deskripsi : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus lorem, porta et aliquam ornare, fermentum sed est. Duis molestie velit nec ante semper maximus. Sed pretium lobortis erat in tempor. Sed sodales dolor",
            bgcolor : "white",
            colorJudul : "#FF8D50",
            colorDeskripsi : "#FF8D50"
        }
    );

    const [colorFitur, setColorFitur] = useState(
        {
            colorIcon : "#FF8D50",
            colorDeskripsi : "black",
            bgcolor: "white"
        }
    )

    const [fiturDummy, setFiturDummy] = useState([
        {
            icon : 'Bintang',
            fitur: 'Delivery yang cepat dan bisa diantar kerumah'
        },
        {
            icon : 'Bintang',
            fitur: 'Delivery yang cepat dan bisa diantar ke kantor'
        },
        {
            icon : 'Bintang',
            fitur: 'Delivery yang cepat dan bisa diantar ke depan'
        }
    ]);

    const [colorGaransi, setColorGaransi] = useState(
        {
            judul : "Berikut yang akan anda dapatkan",
            colorJudul : "#FF8D50",
            colorIcon : "#FF8D50",
            colorDeskripsi : "black",
            bgcolor: "white"
        }
    )

    const [GaransiDummy, setGaransiDummy] = useState([
        {
            icon : 'Bintang',
            garansi: 'Roti selalu fresh'
        },
        {
            icon : 'Bintang',
            garansi: 'Hangat sampai ke tangan kamu'
        },
        {
            icon : 'Bintang',
            garansi: 'Murah tanpa pengawet dan bahan kimia berbahaya'
        }
    ]);

    const [diskonDummy, setDiskonDummy] = useState(
        {
            judul : "Gratis Ongkos Kirim !!!",
            deskripsi : "Gratis ongkos kirim setiap pembelian 2 buah roti dengan 1 minuman",
            bgcolor : "#FEF1E6",
            colorJudul : "#FF8D50",
            colorDeskripsi : "black",

        }
    );


    const [CTADummy, setCTADummy] = useState(
        {
            judul : "Roti panggang, untuk kebutuhan kamu setiap hari",
            bgcolor : "white",
            colorJudul : "#FF8D50",
            colorTombol : "#FF8D50",
            tombol : "Jelajahi Sekarang",

        }
    );

    const [footerDummy, setFooterDummy] = useState({
        slogan : "Roti Hangat, Siap Diangkat",
    })

    const [mainColor, setMainColor] = useState({
        warna1 : '#0000FF',
        warna2 : '#00FF00',
        warna3 : '#FF007F',
        warna4 : '#6F00FF'
    })

    const [testimoniColor, setTestimoniColor] = useState({
        colorJudul : "#FF8D50",
        bgcolor : "#FEF1E6"
    });

    const [mainFont, setMainFont] = useState("Poppins");
    const [imageHero, setImageHero] = useState(heroImg);
    const [bgHero, setBgHero] = useState();
    const [imageFitur, setImageFitur] = useState(fiturImg);
    const [imageGaransi, setImageGaransi] = useState(garansiimg);
    const [imageDiskon, setImageDiskon] = useState(diskonimage);
    const [imageCTA, setImageCTA] = useState(ctaImg);
    const [video, setVideo] = useState("https://media.w3.org/2010/05/sintel/trailer_hd.mp4");
    const [colorVideo, setColorVideo] = useState("#FEF1E6");
    const [mainlogo, setMainlogo] = useState(logo_bakery);

    const copyWriting = {
        HeroJudul : heroDummy.judul,
        HeroDeskripsi : heroDummy.deskripsi,
        SolusiJudul : solusiDummy.judul,
        SolusiDeskripsi : solusiDummy.deskripsi,
        GaransiJudul : colorGaransi.judul,
        DiskonJudul : diskonDummy.judul,
        DiskonDeskripsi : diskonDummy.deskripsi,
        CTAJudul : CTADummy.judul,
        Slogan : footerDummy.slogan
    }




    
    // ---Function ambil data dummy
    function getHeroDummy(data){
        setHeroDummy(
            {...heroDummy, 
                judul: data.judul , 
                deskripsi: data.deskripsi, 
                bgcolor: data.bgcolor,
                colorJudul : data.colorJudul,
                colorDeskripsi : data.colorDeskripsi,
                colorTombol: data.colorTombol,
                tombol : data.tombol
            }
        )
    }

    function getSolusiDummy(data){
        setSolusiDummy(
            {...solusiDummy,
                judul: data.judul , 
                deskripsi: data.deskripsi, 
                bgcolor: data.bgcolor,
                colorJudul : data.colorJudul,
                colorDeskripsi : data.colorDeskripsi           
            }
        )
    }

    function getColorFitur(data){
        setColorFitur(
            {...colorFitur,
                colorIcon : data.colorIcon,
                colorDeskripsi :  data.colorDeskripsi,
                bgcolor: data.bgcolor
            
            }
        )
    }

    function getFiturDummy(data) {
        setFiturDummy(data)
        console.log(fiturDummy)
    }

    function getColorGaransi(data){
        setColorGaransi(
            {...colorGaransi,
                judul : data.judul,
                colorJudul : data.colorJudul,
                colorIcon : data.colorIcon,
                colorDeskripsi :  data.colorDeskripsi,
                bgcolor: data.bgcolor
            
            }
        )
    }

    function getGaransiDummy(data) {
        setGaransiDummy(data)
        console.log(GaransiDummy)
    }

    function getDiskonDummy(data){
        setDiskonDummy(
            {...diskonDummy, 
                judul: data.judul , 
                deskripsi: data.deskripsi, 
                bgcolor: data.bgcolor,
                colorJudul : data.colorJudul,
                colorDeskripsi : data.colorDeskripsi,
            }
        )
    }

    function getCTADummy(data){
        setCTADummy(
            {...CTADummy, 
                judul: data.judul ,  
                bgcolor: data.bgcolor,
                colorJudul : data.colorJudul,
                colorTombol: data.colorTombol,
                tombol : data.tombol
            }
        )
    }

    function getFooterDummy(data){
        setFooterDummy(
            {...footerDummy, slogan : data.slogan}
        )
    }

    function getMainColor(data){
        setMainColor(
            {...mainColor,
                warna1 : data.warna1,
                warna2 : data.warna2,
                warna3 : data.warna3,
                warna4 : data.warna4,
            }
        )
    }

    function getTestimoniColor(data){
        setTestimoniColor(
            {...testimoniColor,
                colorJudul : data.colorJudul,
                bgcolor : data.bgcolor

            }
        )
    }

    function getMainFont(data) {
        setMainFont(data)
    }

    // ---- batas fucntion dummy

    function getImageHero(data) {
        setImageHero(data)
    }

    function getBgHero(data){
        setBgHero(data)
    }

    function getImageFitur(data) {
        setImageFitur(data)
    }

    function getImageGaransi(data) {
        setImageGaransi(data)
    }

    function getImageDiskon(data) {
        setImageDiskon(data)
    }

    function getImageCTA(data) {
        setImageCTA(data)
    }

    function getVideo(data) {
        setVideo(data)
    }

    function getLogo(data) {
        setMainlogo(data)
    }

    function getColorVideo(data){
        setColorVideo(data)
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

    // function storeData(inputdata) { 
    //     // console.log(inputbook);
    //     // alert("Data berhasil ditambahkan!")
    //     axios
    //       .put("http://localhost:8000/api/shops/shop_style/1", inputdata)
    //       .then(()=>{
    //         setInputdata((prevdata) => [...prevdata, inputdata]);
    //       })
    //       .catch((error) => {
    //         console.log(error.response.data);
    //       })
    //   }
    
    
    
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

    //---- modal setting
      const [modalSettingIsOpen, setSettingIsOpen] = useState(false);

      function openModalSetting() {
          setSettingIsOpen(true);
      }
  
      function closeModalSetting(){
          setSettingIsOpen(false)
      }

    //---- modal setting
    const [modalWritingIsOpen, setWritingIsOpen] = useState(false);

    function openModalWriting() {
        setWritingIsOpen(true);
    }

    function closeModalWriting(){
        setWritingIsOpen(false)
    }

     

    return(
        // font family belum terapply
        <div className="Layout-1 " style={{fontFamily : mainFont}}> 
            <div id="navbar">
                {/* Navbar */}
                <Navbar logo={mainlogo}/>
            </div>
            {/* hero section */}
            <div className="hero-edit relative">
                <Hero headercolor={warna} konten={data} dataDummy={heroDummy} url={imageHero} bg={bgHero}/>
                <div onClick={openModalSetting} className="cursor-pointer button-setting-div">
                    <ButtonSetting />
                </div>
                {/* modal setting */}
                <Modal
                isOpen={modalSettingIsOpen}
                onRequestClose={closeModalSetting}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
                >
                    {/* <ModalSetting sendDataColor={getMainColor} sendDataFont={getMainFont} /> */}
                    <ModalSett sendDataColor={getMainColor} sendDataFont={getMainFont} />
                    
                </Modal>

                <div onClick={openModalWriting} className="cursor-pointer button-writing-div">
                    <ButtonWriting />
                </div>
                {/* modal writing */}
                <Modal
                isOpen={modalWritingIsOpen}
                onRequestClose={closeModalWriting}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
                >
                    <ModalWriting copywriting={copyWriting} fitur={fiturDummy} garansi={GaransiDummy}/>
                </Modal>

                <div onClick={openModalHero} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalHeroIsOpen}
                    onRequestClose={closeModalHero}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    <ModalHero  sendDummy={getHeroDummy} mainColor={mainColor} sendImage={getImageHero} sendBg={getBgHero}/>
                    {/* sendData={storeData} */}
                </Modal>
            </div>
            {/* solsusi section */}
            <div className="solusi-edit relative">
                <Solusi dataDummy={solusiDummy}/>
                <div onClick={openModalSolusi} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalSolusiIsOpen}
                    onRequestClose={closeModalSolusi}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >  
                    <ModalSolusi sendDummy={getSolusiDummy} mainColor={mainColor}/>
                    
                </Modal>
            </div> 

            <div className="video-edit relative">
                <Video url={video} colorVideo={colorVideo}/>
                <div onClick={openModalVideo} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalVideoIsOpen}
                    onRequestClose={closeModalVideo}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >  
                    <ModalVideo mainColor={mainColor} sendDummy={getColorVideo} sendVideo={getVideo}/>
                    
                </Modal>
            </div>

            <div className="fitur-edit relative">
                <Fitur colorDummy={colorFitur} fiturDummy={fiturDummy} url={imageFitur}/>
                <div onClick={openModalFitur} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalFiturIsOpen}
                    onRequestClose={closeModalFitur}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >  
                    <ModalFitur sendDummy={getColorFitur} sendInputDummy={getFiturDummy} sendImage={getImageFitur} mainColor={mainColor}/>
                    
                </Modal>
            </div>

            <div className="testimoni-edit relative">
                <Testimoni color={testimoniColor}/>
                <div onClick={openModalTestimoni} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalTestimoniIsOpen}
                    onRequestClose={closeModalTestimoni}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >  
                    <ModalTestimoni mainColor={mainColor} sendDummy={getTestimoniColor} />
                    
                </Modal>
            </div>
            
            <div  className="Garansi-edit relative">
                <Garansi colorDummy={colorGaransi} fiturDummy={GaransiDummy} url={imageGaransi}/>
                <div onClick={openModalGaransi} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalGaransiIsOpen}
                    onRequestClose={closeModalGaransi}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >  
                    <ModalGaransi sendDummy={getColorGaransi} sendInputDummy={getGaransiDummy} sendImage={getImageGaransi} mainColor={mainColor}/>
                    
                </Modal>
            </div>

            <div className="Diskon-edit relative">
                <Diskon diskonDummy={diskonDummy} url={imageDiskon}/>
                <div onClick={openModalDiskon} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalDiskonIsOpen}
                    onRequestClose={closeModalDiskon}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    <ModalDiskon sendDummy={getDiskonDummy} sendImage={getImageDiskon} mainColor={mainColor}/>
                </Modal>
            </div>

            <div className="cta-edit relative">
                <CTA CTADummy={CTADummy}  url={imageCTA}/>
                <div onClick={openModalCTA} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalCTAIsOpen}
                    onRequestClose={closeModalCTA}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    <ModalCTA sendDummy={getCTADummy} sendImage={getImageCTA} mainColor={mainColor}/>
                </Modal>
            </div>

            <div className="footer-edit relative">
                <Footer footerDummy={footerDummy} logo={mainlogo}/>
                <div onClick={openModalFooter} className="cursor-pointer button-edit-div">
                    <ButtonEdit  />
                </div>
                <Modal
                    isOpen={modalFooterIsOpen}
                    onRequestClose={closeModalFooter}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    <ModalFooter sendDummy={getFooterDummy} mainColor={mainColor}/>
                </Modal>
            </div>


        </div>
    )
}