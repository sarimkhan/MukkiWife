import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import vid from './mainVid.mp4';
import hosrse from './horse.png';
import venue from './venue.jpg';
import lights from './winterLights.jpg';
import space from './Space.jpg';
import discovery from './Discovery.jpg';
import kemah from './kemah.jpg'
import boat from './boatbasin.png';
import agas from './agas.jpg';
import bundu from './Bundu.png';
import bbq from './bbq.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardImg, Card, CardBody, CardTitle, CardSubtitle, CardText,  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem, Row, Col } from 'reactstrap';

function App() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  setTimeout(() => {
    document.getElementById('mainVideo').hidden = true
    document.getElementById('things').style.display = "block"
  }, 26000);



  return (
    <div className="App">
      <header className="App-header">
      <video id="mainVideo" playsInline="true" autoplay="true" muted>
  <source src={vid}  />
</video>
<div id="things" style={{display:'none', color:'black'}}>
<Accordion style={{width:'20rem'}} open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">About Venue</AccordionHeader>
          <AccordionBody accordionId="1">
          <Card
  style={{
    width: '18rem',
    border:'none'
  }}
>
  <img
    alt="Sample"
    src={venue}
  />
  <CardBody>
    <CardTitle tag="h5">
    The Estates at Pecan Park
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      22633 Park Rd, Tomball, TX 77377
    </CardSubtitle>
    <CardText>
    A timeless and picturesque 11,000 sq. ft. estate designed and styled to accentuate any vision and occasion for up to 300 guest
    </CardText>
    <Button  color="success"
    target="_blank"
    href="https://www.google.com/maps/dir//22633+Park+Rd,+Tomball,+TX+77377/@30.0913706,-95.738697,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86472b8377e91fe9:0x4e35930ecdea753f!2m2!1d-95.6562758!2d30.0913959?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D">
      Directions
    </Button>
    <Button style={{marginLeft:'10px'}} color="primary"
    target="_blank"
    href="https://forms.gle/kzf3xqnC2icsDYaD6">
      RSVP Now
    </Button>
  </CardBody>
</Card>
          </AccordionBody>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionHeader targetId="2">Things To Do In Houston</AccordionHeader>
          <AccordionBody accordionId="2">
          <Row style={{marginTop:'15px'}}>
            <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={lights}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Magical Winter Lights 
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Largest holiday lighting attraction in TX!
      </CardSubtitle>
      <Button href="https://magicalwinterlights.com/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>
          <Row style={{marginTop:'15px'}}>
          <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={space}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
       Space Center Houston
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        The official visitor center of NASA Johnson Space Center
      </CardSubtitle>
      <Button href="https://spacecenter.org/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>

          <Row style={{marginTop:'15px'}}>
          <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={discovery}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
       Discovery Green
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        11.78-acre public urban park in Downtown Houston
      </CardSubtitle>
      <Button href="https://www.discoverygreen.com/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>

          <Row style={{marginTop:'15px'}}>
          <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={kemah}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Kemah Boardwalk
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        60-acre Texas Gulf Coast theme park in Kemah, Texas
      </CardSubtitle>
      <Button href="https://www.kemahboardwalk.com/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Food Spots</AccordionHeader>
          <AccordionBody accordionId="3">
          <Row style={{marginTop:'15px'}}>
            <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={boat}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Boat Basin
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Vibrant community space celebrating local food truck vendors
      </CardSubtitle>
      <Button href="https://boatbasintx.com/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>
          <Row style={{marginTop:'15px'}}>
          <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={agas}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
       Agas
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Relaxed strip-mall restaurant offering a variety of Indian & Pakistani favorites
      </CardSubtitle>
      <Button href="https://www.agasrestaurant.com/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>

          <Row style={{marginTop:'15px'}}>
          <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={bundu}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Bundu Khan
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Savory Pakistani BBQ
      </CardSubtitle>
      <Button href="https://bundukhanbbq.com/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>

          <Row style={{marginTop:'15px'}}>
          <Col><Card style={{border:'none'}}>
    <CardImg
      alt="Card image cap"
      src={bbq}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Bar BQ Tonight
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Dedicated to serving you authentic Pakistani BBQ with a Texan twist!
      </CardSubtitle>
      <Button href="https://barbqtonight.us/" target="_blank">
        Learn More
      </Button>
    </CardBody>
  </Card>
            </Col>
          </Row>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

 
</div>
      </header>
      
    </div>
  );
}

export default App;
