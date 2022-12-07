// 헤더 컴퍼넌트 
export var headerComponent = "";

    // 헤더 & 북마크 목록
    headerComponent += "<header id=\"header\">";
    headerComponent += "  <div class=\"nav_brand\">";
    headerComponent += "      <button type=\"button\" class=\"btn_nav\">전체보기</button>";
    headerComponent += "      <h1>NEW MP</h1>";
    headerComponent += "  </div>"
    headerComponent += "  <div class=\"bookmark\">";
    headerComponent += "      <ul class=\"bookmark_list\">";
    headerComponent += "        <li><button type=\"button\" class=\"ico on\"></button><a href=\"#\" target=\"_blank\" title=\"북마크1\">북마크1</a></li>";
    headerComponent += "        <li><button type=\"button\" class=\"ico on\"></button><a href=\"#\" target=\"_blank\" title=\"북마크2\">북마크2</a></li>";
    headerComponent += "        <li><button type=\"button\" class=\"ico on\"></button><a href=\"#\" target=\"_blank\" title=\"북마크3\">북마크3</a></li>";
    headerComponent += "        <li><button type=\"button\" class=\"ico on\"></button><a href=\"#\" target=\"_blank\" title=\"북마크4\">북마크4</a></li>";
    headerComponent += "        <li><button type=\"button\" class=\"ico on\"></button><a href=\"#\" target=\"_blank\" title=\"북마크5\">북마크5</a></li>";
    headerComponent += "      </ul>";
    headerComponent += "      <p class=\"user_log\">로그인정보 <span>2021.11.12 10:27:10</span></p>";
    headerComponent += "  </div>";
    headerComponent += "</header>";

export var navigationHtml = "";

    navigationHtml += "<div class=\"lay_nav\">";
    navigationHtml += "     <div class=\"nav_inner\">";
                                // 1뎁스
    navigationHtml += "         <div class=\"nav_tree\">";
    navigationHtml += "             <button type=\"button\" class=\"btn_fold\">모델, 상품관리</button>";

                                    // 2뎁스
    navigationHtml += "             <ul class=\"nav_depth\">";
    navigationHtml += "                 <li class=\"nav_item\">";
                                            // 북마크 활성화 : ico on
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/newmp\" class=\"nav_link\">원부 기준</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#모델 기준\" class=\"nav_link\">모델 기준</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "             </ul>";
    navigationHtml += "         </div>";
    
    navigationHtml += "         <div class=\"nav_tree\">";
    navigationHtml += "             <button type=\"button\" class=\"btn_fold\">모델 정제</button>";

    navigationHtml += "             <ul class=\"nav_depth\">";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/ingredientAdmin\" class=\"nav_link\">전성분 관리</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/supply_main\" class=\"nav_link\">연관상품 연결 (소모품)</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#제품정보 복사, 일괄 모델 정제\" class=\"nav_link\">제품정보 복사, 일괄 모델 정제</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#이미지 등록\" class=\"nav_link\">이미지 등록</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "             </ul>";
    navigationHtml += "         </div>";

    navigationHtml += "         <div class=\"nav_tree\">";
    navigationHtml += "             <button type=\"button\" class=\"btn_fold\">속성 관리</button>";

    navigationHtml += "             <ul class=\"nav_depth\">";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/attr_main\" class=\"nav_link\">속성, 속성원 관리</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/spec_main\" class=\"nav_link\">상세검색 (스마트파인더)</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/condition_main\" class=\"nav_link\">그룹조건</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#단위환산가\" class=\"nav_link\">단위환산가</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/pop_mkrbrnd\" class=\"nav_link\">제조사, 브랜드</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://jca.enuri.com:8080/mp/detailInquiry/detailInquiry.jsp\" target=\"_blank\" class=\"nav_link\">상세문의 (문의코드)</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "             </ul>";
    navigationHtml += "         </div>";

    navigationHtml += "         <div class=\"nav_tree\">";
    navigationHtml += "             <button type=\"button\" class=\"btn_fold\">카테고리 관리</button>";

    navigationHtml += "             <ul class=\"nav_depth\">";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#코드 관리\" class=\"nav_link\">코드 관리</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#일괄 변경\" class=\"nav_link\">일괄 변경</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://jca.enuri.com:8080/mp/keyword_new/mp_keyword_new.jsp\" target=\"_blank\" class=\"nav_link\">분류 검색어, 동의어</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://jca.enuri.com:8080/mp/manager/manager.Jsp\" target=\"_blank\" class=\"nav_link\">담당 카테고리 설정</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "             </ul>";
    navigationHtml += "         </div>";

    navigationHtml += "         <div class=\"nav_tree\">";
    navigationHtml += "             <button type=\"button\" class=\"btn_fold\">화면 커스텀</button>";

    navigationHtml += "             <ul class=\"nav_depth\">";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#이미지 크기 조정\" class=\"nav_link\">이미지 크기 조정</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#간격, 컬럼 노출 조정\" class=\"nav_link\">간격, 컬럼 노출 조정</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#검색 설정\" class=\"nav_link\">검색 설정</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "             </ul>";
    navigationHtml += "         </div>";

    navigationHtml += "         <div class=\"nav_tree\">";
    navigationHtml += "             <button type=\"button\" class=\"btn_fold unfold\">그룹매칭</button>";

    navigationHtml += "             <ul class=\"nav_depth\">";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://dm.enuri.com/model_tmp\" class=\"nav_link\">가생성 모델</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#가매칭 상품\" class=\"nav_link\">가매칭 상품</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "             </ul>";
    navigationHtml += "         </div>";

    navigationHtml += "         <div class=\"nav_tree\">";
    navigationHtml += "             <button type=\"button\" class=\"btn_fold unfold\">주요 지표 페이지</button>";

    navigationHtml += "             <ul class=\"nav_depth\">";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"#담당 카테고리 설정\" target=\"_blank\" class=\"nav_link\">담당 카테고리 설정</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://jca.enuri.com:8080/team_contents/cm_wrk_report.jsp\" target=\"_blank\" class=\"nav_link\">CM 주요 관리 지표</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://jca.enuri.com:8080/ndmonitor/getRivalGoodsInfo.jsp\" target=\"_blank\" class=\"nav_link\">경쟁사 모니터링 페이지</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://jca.enuri.com:8080/cm/coreAttribute/coreAttribute.jsp\" target=\"_blank\" class=\"nav_link\">핵심 속성 입력/점검 페이지</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "                 <li class=\"nav_item\">";
    navigationHtml += "                     <button type=\"button\" class=\"ico\"></button><a href=\"http://jca.enuri.com:8080/unknownModel/unknownModelMonitor/unknownModelMonitor.jsp\" target=\"_blank\" class=\"nav_link\">제조사 [불명] 현황 페이지</a>";
    navigationHtml += "                 </li>";
    navigationHtml += "             </ul>";
    navigationHtml += "         </div>";
    navigationHtml += "     </div>";
    navigationHtml += "</div>";

// 전체메뉴 > 레이어 위젯
var navigationWindow = new dhx.Window({
    //title: "a",
    closable: false,
    width: 300,
    height: 500,
    css: "lay_nav"
});
// 전체메뉴 > 레이어 위젯 열기
$(document).on("click", ".btn_nav", function(){
    navigationWindow.attachHTML(navigationHtml);
    navigationWindow.show();
    navigationWindow.setPosition(10, $("#header").outerHeight());

    // 북마크 func
    navBookmark()
})
// 외부클릭 => 전체메뉴 > 레이어 닫기
$("html").on('click', function(e){ 
    var $t = $(e.target);
    var $carea = $t.closest('.lay_nav'); // 클릭 영역
    if( !$carea.length ){
        navigationWindow.hide();
    }
});

// 전체메뉴 > 북마크 function
function navBookmark(){
    var starIco = ".nav_item .ico", // 북마크 별
        btnFold = ".btn_fold";

    // default : 그룹매칭, 주요 지표 페이지 folding
    setTimeout(function(){
        $(".btn_fold.unfold").siblings(".nav_depth").slideUp();
    },100)
    
    // 북마크 토글
    $(document).on("click", starIco, function(){
        var _this = $(this)

        $(_this).toggleClass("on")

        if(_this.hasClass("on")){
            alert("북마크로 등록하였습니다.")

            // 즐겨찾기 로직 넣어주세요

            
        }
    })

    // 메뉴 폴딩
    $(document).on("click", btnFold, function(e){
        e.stopPropagation()

        console.log(e)
        var _this = $(this);
        var childList = _this.siblings(".nav_depth")

        _this.toggleClass("unfold");
        childList.toggle();
    })
}

// 헤더 우측 북마크 관리
$(document).on("click", ".bookmark_list .ico", function(){
    $(this).removeClass("on");
    if(confirm("북마크를 해제하시겠습니까?")){
        // yes
        alert("북마크가 해제되었습니다.")
        $(this).closest("li").remove();
    }
})


// 페이지 정보 컴퍼넌트
export var pageUtilComponent = "";

    pageUtilComponent += "<div class=\"pageutil\">";
    pageUtilComponent += "    <div class=\"container-fluid\">";
    pageUtilComponent += "        <div class=\"row\">";
    pageUtilComponent += "            <div class=\"col-12\">";

    pageUtilComponent += "                <div class=\"cateshow\">";
    pageUtilComponent += "                  <ol class=\"cate_breadcrumb\">";
    pageUtilComponent += "                      <li><span>생활,취미</span></li>";
    pageUtilComponent += "                      <li><span>생활용품</span></li>";
    pageUtilComponent += "                  </ol>";
    pageUtilComponent += "                  <div class=\"btn-group\">";
    pageUtilComponent += "                      <button type=\"button\" class=\"btn btn_show\">열기</button>";
    pageUtilComponent += "                  </div>";
    pageUtilComponent += "                </div>";

    pageUtilComponent += "                <div class=\"datainfo\">";
    pageUtilComponent += "                  <div class=\"datainfo_inner\">";
    pageUtilComponent += "                    <dl>";
    pageUtilComponent += "                        <dt>GMV 달성율:</dt>";
    pageUtilComponent += "                        <dd><p class=\"tx tx-up\">81.75%</p></dd>";
    pageUtilComponent += "                        <dd><p>YOY</p><p class=\"tx tx-up\">103%</p></dd>";
    pageUtilComponent += "                    </dl>";

    pageUtilComponent += "                    <dl>";
    pageUtilComponent += "                        <dt>생산량 달성율:</dt>";
    pageUtilComponent += "                        <dd><p>추가</p><p class=\"tx tx-down\">145%</p></dd>";
    pageUtilComponent += "                        <dd><p>매칭</p><p class=\"tx tx-down\">560%</p></dd>";
    pageUtilComponent += "                    </dl>";
    pageUtilComponent += "                  </div>";
    pageUtilComponent += "                </div>";
    pageUtilComponent += "            </div>";
    pageUtilComponent += "        </div>";
    pageUtilComponent += "    </div>";
    pageUtilComponent += "</div>";

// 서브페이지 > 카테고리 노출
export var menuTabComponent = "";
    menuTabComponent += "<div class=\"pageutil\">";
    menuTabComponent += "    <div class=\"container-fluid\">";
    menuTabComponent += "      <div class=\"row\">";
    menuTabComponent += "            <div class=\"col-12\">";
    menuTabComponent += "                <div class=\"cateshow\">";
    menuTabComponent += "                  <ol class=\"cate_breadcrumb\">";
    menuTabComponent += "                      <li><span>생활,취미</span></li>";
    menuTabComponent += "                      <li><span>생활용품</span></li>";
    menuTabComponent += "                  </ol>";
    menuTabComponent += "                  <div class=\"btn-group\">";
    menuTabComponent += "                      <button type=\"button\" class=\"btn btn_show\">열기</button>";
    menuTabComponent += "                  </div>";
    menuTabComponent += "                </div>";
    menuTabComponent += "            </div>";
    menuTabComponent += "        </div>";
    menuTabComponent += "    </div>";
    menuTabComponent += "</div>";

// 서브페이지 > 2뎁스 메뉴 
// 페이지 진입시 해당 페이지 활성화해 주세요. : class="is-on"
export var cateMenuComponent = "";
    cateMenuComponent += "<div class=\"pagetabs\">";
    cateMenuComponent += "    <div class=\"tabs\">";
    cateMenuComponent += "      <ul class=\"tablist\">";
    cateMenuComponent += "          <li><a href=\"#\">카테고리 Admin</a></li>";
    cateMenuComponent += "          <li><a href=\"./spec_admin.html\">상세검색(스마트파인더)</a></li>";
    cateMenuComponent += "          <li><a href=\"./attr_admin.html\">속성 Admin</a></li>";
    cateMenuComponent += "          <li><a href=\"#\">조건(속성)추출</a></li>";
    cateMenuComponent += "          <li><a href=\"./all_ingredient_admin.html\">전성분</a></li>";
    cateMenuComponent += "          <li class=\"is-on\"><a href=\"./group_condition_admin.html\">그룹조건</a></li>";
    cateMenuComponent += "          <li><a href=\"#\">카테고리 재분류</a></li>";
    cateMenuComponent += "      </ul>";
    cateMenuComponent += "    </div>";
    cateMenuComponent += "</div>";


// 메인페이지 우측 > 레이아웃 변경
export var changeViewBtn = "";
    changeViewBtn += "<div class=\"change_view\">";
    changeViewBtn += "  <button class=\"btn_change\">show</button>";
    changeViewBtn += "</div>";

// 메인페이지 우측 > 레이아웃 레이어 HTML
var layChangeCont = "";
    layChangeCont += "<div class=\"lay_changeView\">";
    layChangeCont += "  <div class=\"sel_layout\">";
    layChangeCont += "      <ul>";
    layChangeCont += "          <li class=\"is-on\"><button type=\"button\" class=\"btn_lay1\" data-layout=\"1\">레이아웃01</button></li>";
    layChangeCont += "          <li><button type=\"button\" class=\"btn_lay2\" data-layout=\"2\">레이아웃02</button></li>";
    layChangeCont += "      </ul>";
    layChangeCont += "  </div>";
    layChangeCont += "  <div class=\"lay_foot\">";
    layChangeCont += "      <button type=\"button\" class=\"btn_excute\">열기</button>";
    layChangeCont += "      <button type=\"button\" class=\"btn_close\">닫기</button>";
    layChangeCont += "  </div>";
    layChangeCont += "</div>";

// 메인페이지 우측 > 레이어 위젯
var dhxWindow = new dhx.Window({
    title: "화면 유형 설정",
    closable: true,
    css: "lay_changeview",
    html: layChangeCont
});

// 메인페이지 우측 > 위젯 열기
$(document).on("click", ".btn_change", function(){
    dhxWindow.show();
})

// 메인페이지 우측 > 위젯 닫기
$(document).on("click", ".btn_close", function(){
    dhxWindow.hide();
})

// 메인페이지 우측 > 레이아웃 선택 
var loadSt = false; // 로딩 상태
var layoutNum = 1;
$(document).on("click", ".sel_layout>ul>li", function(){
    var _this = $(this);        
    
        _this.addClass("is-on").siblings("li").removeClass("is-on");
        layoutNum = _this.find("button").data("layout");
})
// 메인페이지 우측 > 레이아웃 변경
$(document).on("click", ".lay_changeView .btn_excute", function(){
    dhxWindow.hide();

    $(".loader_box").fadeIn();
    setTimeout(function(){
        loadSt = true;
        if(loadSt){
            $(".loader_box").fadeOut();
    
            if(layoutNum === 1){
                //레이아웃1
                window.location.href = "./index.html"
            }else if(layoutNum === 2){
                //레이아웃2
                window.open("./index_srch.html");
            }
            loadSt = false;
        }
    }, 1000) // 임의속도
})