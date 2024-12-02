window.onload = function () {
    const type = document.querySelectorAll('.unit-list_op li');
    const typeCnt = document.querySelectorAll('.unit-info');
    const typeTt = document.querySelectorAll('.unit-cnt h3');
    const typeA = document.querySelector('#typeA');
    const typeB = document.querySelector('#typeB');
    const typeC = document.querySelector('#typeC');
    const unitCnt = document.querySelector('.unit-cnt');

    typeA.addEventListener('click', (e) => {
        e.preventDefault();

        typeA.classList.add('checked');
        typeB.classList.remove('checked');
        typeC.classList.remove('checked');

        type[0].classList.add('checked');
        type[1].classList.remove('checked');

        type.forEach((list, i) => {
            list.addEventListener('click', (e) => {
                e.preventDefault();

                // 모든 typeOp 요소에서 'checked' 클래스 제거
                type.forEach((item) => item.classList.remove('checked'));

                // 클릭된 요소에 'checked' 클래스 추가
                list.classList.add('checked');

                // 모든 unitCnt 요소 숨기기
                typeCnt.forEach((cnt) => cnt.classList.add('hidden'));
                typeTt.forEach((title) => title.classList.add('hidden'));

                // 클릭된 요소의 인덱스에 해당하는 unitCnt 요소만 표시
                if (typeCnt[i]) {
                    typeCnt[i].classList.remove('hidden');
                }

                if (typeTt[i]) {
                    typeTt[i].classList.remove('hidden');
                }
            });
        });

        unitCnt.innerHTML = `
            <h3 class="title-1">단위세대 평면도 A Type</h3>
                <div class="unit-info info-1">
                    <div class="unit-txt">
                        <table>
                            <tbody>
                                <tr>
                                    <th colspan="3" class="th-title">46㎡ 60세대</th>
                                </tr>
                                <tr>
                                    <th>전용면적</th>
                                    <td>29.50㎡</td>
                                    <td>8.92평</td>
                                </tr>
                                <tr>
                                    <th>공용면적</th>
                                    <td>16.81㎡</td>
                                    <td>5.08평</td>
                                </tr>
                                <tr>
                                    <th>공급면적</th>
                                    <td>46.31㎡</td>
                                    <td>14.01평</td>
                                </tr>
                                <tr>
                                    <th>부대복리시설</th>
                                    <td>10.12㎡</td>
                                    <td>3.06평</td>
                                </tr>
                                <tr>
                                    <th>지하주차장/기전실</th>
                                    <td>13.11㎡</td>
                                    <td>3.97평</td>
                                </tr>
                                <tr>
                                    <th>계약면적</th>
                                    <td>69.55㎡</td>
                                    <td>21.04평</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="unit-detail">
                            <img src="../img/aType-detail.png" alt="">
                        </div>
                    </div>
                    <div class="unit-img img-a">
                        <img src="../img/aType-01.png" alt="">
                    </div>
                </div>
            `;

        type[1].addEventListener('click', () => {
            unitCnt.innerHTML = `
                <h3 class="title-2">단위세대 ISO A Type</h3>
                <div class="unit-info info-2">
                    <div class="unit-txt">
                        <table>
                            <thead>
                                <tr>
                                    <th width="10%">구분</th>
                                    <th>가구/마감재</th>
                                    <th>가전기기</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="12" class="td-b center">기본제공</td>
                                    <td>현관바닥 포셀린타일, 신발장, 접이식 보조의자</td>
                                    <td>Haatz 렌지후드(슬림형)</td>
                                </tr>
                                <tr>
                                    <td>현관 3연동 슬라이딩 중문</td>
                                    <td>Haatz 인덕션 2구</td>
                                </tr>
                                <tr>
                                    <td>주방상판 및 벽 인조대리석, 포인트월</td>
                                    <td>삼성 빌트인 냉장, 냉동고</td>
                                </tr>
                                <tr>
                                    <td>파우더장, 풀다운헹거용붙박이장, 식탁1, 의자2</td>
                                    <td>삼성 빌트인 드럼 세탁기/건조기</td>
                                </tr>
                                <tr>
                                    <td>광폭진마루바닥, 욕실 및 발코니 논슬립타일</td>
                                    <td>삼성 50인치 TV</td>
                                </tr>
                                <tr>
                                    <td>샤워파티션, 샤워실안전바</td>
                                    <td>삼성 23L 전자레인지</td>
                                </tr>
                                <tr>
                                    <td>간접조명우물천정, LED조명</td>
                                    <td>삼성 시스템에어컨</td>
                                </tr>
                                <tr>
                                    <td>발코니 프라이버시 루바 설치, 강화유리난간대</td>
                                    <td>13인치 고급형 월패드</td>
                                </tr>
                                <tr>
                                    <td>하이브리드 시스템 테이블</td>
                                    <td>하이브리드 환기 시스템 창호</td>
                                </tr>
                                <tr>
                                    <td>컴포터블 고급형 소파</td>
                                    <td>자동전동커튼</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>전동빨래건조대</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>삼성스마트홈시스템</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                     <div class="unit-img unit-slide">
                        <div class="swiper mySwiper2 img-up">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="../img/aType-ISO.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-01.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-02.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-03.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-04.png" />
                                </div>
                            </div>
                        </div>
                        <div thumbsSlider="" class="swiper mySwiper img-down">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="../img/aType-ISO.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-01.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-02.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-03.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/a-04.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Swiper 초기화 코드 추가 (A Type 클릭 시마다 재초기화)
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                spaceBetween: 5,
                slidesPerView: 5,
                freeMode: true,
                watchSlidesProgress: true,
            });

            var swiper2 = new Swiper(".mySwiper2", {
                loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        });
    });

    typeB.addEventListener('click', (e) => {
        e.preventDefault();

        typeA.classList.remove('checked');
        typeB.classList.add('checked');
        typeC.classList.remove('checked');

        type[0].classList.add('checked');
        type[1].classList.remove('checked');

        unitCnt.innerHTML = `
            <h3 class="title-1">단위세대 평면도 B Type</h3>
            <div class="unit-info info-1">
                <div class="unit-txt">
                    <table>
                        <tbody>
                            <tr>
                                <th colspan="3" class="th-title">69㎡ 64세대</th>
                            </tr>
                            <tr>
                                <th>전용면적</th>
                                <td>44.71㎡</td>
                                    <td>13.53평</td>
                            </tr>
                            <tr>
                                <th>공용면적</th>
                                <td>24.46㎡</td>
                                <td>7.40평</td>
                            </tr>
                            <tr>
                                <th>공급면적</th>
                                <td>69.18㎡</td>
                                <td>20.93평</td>
                            </tr>
                            <tr>
                                <th>부대복리시설</th>
                                <td>15.35㎡</td>
                                <td>4.64평</td>
                            </tr>
                            <tr>
                                <th>지하주차장/기전실</th>
                                <td>19.87㎡</td>
                                <td>6.01평</td>
                            </tr>
                            <tr>
                                <th>계약면적</th>
                                <td>104.40㎡</td>
                                <td>31.58평</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="unit-detail">
                        <img src="../img/bType-detail.png" alt="">
                    </div>
                </div>
                <div class="unit-img">
                    <img src="../img/bType-01.png" alt="">
                </div>
            </div>
        `;

        type[0].addEventListener('click', () => {
            unitCnt.innerHTML = `
            <h3 class="title-1">단위세대 평면도 B Type</h3>
            <div class="unit-info info-1">
                <div class="unit-txt">
                    <table>
                        <tbody>
                            <tr>
                                <th colspan="3" class="th-title">69㎡ 64세대</th>
                            </tr>
                            <tr>
                                <th>전용면적</th>
                                <td>44.71㎡</td>
                                    <td>13.53평</td>
                            </tr>
                            <tr>
                                <th>공용면적</th>
                                <td>24.46㎡</td>
                                <td>7.40평</td>
                            </tr>
                            <tr>
                                <th>공급면적</th>
                                <td>69.18㎡</td>
                                <td>20.93평</td>
                            </tr>
                            <tr>
                                <th>부대복리시설</th>
                                <td>15.35㎡</td>
                                <td>4.64평</td>
                            </tr>
                            <tr>
                                <th>지하주차장/기전실</th>
                                <td>19.87㎡</td>
                                <td>6.01평</td>
                            </tr>
                            <tr>
                                <th>계약면적</th>
                                <td>104.40㎡</td>
                                <td>31.58평</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="unit-img">
                    <img src="../img/bType-01.png" alt="">
                </div>
            </div>
            `;
        });

        type[1].addEventListener('click', () => {
            unitCnt.innerHTML = `
                <h3 class="title-2">단위세대 ISO B Type</h3>
                <div class="unit-info info-2">
                    <div class="unit-txt">
                        <table>
                            <thead>
                                <tr>
                                    <th width="10%">구분</th>
                                    <th>가구/마감재</th>
                                    <th>가전기기</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="13" class="td-b center">기본제공</td>
                                    <td>현관바닥 포셀린타일, 신발장, 접이식 보조의자</td>
                                    <td>Haatz 렌지후드(슬림형)</td>
                                </tr>
                                <tr>
                                    <td>현관 슬라이딩 중문</td>
                                    <td>Haatz 인덕션 2구</td>
                                </tr>
                                <tr>
                                    <td>주방상판 및 벽 인조대리석, 아트월</td>
                                    <td>삼성 빌트인 냉장, 냉동고</td>
                                </tr>
                                <tr>
                                    <td>현관팬트리 시스템선반, 드레스실 시스템 가구</td>
                                    <td>삼성 빌트인 드럼 세탁기/건조기</td>
                                </tr>
                                <tr>
                                    <td>식탁1, 의자2, 쇼파1, 사이드 및 티테이블1 화장대 및 거울1</td>
                                    <td>삼성 60인치 TV</td>
                                </tr>
                                <tr>
                                    <td>광폭진마루바닥, 욕실 및 발코니 논슬립타일</td>
                                    <td>삼성 23L 전자레인지</td>
                                </tr>
                                <tr>
                                    <td>샤워파티션, 샤워실안전바</td>
                                    <td>삼성시스템 에어컨(거실, 내실)</td>
                                </tr>
                                <tr>
                                    <td>거실간접조명우물천정, 내실간접조명, LED조명</td>
                                    <td>13인치 고급형 월패드</td>
                                </tr>
                                <tr>
                                    <td>발코니 프라이버시 루바 설치, 강화유리난간대</td>
                                    <td>하이브리드 환기 시스템 창호</td>
                                </tr>
                                <tr>
                                    <td>하이브리드 시스템 테이블</td>
                                    <td>자동전동커튼</td>
                                </tr>
                                <tr>
                                    <td>컴포터블 고급형 소파</td>
                                    <td>전동빨래건조대</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>삼성스마트홈시스템</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="unit-img unit-slide img-b">
                        <div class="swiper mySwiper2 img-up">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="../img/bType-ISO.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-01.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-02.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-03.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-04.png" />
                                </div>
                            </div>
                        </div>
                        <div thumbsSlider="" class="swiper mySwiper img-down">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="../img/bType-ISO.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-01.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-02.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-03.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/b-04.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Swiper 초기화 코드 추가 (B Type 클릭 시마다 재초기화)
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                spaceBetween: 5,
                slidesPerView: 5,
                freeMode: true,
                watchSlidesProgress: true,
            });

            var swiper2 = new Swiper(".mySwiper2", {
                loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        });
    });

    typeC.addEventListener('click', (e) => {
        e.preventDefault();

        typeA.classList.remove('checked');
        typeB.classList.remove('checked');
        typeC.classList.add('checked');

        type[0].classList.add('checked');
        type[1].classList.remove('checked');

        unitCnt.innerHTML = `
            <h3 class="title-1">단위세대 평면도 C Type</h3>
                <div class="unit-info info-1">
                    <div class="unit-txt">
                        <table>
                            <tbody>
                                <tr>
                                    <th colspan="3" class="th-title">105㎡ 13세대</th>
                                </tr>
                                <tr>
                                    <th>전용면적</th>
                                    <td>68.53㎡</td>
                                    <td>20.73평</td>
                                </tr>
                                <tr>
                                    <th>공용면적</th>
                                    <td>36.64㎡</td>
                                    <td>11.08평</td>
                                </tr>
                                <tr>
                                    <th>공급면적</th>
                                    <td>105.18㎡</td>
                                    <td>31.82평</td>
                                </tr>
                                <tr>
                                    <th>부대복리시설</th>
                                    <td>23.53㎡</td>
                                    <td>7.12평</td>
                                </tr>
                                <tr>
                                    <th>지하주차장/기전실</th>
                                    <td>30.45㎡</td>
                                    <td>9.21평</td>
                                </tr>
                                <tr>
                                    <th>계약면적</th>
                                    <td>159.17㎡</td>
                                    <td>48.15평</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="unit-detail">
                            <img src="../img/cType-detail.png" alt="">
                        </div>
                    </div>
                    <div class="unit-img">
                        <img src="../img/cType-01.png" alt="">
                    </div>
                </div>
        `;

        type[0].addEventListener('click', () => {
            unitCnt.innerHTML = `
                <h3 class="title-1">단위세대 평면도 C Type</h3>
                    <div class="unit-info info-1">
                        <div class="unit-txt">
                            <table>
                                <tbody>
                                    <tr>
                                    <th colspan="3" class="th-title">105㎡ 13세대</th>
                                </tr>
                                <tr>
                                    <th>전용면적</th>
                                    <td>68.53㎡</td>
                                    <td>20.73평</td>
                                </tr>
                                <tr>
                                    <th>공용면적</th>
                                    <td>36.64㎡</td>
                                    <td>11.08평</td>
                                </tr>
                                <tr>
                                    <th>공급면적</th>
                                    <td>105.18㎡</td>
                                    <td>31.82평</td>
                                </tr>
                                <tr>
                                    <th>부대복리시설</th>
                                    <td>23.53㎡</td>
                                    <td>7.12평</td>
                                </tr>
                                <tr>
                                    <th>지하주차장/기전실</th>
                                    <td>30.45㎡</td>
                                    <td>9.21평</td>
                                </tr>
                                <tr>
                                    <th>계약면적</th>
                                    <td>159.17㎡</td>
                                    <td>48.15평</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="unit-img">
                            <img src="../img/cType-01.png" alt="">
                        </div>
                    </div>
                `;
        });

        type[1].addEventListener('click', () => {
            unitCnt.innerHTML = `
                <h3 class="title-2">단위세대 ISO C Type</h3>
                <div class="unit-info info-2">
                    <div class="unit-txt">
                        <table>
                            <thead>
                                <tr>
                                    <th width="10%">구분</th>
                                    <th>가구/마감재</th>
                                    <th>가전기기</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="13" class="td-b center">기본제공</td>
                                    <td>현관바닥 포셀린타일, 신발장, 벤치형보조의자</td>
                                    <td>Haatz 렌지후드(아일랜드형)</td>
                                </tr>
                                <tr>
                                    <td>현관 3연동 슬라이딩 중문</td>
                                    <td>Haatz 인덕션 3구</td>
                                </tr>
                                <tr>
                                    <td>아일랜드형 주방, 상판 및 벽 인조대리석, 아트월</td>
                                    <td>삼성 빌트인 냉장고</td>
                                </tr>
                                <tr>
                                    <td>드레스실 파우더 가구 및 시스템 가구</td>
                                    <td>삼성빌트인 냉동고</td>
                                </tr>
                                <tr>
                                    <td>의자2, 쇼파1, 사이드 및 티테이블1</td>
                                    <td>삼성빌트인 드럼 세탁기/건조기</td>
                                </tr>
                                <tr>
                                    <td>광폭진마루바닥, 욕실 및 발코니 논슬립타일</td>
                                    <td>삼성 65인치 TV</td>
                                </tr>
                                <tr>
                                    <td>샤워파티션, 샤워실안전바</td>
                                    <td>삼성 23L 전자레인지</td>
                                </tr>
                                <tr>
                                    <td>거실간접조명우물천정, 내실간접조명, LED조명</td>
                                    <td>삼성시스템 에어컨(거실,내실)</td>
                                </tr>
                                <tr>
                                    <td>발코니 프라이버시 루바 설치, 강화유리난간대</td>
                                    <td>13인치 고급형 월패드</td>
                                </tr>
                                <tr>
                                    <td>하이브리드 시스템 테이블</td>
                                    <td>하이브리드 환기 시스템 창호</td>
                                </tr>
                                <tr>
                                    <td>컴포터블 고급형 소파</td>
                                    <td>자동전동커튼</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>전동빨래건조대</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>삼성스마트홈시스템</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="unit-img unit-slide img-c">
                        <div class="swiper mySwiper2 img-up">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="../img/cType-ISO.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-01.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-02.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-03.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-04.png" />
                                </div>
                            </div>
                        </div>
                        <div thumbsSlider="" class="swiper mySwiper img-down">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="../img/cType-ISO.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-01.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-02.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-03.png" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="../img/c-04.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Swiper 초기화 코드 추가 (C Type 클릭 시마다 재초기화)
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                spaceBetween: 5,
                slidesPerView: 5,
                freeMode: true,
                watchSlidesProgress: true,
            });

            var swiper2 = new Swiper(".mySwiper2", {
                loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        });
    });


    type.forEach((list, i) => {
        list.addEventListener('click', (e) => {
            e.preventDefault();

            // 모든 typeOp 요소에서 'checked' 클래스 제거
            type.forEach((item) => item.classList.remove('checked'));

            // 클릭된 요소에 'checked' 클래스 추가
            list.classList.add('checked');

            // 모든 unitCnt 요소 숨기기
            typeCnt.forEach((cnt) => cnt.classList.add('hidden'));
            typeTt.forEach((title) => title.classList.add('hidden'));

            // 클릭된 요소의 인덱스에 해당하는 unitCnt 요소만 표시
            if (typeCnt[i]) {
                typeCnt[i].classList.remove('hidden');
            }

            if (typeTt[i]) {
                typeTt[i].classList.remove('hidden');
            }
        });
    });

    //    Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
};
