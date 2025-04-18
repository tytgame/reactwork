import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Navbar, Nav} from 'react-bootstrap/esm';
import clothes1 from './img/1111.jpg';
import clothes2 from './img/2222.jpg';
import clothes3 from './img/333.jpg';
import backgroundImg from './img/background.png';
import { productList } from './data/ProductList';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
/*
  * react-router-dom
    : 페이지를 교체시켜주는 api -> router-dom

    * 사용하려면
    1. 설치 : npm i react-router-dom
    2. index.js에 <BrowserRouter>태그 넣어주기
*/

// const clothesCol = [
//   {clothes1},
//   {clothes2},
//   {clothes3}
// ]



function App() {
  const [clothes,  setClothes] = useState();

  return (
    <div className="App">
      <Navbar bg='primary' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand as={Link} to="/">옷팝니다</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">홈으로</Nav.Link>
            <Nav.Link as={Link} to="/features">특징</Nav.Link>
            <Nav.Link as={Link} to="/pricing">가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={<Home/>} /> {/* 하나의 페이지 */}
        <Route path='/detail' element={<Detail/>} />{/* 하나의 페이지 */}
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detail/:id' element={<Detail clothes={productList}/>}/>
      </Routes>

      <Link to="/" className='mainButtons'>홈</Link>&emsp;
      <Link to="/detail" className='mainButtons'>상세페이지</Link>&emsp;
      <Link to="/cart" className='mainButtons'>장바구니</Link>

      {/* 백그라운드로 넣을 때 */}
      {/* <div className='main-bg'></div> */}

      {/* src 하위에 넣었을 때 import */}
      {/* <img src={mainimport { Navbar } from 'react-bootstrap/Navbar';
Bg}></img> */}


      {/* 배포할 때 기존 url 하위에 폴더를 가져와야 되므로
          기존 url을 얻어와서 넣어 준다 */}
      <img src = {backgroundImg}></img> 

        <Container>
          <Row>
            <Col>1 of 3
            <Link to={`/detail/${productList[0].id}`}>
              <img src = {clothes1}></img>
              </Link>
              <h4>{productList[0].title}</h4>
              <p>{productList[0].content}</p>
            </Col>
            <Col>2 of 3
            <Link to={`/detail/${productList[1].id}`}>
            <img src = {clothes2}></img>
            </Link>
              <h4>{productList[1].title}</h4>
              <p>{productList[1].content}</p>
            </Col>
            <Col>3 of 3
            <Link to={`/detail/${productList[2].id}`}>
            <img src = {clothes3}></img>
            </Link>
              <h4>{productList[2].title}</h4>
              <p>{productList[2].content}</p>
              </Col>
          </Row>
          </Container>
    </div>
  );
}

function ProductImage(props) {
  // const clothesColMap = clothesCol.map((v, i) => {
  return (
    <>
        <Col>
             {/*
             <img src = {clothes1}></img>
             <h4>{productList[0].title}</h4>
             <p>{productList[0].content}</p>
             */}
        </Col>
    </>
  )
}

function parser () {

}
export default App;
