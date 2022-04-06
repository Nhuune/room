
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style/index.css';
import { Layout, Carousel } from 'antd';
import Mockdata from './mockdata';
import NoteCmt from './notecmt';
const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <div>
    <Layout>
    <Header>Header</Header>
      <h1>
        <p>Cho thuê phòng trọ chung cư có máy lạnh giá rẻ</p>
      </h1>
      <Carousel autoplay>
        <div>
          <img
            src={'https://www.ezdanhotels.qa/wp-content/uploads/2018/10/1.png'}
          />
        </div>
        <div>
          <img
            src={
              'https://th.bing.com/th/id/R.c5fc7178de44add0a27f15bcaf6e4d72?rik=lpF%2bNLm7WphDCQ&riu=http%3a%2f%2fwww.grandlordhotel.com%2fmedias%2froom%2fbig%2f81%2fdux-corner-03.jpg&ehk=5J9kzRaVXH%2bvO4s5MDr1rlopJpFl%2bvlGj6Xeekt8fA8%3d&risl=&pid=ImgRaw&r=0'
            }
          />
        </div>
        <div>
          <img
            src={'https://www.ezdanhotels.qa/wp-content/uploads/2018/10/1.png'}
          />
        </div>
        <div>
          <img
            src={
              'https://th.bing.com/th/id/R.c5fc7178de44add0a27f15bcaf6e4d72?rik=lpF%2bNLm7WphDCQ&riu=http%3a%2f%2fwww.grandlordhotel.com%2fmedias%2froom%2fbig%2f81%2fdux-corner-03.jpg&ehk=5J9kzRaVXH%2bvO4s5MDr1rlopJpFl%2bvlGj6Xeekt8fA8%3d&risl=&pid=ImgRaw&r=0'
            }
          />
        </div>
      </Carousel>
      <h1>Thông tin chi tiết:</h1>
      <h3>
        <Mockdata />
      </h3>
      <h1>Comment:</h1>
      <NoteCmt/>
      <Footer>Footer</Footer>
    </Layout>

    
  </div>,
  document.getElementById('container'),
);
         