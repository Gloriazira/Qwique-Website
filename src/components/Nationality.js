// import limage from '../assets/limage.png';
import nigeria from '../assets/nigeria.png';
import cameroon from '../assets/cameroon.png';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const nationality = () => {

    AOS.init();
    AOS.refresh();

    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    };
    const myImage = {
        margin: "0 5px",
        width: "100px"
    }


    return (
        <div className="nationality" style={myRow}>
                <img src={nigeria} alt="" className="country" style={myImage}/>
                <img src={cameroon} alt="" ClassName="country" style={myImage}/>
        </div>
    );
}

export default nationality;