import React, { Component } from 'react';
import Logo from '../Assets/Images/logo.png'
import "./header.css";


class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <nav>
                    <ul>
                        <div className="image"><img src={Logo} alt /></div>
                        <li><a href="#">GIỚI THIỆU</a></li>
                        <li className="dropdownmenu">
                            <a href="#">DỊCH VỤ</a>
                            <ul className="menu_area">
                                <ul>
                                    <h4>Chăm sóc-Điều dưỡng</h4>
                                    <li><a href="#">Chăm sóc bệnh nhân tại nhà</a></li>
                                    <li><a href="#">Chăm sóc bệnh nhân tại bệnh viện</a></li>
                                    <li><a href="#">Chăm sóc người già tại nhà</a></li>
                                </ul>
                                <ul>
                                    <h4>Phục hồi chức năng</h4>
                                    <li><a href="#">PHCN sau tai biến</a></li>
                                    <li><a href="#">PHCN sau phẩu thuật</a></li>
                                    <li><a href="#">PHCN bại não ở trẻ</a></li>
                                    <li><a href="#">PHCN sau tai nạn</a></li>
                                    <li><a href="#">PHCN cho người bị liệt</a></li>
                                    <li><a href="#">PHCN chấn thương thể thao</a></li>
                                </ul>
                                <ul>
                                    <h4>Thủ thuật điều dưỡng</h4>
                                    <li><a href="#">Thay băng, cắt chỉ và rửa vết thương</a></li>
                                    <li><a href="#">Đặt Sonde tiểu</a></li>
                                    <li><a href="#">Đặt Sonde dạ dày</a></li>
                                    <li><a href="#">Cắt chỉ thẩm mĩ</a></li>
                                    <li><a href="#">Chạy khí dung tại nhà</a></li>
                                    <li><a href="#">Hút đờm dãi cho người cao tuổi</a></li>
                                    <li><a href="#">Tắm gội cho bệnh nhân tại giường bệnh</a></li>
                                </ul>
                                <ul>
                                    <h4>Mẹ và bé</h4>
                                    <li><a href="#">Tắm bé</a></li>
                                    <li><a href="#">Thông tắc tia sữa</a></li>
                                    <li><a href="#">Chăm sóc mẹ sau sinh</a></li>
                                    <li><a href="#">Kích sữa tại nhà</a></li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <a href="#">TUYỂN DỤNG</a>
                        </li>
                        <li><a href="#">TRỞ THÀNH MEDSULER</a></li>
                        <li><a href="#">HỢP TÁC</a></li>
                        <li><a href="#">TRỢ GIÚP</a></li>
                    </ul>
                </nav>
            </div>


        );
    }
}

export default Header;