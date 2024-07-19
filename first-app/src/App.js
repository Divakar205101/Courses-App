import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';
import Header from './components/Header';
import Home from './components/Home';
import Menus from './components/Menus';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Router>
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/updatecourse/:id" element={<AddCourse />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
