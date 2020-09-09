import React, { Component } from 'react';
import Logo from '../Assets/Images/logo.png'
import "./header.css";
import Carousel from '../Screens/Home/Carousel';
import Service from '../Screens/Home/Service';


class Header extends Component {
  render() {
    return (
      <div>
        <header>

          <div className="container">
            <input type="checkbox" name id="check" />
            <div className="logo-container">
              <img src={Logo}/>
            </div>
            <div className="nav-btn">
              <div className="nav-links">
                <ul>
                  <li className="nav-link" >
                    <a href="#">GIỚI THIỆU</a>
                  </li>
                  <li className="nav-link" >
                    <a href="#">DỊCH VỤ<i className="fas fa-caret-down" /></a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <a href="#">Chăm sóc-Điều dưỡng <i className="fas fa-caret-down" style={{ transform: 'rotate(-90deg)' }} /></a>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <a href="#">Chăm sóc bệnh nhân tại nhà</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Chăm sóc bệnh nhân tại bệnh viện</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Chăm sóc người già tại nhà</a>
                              </li>
                              <div className="arrow" />
                            </ul>
                          </div>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Phục hồi chức năng <i className="fas fa-caret-down" style={{ transform: 'rotate(-90deg)' }} /></a>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <a href="#">PHCN sau tai biến</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">PHCN sau phẩu thuật</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">PHCN bại não ở trẻ</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">PHCN sau tai nạn</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">PHCN cho người bị liệt</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">PHCN chấn thương thể thao</a>
                              </li>
                              <div className="arrow" />
                            </ul>
                          </div>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Đặt lịch khám <i className="fas fa-caret-down" style={{ transform: 'rotate(-90deg)' }} /></a>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <a href="#">Phòng khám sản phụ khoa Vạn Phúc</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Bệnh viện hưu nghị Việt Đức</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Bệnh viện thể thao Việt Nam</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Phòng khám sản phụ khoa Tâm Thành</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Family Medical Practice</a>
                              </li>
                              <div className="arrow" />
                            </ul>
                          </div>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Mẹ và bé <i className="fas fa-caret-down" style={{ transform: 'rotate(-90deg)' }} /></a>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <a href="#">Tắm bé</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Thông tắc tia sữa</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Chăm sóc mẹ sau sinh</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Kích sữa tại nhà</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Masage chăm sóc mẹ bầu</a>
                              </li>
                              <div className="arrow" />
                            </ul>
                          </div>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Thủ thuật điều dưỡng <i className="fas fa-caret-down" style={{ transform: 'rotate(-90deg)' }} /></a>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <a href="#">Thay băng, cắt chỉ và rửa vết thương</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Đặt Sonde tiểu</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Đặt Sonde dạ dày</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Cắt chỉ thẩm mĩ</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Chạy khí dung tại nhà</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Hút đờm dãi cho người cao tuổi</a>
                              </li>
                              <li className="dropdown-link">
                                <a href="#">Tắm gội cho bệnh nhân tại giường bệnh</a>
                              </li>
                              <div className="arrow" />
                            </ul>
                          </div>
                        </li>
                        <div className="arrow" />
                      </ul>
                    </div>
                  </li>
                  <li className="nav-link" >
                    <a href="#">TUYỂN DỤNG</a>
                  </li>
                  <li className="nav-link" >
                    <a href="#">TRỞ THÀNH MEDSULER</a>
                  </li>
                  <li className="nav-link" >
                    <a href="#">HỢP TÁC</a>
                  </li>
                  <li className="nav-link" >
                    <a href="#">TRỢ GIÚP<i className="fas fa-caret-down" /></a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <a href="#">Hỏi đáp </a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Liên hệ</a>
                        </li>
                        <div className="arrow" />
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div />
              </div>
            </div>
          </div>
        </header>
        <Carousel/>
        <Service/>
        
      </div>


    );
  }
}

export default Header;