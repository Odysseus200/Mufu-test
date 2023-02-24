<template>
  <!-- 轮播图 -->
  <div w-auto h-180 relative>
    <Carousel />
    <div>
      <div text-white absolute top-14 left-28 z-999 text-3xl>
        <p>1/Dec 2022</p>
        <p>NGC 2237 冬季夜空中绽放的玫瑰</p>
      </div>
      <img w-full absolute bottom--0.1 z-1 src="../assets/波浪底图.png" />
      <!-- <div z-99 absolute top-154 left-285 text-2xl>
        <p>photo by 陈国亨</p>
      </div> -->
    </div>
  </div>
  <!-- 社区介绍 -->
  <div bg-white w-auto h-170 relative>
    <h2 class="title" text-center text-3xl pt-15 pb-15>
      中国最早最大的天文社区
    </h2>
    <div grid grid-cols-4 gap-1 justify-items-start md:justify-items-center>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
        >
          <defs>
            <rect id="path_0" x="0" y="0" width="82" height="82" />
          </defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 41 41)">
            <mask id="bg-mask-0" fill="white">
              <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="路径 1"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(13.666666666615418 41)  rotate(0 8.54166666669229 11.958333333333332)"
                d="M5.13,0C5.13,0 0,3.42 0,10.25C0,20.5 17.08,23.92 17.08,23.92 "
              />
              <path
                id="路径 2"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(51.25 41)  rotate(0 8.541666666666666 11.958333333333332)"
                d="M11.96,0C11.96,0 17.08,3.42 17.08,10.25C17.08,20.5 0,23.92 0,23.92 "
              />
              <path
                id="路径 3"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(41 27.331624999999907)  rotate(0 0.5 23.916666666666664)"
                d="M0,0L0,47.83 "
              />
              <path
                id="路径 4"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(30.75 6.833333333333451)  rotate(0 10.25 8.114583333333332)"
                d="M1.92,16.23C0.71,14.55 0,12.48 0,10.25C0,4.59 4.59,0 10.25,0C15.91,0 20.5,4.59 20.5,10.25C20.5,12.48 19.79,14.55 18.58,16.23 "
              />
              <path
                id="路径 5"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(15.375 22.20833333333345)  rotate(0 3.4166666666666665 10.25)"
                d="M6.83,0C6.83,0 0,4.27 0,10.25C0,16.23 5.13,20.5 5.13,20.5 "
              />
              <path
                id="路径 6"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(59.791666666666686 22.20833333333345)  rotate(0 3.4166666666666665 10.25)"
                d="M0,0C0,0 6.83,4.27 6.83,10.25C6.83,16.23 1.71,20.5 1.71,20.5 "
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
        >
          <defs>
            <rect id="path_0" x="0" y="0" width="82" height="82" />
          </defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 41 41)">
            <mask id="bg-mask-0" fill="white">
              <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="路径 1"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(6.833333333333318 34.62962500000002)  rotate(0 10.875677083333333 16.851854166666666)"
                d="M13.12,0C5.59,1.79 0,8.55 0,16.62C0,26.06 7.65,33.7 17.08,33.7C18.7,33.7 20.27,33.48 21.75,33.06 "
              />
              <path
                id="路径 2"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(52.95816250000002 34.62962500000002)  rotate(0 10.875677083333331 16.851854166666666)"
                d="M8.64,0C16.16,1.79 21.75,8.55 21.75,16.62C21.75,26.06 14.1,33.7 4.67,33.7C3.05,33.7 1.48,33.48 0,33.06 "
              />
              <path
                id="路径 3"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(20.5 13.666666666666725)  rotate(0 20.5 10.25)"
                d="M41,20.5C41,9.18 31.82,0 20.5,0C9.18,0 0,9.18 0,20.5 "
              />
              <path
                id="路径 4"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(29.153391666666675 35.74482500000003)  rotate(0 12.015049999999997 6.044424999999999)"
                d="M0,11.89L11.85,0L24.03,12.09 "
              />
              <path
                id="路径 5"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(41 41.78907916666656)  rotate(0 0.5 11.563879166666668)"
                d="M0,23.13L0,0 "
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
        >
          <defs>
            <rect id="path_0" x="0" y="0" width="82" height="82" />
          </defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 41 41)">
            <mask id="bg-mask-0" fill="white">
              <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="路径 2"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(8.54166666666673 10.25)  rotate(0 27.3311125 29.063618749999996)"
                d="M54.66,26.84C54.4,11.97 42.26,0 27.33,0C12.24,0 0,12.24 0,27.33C0,34.46 2.73,40.94 7.19,45.81L5.14,58.13L17.3,52.91C22.65,54.69 27.71,55.13 32.46,54.24 "
              />
              <path
                id="路径 3"
                fill-rule="evenodd"
                style="fill: #333333"
                transform="translate(21.994791666666732 27.219387500000032)  rotate(0 3.84375 3.872279166666667)"
                opacity="1"
                d="M7.69,3.87C7.69,1.73 5.97,0 3.84,0C1.72,0 0,1.73 0,3.87C0,6.01 1.72,7.74 3.84,7.74C5.97,7.74 7.69,6.01 7.69,3.87Z "
              />
              <path
                id="路径 4"
                fill-rule="evenodd"
                style="fill: #333333"
                transform="translate(37.36979166666673 27.219387500000032)  rotate(0 3.84375 3.872279166666667)"
                opacity="1"
                d="M7.69,3.87C7.69,1.73 5.97,0 3.84,0C1.72,0 0,1.73 0,3.87C0,6.01 1.72,7.74 3.84,7.74C5.97,7.74 7.69,6.01 7.69,3.87Z "
              />
              <path
                id="路径 6"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(37.583333333333265 35.875)  rotate(0 17.9375 17.9375)"
                d="M28.63,32.34C25.65,34.56 21.95,35.88 17.94,35.88C8.03,35.88 0,27.84 0,17.94C0,8.03 8.03,0 17.94,0C27.84,0 35.88,8.03 35.88,17.94C35.88,20.67 35.26,23.26 34.17,25.58 "
              />
              <path
                id="路径 8"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(66.21807499999993 61.453533333333276)  rotate(0 3.6201291666666657 5.148233333333334)"
                d="M5.54,0L7.24,10.3L0,6.76 "
              />
              <path
                id="路径 9"
                fill-rule="evenodd"
                style="fill: #333333"
                transform="translate(58.08333333333327 46.80816250000006)  rotate(0 2.8828125 2.904166666666668)"
                opacity="1"
                d="M5.77,2.9C5.77,1.3 4.47,0 2.88,0C1.29,0 0,1.3 0,2.9C0,4.51 1.29,5.81 2.88,5.81C4.47,5.81 5.77,4.51 5.77,2.9Z "
              />
              <path
                id="路径 10"
                fill-rule="evenodd"
                style="fill: #333333"
                transform="translate(46.552083333333265 46.80816250000006)  rotate(0 2.8828125 2.904166666666668)"
                opacity="1"
                d="M5.77,2.9C5.77,1.3 4.47,0 2.88,0C1.29,0 0,1.3 0,2.9C0,4.51 1.29,5.81 2.88,5.81C4.47,5.81 5.77,4.51 5.77,2.9Z "
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
        >
          <defs>
            <rect id="path_0" x="0" y="0" width="82" height="82" />
          </defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 41 41)">
            <mask id="bg-mask-0" fill="white">
              <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="路径 1"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(20.5 6.83333333333348)  rotate(0 20.5 22.208333333333332)"
                d="M41,23.31L41,0L0,0L0,23.31C0,34.97 9.18,44.42 20.5,44.42C31.82,44.42 41,34.97 41,23.31Z "
              />
              <path
                id="路径 2"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(6.833333333333244 18.79166666666652)  rotate(0 6.833333333333332 8.541666666666666)"
                d="M13.67,0L0,0C0,11.39 6.83,17.08 13.67,17.08L13.67,0Z "
              />
              <path
                id="路径 3"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(61.5 18.79166666666652)  rotate(0 6.833333333333332 8.541666666666666)"
                d="M13.67,0L0,0L0,17.08C6.83,17.08 13.67,11.39 13.67,0Z "
              />
              <path
                id="路径 4"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(41 54.66666666666652)  rotate(0 0.3153846153846154 3.4166666666666665)"
                d="M0,0L0,6.83 "
              />
              <path
                id="路径 5"
                style="
                  stroke: #333333;
                  stroke-width: 2.6666666666666665;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(25.625 61.5)  rotate(0 15.375 5.125)"
                d="M30.75,10.25L23.99,0L6.3,0L0,10.25L30.75,10.25Z "
              />
            </g>
          </g>
        </svg>
      </div>
      <div text-center>
        <p>学习、分享</p>
        <p>跟随社区成长</p>
      </div>
      <div text-center>
        <p>上传作品</p>
        <p>展示自己作品</p>
        <p>云端存储</p>
      </div>
      <div text-center>
        <p>与同好们互动</p>
        <p>跟大咖们探讨问题</p>
        <p>加入感兴趣的群组</p>
      </div>
      <div text-center>
        <p>参与活动</p>
        <p>天文摄影师间竞技</p>
        <p>提升自我</p>
      </div>
    </div>
    <div grid grid-cols-4 gap-0 justify-items-start md:justify-items-center>
      <div ml-37>
        <p>牧夫天文</p>
        <p>24 年始终坚守在天文科普的前沿</p>
        <p>37,3853 个来自五湖四海热爱天文的朋友</p>
        <p>3,851,666 次心灵的碰撞</p>
      </div>
      <div flex space-x-30 absolute right-30>
        <div flex flex-col>
          <img w-auto h-40 src="../assets/android.png" />
          <img w-auto src="../assets/andriod.png" />
        </div>
        <div flex flex-col>
          <img w-auto h-40 src="../assets/ios.png" />
          <img w-auto src="../assets/appstore.png" />
        </div>
        <div flex flex-col>
          <img w-auto h-40 src="../assets/ios.png" />
          <img w-auto src="../assets/公众号.png" />
        </div>
      </div>
    </div>
  </div>
  <!-- 天体库 -->
  <div class="box">
    <div class="flowImage fixed-bg bg1">
      <svg
        absolute
        top-35
        left-0
        right-0
        m-auto
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <defs><rect id="path_0" x="0" y="0" width="64" height="64" /></defs>
        <g opacity="1" transform="translate(0 0)  rotate(0 60 60)">
          <path
            id="圆形 1"
            fill-rule="evenodd"
            style="fill: #cccccc"
            transform="translate(0 0)  rotate(0 60 60)"
            opacity="1"
            d="M60,0C26.86,0 0,26.86 0,60C0,93.14 26.86,120 60,120C93.14,120 120,93.14 120,60C120,26.86 93.14,0 60,0Z "
          />
          <path
            id="圆形 1"
            style="
              stroke: #000000;
              stroke-width: 1;
              stroke-opacity: 1;
              stroke-dasharray: 0 0;
            "
            transform="translate(0 0)  rotate(0 60 60)"
            d="M60,0C26.86,0 0,26.86 0,60C0,93.14 26.86,120 60,120C93.14,120 120,93.14 120,60C120,26.86 93.14,0 60,0Z "
          />
          <g opacity="1" transform="translate(28 28)  rotate(0 32 32)">
            <mask id="bg-mask-0" fill="white">
              <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="路径 1"
                style="
                  stroke: #333333;
                  stroke-width: 5.333333333333333;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(10.666666666666666 10.666666666666666)  rotate(0 21.333333333333332 21.333333333333332)"
                d="M42.67,21.33C42.67,9.55 33.12,0 21.33,0C9.55,0 0,9.55 0,21.33C0,33.12 9.55,42.67 21.33,42.67C33.12,42.67 42.67,33.12 42.67,21.33Z "
              />
              <path
                id="路径 2"
                style="
                  stroke: #333333;
                  stroke-width: 5.333333333333333;
                  stroke-opacity: 1;
                  stroke-dasharray: 0 0;
                "
                transform="translate(3.5299513941134912 20.67973333333333)  rotate(0 28.470065050162802 12.72632073110239)"
                d="M46.56,0C52.18,0.49 56.04,2.22 56.8,5.06C58.33,10.75 46.88,18.76 31.23,22.96C15.58,27.15 1.66,25.94 0.14,20.25C-0.66,17.26 2.1,13.65 7.16,10.27 "
              />
            </g>
          </g>
        </g>
      </svg>
      <p text-5xl font-extrabold text-white text-center select-none>天体库</p>
    </div>
  </div>
  <!-- 天体库文字 -->
  <div relative>
    <div bg-white w-auto h-70 text-center>
      <h2 text-3xl pt-15>最全面的天体数据库</h2>
      <h2 text-3xl text-coolGray>精选深空天体美图，带你领略深空之美</h2>
      <button
        text-lg
        font-bold
        mt-2
        w-38
        h-10
        bg-black
        text-white
        rounded-5
        hover:bg-gray-800
        cursor-pointer
      >
        浏览更多
      </button>
    </div>
  </div>
  <!-- 最全天体数据库 -->
  <div class="main">
    <!-- 版心 -->
    <div class="center">
      <!-- 第1行 一楼 -->
      <div class="row">
        <!-- 1楼第1块 -->
        <div class="col1-1 relative">
          <img
            cursor-pointer
            lazy="lazy"
            src="../assets/创生之柱.jpeg"
            class="pic"
          />
          <span>
            <p font-bold absolute left-3 top-3 text-white>创生之柱</p>
            <p font-bold absolute left-3 bottom-13 text-white>我不懂pi</p>
          </span>
        </div>
        <!-- 1楼第2块 -->
        <div class="col1-2 relative">
          <img
            cursor-pointer
            lazy="lazy"
            src="../assets/M31.jpeg"
            class="pic"
          />
          <span>
            <p font-bold absolute left-3 top-3 text-white>M31</p>
            <p font-bold absolute left-3 bottom-13 text-white>happyfly</p>
          </span>
        </div>
        <div class="col1-3 relative">
          <img
            cursor-pointer
            lazy="lazy"
            src="../assets/木星.jpeg"
            class="pic"
          />
          <span>
            <p font-bold absolute left-3 top-3 text-white>木星</p>
            <p font-bold absolute left-3 bottom-13 text-white>遥望星空~</p>
          </span>
        </div>
      </div>
      <!-- 第2行 二楼 -->
      <div class="row">
        <!-- 2楼第1块 -->
        <div class="col2-1 relative">
          <img
            cursor-pointer
            lazy="lazy"
            src="../assets/加州星云.jpeg"
            alt=""
          />
          <span>
            <p font-bold absolute left-3 top-3 text-white>加州星云</p>
            <p font-bold absolute left-3 bottom-0 text-white>冰河001</p>
          </span>
        </div>
        <!-- 2楼第2块 -->
        <div class="col2-2 relative">
          <img cursor-pointer lazy="lazy" src="../assets/M33.jpeg" />
          <span
            ><p font-bold absolute left-3 top-3 text-white>M33</p>
            <p font-bold absolute left-3 bottom-0 text-white>kenenbolulibo</p>
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- 器材库 -->
  <div relative>
    <div class="box">
      <div class="flowImage fixed-bg bg2">
        <svg
          absolute
          top-35
          left-0
          right-0
          m-auto
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <defs><rect id="path_0" x="0" y="0" width="64" height="64" /></defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 60 60)">
            <path
              id="圆形 1"
              fill-rule="evenodd"
              style="fill: #cccccc"
              transform="translate(0 0)  rotate(0 60 60)"
              opacity="1"
              d="M60,0C26.86,0 0,26.86 0,60C0,93.14 26.86,120 60,120C93.14,120 120,93.14 120,60C120,26.86 93.14,0 60,0Z "
            />
            <path
              id="圆形 1"
              style="
                stroke: #000000;
                stroke-width: 1;
                stroke-opacity: 1;
                stroke-dasharray: 0 0;
              "
              transform="translate(0 0)  rotate(0 60 60)"
              d="M60,0C26.86,0 0,26.86 0,60C0,93.14 26.86,120 60,120C93.14,120 120,93.14 120,60C120,26.86 93.14,0 60,0Z "
            />
            <g opacity="1" transform="translate(28 28)  rotate(0 32 32)">
              <mask id="bg-mask-0" fill="white">
                <use xlink:href="#path_0"></use>
              </mask>
              <g mask="url(#bg-mask-0)">
                <path
                  id="分组 1"
                  fill-rule="evenodd"
                  style="fill: #383838"
                  transform="translate(5.602683925492865 3.51999997453704)  rotate(0 26.391431172735064 28.485299153619994)"
                  opacity="1"
                  d="M45.99 30.72L51.95 27.24C52.74 26.82 53.01 25.83 52.57 25.08L38.69 0.8C38.47 0.43 38.12 0.16 37.71 0.05C37.3 -0.05 36.86 0 36.5 0.21L30.54 3.68C29.78 4.13 29.51 5.1 29.95 5.86L31.89 9.25L8.35 22.97C7.59 23.41 7.33 24.38 7.76 25.14L9.14 27.55L0.8 32.41C0.04 32.85 -0.23 33.82 0.21 34.58L4.98 42.91C5.19 43.29 5.53 43.55 5.95 43.66C6.37 43.77 6.8 43.71 7.17 43.5L15.49 38.66L16.75 40.87C16.97 41.25 17.32 41.51 17.73 41.62C18.14 41.73 18.58 41.67 18.94 41.46L42.45 27.77L43.81 30.13C44.02 30.51 44.36 30.77 44.78 30.88C45.19 30.99 45.63 30.93 45.99 30.72Z M13.9146 35.8853L10.7346 30.3253L3.79465 34.3653L6.97465 39.9253L13.9146 35.8853Z M40.876 25.0027L33.456 12.0427L11.336 24.9327L12.716 27.3427L18.746 37.9027L40.876 25.0027Z M49.012 25.2767L36.712 3.78667L33.512 5.65667L45.812 27.1467L49.012 25.2767Z M30.0988 40.5211C29.7788 40.1111 29.2688 39.8711 28.7488 39.9011C28.2188 39.9211 27.7388 40.2111 27.4688 40.6611L18.9288 54.5311C18.4588 55.2811 18.6988 56.2711 19.4488 56.7311C20.2088 57.1911 21.1888 56.9611 21.6488 56.2111L28.9688 44.3211L38.2388 56.3411C38.7688 57.0411 39.7888 57.1711 40.4788 56.6411C41.1688 56.0911 41.3088 55.0911 40.7688 54.4011L30.0988 40.5211Z "
                />
              </g>
            </g>
          </g>
        </svg>
        <p text-5xl font-extrabold text-white text-center select-none>器材库</p>
      </div>
    </div>
    <!-- 器材库文字 -->
    <div bg-white w-auto h-70 text-center>
      <h2 text-3xl pt-15>你想要的器材都在这里</h2>
      <h2 text-3xl text-coolGray>初学者、进阶者、大佬，总有适合你的设备</h2>
      <button
        text-lg
        font-bold
        mt-2
        w-38
        h-10
        bg-black
        text-white
        rounded-5
        hover:bg-gray-800
        cursor-pointer
      >
        浏览器材库
      </button>
    </div>
    <!-- 卡片 -->
    <div
      grid
      gap-x-12
      grid-cols-3
      text-center
      flex
      justify-center
      align-center
      mb-20
    >
      <n-card
        embedded
        :bordered="true"
        shadow-2xl
        title=""
        hoverable
        w-75
        h-75
        cursor-pointer
      >
        <svg
          absolute
          top-5
          left-8
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <defs><rect id="path_0" x="0" y="0" width="70" height="70" /></defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 35 35)">
            <mask id="bg-mask-0" fill="white">
              <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="路径 1"
                fill-rule="evenodd"
                style="fill: #3a99d7"
                transform="translate(0 0)  rotate(0 35 35)"
                opacity="1"
                d="M35,70C54.32,70 70,54.32 70,35C70,15.68 54.32,0 35,0C15.68,0 0,15.68 0,35C0,54.32 15.68,70 35,70Z "
              />
              <path
                id="路径 2"
                fill-rule="evenodd"
                style="fill: #2682bf"
                transform="translate(15.537706474609374 18.474926162109377)  rotate(0 27.09292625976563 25.761579887695774)"
                opacity="1"
                d="M54.19,20.93L39.25,5.99L39.12,6.13L32.98,0L18.12,8.5L1.12,6.35L0,32.8L18.71,51.51C18.96,51.52 19.21,51.52 19.46,51.52C37.3,51.52 52.02,38.18 54.19,20.93L54.19,20.93Z "
              />
              <path
                id="路径 3"
                fill-rule="evenodd"
                style="fill: #f2b527"
                transform="translate(32.4806815829204 18.19821171874998)  rotate(0 8.824693844935977 3.493451274414064)"
                opacity="1"
                d="M17.63,6.06L16.36,0.93C16.24,0.43 15.94,0 15.43,0L2.22,0L2.22,0C1.71,0 1.29,0.42 1.29,0.93L0.02,6.06C-0.1,6.56 0.44,6.99 0.94,6.99L16.71,6.99C17.21,6.99 17.75,6.55 17.63,6.06Z "
              />
              <path
                id="路径 4"
                fill-rule="evenodd"
                style="fill: #ffd630"
                transform="translate(14.59217435247242 23.639259560546847)  rotate(0 20.40707372220129 14.080102250976562)"
                opacity="1"
                d="M0,2.45L0,25.71C0,27.06 1.1,28.16 2.45,28.16L38.36,28.16C39.72,28.16 40.81,27.06 40.81,25.71L40.81,2.45C40.81,1.1 39.72,0 38.36,0L2.45,0C1.1,0 0,1.1 0,2.45Z "
              />
              <path
                id="路径 5"
                fill-rule="evenodd"
                style="fill: #c94545"
                transform="translate(14.592037646484378 32.38652518554689)  rotate(0 20.407210434570313 5.973353955078126)"
                opacity="1"
                d="M0,0L0,11.95L40.81,11.95L40.81,0L0,0Z "
              />
              <path
                id="路径 6"
                fill-rule="evenodd"
                style="fill: #ffffcf"
                transform="translate(30.47290278320313 27.526796445312513)  rotate(0 10.832330742187503 10.832330847508336)"
                opacity="1"
                d="M5.42,20.21C8.77,22.15 12.9,22.15 16.25,20.21C19.6,18.28 21.66,14.7 21.66,10.83C21.66,4.85 16.81,0 10.83,0C4.85,0 0,4.85 0,10.83C0,14.7 2.06,18.28 5.42,20.21Z "
              />
              <path
                id="路径 7"
                fill-rule="evenodd"
                style="fill: #d3c298"
                transform="translate(33.18098546875 30.234878990431582)  rotate(0 8.124248056640626 8.124248197068413)"
                opacity="1"
                d="M4.06,15.16C6.58,16.61 9.67,16.61 12.19,15.16C14.7,13.71 16.25,11.03 16.25,8.12C16.25,5.22 14.7,2.54 12.19,1.09C9.67,-0.36 6.58,-0.36 4.06,1.09C1.55,2.54 0,5.22 0,8.12C0,11.03 1.55,13.71 4.06,15.16Z "
              />
              <path
                id="路径 8"
                fill-rule="evenodd"
                style="fill: #3184e7"
                transform="translate(34.043940751953116 31.097834414062504)  rotate(0 7.261292773437498 7.261292861268391)"
                opacity="1"
                d="M3.63,13.55C5.88,14.85 8.65,14.85 10.89,13.55C13.14,12.25 14.52,9.86 14.52,7.26C14.52,3.25 11.27,0 7.26,0C3.25,0 0,3.25 0,7.26C0,9.86 1.38,12.25 3.63,13.55Z "
              />
              <path
                id="路径 9"
                fill-rule="evenodd"
                style="fill: #c94545"
                transform="translate(17.648474238281246 21.9650278613281)  rotate(0 2.4154407812500005 0.8371158496093756)"
                opacity="1"
                d="M0.8,0C0.36,0 0,0.36 0,0.8L0,1.67L4.83,1.67L4.83,0.8C4.83,0.36 4.47,0 4.03,0L0.8,0L0.8,0Z "
              />
              <path
                id="路径 10"
                fill-rule="evenodd"
                style="fill: #e6e6e6"
                transform="translate(16.780597148437497 26.19517666992188)  rotate(0 3.283317836914063 1.789005244140625)"
                opacity="1"
                d="M0,0.46L0,3.12C0,3.37 0.21,3.58 0.46,3.58L6.1,3.58C6.36,3.58 6.57,3.37 6.57,3.12L6.57,0.46C6.57,0.21 6.36,0 6.1,0L0.46,0C0.21,0 0,0.21 0,0.46Z "
              />
              <path
                id="路径 11"
                fill-rule="evenodd"
                style="fill: #ffffff"
                transform="translate(17.181860458984367 26.561987333984355)  rotate(0 2.881986201171876 1.421921142578124)"
                opacity="1"
                d="M0,0.37L0,2.48C0,2.68 0.18,2.84 0.41,2.84L5.36,2.84C5.58,2.84 5.76,2.68 5.76,2.48L5.76,0.37C5.76,0.17 5.58,0 5.36,0L0.41,0C0.18,0 0,0.17 0,0.37Z "
              />
              <path
                id="路径 12"
                fill-rule="evenodd"
                style="fill: #ffd630"
                transform="translate(37.454473369140615 19.903888251953134)  rotate(0 3.3939899218750003 1.3982007812499995)"
                opacity="1"
                d="M0,1.4L0,1.4C0,2.17 0.63,2.8 1.4,2.8L5.39,2.8C6.16,2.8 6.79,2.17 6.79,1.4L6.79,1.4C6.79,0.63 6.16,0 5.39,0L1.4,0C0.63,0 0,0.63 0,1.4Z "
              />
              <path
                id="路径 13"
                fill-rule="evenodd"
                style="fill: #ffffff"
                transform="translate(37.796401562499994 20.044569589843753)  rotate(0 3.051651572265625 1.257109287109375)"
                opacity="1"
                d="M0,1.26C0,1.95 0.56,2.51 1.26,2.51L4.85,2.51C5.54,2.51 6.1,1.95 6.1,1.26C6.1,0.56 5.54,0 4.85,0L1.26,0C0.56,0 0,0.56 0,1.26Z "
              />
              <path
                id="路径 14"
                fill-rule="evenodd"
                style="fill: #0062ff"
                transform="translate(36.763097451171866 33.81699111328125)  rotate(0 4.542136074218749 4.542136144424246)"
                opacity="1"
                d="M2.27,8.48C3.68,9.29 5.41,9.29 6.81,8.48C8.22,7.66 9.08,6.16 9.08,4.54C9.08,2.04 7.05,0 4.54,0C2.04,0 0,2.04 0,4.54C0,6.16 0.87,7.66 2.27,8.48Z "
              />
              <path
                id="路径 15"
                fill-rule="evenodd"
                style="fill: #022d91"
                transform="translate(39.60010393554687 36.65399752830963)  rotate(0 1.7051295898437564 1.7051296591903564)"
                opacity="1"
                d="M0.85,3.18C1.38,3.49 2.03,3.49 2.56,3.18C3.09,2.88 3.41,2.31 3.41,1.71C3.41,1.1 3.09,0.53 2.56,0.23C2.03,-0.08 1.38,-0.08 0.85,0.23C0.32,0.53 0,1.1 0,1.71C0,2.31 0.32,2.88 0.85,3.18Z "
              />
              <path
                id="路径 16"
                fill-rule="evenodd"
                style="fill: #ffffff"
                transform="translate(38.99431258789062 35.2030241506061)  rotate(0 0.8733457373046954 0.8733457517376347)"
                opacity="1"
                d="M0.44,1.63C0.71,1.79 1.04,1.79 1.31,1.63C1.58,1.47 1.75,1.19 1.75,0.87C1.75,0.56 1.58,0.27 1.31,0.12C1.04,-0.04 0.71,-0.04 0.44,0.12C0.17,0.27 0,0.56 0,0.87C0,1.19 0.17,1.47 0.44,1.63Z "
              />
              <path
                id="路径 17"
                fill-rule="evenodd"
                style="fill: #ffffff"
                transform="translate(42.179126103515614 39.79793280516362)  rotate(0 0.5826862207031286 0.5826862378051056)"
                opacity="1"
                d="M0.29,1.09C0.47,1.19 0.69,1.19 0.87,1.09C1.05,0.98 1.17,0.79 1.17,0.58C1.17,0.37 1.05,0.18 0.87,0.08C0.69,-0.03 0.47,-0.03 0.29,0.08C0.11,0.18 0,0.37 0,0.58C0,0.79 0.11,0.98 0.29,1.09Z "
              />
            </g>
          </g>
        </svg>
        <p text-2xl>相机</p>
        <img object-cover w-65 h-35 pt-5 src="../assets/相机.jpeg" alt=""
      /></n-card>
      <n-card
        embedded
        :bordered="true"
        shadow-2xl
        title=""
        hoverable
        w-75
        h-75
        cursor-pointer
      >
        <svg
          absolute
          top-5
          left-8
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <defs>
            <rect id="path_0" x="0" y="0" width="44.8" height="44.8" />
          </defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 35 35)">
            <path
              id="圆形 1"
              fill-rule="evenodd"
              style="fill: #a3caf7"
              transform="translate(0 0)  rotate(0 35 35)"
              opacity="1"
              d="M35,0C15.67,0 0,15.67 0,35C0,54.33 15.67,70 35,70C54.33,70 70,54.33 70,35C70,15.67 54.33,0 35,0Z "
            />
            <g
              opacity="1"
              transform="translate(12.6 12.6)  rotate(0 22.4 22.4)"
            >
              <mask id="bg-mask-0" fill="white">
                <use xlink:href="#path_0"></use>
              </mask>
              <g mask="url(#bg-mask-0)">
                <path
                  id="路径 1"
                  fill-rule="evenodd"
                  style="fill: #f9cc12"
                  transform="translate(4.194799683112113 14.856674683112145)  rotate(0 11.636137816887887 6.401450316887889)"
                  opacity="1"
                  d="M23.24,3.05L22.03,0.26C21.94,0.04 21.68,-0.06 21.46,0.04L0.26,9.18C0.04,9.27 -0.06,9.53 0.04,9.75L1.24,12.54C1.33,12.76 1.59,12.86 1.81,12.77L23.01,3.63C23.23,3.53 23.33,3.27 23.24,3.05Z "
                />
                <path
                  id="分组 1"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(3.3150700903157837 13.985695090315707)  rotate(0 12.51149240968422 7.276214954842107)"
                  opacity="1"
                  d="M21.99 0.11L0.79 9.25C0.13 9.53 -0.18 10.3 0.11 10.97L1.31 13.76C1.45 14.08 1.7 14.33 2.03 14.46C2.19 14.52 2.35 14.55 2.52 14.55C2.69 14.55 2.87 14.51 3.04 14.44L24.23 5.31C24.89 5.02 25.2 4.25 24.92 3.58L23.71 0.79C23.43 0.13 22.65 -0.18 21.99 0.11Z M2.7468 12.6581L23.1368 3.86805L22.2868 1.87805L1.8868 10.6681L2.7468 12.6581Z M23.5411 3.69368C23.5411 3.69368 23.5411 3.69368 23.5411 3.69368 "
                />
                <path
                  id="路径 5"
                  fill-rule="evenodd"
                  style="fill: #186fed"
                  transform="translate(7.6323633350935465 12.68111333509348)  rotate(0 11.749833204100446 7.043574164906455)"
                  opacity="1"
                  d="M23.39,3.78L22.11,0.82C21.82,0.13 21.02,-0.19 20.33,0.11L0.82,8.52C0.13,8.82 -0.19,9.62 0.11,10.31L1.39,13.27C1.68,13.95 2.48,14.27 3.17,13.98L22.68,5.56C23.36,5.27 23.68,4.46 23.39,3.78Z "
                />
                <path
                  id="分组 2"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(6.75693730994643 11.805687309946402)  rotate(0 12.62510360052688 7.917781345026783)"
                  opacity="1"
                  d="M1.46 14.49C1.82 15.33 2.64 15.84 3.51 15.84C3.8 15.84 4.11 15.78 4.39 15.65L23.9 7.24C24.45 7 24.87 6.57 25.09 6.01C25.31 5.46 25.3 4.85 25.07 4.31L23.79 1.35C23.3 0.22 21.99 -0.3 20.86 0.18L1.35 8.59C0.22 9.08 -0.3 10.4 0.18 11.53L1.46 14.49Z M21.9183 1.79244C21.8783 1.77244 21.8183 1.75244 21.7383 1.75244C21.6783 1.75244 21.6183 1.76244 21.5483 1.79244L2.03826 10.2024C1.79826 10.3124 1.67826 10.6024 1.78826 10.8424L3.06826 13.8024C3.16826 14.0424 3.45826 14.1524 3.69826 14.0524L23.2083 5.64244C23.4483 5.53244 23.5683 5.24244 23.4583 5.00244L22.1883 2.04244C22.1183 1.88244 21.9883 1.81244 21.9183 1.79244Z "
                />
                <path
                  id="路径 8"
                  fill-rule="evenodd"
                  style="fill: #186fed"
                  transform="translate(32.06622865445382 7.186666952796264)  rotate(0 4.1939361955461605 5.258102206578709)"
                  opacity="1"
                  d="M6.18,10.31C8.22,9.51 8.98,6.59 7.89,3.81C6.79,1.02 4.24,-0.6 2.21,0.21C0.17,1.01 -0.6,3.92 0.5,6.71C1.6,9.5 4.14,11.11 6.18,10.31Z "
                />
                <path
                  id="分组 3"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(31.190038034228373 6.313895682618384)  rotate(0 5.069961965771631 6.133364658690821)"
                  opacity="1"
                  d="M0.56 7.9C1.16 9.43 2.16 10.69 3.39 11.47C4.23 12 5.1 12.27 5.95 12.27C6.44 12.27 6.92 12.18 7.38 12C8.63 11.51 9.54 10.4 9.93 8.9C10.3 7.49 10.18 5.88 9.58 4.36C8.98 2.84 7.97 1.57 6.75 0.8C5.43 -0.04 4.02 -0.22 2.76 0.27C1.51 0.76 0.6 1.86 0.21 3.37C-0.16 4.77 -0.04 6.38 0.56 7.9Z M4.32734 9.98923C5.15734 10.5192 6.01734 10.6492 6.73734 10.3692C7.45734 10.0792 7.98734 9.40923 8.23734 8.44923C8.51734 7.39923 8.40734 6.17923 7.94734 4.99923C7.47734 3.81923 6.71734 2.84923 5.80734 2.26923C5.25734 1.92923 4.70734 1.74923 4.17734 1.74923C3.90734 1.74923 3.64734 1.79923 3.39734 1.88923C2.67734 2.17923 2.14734 2.85923 1.89734 3.80923C1.62734 4.85923 1.72734 6.08923 2.18734 7.26923C2.65734 8.43923 3.41734 9.40923 4.32734 9.98923Z "
                />
                <path
                  id="路径 11"
                  fill-rule="evenodd"
                  style="fill: #f9cc12"
                  transform="translate(12.392363335093561 8.997363335093564)  rotate(0 12.34168582792552 8.419511664906457)"
                  opacity="1"
                  d="M24.58,6.53L22.11,0.82C21.82,0.13 21.02,-0.19 20.33,0.11L0.82,8.52C0.13,8.82 -0.19,9.62 0.11,10.31L2.57,16.02C2.87,16.71 3.67,17.03 4.36,16.73L23.86,8.31C24.55,8.02 24.87,7.22 24.58,6.53Z "
                />
                <path
                  id="分组 4"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(11.51535548899982 8.126312309946371)  rotate(0 13.21870701100019 9.291531345026783)"
                  opacity="1"
                  d="M26.28 8.76C26.5 8.21 26.49 7.6 26.25 7.05L23.8 1.35C23.31 0.22 21.99 -0.3 20.86 0.18L1.35 8.59C0.8 8.83 0.38 9.26 0.16 9.82C-0.06 10.38 -0.05 10.98 0.18 11.53L2.65 17.24C2.88 17.78 3.32 18.21 3.87 18.43C4.14 18.53 4.42 18.58 4.7 18.58C5 18.58 5.29 18.52 5.57 18.4L25.09 9.99C25.63 9.75 26.06 9.32 26.28 8.76Z M4.51962 16.7981C4.58962 16.8281 4.72962 16.8681 4.88962 16.7981L24.3996 8.38806C24.6396 8.27806 24.7496 7.98806 24.6496 7.74806L22.1896 2.03806C22.1096 1.85806 21.9196 1.74806 21.7396 1.74806C21.6696 1.74806 21.6096 1.75806 21.5496 1.78806L2.03962 10.1981C1.87962 10.2681 1.80962 10.3981 1.78962 10.4681C1.75962 10.5381 1.71962 10.6781 1.78962 10.8381L4.24962 16.5481C4.31962 16.7081 4.44962 16.7781 4.51962 16.7981Z "
                />
                <path
                  id="路径 14"
                  fill-rule="evenodd"
                  style="fill: #f9cc12"
                  transform="translate(30.366305639425956 5.638805639426042)  rotate(0 4.414944360574042 7.443371690602083)"
                  opacity="1"
                  d="M7.11,14.76L7.88,14.42C8.68,14.08 9.04,13.15 8.7,12.36L3.78,0.95C3.44,0.15 2.51,-0.21 1.72,0.13L0.95,0.46C0.15,0.8 -0.21,1.73 0.13,2.53L5.04,13.93C5.39,14.73 6.32,15.1 7.11,14.76Z "
                />
                <path
                  id="分组 5"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(29.489024907697893 4.76086348684202)  rotate(0 5.2900375923021095 8.320818256578946)"
                  opacity="1"
                  d="M2.24 0.2L1.48 0.53C0.24 1.07 -0.33 2.51 0.2 3.75L5.12 15.16C5.52 16.09 6.43 16.64 7.37 16.64C7.7 16.64 8.03 16.58 8.34 16.44L9.1 16.1C10.34 15.57 10.91 14.13 10.38 12.88L5.46 1.48C5.2 0.88 4.72 0.41 4.12 0.17C3.51 -0.07 2.84 -0.06 2.24 0.2Z M7.64456 14.8352L8.41456 14.5052C8.76456 14.3452 8.92456 13.9352 8.77456 13.5852L3.86456 2.17522C3.70456 1.82522 3.29456 1.66522 2.94456 1.81522L2.17456 2.14522C1.82456 2.29522 1.66456 2.70522 1.81456 3.06522L6.72456 14.4652C6.88456 14.8252 7.29456 14.9852 7.64456 14.8352Z "
                />
                <path
                  id="路径 17"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(21.44624999999999 24.158750000000055)  rotate(0 0.8750000000000012 8.671249999999999)"
                  opacity="1"
                  d="M1.75,16.47L1.75,0.87C1.75,0.39 1.36,0 0.87,0C0.39,0 0,0.39 0,0.87L0,16.47C0,16.95 0.39,17.34 0.87,17.34C1.36,17.34 1.75,16.95 1.75,16.47Z "
                />
                <path
                  id="路径 18"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(21.448437499999997 24.545937499999955)  rotate(0 6.387499999999999 6.3885937499999965)"
                  opacity="1"
                  d="M12.52,12.52C12.86,12.18 12.86,11.62 12.52,11.28L1.49,0.26C1.15,-0.09 0.6,-0.09 0.26,0.26C-0.09,0.6 -0.09,1.15 0.26,1.49L11.28,12.52C11.45,12.69 11.67,12.78 11.9,12.78C12.12,12.78 12.35,12.69 12.52,12.52Z "
                />
                <path
                  id="路径 19"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(10.423437499999999 24.545937499999955)  rotate(0 6.387499999999999 6.3885937499999965)"
                  opacity="1"
                  d="M1.49,12.52L12.52,1.49C12.86,1.15 12.86,0.6 12.52,0.26C12.18,-0.09 11.62,-0.09 11.28,0.26L0.26,11.28C-0.09,11.62 -0.09,12.18 0.26,12.52C0.43,12.69 0.65,12.78 0.87,12.78C1.1,12.78 1.32,12.69 1.49,12.52Z "
                />
                <path
                  id="路径 20"
                  fill-rule="evenodd"
                  style="fill: #f9cc12"
                  transform="translate(21.013125000000016 23.458750000000055)  rotate(0 1.3081250000000002 1.3081249999999989)"
                  opacity="1"
                  d="M1.31,2.62C2.03,2.62 2.62,2.03 2.62,1.31C2.62,0.59 2.03,0 1.31,0C0.59,0 0,0.59 0,1.31C0,2.03 0.59,2.62 1.31,2.62Z "
                />
                <path
                  id="分组 6"
                  fill-rule="evenodd"
                  style="fill: #444d68"
                  transform="translate(20.575625000000016 23.02125000000006)  rotate(0 1.7456250000000002 1.7456249999999986)"
                  opacity="1"
                  d="M3.49 1.75C3.49 0.78 2.71 0 1.75 0C0.78 0 0 0.78 0 1.75C0 2.71 0.78 3.49 1.75 3.49C2.71 3.49 3.49 2.71 3.49 1.75Z M0.875 1.74063C0.875 2.22062 1.265 2.61063 1.745 2.61063C2.225 2.61063 2.615 2.22062 2.615 1.74063C2.615 1.26063 2.225 0.870625 1.745 0.870625C1.265 0.870625 0.875 1.26063 0.875 1.74063Z "
                />
              </g>
            </g>
          </g>
        </svg>
        <p text-2xl>主镜</p>
        <img object-cover w-65 h-35 pt-5 src="../assets/主镜.png" alt=""
      /></n-card>
      <n-card
        embedded
        :bordered="true"
        shadow-2xl
        title=""
        hoverable
        w-75
        h-75
        cursor-pointer
      >
        <svg
          absolute
          top-5
          left-8
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <defs><rect id="path_0" x="0" y="0" width="70" height="70" /></defs>
          <g opacity="1" transform="translate(0 0)  rotate(0 35 35)">
            <mask id="bg-mask-0" fill="white">
              <use xlink:href="#path_0"></use>
            </mask>
            <g mask="url(#bg-mask-0)">
              <path
                id="路径 1"
                fill-rule="evenodd"
                style="fill: #ffd630"
                transform="translate(0 0)  rotate(0 34.999931640625 34.999931640625)"
                opacity="1"
                d="M35,70C54.32,70 70,54.32 70,35C70,15.68 54.32,0 35,0C15.68,0 0,15.68 0,35C0,54.32 15.68,70 35,70Z "
              />
              <path
                id="路径 2"
                fill-rule="evenodd"
                style="fill: #f5be18"
                transform="translate(17.543784931640623 11.734229677734355)  rotate(0 25.968679160156245 29.090023081054692)"
                opacity="1"
                d="M6.16,33.64L15.4,42.86L9.28,47.11L20.35,58.18C36.27,56.88 49.16,44.94 51.94,29.51L51.91,29.48L29.48,7.05L23.76,12.77L10.98,0L10.87,3.15L5.72,6.82L0,15.93L1.65,23.61L5.43,30.61L6.16,33.64Z "
              />
              <path
                id="路径 3"
                fill-rule="evenodd"
                style="fill: #e84f4f"
                transform="translate(32.948293984375 49.104495986328146)  rotate(0 1.6040809326171885 3.366758383789061)"
                opacity="1"
                d="M0,6.73L3.21,6.73L3.21,0L0,0L0,6.73Z "
              />
              <path
                id="路径 4"
                fill-rule="evenodd"
                style="fill: #d14747"
                transform="translate(34.567072490234374 49.1049061425781)  rotate(0 0.8092525000000006 3.367100214843748)"
                opacity="1"
                d="M0,6.73L1.62,6.73L1.62,0L0,0L0,6.73Z "
              />
              <path
                id="路径 5"
                fill-rule="evenodd"
                style="fill: #e84f4f"
                transform="translate(26.821272255859373 54.59631125976564)  rotate(0 7.745800200195314 2.1242365771484373)"
                opacity="1"
                d="M0,2.2L0,4.25L15.49,4.25L15.49,2.2C15.49,1.3 14.39,0 13.5,0L1.99,0C1.1,0 0,1.3 0,2.2Z "
              />
              <path
                id="路径 6"
                fill-rule="evenodd"
                style="fill: #d14747"
                transform="translate(34.56693577148437 54.59617454101564)  rotate(0 3.8729000830078113 2.1243049365234357)"
                opacity="1"
                d="M0,0L0,0L0,4.25L7.75,4.25L7.75,2.2C7.75,1.3 6.65,0 5.75,0L0,0L0,0Z "
              />
              <path
                id="路径 7"
                fill-rule="evenodd"
                style="fill: #e84f4f"
                transform="translate(17.31025267810056 13.81539913085938)  rotate(0 14.885726927551282 18.36842486082993)"
                opacity="1"
                d="M5 25.69C9.8 33.82 20.29 36.53 28.41 31.73L29.74 34.01C20.35 39.53 8.26 36.41 2.75 27.02C-2.8 17.63 0.32 5.52 9.71 0L11.04 2.28C2.92 7.08 0.2 17.57 5 25.69ZM29.74 34.01C29.75 34 29.76 34 29.77 33.99L29.74 34.02L29.74 34.01Z"
              />
              <path
                id="路径 8"
                fill-rule="evenodd"
                style="fill: #e84f4f"
                transform="translate(25.958928838575442 10.78810963378556)  rotate(0 12.100963675952249 19.422343291019118)"
                opacity="1"
                d="M0.02,1.27L22.15,38.78C22.19,38.84 22.27,38.86 22.33,38.83L24.14,37.76C24.2,37.72 24.22,37.64 24.18,37.58L2.05,0.07C2.01,0 1.93,-0.02 1.87,0.02L0.06,1.08C0,1.12 -0.02,1.2 0.02,1.27Z "
              />
              <path
                id="路径 9"
                fill-rule="evenodd"
                style="fill: #e8f6f7"
                transform="translate(22.486117910156242 15.492694218750003)  rotate(0 15.115343837890626 15.115343837890624)"
                opacity="1"
                d="M15.12,30.23C23.46,30.23 30.23,23.46 30.23,15.12C30.23,6.77 23.46,0 15.12,0C6.77,0 0,6.77 0,15.12C0,23.46 6.77,30.23 15.12,30.23Z "
              />
              <path
                id="分组 1"
                fill-rule="evenodd"
                style="fill: #006aa3"
                transform="translate(22.602604335937507 18.432049505949138)  rotate(0 14.941913061523438 11.928203759424603)"
                opacity="1"
                d="M18.3793 0.611678C18.2393 0.671678 18.0893 0.671678 17.9793 0.731678L17.9493 0.731678C17.7793 0.821678 17.9193 0.841678 17.5993 0.841678C17.4593 1.22168 17.6593 0.931678 17.3693 1.22168C17.1393 1.45168 17.1693 1.60168 16.9393 1.68168C16.7893 1.74168 16.4193 1.86168 16.3293 2.03168C16.2993 2.29168 16.3293 2.58168 16.5293 2.66168C16.7393 2.75168 16.8493 2.52168 17.1093 2.49168C17.1693 2.78168 17.2793 2.75168 17.3093 2.98168L17.1393 3.07168C16.9393 2.92168 17.1393 3.01168 16.9693 2.78168C16.9093 2.81168 16.8193 2.84168 16.7393 2.87168C16.6793 3.36168 17.0193 3.36168 16.4693 3.44168C16.1293 3.50168 16.2693 3.68168 15.9793 3.85168C15.7793 3.97168 15.6693 4.17168 15.4593 4.20168C15.2593 4.25168 15.2893 4.31168 15.0893 4.34168C14.9393 4.37168 15.0593 4.28168 14.8893 4.40168C14.9693 4.57168 15.1493 4.57168 15.2593 4.75168C15.3793 4.92168 15.3793 5.09168 15.2593 5.29168C15.0593 5.47168 14.2793 5.03168 14.1893 5.47168C14.1293 5.64168 14.1893 5.73168 14.1293 5.90168C14.0493 6.22168 14.0493 6.13168 14.1593 6.48168C14.3893 6.48168 14.6293 6.54168 14.5093 6.86168C14.4193 7.12168 14.2193 7.09168 14.0793 7.26168C13.8993 7.46168 13.9593 7.64168 13.8693 7.87168C13.7893 8.13168 13.3793 8.13168 13.1193 8.71168C12.5993 9.77168 12.7493 8.99168 12.8593 9.89168C12.9193 10.3817 12.5193 10.8217 12.8593 11.2217C12.9793 11.3417 13.1793 11.5117 13.2693 11.6517C13.4993 12.0317 13.2393 11.8817 13.6093 12.1717C14.4793 12.8717 13.9593 12.5817 14.6293 12.4917C14.9393 12.4617 15.0293 12.6117 15.2893 12.4917C15.6893 12.2917 16.1293 11.9717 16.3293 12.6417C16.7593 12.6417 17.0793 12.4617 16.9393 13.1917C16.8193 13.7917 16.7893 13.6817 17.1093 14.0517C17.3993 14.4317 17.4293 14.8017 17.5193 15.2717C17.5193 15.3517 17.5693 15.4117 17.5693 15.5317C17.5693 15.9317 16.9993 16.3117 17.3693 17.0317C17.6593 17.5817 17.5993 18.0117 17.7793 18.5617C17.7993 18.6217 17.8293 18.7117 17.8893 18.7917L17.8893 18.8217C17.9793 18.9917 18.0893 19.1717 18.1493 19.4017C18.2093 19.6617 18.0593 19.7217 18.2693 19.8917C18.3493 19.9517 19.2493 19.9217 19.6793 19.5417C19.7693 19.4617 19.8293 19.4317 19.9093 19.3117C20.0293 19.1717 20.0293 19.1117 20.1193 18.9717C20.2293 18.7917 20.2593 18.9117 20.3493 18.6817C20.4293 18.4717 20.3793 18.3617 20.4293 18.2117C20.5793 18.1017 20.6893 18.1017 20.8093 17.9517C20.9293 17.3217 20.5793 17.3817 20.9293 17.0017C21.2693 16.6217 21.5293 16.5717 21.6193 16.4517C21.9893 15.9317 21.3593 14.7217 21.5593 14.2817C21.7293 13.9117 21.8193 13.8517 22.0193 13.5317C22.3693 12.9517 22.8593 12.9517 23.1193 12.1717C23.2093 11.9417 23.5293 11.5117 23.3793 11.2517C23.2693 11.1617 22.5393 11.4817 22.2793 11.4217C22.1393 11.0517 22.2293 10.9617 21.8493 10.6717C21.3293 10.3017 21.6793 10.3817 21.3593 9.98168C21.2093 9.80168 21.2693 9.83168 21.2093 9.54168C21.1893 9.34168 21.0693 9.28168 20.9793 9.14168C20.8993 8.99168 20.6093 8.42168 20.6693 8.24168C20.9293 8.19168 21.0393 8.53168 21.1593 8.76168C21.2093 8.91168 21.2993 8.97168 21.3593 9.08168C21.4493 9.23168 21.3893 9.34168 21.4993 9.52168C21.7593 9.92168 21.7593 9.60168 21.9893 10.3817L22.2493 11.0817C22.6293 11.0517 22.9793 10.7917 23.3493 10.6417C23.6993 10.5317 23.4693 10.5617 23.6693 10.3817C23.7893 10.2717 23.8693 10.3217 24.0193 10.2417C24.2193 10.0917 24.7993 9.43168 24.7093 9.20168C24.5693 9.02168 24.6193 9.08168 24.3893 8.97168C24.0993 8.82168 24.3093 8.79168 24.0993 8.62168C23.9293 8.76168 23.8393 8.94168 23.4693 8.91168C23.4693 8.88168 23.4393 8.73168 23.4393 8.73168C23.3793 8.59168 23.2693 8.50168 23.1493 8.39168C23.0093 8.21168 22.8593 8.16168 22.8593 7.84168C23.2393 7.64168 23.1793 7.98168 23.4393 8.21168C23.8193 8.56168 23.7893 8.42168 24.1893 8.39168C24.4193 8.71168 24.4493 8.68168 24.8293 8.71168C25.0293 8.73168 25.5193 8.68168 25.6693 8.71168C25.8093 8.85168 25.9793 9.02168 26.1593 9.17168C26.2093 9.31168 26.1593 9.37168 26.2993 9.49168C26.4993 9.63168 26.4993 9.49168 26.7093 9.46168C26.7293 9.60168 26.7893 9.95168 26.8193 10.1517C26.9093 10.5017 27.0193 10.7317 27.1393 11.0517C27.2293 11.2517 27.4893 11.9117 27.5393 11.9117C27.7493 11.9417 27.9193 11.5417 27.9493 11.3917C28.0293 10.9917 27.9793 10.9017 28.0093 10.5617C28.3193 10.3517 28.5293 10.0117 28.8193 9.77168C29.0493 9.57168 28.8993 9.66168 29.0493 9.46168L29.0793 9.43168C29.4193 9.37168 29.4493 9.34168 29.7393 9.25168C29.7993 9.37168 29.8293 9.49168 29.8793 9.54168C29.2493 5.84168 27.2593 2.61168 24.4493 0.351678L24.4493 0.411678C24.4193 0.441678 24.3893 0.471678 24.3093 0.531678C24.1593 0.271678 24.1293 0.241678 23.8193 0.301678C23.5593 0.731678 23.7593 0.671678 23.9593 0.931678C23.6993 0.871678 23.4393 0.701678 23.1493 0.761678C22.9493 0.791678 23.0393 0.791678 22.9493 0.931678C22.7493 0.841678 22.7493 0.901678 22.5393 0.931678C22.2793 0.961678 22.2793 0.871678 22.1093 0.901678C21.8193 0.931678 21.5893 1.16168 21.3893 1.19168C21.2393 0.931678 21.4993 0.961678 21.1893 0.931678C21.0693 1.10168 21.1293 1.05168 21.1893 1.25168C20.8993 1.28168 20.7793 1.25168 20.6893 1.54168C20.6093 1.51168 20.5193 1.51168 20.4293 1.48168C20.3493 1.57168 20.4293 1.51168 20.3793 1.65168C20.1193 1.57168 20.0893 1.57168 20.0293 1.28168C20.3493 1.25168 20.5493 1.42168 20.7793 1.19168C20.7193 0.791678 19.7993 0.791678 19.5093 0.671678C19.1293 0.531678 18.8993 0.441678 18.3793 0.611678Z M24.4493 0.351678L24.4493 0.351678C24.4493 0.351678 24.4493 0.351678 24.4493 0.351678L24.4493 0.351678L24.4493 0.351678Z M3.09 9.98C3.15 9.81 3.24 9.63 3.18 9.4C2.75 9.34 2.77 9.49 2.63 9.75C2.43 10.15 1.62 10.09 1.59 9.23C1.56 8.88 1.71 8.68 1.76 8.39C1.82 8.16 1.99 8.07 2.2 7.93C2.54 7.7 2.66 7.99 2.92 7.93C3.15 7.9 3.06 7.64 3.61 7.78C4.1 7.93 3.99 7.73 4.07 8.33C4.19 8.36 4.34 8.42 4.45 8.45C4.42 7.52 4.13 7.78 4.74 7.23C4.94 7.06 5 7.09 5.2 6.94C5.43 6.8 5.49 6.8 5.43 6.4L5.46 6.37L5.9 5.93C6.04 5.79 6.3 5.7 6.5 5.64C6.53 5.33 6.56 5.33 6.82 5.21L6.85 5.21C7.05 5.12 7.2 5.04 7.4 5.01C7.25 5.21 7.31 4.95 7.31 5.27C7.51 5.21 7.6 5.12 7.86 5.04C8.09 4.95 8.27 4.95 8.29 4.69C8.15 4.72 7.57 5.04 7.72 4.52C7.8 4.34 7.83 4.55 7.83 4.26C7.72 4.2 7.63 4.17 7.51 4.11C7.95 3.88 7.89 4.14 8.12 4.26C8.18 4.14 8.12 4.23 8.12 4.14C8.12 4.09 8.11 4.07 8.1 4.05C8.1 4.05 8.1 4.05 8.09 4.05C8.05 4.22 8.07 4 8.1 4.05C8.3 4.06 8.41 4.08 8.58 4.03C8.79 3.97 8.76 3.91 9.02 3.85C8.9 4.17 8.7 4.17 8.58 4.49C8.61 4.49 9.36 4.66 9.36 4.66C9.39 4.52 9.39 4.37 9.39 4.23C9.31 4.2 9.22 4.14 9.13 4.11C9.25 3.59 9.57 3.36 8.87 3.1C8.81 2.72 8.87 2.61 8.73 2.29C8.44 2.35 8.5 2.55 8.27 2.58C7.95 2.64 8.06 2.35 8.06 2.15C7.8 2.03 7.92 1.97 7.69 1.94C7.6 1.92 7.28 1.89 7.2 1.89C7.11 2 7.05 2.09 7.02 2.18C6.73 2.75 7.25 3.07 6.18 3.3C6.1 3.59 6.1 4.03 5.78 3.79C5.64 3.56 5.84 3.42 5.84 3.19C5.69 3.19 5.58 3.16 5.49 3.13C5.06 3.01 5.2 2.87 4.74 2.84C4.71 2.49 4.65 2.7 4.65 2.41C4.85 2.23 5.14 2.06 5.49 1.89C5.78 1.74 6.1 1.63 6.36 1.54C6.3 1.63 6.27 1.68 6.21 1.77C6.53 1.94 6.39 2.03 6.56 1.97C6.7 1.92 6.56 1.89 6.56 1.89C6.53 1.83 6.24 1.83 6.56 1.71C6.7 1.68 6.76 1.74 6.91 1.77C6.88 1.37 6.68 1.63 6.59 1.28C6.76 1.37 6.91 1.34 7.02 1.28C7.23 1.16 7.34 0.93 7.51 0.73C7.89 0.73 7.98 0.64 8.24 0.93C8.38 1.05 8.29 0.9 8.38 1.08C8.32 1.13 8.03 1.37 7.98 1.39C7.72 1.54 7.63 1.31 7.43 1.54C7.51 1.63 7.66 1.57 7.75 1.57C7.89 1.57 7.92 1.6 8.01 1.68C8.24 1.94 8.18 1.89 8.55 2L8.64 1.92L8.67 1.89C8.67 1.86 8.7 1.86 8.7 1.86C8.84 1.77 8.73 1.94 8.93 1.83C9.16 1.68 8.9 1.57 8.9 1.31C9.16 1.28 9.02 1.45 9.28 1.45C9.45 1.45 9.57 1.31 9.59 1.19C9.39 0.96 9.39 1.05 9.25 0.96C9.07 0.85 9.16 0.7 9.07 0.56C9.02 0.44 8.84 0.44 8.73 0.38C8.27 0.18 8.99 0.09 7.46 0.09C7.34 0.09 7.2 0.12 7.11 0.18C6.96 0.27 6.88 0.38 6.82 0.53C6.88 0.67 6.99 0.67 7.08 0.76C6.99 0.9 6.79 1.05 6.59 1.08C6.7 0.5 6.36 1.19 6.44 0.35C6.62 0.27 6.85 0.27 6.99 0.12C6.94 0.09 6.88 0.04 6.82 0.01C6.53 -0.05 6.42 0.24 6.24 0.35C6.18 0.21 6.24 0.21 6.27 0.07C6.07 0.04 5.75 0.09 5.61 0.27C5.75 0.41 5.72 0.38 5.98 0.44C5.84 0.76 6.1 0.76 5.78 0.93L5.78 0.87C5.78 0.82 5.75 0.76 5.75 0.7C5.66 0.7 5.64 0.7 5.58 0.73C5.49 0.76 5.43 0.87 5.37 0.99C5.2 1.02 4.97 1.05 4.8 0.99C2.51 3.1 0.91 5.87 0.23 8.91L0 8.97C0.03 9.03 0.09 9.08 0.12 9.14C0.35 9.46 0.23 9.49 0.23 9.84C0.46 10.07 0.84 10.24 1.18 10.41C1.62 10.62 1.39 10.56 1.79 10.5C2.05 10.47 2.08 10.67 2.25 10.82C2.63 11.14 2.92 10.76 3.21 11.42C3.35 11.71 3.09 11.37 3.58 11.86C3.76 11.97 3.9 12.06 4.07 12.15C4.16 11.97 4.07 11.92 4.28 11.83C4.39 11.92 4.54 12.15 4.57 12.32C4.77 13.27 3.79 13.27 4.22 14.05C4.13 14.29 4.05 14.23 4.1 14.49C4.16 14.78 4.22 14.69 4.36 14.86C4.65 15.24 5 16.19 5.35 16.45C5.35 16.48 5.35 16.48 5.38 16.48C5.61 16.66 5.92 16.74 6.07 16.97C6.1 17.03 6.13 17.12 6.16 17.21C6.3 17.78 6.24 18.91 6.39 19.37C6.59 20.07 6.39 20.12 6.47 20.56C6.5 20.73 6.59 20.73 6.65 21.05C6.68 21.22 6.7 21.45 6.76 21.6C6.99 21.48 6.7 21.51 6.88 21.45C7.02 21.4 6.91 21.8 6.88 21.89C6.82 22.18 6.96 22.29 6.99 22.38C7.05 22.52 6.99 22.64 7.17 22.87C7.28 22.99 7.25 22.93 7.34 23.07C7.51 23.33 7.75 23.51 8.01 23.65C8.15 23.74 8.5 23.88 8.67 23.85C8.87 23.79 8.81 23.82 8.81 23.59C8.44 23.56 8.29 23.27 8.12 23.01C8.15 22.84 8.29 22.52 8.29 22.41C8.18 22.26 8.09 22.26 7.98 22.21C8.01 21.86 8.03 22.12 8.12 21.83C8.18 21.71 8.21 21.57 8.24 21.45C8.01 21.31 8.12 21.51 8.01 21.28C8.09 21.19 8.15 21.25 8.29 21.19C8.32 20.79 8.15 20.85 8.53 20.79C8.99 20.7 8.93 20.44 8.73 20.12C8.67 20.01 8.7 20.1 8.64 19.98C9.34 20.1 9.19 19.92 9.42 19.34C9.48 19.2 9.57 19.17 9.65 19C9.97 18.39 9.28 18.16 10.49 17.81C10.84 17.73 10.92 16.97 10.95 16.63C10.98 16.02 10.78 16.14 11.33 15.36C11.5 15.09 11.56 14.78 11.36 14.49C11.21 14.4 11.18 14.46 11.01 14.34C10.61 14.03 10.81 14.08 10.26 14C9.88 13.94 10.03 13.97 9.86 13.82C9.57 13.53 9.31 13.71 9.1 13.45C9.08 13.33 9.02 13.25 8.99 13.13C8.99 13.07 8.96 13.04 8.93 13.01C8.84 12.78 8.9 12.78 8.73 12.61C8.29 12.18 8.29 12.46 7.92 12.32C7.75 12.12 7.54 11.94 7.34 11.74C7.31 11.68 7.31 11.63 7.25 11.57L7.23 11.54C7.23 11.51 7.2 11.51 7.2 11.51C7.17 11.51 7.11 11.51 7.08 11.48C6.79 11.4 6.76 11.48 6.56 11.48C6.47 11.48 6.39 11.45 6.27 11.42C5.98 11.34 5.95 11.05 5.69 11.34C5.66 11.28 5.61 11.19 5.58 11.11C5.55 11.14 5.52 11.14 5.49 11.16C5.14 11.37 5.12 11.22 4.97 11.54C4.91 11.74 4.94 11.66 4.83 11.8C4.6 11.77 4.62 11.63 4.39 11.66C4.16 11.71 4.16 11.86 3.9 11.68C3.55 11.42 3.79 10.96 3.76 10.56C3.32 10.3 3.32 10.53 3.01 10.41C2.95 10.27 3.06 10.09 3.09 9.98Z M8.09 4.05C8.1 4.05 8.1 4.05 8.1 4.05C8.07 4 8.05 4.22 8.09 4.05Z M4.97009 0.874574C5.09009 0.844574 5.09009 0.814574 5.32009 0.754574C5.29009 0.674574 5.29009 0.674574 5.26009 0.644574L5.26009 0.614574C5.14009 0.674574 5.06009 0.754574 4.97009 0.844574L4.97009 0.874574Z M16.9633 6.51301C17.1633 6.77301 16.9933 6.94301 16.9933 7.14301C17.2233 7.26301 17.5733 7.29301 17.7133 7.43301C17.8933 7.58301 17.8033 7.55301 17.8933 7.58301C17.9233 7.61301 17.9433 7.61301 18.0333 7.63301C18.2333 7.69301 18.2333 7.72301 18.4433 7.75301C18.6133 7.11301 18.4433 7.17301 19.3333 7.46301C20.2933 7.75301 19.8533 7.49301 20.2633 7.52301C20.4633 7.55301 20.4033 7.61301 20.6933 7.58301C20.7533 7.46301 21.1533 6.48301 20.6333 6.59301C20.4933 6.62301 20.5733 6.68301 20.3733 6.62301C20.1433 6.57301 20.3733 6.54301 20.1133 6.57301C19.8833 6.59301 19.5933 6.80301 19.3933 6.07301C19.3333 5.81301 19.1933 5.58301 18.9033 5.99301C18.9833 6.13301 19.0433 6.13301 19.1333 6.28301C19.1033 6.33301 19.0133 6.42301 18.9833 6.45301C18.8133 6.59301 19.0433 6.54301 18.7833 6.57301C18.6433 6.48301 18.6733 6.33301 18.5233 6.13301C18.2933 5.76301 18.4433 5.93301 18.3233 5.58301C18.2033 5.50301 18.0633 5.44301 17.9133 5.35301L17.8633 5.44301L17.7733 5.35301C17.5733 5.15301 17.5133 5.00301 17.2833 5.03301C17.2833 5.21301 17.3133 5.21301 17.3933 5.32301C17.7433 5.76301 17.6333 5.61301 17.8933 5.76301C17.9433 5.79301 18.0333 5.84301 18.1233 5.90301C17.7733 6.19301 18.0933 6.22301 17.8933 6.31301C17.8633 6.31301 17.8333 6.33301 17.8333 6.33301C17.7733 6.16301 17.9133 6.25301 17.7433 5.99301C17.6333 5.87301 17.5433 5.81301 17.3933 5.76301C17.0233 5.58301 17.0833 5.44301 16.8533 5.21301C16.5933 5.21301 16.6433 5.29301 16.4733 5.38301C16.2433 5.50301 16.2733 5.35301 16.0133 5.38301C15.8033 5.76301 16.0933 5.44301 15.7233 5.76301C15.2633 6.10301 15.6333 6.48301 14.8833 6.59301C14.8533 6.62301 14.8233 6.59301 14.7633 6.62301C14.6233 6.68301 14.7133 6.62301 14.6233 6.71301C14.6833 6.85301 14.5933 6.83301 14.8533 6.85301C15.2833 6.91301 15.3433 6.62301 15.6933 6.57301C15.8633 6.54301 16.8733 6.48301 16.9633 6.51301Z M22.6902 16.2792C22.5102 16.4492 22.2802 16.3692 22.2202 16.6592C22.1402 17.0292 22.3702 16.9192 22.1102 17.3792C22.0202 17.5492 22.0202 18.0092 22.1702 18.1292C22.6002 18.5292 22.8002 17.5192 22.9202 17.1792C23.0102 16.9392 23.0602 16.6792 23.1502 16.4792C23.2402 16.2492 23.3502 16.0492 23.1202 15.7592L23.0902 15.7892C22.8902 15.8992 22.8602 16.1392 22.6902 16.2792Z M23.3482 5.93035C23.3782 5.90035 23.4382 5.87035 23.4382 5.85035C23.5282 5.73035 23.4982 5.90035 23.5282 5.70035C23.2982 5.61035 22.9182 5.38035 22.8882 5.09035C23.0082 5.01035 22.9782 5.07035 23.0582 5.01035C23.2382 4.89035 23.1182 5.07035 23.2082 4.86035C23.1182 4.69035 23.0082 4.66035 22.7982 4.75035C22.7182 4.78035 22.4582 4.97035 22.3982 5.01035C22.4382 5.45035 22.7182 5.65035 22.9182 5.85035C22.8882 6.08035 22.8282 6.02035 22.8282 6.34035C23.0582 6.51035 23.2382 6.63035 23.5582 6.54035C23.5882 6.16035 23.4682 6.19035 23.3482 5.93035Z M22.3982 4.98035C22.3982 4.98035 22.3982 4.98035 22.3982 4.98035L22.3982 4.98035Z M22.3982 4.98035L22.3982 4.98035L22.3982 4.98035C22.3982 4.98035 22.3982 4.98035 22.3982 4.98035Z M22.3982 5.01035C22.3982 5.01035 22.3982 5.01035 22.3982 5.01035C22.3982 5.00035 22.3982 4.99035 22.3982 4.98035L22.3982 5.01035Z M20.4356 5.09234C20.2856 4.89234 20.2856 4.77234 19.9956 4.77234C19.8856 4.89234 19.7356 5.09234 19.6856 5.27234C19.5956 5.55234 19.6556 5.35234 19.6556 5.67234L19.6556 5.70234C19.6556 5.87234 19.5956 5.67234 19.6256 5.84234C19.8556 5.79234 19.6856 5.81234 19.8556 5.76234C20.0256 5.70234 20.4956 5.55234 20.6356 5.58234C20.9856 5.67234 21.2456 5.93234 21.6156 5.67234C21.5856 5.32234 21.1856 5.21234 20.9256 5.06234C20.9556 4.75234 21.0156 5.01234 21.0156 4.69234C20.9256 4.69234 20.8656 4.66234 20.7556 4.72234C20.5156 4.80234 20.6656 4.83234 20.6656 4.89234C20.6656 5.06234 20.8956 4.86234 20.6656 5.06234C20.6056 5.12234 20.4856 5.12234 20.4356 5.12234L20.4356 5.09234Z M14.9095 3.6798C14.8295 3.8798 14.9395 3.7098 14.8795 4.0498C15.0295 4.0498 15.2295 4.0298 15.3995 3.9998C15.6595 3.9698 15.6595 3.9398 15.7495 3.6798L15.3195 3.1598C15.1195 2.8698 15.3195 3.0698 15.2595 2.8398C15.1995 2.7498 15.1695 2.6698 15.1395 2.5798C14.8995 2.6598 14.9095 2.6398 14.7695 2.7598C14.7695 3.2998 14.9395 3.0998 15.1195 3.3898C15.0295 3.6198 15.0295 3.4498 14.9095 3.6798Z M14.7695 2.7598C14.7695 2.7598 14.7695 2.7598 14.7695 2.7498L14.7395 2.7798C14.7495 2.7698 14.7595 2.7698 14.7695 2.7598Z "
              />
            </g>
          </g>
        </svg>
        <p text-2xl>赤道仪</p>
        <img object-cover w-65 h-35 pt-5 src="../assets/赤道仪.jpeg" alt=""
      /></n-card>
    </div>
  </div>
</template>

<script setup>
import { NCard } from "naive-ui";
import Carousel from "../components/Carousel.vue";
</script>

<style lang="css" scoped>
@font-face {
  font-family: Alibaba-PuHuiTi-Regular;
  src: url("../assets/font/Alibaba-PuHuiTi-Regular.otf");
}
.title {
  font-family: Alibaba-PuHuiTi-Regular;
  letter-spacing: 2px;
}
body,
html {
  height: 100%;
  margin: 5;
  padding: 0;
}

.box {
  height: 100%;
  position: relative;
}

.flowImage {
  position: relative;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.flowImage > p {
  margin: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
}
.bg1 {
  background-image: url(../assets/天体库.jpeg);
}
.bg2 {
  background-image: url(../assets/器材库.jpg);
}
.col1-1 span {
  width: 45px;
  height: 390px;
  background: transparent;
  position: absolute;
  left: 10px;
  top: 0px;
  filter: Alpha(opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
  padding: 20px;
  visibility: hidden;
}
.col1-2 span {
  width: 45px;
  height: 390px;
  background: transparent;
  position: absolute;
  left: 10px;
  top: 0px;
  filter: Alpha(opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
  padding: 20px;
  visibility: hidden;
}
.col1-3 span {
  width: 45px;
  height: 390px;
  background: transparent;
  position: absolute;
  left: 10px;
  top: 0px;
  filter: Alpha(opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
  padding: 20px;
  visibility: hidden;
}
.col2-1 span {
  width: 45px;
  height: 390px;
  background: transparent;
  position: absolute;
  left: 10px;
  top: 0px;
  filter: Alpha(opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
  padding: 20px;
  visibility: hidden;
}
.col2-2 span {
  width: 45px;
  height: 390px;
  background: transparent;
  position: absolute;
  left: 10px;
  top: 0px;
  filter: Alpha(opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
  padding: 20px;
  visibility: hidden;
}
.col1-1:hover span {
  visibility: visible;
}
.col1-2:hover span {
  visibility: visible;
}
.col1-3:hover span {
  visibility: visible;
}
.col2-1:hover span {
  visibility: visible;
}
.col2-2:hover span {
  visibility: visible;
}
.n-card {
  max-width: 300px;
}
.center {
  width: 1300px;
  margin: 0 auto;
}
.main .row {
  /* 既然所有的子元素都要浮动，就先清除影响 */
  overflow: hidden;
  margin-bottom: 14px;
}

/************一楼代码**************/
/* 1楼第1块 */
.main .col1-1 {
  height: 376px;
  width: 350px;
  background-color: #e8e8e8;
  float: left;
  margin-right: 14px;
}
.main .col1-1 img {
  height: 376px;
  width: 350px;
}
/* 1楼第2块 */
.main .col1-2 {
  height: 376px;
  width: 572px;
  background-color: #e8e8e8;
  margin-right: 14px;
  float: left;
}
.main .col1-2 img {
  height: 376px;
  width: 572px;
}
.main .col1-3 {
  height: 376px;
  width: 350px;
  background-color: #e8e8e8;
  float: left;
}
.main .col1-3 img {
  height: 376px;
  width: 350px;
}
/* 把第一行第一列与第一行第二列中的图片位置设置正确
			 距离底部20px 距离右侧3%*/
/* 需要把col1-1与col1-2设置成相对定位，作为图片绝对定位时的参照物 */
.main .col1-2 {
  /* 父级需要设置成相对定位 */
  position: relative;
}
/************二楼代码**************/
/* 2楼第1块 */
.main .col2-1 {
  width: 643px;
  height: 434px;
  background-color: #e8e8e8;
  float: left;
}
.main .col2-1 img {
  width: 643px;
  height: 434px;
}
/* 2楼第2块 */
.main .col2-2 {
  float: left;
}
/* 对2楼第2块中的3个div进行统一样式设置 */
.main .col2-2 {
  width: 643px;
  height: 434px;
  background-color: #e8e8e8;
  float: left;
  margin-left: 14px;
}
.main .col2-2 img {
  width: 643px;
  height: 434px;
}
</style>
