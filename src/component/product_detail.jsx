import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style/index.css';

import Involve from './involve';
import Mockdata from './mockdata';
import NoteCmt from './notecmt';
import Slide from './slider';
// import CMT from './comment';


class Product_detail extends Component {

  render() {

    return (
      <div>


        <p style={{ textAlign: 'center', fontSize: '30px', color: 'black' }}>Cho thuê phòng trọ, chung cư có máy lạnh giá rẻ</p>

        {/* Carousel */}
        <div className="slider"  >
          <Slide />
        </div>
        {/* Đổ dữ liệu vào table */}

        <div style={{ border: '10px solid white', margin: '100px 100px', }}>
          <h4>Thông tin chi tiết:</h4>
          <div className="mockdata">
            <Mockdata />
          </div>
          <p></p>
          {/* Đổ dự liệu văn bản */}
          <div >
            <h4>Mô Tả</h4>
            <p style={{color: 'black'}}>CHO THUÊ PHÒNG TRỌ MỚI XÂY - CHUNG CƯ MINI - GIỜ TỰ DO - HỆ THỐNG CỬA VÂN TAY - CAMERA - THANG MÁY - PHÒNG NỘI THẤT TÙY CHỌN... ĐỐI DIỆN VỚI CHỢ LÊ VĂN QUỚI RẤT THUẬN TIỆN SINH HOẠT..

              Địa chỉ: 325/12 Lê Văn Quới, P. Bình Trị Đông, Q.Bình Tân, TP. HCM ( ĐƯỜNG HẺM XE TẢI )

              *** Hỗ trợ DỊCH COVID_19 với giá thật sự ưu đãi.

              Vị trí:

              + Nằm ngay chợ Lê Văn Quới, cách ngã tư 4 Xã 1km, KCN Dimsum, KDL Đầm Sen 2km, khu Quận 10, 11, 5 tầm 20 phút và các tiện ích siêu thị Nguyễn Kim, Điện Máy Xanh, Điện Máy Chợ Lớn.

              *** Giá phòng: Hỗ trợ 500.000đ tháng 11,12

              - Từ 2,500.000/tháng ( tiện nghi: tủ âm tường, kệ bếp, toilet)

              - Từ 2,800.000/tháng ( tiện nghi: tủ âm tường, kệ bếp, toilet máy lạnh).

              - Giá trên bao gồm chưa full nội thất, nếu cần lắp vui lòng liên hệ biết thông tin.

              - Đặt cọc phòng 1 tháng.

              - Thanh toán tiền phòng hàng tháng từ ngày 1 - 5 tây.

              + Dịch vụ:

              - Điện: 3.500đ/KWH.

              - Nước máy: 20.000đ/m3.

              - Wifi, rác, vệ sinh: 100.000đ / phòng/ tháng.

              - Xe máy: 100.000đ / xe / tháng.

              Tiện nghi:

              - Phòng được ốp gạch men, rất sạch sẽ và thoáng mát.

              - Hệ thống wifi cáp quang chuẩn 200m đến từng ngóc ngách của tòa nhà.

              Liên hệ ngay cho chúng tôi để tìm được căn phòng đẹp nhất:

              Hotline:0938.133.991 - 0901.961.861 gặp Anh Trung

              Địa chỉ: 325/12 Lê Văn Quới, P. Bình Trị Đông, Q.Bình Tân, TP. HCM ( Ngay chợ Lê Văn Quới)</p>
          </div>
          {/* Hiển thị danh sách các phòng tương thích */}
          <div>
            <h4>Phòng tương thích</h4>
            <Involve />
          </div>
          {/* Comment */}
          <div>
            <h4>Comment:</h4>
            <NoteCmt />
          </div>
          <div className="comment">
            {/* <CMT/> */}
          </div>
        </div>
      </div>

    );
  }
}
export default Product_detail
