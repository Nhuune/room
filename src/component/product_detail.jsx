import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style/index.css';

import Involve from './involve';
import Mockdata from './mockdata';
import NoteCmt from './notecmt';
import Slide from './slider';

function Product_detail() {


  return (
    <div>


        <p style={{ textAlign: 'center', fontSize: '30px' }}>Cho thuê phòng trọ chung cư có máy lạnh giá rẻ</p>

        {/* Carousel */}
        <div className="slider"  >
          <Slide />
        </div>
        {/* Đổ dữ liệu vào table */}
        <div style={{ border: '10px solid white', margin: '100px 100px', lineHeight: '10xp' }}>
          <div className="mockdata">
            <Mockdata />
          </div>
          {/* Đổ dự liệu văn bản */}
          <div>
            <h4>Thông tin chi tiết:</h4>
          </div>
          {/* Hiển thị danh sách các phòng tương thích */}
          <div>
            <h4>Những phòng tương thích</h4>
            <Involve />
          </div>
          {/* Comment */}
          <div>
            <h4>Comment:</h4>
            <NoteCmt />
          </div>
        </div>


      

    </div>

  );
}
export default Product_detail
