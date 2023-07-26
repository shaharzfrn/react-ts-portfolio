import { useEffect, useState, ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Row,
  Table,
} from 'react-bootstrap';

import './App.css';
import Navbar from './components/Navbar';
import Test from './components/Test';
import PageLayout from './layouts/PageLayout';

function UncontrolledExample() {
  return (
    <Carousel style={{ height: '150px', width: '750px' }}>
      <Carousel.Item>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

function IdentityFormat(
  x: string | number | ReactElement
): string | number | ReactElement {
  return x;
}

export function Age() {
  const [age, setAge] = useState<string>();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-01-06T09:24:00');
    const currentAge = (Date.now() - birthTime.getTime()) / divisor;
    setAge(currentAge.toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return age;
}

interface TableRowProp {
  label: string;
  link?: string;
  value: string | number | ReactElement;
  format?: typeof IdentityFormat;
}
function TableRow({
  label,
  link,
  value,
  format = IdentityFormat,
}: TableRowProp) {
  return (
    <tr>
      <td width="70%">{label}</td>
      <td> {link ? <a href={link}>{format(value)}</a> : format(value)} </td>
    </tr>
  );
}
TableRow.defaultProps = {
  link: '',
  format: IdentityFormat,
};

function App2() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test title="Root" />} />
          <Route path="/test" element={<Test title="Test" />} />
        </Routes>
      </BrowserRouter>
      <Container>
        <Row>
          <Col className="sidebar">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            quod vel laborum eum, aperiam pariatur, hic veritatis dolor
            perferendis iusto rerum in repellendus eveniet ipsum accusantium
            delectus corporis? Harum, voluptate?
          </Col>
          <Col>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sint optio nostrum alias voluptatibus in incidunt temporibus sunt
            consectetur eveniet iusto quisquam magni voluptate excepturi
            adipisci voluptatum esse fuga recusandae voluptates accusantium,
            ratione blanditiis. Facilis unde sit recusandae libero facere iure
            at possimus nisi esse quaerat? Molestias maiores, tenetur esse
            asperiores, dolorum corporis officiis qui voluptas beatae architecto
            libero adipisci quibusdam, quia sint? Fuga eligendi laudantium
            accusamus excepturi dolor quo earum repellat eius animi, voluptatem
            aperiam quos aut inventore quis, sint quasi, culpa nesciunt
            quibusdam odio. Ab repudiandae provident cumque natus molestiae,
            eaque laboriosam aliquam eum soluta quaerat eius. Ab nihil quae
            veniam, nemo animi a unde, aliquid numquam rerum incidunt
            consequuntur? Temporibus voluptatem tempora illo labore consectetur
            tempore quis voluptatibus reprehenderit minus veniam reiciendis,
            blanditiis aut quod sunt vitae, necessitatibus tenetur, nesciunt
            quos earum illum quae? Qui velit placeat commodi eum est voluptas
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={{ order: 1, span: 12 }} lg={{ span: 6, order: 0 }}>
            <Container>
              <h1>View Data</h1>
              <h1>View Data</h1>
              <h1>View Data</h1>
            </Container>
          </Col>
          <Col xs={{ order: 0, span: 12 }} lg={{ span: 6, order: 1 }}>
            <Table striped>
              <tbody>
                <TableRow label="Age" value={<Age />} />
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Container fluid="sm">
        <Table striped>
          <tbody>
            <TableRow label="Age" value={<Age />} />
            <tr>
              <td>2</td>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLayout />} />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
