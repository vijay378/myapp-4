import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'
import Forms from './Forms';
import SimpleMap from './Maps';
//import {} from 'react-bootstrap-icons'
import facebook from './IconImage/facebookicon'
import instagram from './IconImage/instagramicon.png'
import youtube from './IconImage/youtubeicon'
import twitter from './IconImage/twittericon.png'
import linkedin from './IconImage/linkedinicon.png'

function Footer() {
    return(
        <>
<Container fluid className="footer1">
<Row>
    <Col sm={8}>
        <Forms/>
    </Col>
   
    <Col sm={4}>
    
    <SimpleMap/>
    </Col>
  </Row>
  
   
</Container>
<Container fluid className="footer2">
<Row>
      <Col sm={4}></Col>
      <Col sm={4}><br/><p style={{textAlign:"center"}}>&#169;2021 | ABC Institute</p></Col>
      <Col sm={4}>
      <span><br/>
      <a href="#"><img src={facebook} alt="facebook" height="25px" width="25px"></img></a>&nbsp;&nbsp;
      <a href="#"><img src={instagram} alt="instagram" height="25px" width="25px"></img></a>&nbsp;&nbsp;
      <a href="#"><img src={youtube} alt="youtube" height="25px" width="25px"></img></a>&nbsp;&nbsp;
      <a href="#"><img src={twitter} alt="twitter" height="25px" width="25px"></img></a>&nbsp;&nbsp;
      <a href="#"><img src={linkedin} alt="linkedin" height="25px" width="25px"></img></a>
      </span>
      </Col>
  </Row>
</Container>
        </>
    )
}

export default Footer;