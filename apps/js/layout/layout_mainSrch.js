/********************************* 
 * 대량정제 퍼블용 JS
 * - DHTMLX v.7.1.4
 * - BOOTSTRAP v4.0.0
 * - HTML 컴퍼넌트, DHTML위젯(GRID, LIST, FORM 등)  
 
 ※ 참고
 * 레이아웃, GRID 등 ID 값 퍼블/개발 동일하게 사용할 것을 권장합니다. 
 * ID 변경될 경우, 공유해주세요. (해당 ID에 맞게 css/js 사용되고 있습니다)
 * data 목록은 가짜데이터 입니다. (퍼블용)
 * collapse 되는 영역은 위젯, 그리드 등 attach 했습니다.
 * collapse 되지 않는 영역은 일부 HTML 컴퍼넌트, 위젯 혼용했습니다.
*********************************/

/********************************
 * 대량정제 HEADER, CATEGORY 분리
 * 페이지 별 컨텐츠 영역만 변경 (id:contents)
 * 메인 > 통합검색 컨텐츠(레이아웃2)
*********************************/

import * as header from "./common/header_srch.js" // 상단 : 헤더 (공통)
import { sidebar } from  "./common/category.js" // 좌측 : 카테고리 (공통)

/*********************************
 * 전체 레이아웃 생성
*********************************/
var config = {
    type: "line", // space, wide, line
    width:"100%",
    maxWidth:"100%",
    rows: [
        {
            // 상단 툴바
            id: "toolbar",
            height: "40px",
            html: header.headerComponent,
            collapsable: false
        },
        {
            // 컨텐츠 레이아웃 
            type: "line",
            width:"100%",
            cols: [
                {
                    // 사이드바
                    type: "line",
                    id: "sidebar",
                    width: "240px"
                },
                {
                    // 그리드 컨텐츠 
                    rows:[
                        {
                            // ************************* 220211 : SR#51192 : 상단 통합검색 영역 추가
                            height: "56px",
                            cols:[
                                {
                                    // EP상품 ROW : 검색&키워드
                                    width:"calc(100% - 560px)",
                                    height:"56px",
                                    cols: [
                                        {
                                            // 통합검색 : 검색 영역
                                            id: "wrapSearch",
                                            width: "440px",
                                            height:"56px"
                                        },
                                        {
                                            // 통합검색 : 키워드 영역
                                            id: "wrapSearchKeyword",
                                            width: "calc(100% -  440px)",
                                            height:"56px",
                                        }
                                    ] 
                                },
                                {
                                    // 상단 툴바
                                    id: "pageUtility",
                                    width: "480px",
                                    height: "56px",
                                    html: header.pageUtilComponent,
                                    css:"page_utility",
                                    collapsable: false
                                },
                                {
                                    // 레이아웃 변경 버튼
                                    id: "changeLayout",
                                    width: "80px",
                                    height: "56px",
                                    html: header.changeViewBtn,
                                    collapsable: false
                                }
                            ]                            
                        },
                        {
                            // 컨텐츠 영역 : 메인
                            id: "contents"
                        }
                    ]
                        
                    
                },
            ],
        },
    ]
};

/*********************************
 * 생성된 레이아웃에 ID별로 attach합니다.
*********************************/
var layout = new dhx.Layout("layout", config);
    
    layout.getCell("sidebar").attach(sidebar)

    layout.getCell("wrapSearch").attach(header.wrapSrchControll); // 상단 통합검색
    layout.getCell("wrapSearchKeyword").attach(header.wrapKeywordAdd); // 상단 통합검색 : 키워드 영역 */

export { layout } // 사이드바 콜랩스를 위한 layout 내보내기