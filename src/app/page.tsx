'use client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react'
import Script from 'next/script';
import { TRUE } from 'sass';


export default function Home() {
  return (

    <main>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <div id="body">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <div className="body__head">
          <div className="header py-3">
            <div className="logo">
              <img src="./img/image20.png" alt="" />
              <img src="./img/Group35553.png" alt="" />
            </div>
            <div className='Box'>a</div>
            <div className="btn">
              <button>
                <i className="fa-regular fa-user"></i>
                <span>Tài khoản</span>
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
          </div>
          <div className="head-mid">
            <div className='background'>
              <img className='w-100' src="./img/photo_2023-11-29_09-40-28.jpg" alt="" />
            </div>
            <div className="content">
              <div className="content__title">
                <p className='title1 m-0'>Thách thức ẩm thực cùng</p>
                <p className='title2 m-0'>Nga Sumo</p>
              </div>
              <div className="content__subtitle">
                <p>Focus these finish requirements me die money spaces hop next. Feed explore best solutions down sky re-inventing turn.</p>
              </div>
              <div className="content__time">
                <div className="container">
                  <div className="time-item">
                    <span className='title1'>12</span>
                    <span className='title2'>Ngày</span>
                  </div>
                  <div className="time-item">
                    <span className='title1'>20</span>
                    <span className='title2'>Giờ</span>
                  </div>
                  <div className="time-item">
                    <span className='title1'>45</span>
                    <span className='title2'>phút</span>
                  </div>
                  <div className="time-item">
                    <span className='title1'>24</span>
                    <span className='title2'>Giây</span>
                  </div>
                </div>
              </div>
              <div className="content__button">
                <button>
                  <span>Tham gia ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id='afterbanner-container'>
          <div className="introduction">
            <div className="container m-0">
              <div className="left col">
                <img className='img' src="./img/Frame1000001182.png" alt="" />
              </div>
              <div className="right col py-44">
                <div className="content">
                  <span className='mb-0 title'>Giới thiệu cuộc thi</span>
                  <p className='mb-0 text'>Eget nec leo eu tempus porta etiam odio tincidunt. Interdum facilisis id id placerat dolor odio. Gravida aliquet orci sagittis fermentum. Vulputate odio odio neque sodales lectus consectetur pretium justo. Massa massa cursus et tellus quam integer id. Sit id nunc ornare volutpat in in maecenas sagittis nunc. Nisl ultrices augue hac semper at malesuada tellus. Interdum facilisis id id placerat dolor odio. Gravida aliquet orci sagittis fermentum</p>
                </div>
                <div className='button'>
                  <button className='button_btn p-1424' href="#">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="question__title">
            <p className="text mb-0">Danh sách câu hỏi</p>
          </div>
          <div className="question__list">
            <Swiper
              breakpoints={{
                '@1.00': {
                  slidesPerView: 5,
                },
                '@0.75': {
                  slidesPerView: 3.5,
                },
                '@0.5': {
                  slidesPerView: 2.5,
                },
              }}
              spaceBetween={32}
              freeMode={true}
              modules={[FreeMode]}
              className='mySwiper'
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                {swiper()}
              </SwiperSlide>
              <SwiperSlide>{swiper()}</SwiperSlide>
              <SwiperSlide>{swiper()}</SwiperSlide>
              <SwiperSlide>{swiper()}</SwiperSlide>
              <SwiperSlide>{swiper()}</SwiperSlide>
              <SwiperSlide>{swiper()}</SwiperSlide>
            </Swiper>
          </div>
          <div className="video">
            <div className='m-0 container'>
              <iframe width="956" height="538" src="https://www.youtube.com/embed/wQQI0EuHrOw" title="HTQH:P27: ĐỘC LẠ HIẾM THẤY MÓN THI.T MỠ  NGẬP MỒM THEO PHONG CÁCH NSM VÀ BỘ TRÀNG HEO CỰC ĐỈNH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div className="results">
            <div className="container p-0">
              <div className="text1">
                <span className='title'>Bạn đã hoàn thành:</span>
                <span className='count'>1/20</span>
              </div>
              <div className="guide">
                <div className="guide_left guide_btn">
                  <a className='btn_sp p-0 m-0'>
                    <i className="fa-regular fa-circle-question"></i>
                    <span className="btn__title">
                      Thể lệ và quà tặng
                    </span>
                  </a>
                </div>
                <div className="guide_right guide_btn">
                  <a className='btn_sp p-0 m-0'>
                    <i className="fa-regular fa-circle-question"></i>
                    <span className="btn__title">
                      Bảng kết quả
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="questions">
            <div className="question">
              <p className="question__title m-0">
                Trong video trước khi tham gia thách đấu chị Nga Sumo đã ăn bao nhiêu tô phở?
              </p>
            </div>
          </div>
          <div className="answers__list">
            <div className='answers'>
              <div className='container p-0 m-0'>
                <img src="./img/phobo-800x450.jpg" alt="" />
                <div className='title'>
                  <p className='m-0'>2 tô</p>
                </div>
                <button className='decide-button'>
                  <span className='answers-decide'>Chọn</span>
                </button>
              </div>
              <div className='container p-0 m-0'>
                <img src="./img/phobo-800x450.jpg" alt="" />
                <div className='title'>
                  <p className='m-0'>3 tô</p>
                </div>
                <button className='decide-button'>
                  <span>Chọn</span>
                </button>
              </div>
              <div className='container p-0 m-0'>
                <img src="./img/phobo-800x450.jpg" alt="" />
                <div className='title'>
                  <p className='m-0'>4 tô</p>
                </div>
                <button className='checked decide-button'>
                  <i className="fa-solid fa-check"></i>
                  <span>Chọn</span>
                </button>
              </div>
              <div className='container p-0 m-0'>
                <img src="./img/phobo-800x450.jpg" alt="" />
                <div className='title'>
                  <p className='m-0'>5 tô</p>
                </div>
                <button className='deleted decide-button'>
                  <i className="fa-solid fa-xmark"></i>
                  <span>Bỏ Chọn</span>
                </button>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-container">
              <div className="footer1 footer_custom">
                <div className="footertitle">
                  Tài trợ cuộc thi
                </div>
                <div className="footercontainer grid-5">
                  <div className="containeritem-footer"><img src="./img/TPBANK.png" alt="" /></div>
                  <div className="containeritem-footer"><img src="./img/DRNET.png" alt="" /></div>
                  <div className="containeritem-footer"><img src="./img/MCV.png" alt="" /></div>
                  <div className="containeritem-footer"><img src="./img/HTV.png" alt="" /></div>
                  <div className="containeritem-footer"><img src="./img/CGV.png" alt="" /></div>
                </div>
              </div>
              <div className="footer_block">
                <div className="footer2 footer_custom">
                  <div className="footertitle">
                    Đơn vị tổ chức
                  </div>
                  <div className="footercontainer grid1-3">
                    <div className="containeritem-footer"><img src="./img/mcv_us 1.png" alt="" /></div>
                    <div className="containeritem-footer"><img src="./img/DRNET.png" alt="" /></div>
                    <div className="containeritem-footer"><img src="./img/MCV.png" alt="" /></div>
                  </div>
                </div>
                <div className="footer3 footer_custom">
                  <div className="footertitle">
                    Đối tác truyền thông
                  </div>
                  <div className="footercontainer grid-5">
                    <div className="containeritem-footer"><img src="./img/TPBANK.png" alt="" /></div>
                    <div className="containeritem-footer"><img src="./img/DRNET.png" alt="" /></div>
                    <div className="containeritem-footer"><img src="./img/MCV.png" alt="" /></div>
                    <div className="containeritem-footer"><img src="./img/HTV.png" alt="" /></div>
                    <div className="containeritem-footer"><img src="./img/CGV.png" alt="" /></div>
                  </div>
                </div>
              </div>
              <div className='footer-title'>
                <p>Copyright © 2023 Nga Sumo, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export function swiper() {
  return (
    <main id='main2'>
      <div className="swiperItem">
        <img src="./img/Rectangle6.png" alt="" />
        <div className='content'>
          <p className='m-0'>Trong video có nhắc đến sáng nay trước khi tham gia thách đấu chị Nga Sumo đã ăn bao nhiêu tô phở?</p>
        </div>
      </div>
    </main>
  )
}





