import '../index.css';

export default function Solusi({dataDummy}) {
    console.log(dataDummy.colorDeskripsi)
    return(
        <div className="solusi text-center" style={{backgroundColor : dataDummy.bgcolor}}>
            <p className="solusi-title lg:w-4/5 md:w-full sm:w-full mx-auto" style={{color : dataDummy.colorJudul}}>
                {dataDummy.judul}
            </p>
            <p className="solusi-description " style={{color : dataDummy.colorDeskripsi}}>
                {dataDummy.deskripsi}
            </p>
        </div>
    )
  }