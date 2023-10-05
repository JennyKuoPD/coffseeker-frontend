import React, { useState, useEffect } from 'react'
import PopularDataFetcher from './PopularProducts'
import AOS from 'aos'
import Image from 'next/image'
import { BsCart, BsFillCartCheckFill } from 'react-icons/bs'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import ProductItem from './ProductItem'
import { useProducts } from '@/context/product'

// 02 跟 03 的圓圈放在這裡

export default function PopularProducts(props) {
  const { setShow } = props
  const { productsData, setProductsData } = useProducts()
  const isFetchingProducts = productsData.length === 0

  const [isFavorited, setFavorited] = useState(false)
  const [isCarted, setCarted] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  const isMobile = () => {
    if (typeof window !== 'undefined' && window.navigator) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      )
    }
    return false
  }
  return (
    <>
      <PopularDataFetcher />
      <div className="container ed-index">
        {/* 區塊名稱 */}
        <div
          className="hot-product-wrapper ed-popular-marginTop d-block d-md-none ed-zindex"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <div className="line"></div>
          <div className="hot-product">熱銷商品</div>
          <div className="line"></div>
        </div>
        <div className="d-flex justify-content-between flex-md-row flex-column">
          {/* 左側放內容 */}
          <div className="popular-left">
            {/* 區塊名稱 */}
            <div
              className="hot-product-wrapper ed-popular-marginTop d-none d-md-block"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="line"></div>
              <div className="hot-product">熱銷商品</div>
              <div className="line"></div>
            </div>
            {/* 區塊內容 */}
            <div className="container d-flex flex-column">
              <div
                className="mt-md-5 mb-md-0 my-5 d-md-flex justify-content-center align-items-center"
                data-aos={isMobile() ? 'fade-up' : 'fade-right'}
                data-aos-delay={300}
              >
                <Image
                  className="ed-course-index ed-index-left"
                  src="http://localhost:3000/index-image/course01.png"
                  alt=""
                  width={150}
                  height={150}
                  data-aos={isMobile() ? 'fade-up' : 'fade-right'}
                  data-aos-delay={300}
                />
                <a href="./product/category/04">
                  <button id="btn1" className="btn my-2 btn-color-1 me-md-3">
                    中淺 <br /> 烘焙
                  </button>
                </a>
                <h6 className="slogan">
                  <span>
                    清新的早晨，
                    <br />
                    輕盈、果香的優雅滋味。
                  </span>
                </h6>
              </div>
              <div
                className="my-3 my-md-5 d-md-flex justify-content-center align-items-center"
                data-aos={isMobile() ? 'fade-up' : 'fade-right'}
                data-aos-delay={600}
              >
                <Image
                  className="ed-course-index ed-index-left"
                  src="http://localhost:3000/index-image/course02.png"
                  alt=""
                  width={150}
                  height={150}
                  data-aos={isMobile() ? 'fade-up' : 'fade-right'}
                  data-aos-delay={600}
                />
                <a href="./product/category/05">
                  <button id="btn2" className="btn my-2 btn-color-2 me-md-3">
                    中度 <br /> 烘焙
                  </button>
                </a>
                <h6 className="slogan">
                  <span>
                    平衡的香醇，
                    <br />
                    咖啡愛好者的黃金選擇。
                  </span>
                </h6>
              </div>
              <div
                className="my-5 my-md-3 d-md-flex justify-content-center align-items-center"
                data-aos={isMobile() ? 'fade-up' : 'fade-right'}
                data-aos-delay={900}
              >
                <Image
                  className="ed-course-index ed-index-left"
                  src="http://localhost:3000/index-image/course03.png"
                  alt=""
                  width={150}
                  height={150}
                  data-aos={isMobile() ? 'fade-up' : 'fade-right'}
                  data-aos-delay={900}
                />
                <a href="./product/category/06">
                  <button id="btn3" className="btn my-2 btn-color-3 me-md-3">
                    中深 <br /> 烘焙
                  </button>
                </a>

                <h6 className="slogan">
                  <span>
                    沉浸在咖啡的深邃風味，
                    <br />
                    進入咖啡的深度。
                  </span>
                </h6>
              </div>
              <div
                className="ed-my-md-5 d-md-flex d-block justify-content-center align-items-center ed-course-enter"
                data-aos="fade-down"
                data-aos-delay={600}
              >
                <img
                  className="arrow me-5 me-md-0"
                  src="http://localhost:3000/index-image/arrow.gif"
                  alt="arrow"
                />
                <a
                  className="d-md-inline d-flex justify-content-center align-items-center ms-md-5 ms-0"
                  href="./product"
                >
                  <br />
                  <button id="btn4" className="btn my-2 btn-color-4 me-md-3">
                    進入商城
                  </button>
                  <h6 className="ed-h6-resize ed-h6-resize-margin">
                    <span>COFFSEEKER精選咖啡，</span>
                    <br />
                    <span>由淺入深的曼妙滋味！</span>
                  </h6>
                </a>
              </div>
            </div>
          </div>

          {/* 右側放商品 */}
          <div className="popular-right ed-mt-1440">
            {productsData && productsData.length > 0 ? (
              <div>
                <div className="row ed-popular-padding">
                  {productsData.map((product, i) => {
                    return (
                      <ProductItem
                        key={product.id}
                        setShow={setShow}
                        product={product}
                      />
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="container">
                <img
                  className="ed-no-product-arrow"
                  src="http://localhost:3000/index-image/arrow.gif"
                  alt="arrow"
                />
                <div className="hot-product ed-no-product">
                  目前沒有可用的產品。
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="ed-bg-circle02"></div>
        <div className="ed-bg-circle03"></div>
      </div>
    </>
  )
}
