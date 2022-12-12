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

/*********************************
 * 메인 > 기본 컨텐츠(레이아웃1)
 *********************************/

// 모델리스트 가짜 데이터
var mdList_data = [
    {
        "md_count": "12,345,678",
        "md_catecode": "15010101",
        "md_image": "http://image.enuri.info/webimage_300/9533000000/9533000000/9533002157.jpg",
        "md_comp":"솔가", 
        "md_brand":"솔가",
        "md_name":"비타민 D3 5000IU 240정",
        "md_group":"1개",
        "md_group_st":"대표",
        "md_matching":"5",
        "md_resist":"2022-01-24",
        "md_img":"1",
        "md_sold":"1",
        "md_front":"1",
        "md_property":"",
        "md_cmnum":"0",
        "md_expected":"0",
        "md_volume":"",
        "md_quantity":"",
        "md_exchange":"",
        "md_unit":"",
        "md_qna":"",
        "md_review":"",
        "md_ingredient":"",
        "md_color":0
    },
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"홍합분말 초록입","md_group":"1개","md_group_st":"그룹","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":1},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":1},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":1},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":1},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"115","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0},
    {"md_count": "12,345,678","md_catecode": "15010101","md_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","md_comp":"솔가","md_brand":"솔가","md_name":"비타민 D3 5000IU 240정","md_group":"1개","md_group_st":"대표","md_matching":"5","md_resist":"2022-01-24","md_img":"1","md_sold":"1","md_front":"1","md_property":"","md_cmnum":"0","md_expected":"0","md_volume":"","md_quantity":"","md_exchange":"","md_unit":"",
    "md_qna":"","md_review":"","md_ingredient":"","md_color":0}
]
// 모델리스트 가짜 데이터 넘버 입력
var mdListNum = mdList_data.length;
for(var i = 0; i < mdListNum; i++) {
    var row = mdList_data[i];
    row.idx = i+1;
}

// 가격리스트(EP) 가짜 데이터
var prdcList_data = [
    {
        "pl_no": "1123321",
        "prdc_chk": "", 
        "prdc_image": "http://image.enuri.info/webimage_300/9533000000/9533000000/9533002157.jpg", 
        "prdc_mall": "까까조", 
        "prdc_price": "16,520", 
        "prdc_pricem": "16,520", 
        "prdc_name": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", 
        "prdc_brand": "솔가", 
        "prdc_mdnum": 0, 
        "prdc_option": 0, 
        "prdc_srchdate": "2022-09-14,오전 4:30:00", 
        "prdc_noti": 1, 
        "prdc_direction": 2, 
        "prdc_sold": 3,
        "prdc_keep": 4,
        "prdc_delivery": "무료배송",
        "prdc_lastdate": "2022-01-01"
    },
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01"},
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/7621000000/7621070000/7621079541.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01"},
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01",},
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/5431700000/5431780000/5431780716.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01",},
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/6972900000/6972910000/6972913054.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01",},
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/9622000000/9622040000/9622045486.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01",},
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/10462800000/10462880000/10462886671.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01",},
    {"pl_no": "1123321", "prdc_chk": "", "prdc_image": "http://image.enuri.info/webimage_300/8201800000/8201840000/8201848704.jpg", "prdc_mall": "까까조", "prdc_price": "16,520", "prdc_pricem": "16,520", "prdc_name": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "prdc_brand": "솔가", "prdc_mdnum": 0, "prdc_option": 0, "prdc_srchdate": "2022-09-14,오전 4:30:00", "prdc_noti": 1, "prdc_direction": 2, "prdc_sold": 3,"prdc_keep": 4,"prdc_delivery": "무료배송","prdc_lastdate": "2022-01-01",}
];
// 가격리스트(EP) 넘버링
var prdcListNum = prdcList_data.length;
for (var i = 0; i < prdcListNum; i++) {
    var row = prdcList_data[i];
    row.idx = i+1;
}


// 상품리스트 > 모델 정보 영역
var productInfo = "";

    productInfo += "<div class=\"control__box control__box--comp\">";
    productInfo += "    <div class=\"container-fluid\">";
    productInfo += "        <div class=\"row\">";
    productInfo += "            <div class=\"col-12\">";
    productInfo += "                <div class=\"prdc__info\">";
    productInfo += "                    <div class=\"thumb\" id=\"prdcThumb\"><img src=\"http://image.enuri.info/webimage_300/9533000000/9533000000/9533002157.jpg\" alt=\"\" /></div>";
    
    productInfo += "                    <div class=\"tx\">";
    productInfo += "                        <div class=\"tx_util\">";
    productInfo += "                            <div class=\"tx_unit\">";
    productInfo += "                                <a href=\"#\" class=\"tx_mnum\">모델번호 : 11577831</a>";
    productInfo += "                                <div class=\"tx_price\">";
    productInfo += "                                    <p class=\"tx_min\">최저가 : <em>44,440</em></p>";
    productInfo += "                                    <p class=\"tx_max\">최고가 : <em>12,620</em></p>";
    productInfo += "                                </div>";
    productInfo += "                            </div>";
    productInfo += "                            <div class=\"model_info\">";
    productInfo += "                                <ul>";
    productInfo += "                                  <li><p class=\"tx_dt\">제조사</p><p class=\"tx_dd\">한국P&amp;G</p></li>";
    productInfo += "                                  <li><p class=\"tx_dt\">브랜드</p><p class=\"tx_dd\">헤어레시피</p></li>";
    productInfo += "                                  <li><p class=\"tx_dt\">스칼프 케어 샴푸 1L 481개</p></li>";
    productInfo += "                                </ul>";
    productInfo += "                            </div>";
    productInfo += "                            <div class=\"model_option\">";
    productInfo += "                                <button type=\"button\" id=\"btnOptionAll\" class=\"btn_all\">전체보기</button>";
    productInfo += "                                <ul>";
    productInfo += "                                  <li>용량: 900ml</li>";
    productInfo += "                                  <li>수량: 1개</li>";
    productInfo += "                                </ul>";
    productInfo += "                            </div>";
    productInfo += "                        </div>";
    productInfo += "                    </div>";
    productInfo += "                    <div class=\"attr_input\">";
    productInfo += "                        <button class=\"btn btn-attrin\" type=\"button\" data-target=\"./popup_productAttrAdmin.html\" data-pname=\"prdcAttributeAdmin\" onclick=\"popupOpen($(this).data('target'), $(this).data('pname'), 1180, 980)\">속성 입력</button>";
    productInfo += "                    </div>";
    productInfo += "                </div>";
    productInfo += "            </div>";
    productInfo += "        </div>";
    productInfo += "    </div>";
    productInfo += "</div>";

// 상품리스트 > 선택 상품 명 표시 영역
var modelNameBox = "";

    modelNameBox += "<div class=\"control__box control__box--modelnm\">";
    modelNameBox += "    <div class=\"container-fluid\">";
    modelNameBox += "        <div class=\"row\">";
    modelNameBox += "            <div class=\"col-12\">";   
    modelNameBox += "                <div class=\"input-group\">";
    modelNameBox += "                    <input type=\"text\" class=\"form-control ipt-txt--srch\" id=\"modelNameIn\" placeholder=\"\" readonly=\"readonly\">";
    modelNameBox += "                </div>"; 
    modelNameBox += "            </div>";
    modelNameBox += "        </div>";
    modelNameBox += "    </div>";
    modelNameBox += "</div>";

// 그리드/이미지 뷰타입 전환 버튼 
var viewTypeChange = "";

    viewTypeChange += "<div class=\"viewtype_change\">";
    viewTypeChange += "     <button type=\"button\" class=\"btn_type btn_type-grid is-on\" data-viewtype=\"gridTypeList\">그리드타입</button>";
    viewTypeChange += "     <button type=\"button\" class=\"btn_type btn_type-image\" data-viewtype=\"imageTypeList\">이미지타입</button>";
    viewTypeChange += "</div>"


/*********************************
 * 각 COL 그리드/리스트 생성하여 attach 합니다.
*********************************/
var mdList, prdcList; // 그리드 변수 생성
var prdcViewCont; // 상품리스트 > 뷰타입 컨테이너
var imageTypeList; // 상품리스트 > 이미지뷰 위젯

// 모델리스트 그리드 생성
// id 는 입력될 데이터 키와 동일하게 변경 필요합니다.
mdList = new dhx.Grid(null, {
    columns: [
        {id: "idx", width: 40, header: [{text: "flag", align:"center"}], align:"center",},
        {id: "md_count", minWidth:100, header: [{ text: "번호", align: "center" }], align: "center", },
        {id: "md_catecode", minWidth:60, header: [{ text: "카테코드", align: "center" }], align: "center", editable: false },
        {id: "md_image", minWidth:60, header: [{ text: "이미지", align: "center" }], htmlEnable: true, align: "center", sortable: false,
            template: function (text, row, col) { 
                return "<img src=\""+text+"\" alt=\"\" class=\"thumb thumb-40\">"; 
            } 
        },
        {id: "md_comp", minWidth:60, header: [{ text: "제조사", align: "center" }], align: "center", editable: false },
        {id: "md_brand", minWidth:60, header: [{ text: "브랜드", align: "center" }], align: "center", editable: false },
        {id: "md_name", minWidth:240, header: [{ text: "모델명", align: "center" }], align: "left", editable: false },
        {id: "md_group", minWidth:60, header: [{ text: "그룹조건명", align: "center" }], align: "center", sortable: false, editable: false },
        {id: "md_group_st", minWidth:60, header: [{ text: "그룹여부", align: "center" }], align: "center", editorType: "combobox", options: ["대표", "그룹"] },
        {id: "md_matching", minWidth:60, header: [{ text: "매칭수", align: "center" }], align: "center" },
        {id: "md_resist", minWidth:90, header: [{ text: "등록일", align: "center" }], align: "center", type: "date", format: "%Y-%m-%d" },
        {id: "md_img", minWidth:90, header: [{ text: "IMG", align: "center" }], align: "center", editorType: "combobox", options: [2010203, 201203] },
        {id: "md_sold", minWidth:40, header: [{ text: "단종", align: "center" }], align: "center", editorType: "combobox", options: [1, 2, 3, 4] },
        {id: "md_front", minWidth:40, header: [{ text: "작", align: "center" }], align: "center", editorType: "combobox", options: [1, 0] },
        {id: "md_property", minWidth:150, header: [{ text: "속성", align: "center" }], align: "center", editable: false },
        {id: "md_cmnum", minWidth:40, header: [{ text: "담", align: "center" }], align: "center", sortable: false },
        {id: "md_expected", minWidth:40, header: [{ text: "예정", align: "center" }], align: "center", sortable: false, editorType: "combobox", options: [0, 9, "X"] },
        {id: "md_volume", minWidth:40, header: [{ text: "용량", align: "center" }], align: "center" },
        {id: "md_quantity", minWidth:40, header: [{ text: "수량", align: "center" }], align: "center", editable: false },
        {id: "md_exchange", minWidth:40, header: [{ text: "환산", align: "center" }], align: "center" },
        {id: "md_unit", minWidth:40, header: [{ text: "단위", align: "center" }], align: "center" },
        {id: "md_qna", minWidth:40, header: [{ text: "문의", align: "center" }], align: "center", sortable: false, editorType: "combobox", options: [0, 9, "X"] },
        {id: "md_review", minWidth:40, header: [{ text: "상품평", align: "center" }], align: "center" },
        {id: "md_ingredient", minWidth:40, header: [{ text: "성분", align: "center" }], align: "center", editable: false },
        {id: "md_color", minWidth:40, header: [{ text: "색상", align: "center" }], align: "center", editorType: "combobox", options: ["0", "1"] }
    ],
    headerRowHeight: 32,
    rowHeight: 32,
    autoWidth: true,
    data: mdList_data,
    selection: "row",
    multiselection: true,
    keyNavigation: true,
    resizable: true,
    tooltip: false,
    editable: true
});

// 상품리스트 그리드 생성
// id 는 입력될 데이터 키와 동일하게 변경 필요합니다.
prdcList = new dhx.Grid(null, {
    columns: [
        { id: "idx", width: 40, header: [{text: "#", align:"center"}], resizable:false, align:"center",},
        { id: "prdc_chk", width: 50, header: [{ text: "선택", align: "center" }], sortable: false, resizable: false, htmlEnable: true, align: "center",
            template: function (text, row, col) { 
                // 단순 체크 이미지 (기능없음)
                return "<div class=\"form-chk ep-chk\"><input type=\"checkbox\" class=\"input--checkbox-item\" disabled=\"disabled\"><label></label></div>";
            } 
        },
        { id: "prdc_image", width: 90, header: [{ text: "이미지", align: "center" }], htmlEnable: true, align: "center",
            template: function (text, row, col) { 
                return "<img src=\""+text+"\" alt=\"\" class=\"thumb\">"; 
            } 
        },
        { id: "prdc_mall", width: 100, header: [{ text: "쇼핑몰", align: "center" }], htmlEnable: true,  align: "center", editable: false,
            template: function (text, row, col) { 
                return "<p class=\"tx_tit\">"+text+"</p>"; 
            } 
        },
        { id: "prdc_price", width: 90, header: [{ text: "가격", align: "center" }], htmlEnable: true, align: "right",
            template: function (text, row, col) { 
                return "<a href=\"#\" target=\"_blank\" onclick=\"alert(\'VIP 이동\');return false;\">"+text+"</a>"; 
            } 
        },
        { id: "prdc_pricem", width: 90, header: [{ text: "M가격", align: "center" }], htmlEnable: true, align: "right",
            template: function (text, row, col) { 
                return "<a href=\"#\" target=\"_blank\" onclick=\"alert(\'VIP 이동\');return false;\">"+text+"</a>"; 
            } 
        },
        { id: "prdc_name", width: 550, header: [{ text: "상품명", align: "center" }], htmlEnable: true, align: "left", editable: false,
            template: function (text, row, col) { 
                return "<p class=\"tx_tit tx_tit_clamp-2\">"+text+"</p>"; 
            } 
        },
        { id: "prdc_brand", width: 100, header: [{ text: "브랜드", align: "center" }], htmlEnable: true, align: "center", editable: false,
            template: function (text, row, col) { 
                return "<p class=\"tx_tit\">"+text+"</p>"; 
            } 
        },
        { id: "prdc_mdnum",  width: 100, header: [{ text: "모델번호", align: "center" }], align: "center", editable: false },
        { id: "prdc_option",  width: 100, header: [{ text: "옵션", align: "center" }], align: "center", editorType: "combobox", options: [1, 2, 3, 4] },
        { id: "prdc_srchdate", width: 140, header: [{ text: "검색일", align: "center" }], htmlEnable: true, align: "center", editable: false,
            template: function (text, row, col) { 
                var txt = text.split(",")
                return "<span>"+txt[0] + "<br>" + txt[1] +"</span>"; 
            }
        },
        { id: "prdc_noti", width: 80, header: [{ text: "비고", align: "center" }], align: "center", editorType: "combobox", options: [1, 2, 3, 4] },
        { id: "prdc_direction", width: 80, header: [{ text: "좌우", align: "center" }], align: "center", editorType: "combobox", options: [1, 2, 3, 4] },
        { id: "prdc_sold", width: 80, header: [{ text: "단종", align: "center" }], align: "center", editorType: "combobox", options: [1, 2, 3, 4] },
        { id: "prdc_keep", width: 80, header: [{ text: "보관", align: "center" }], align: "center", editorType: "combobox", options: [1, 2, 3, 4], sortable: false },
        { id: "prdc_delivery", width: 80, header: [{ text: "배송비", align: "center" }], align: "center", sortable: false },
        { id: "prdc_lastdate", width: 80, header: [{ text: "최초수집일", align: "center" }], align: "center", type: "date", format: "%Y-%m-%d", editable: false },
    ],
    rowCss: function(row){
        if(row.matchYn) return "matching_row"; // 매칭된 행 클래스 추가
        else if(row.groupMatchYn) return "groupmatching_row"; // 그룹매칭 행 색상 추가
        else return "";
    },
    headerRowHeight: 32,
    rowHeight: 90,
    autoWidth: true,
    selection: "row",
    multiselection: true,
    keyNavigation: true,
    resizable: true,
    tooltip: false,
    editable: true
});
// 상품리스트 뷰타입(그리드/이미지) 탭바 생성
prdcViewCont = new dhx.Tabbar(null, {
    css: "tab_type", 
    mode: "top",    
    tabAutoWidth: false,
    tabWidth:30,
    views: [
        { tab: "그리드뷰", id: "gridTypeList" },
        { tab: "이미지뷰", id: "imageTypeList" }
    ]
});
// 상품리스트 이미지뷰 위젯 생성
imageTypeList = new dhx.List("list", {
    css: "type_img", 
    template: imgViewTemplate,
    data: prdcList_data,
    multiselection: "ctrlClick",
    keyNavigation: true
});
// 상품리스트 이미지뷰 목록 템플릿
function imgViewTemplate(item) {
    var template = "";
        template += "<div class='thumb_box'>";
        template += "   <div class='item_thumb'><img src='" + item.prdc_image + "' alt='' /></div>";
        template += "   <div class='item_summ'>";
        template += "       <p class='tx_mall'>"+item.prdc_mall+"</p>";
        template += "       <p class='tx_price'><em>"+item.prdc_price+"</em>원</p>";
        template += "       <p class='tx_nm' title='"+item.prdc_name+"'>"+item.prdc_name+"</p>";
        template += "       <a href='#' target='_blank' class='exlink' onclick=\"alert('VIP 이동'); return false;\">상세보기</a>";
        template += "   </div>";
        template += "   <div class=\"form-chk\">";
        template += "       <input type=\"checkbox\" id=\""+item.pl_no+"\" class=\"input--checkbox-item\"><label for=\""+item.pl_no+"\"></label>";
        template += "   </div>"
        template += "</div>";
    return template;
};


/*********************************
 * DHTMLX 위젯 생성하여, attach 합니다.
 * FORM 위젯 내 > css명 수정X
 * FORM 위젯 내 > options value 는 수정해서 사용해주세요.
 * FORM 위젯 내 > id 변경 시, 공유해 주세요.
*********************************/
// 모델리스트 페이징 연동
// 그리드 타입일 때
mdList.data.parse(mdList_data)
var mdGridPaging = new dhx.Pagination(null, {
    css: "",
    data: mdList.data,
    pageSize: 1000 // 1000단위로 바꿔주세요
});

// 상품리스트 페이징 연동
// 그리드 타입일 때
prdcList.data.parse(prdcList_data)
var matchGridPaging = new dhx.Pagination(null, {
    css: "",
    data: prdcList.data,
    pageSize: 1000 // 1000단위로 바꿔주세요
});
// 이미지 타입일때
imageTypeList.data.parse(prdcList_data)
var matchImgPaging = new dhx.Pagination(null, {
    css: "",
    data: imageTypeList.data,
    pageSize: 30 // 100단위로 바꿔주세요
});


/*********************
 * 레이아웃 상단 공통 영역
 *********************/
// 일정+담당자+업무구분 선택 영역
var userFinder = new dhx.Form(null, {    
    css: "form-radio--cond",
    padding: "5px 10px",
    width: "100%",
    cols: [
        {
            id: "date_first",
            mode: "calendar",
            type: "datepicker",
            placeholder: "2022-10-19",
            label: "",
            labelWidth: 0,
            weekStart: "sunday",
            dateFormat: "%Y-%m-%d",
            css: "control-comm sel-sort"
        },
        {
            id: "date_last",
            mode: "calendar",
            type: "datepicker",
            placeholder: "2022-10-19",
            label: "",
            labelWidth: 0,
            weekStart: "sunday",
            dateFormat: "%Y-%m-%d",
            css: "control-comm sel-sort"
        },
        {
            id: "userSelect",
            name: "userSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "김정민(jmkim86)",
            required: true,
            options: [
                { value: "0", content: "김정민(jmkim86)" },
                { value: "1", content: "김민정(mjkim8713)" },
                { value: "2", content: "공현우 (ksa1132)" },
                { value: "3", content: "플랫폼기획팀" }
                // ...
            ],
            css: "control-comm sel-sort"
        }, 
        {
            id: "workSelect",
            name: "workSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "업무현황구분",
            required: true,
            options: [
                { value: "0", content: "모델추가(전체)" },
                { value: "1", content: "유사>일반" },
                { value: "2", content: "모델삭제" },
                { value: "3", content: "모델번호(전체)" },
                { value: "4", content: "최저가매칭"}
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "userSubmit",
            type: "button",
            text:"열기",
            css: "control-comm btn-srch"
        }
    ]
})


/*********************
 * 레이아웃 좌측 모델리스트
 *********************/
// 모델리스트 > 상단 검색 필터 영역
var mdOptionFilter = new dhx.Form(null, {
    css: "form-radio--cond",
    padding: "7px 10px 3px",
    width: "100%",
    rows: [
        {
            // 모델 검색 옵션 첫번째 행
            id: "mdFilterRow_1",
            cols: [
                {
                    type: "radioGroup",
                    name: "radioGroup",
                    disabled: false,
                    required: false,
                    label: "",
                    labelWidth: 0,
                    labelPosition: "left",
                    options: {
                        cols: [
                            { type: "radioButton", text: "전체", value: "0" },
                            { type: "radioButton", text: "서비스", value: "1" },
                            { type: "radioButton", text: "제외", value: "2" }
                        ]
                    },
                    css: "control-comm ipt-radio"
                },
                {
                    id: "selOpt_1",
                    name: "selOpt_1",
                    type: "select",
                    label: "",
                    labelPosition: "left",
                    labelWidth: 0,
                    value: "선택",
                    required: true,
                    options: [
                        { value: "0", content: "인기순" },
                        { value: "1", content: "신상품" }
                    ],
                    css: "control-comm sel-sort"
                }, 
                {
                    id: "selOpt_2",
                    name: "selOpt_2",
                    type: "select",
                    label: "",
                    labelPosition: "left",
                    labelWidth: 0,
                    value: "선택",
                    required: true,
                    options: [
                        { value: "0", content: "선택" },
                        { value: "1", content: "출시예정" },
                        { value: "2", content: "미서비스확인" },
                        { value: "3", content: "핵심속성점검" },
                        { value: "4", content: "추가분류" },
                        { value: "5", content: "그룹등록" },
                        { value: "6", content: "그룹미등록" },
                        { value: "7", content: "환산가미등록" },
                        { value: "8", content: "유사상품" },
                        { value: "9", content: "유사 ★관리용" },
                        { value: "10", content: "속성" },
                        { value: "11", content: "사양선택" }
                    ],
                    css: "control-comm sel-sort"
                },
                {
                    id: "selOpt_3",
                    name: "selOpt_3",
                    type: "select",
                    label: "",
                    labelPosition: "left",
                    labelWidth: 0,
                    value: "선택",
                    required: true,
                    options: [
                        { value: "0", content: "속성1단계" },
                        { value: "1", content: "스펙그룹" },
                    ],
                    css: "control-comm sel-sort"
                },
                {
                    id: "selOpt_4",
                    name: "selOpt_4",
                    type: "select",
                    label: "",
                    labelPosition: "left",
                    labelWidth: 0,
                    value: "선택",
                    required: true,
                    options: [
                        { value: "0", content: "속성2단계" },
                        { value: "1", content: "상세스펙" },
                    ],
                    css: "control-comm sel-sort"
                },
                {
                    id: "mdFilterRow_1_Submit",
                    type: "button",
                    text: "조회",
                    css: "control-comm btn-srch"
                }
            ]
        },
    ]
})

// 모델리스트 > 모델 키워드 검색 영역
var mdSearch = new dhx.Form(null, {
    css: "controller_ep keyword_srch",
    padding: 0,
    width: "100%",
    rows: [
        {
            id: "mdSelect",
            name: "mdSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "상품명",
            required: true,
            options: [
                { value: "0", content: "전체" },
                { value: "1", content: "카테고리내" },
                { value: "2", content: "담당" }
            ],
            css: "control-comm sel-sort"
        }, 
        {
            id: "mdColumnSelect",
            name: "mdColumnSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "전체",
            required: true,
            options: [
                { value: "0", content: "통합" },
                { value: "1", content: "모델번호" },
                { value: "2", content: "모델번호(G)" },
                { value: "3", content: "모델명" },
                { value: "4", content: "조건명" },
                { value: "5", content: "속성" },
                { value: "6", content: "제조사" },
                { value: "7", content: "브랜드" }
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "mdIncludeSelect",
            name: "mdIncludeSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "선택",
            required: true,
            options: [
                { value: "0", content: "결과내포함" },
                { value: "1", content: "결과내제외" },
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "mdKeywordInput",
            name: "mdKeywordInput",
            type: "input",
            label: "",
            labelPosition: "left",
            icon: "dxi dxi-magnify",
            labelWidth: 0,
            required: true,
            placeholder: "검색어를 입력하세요.",
            css: "control-comm ipt-srch"
        },
        {
            id: "mdKeywordSubmit",
            type: "button",
            text:"검색",
            css: "control-comm btn-srch"
        },
        {
            id: "chkSynonym",
            name: "chkSynonym",
            type: "checkbox",
            text: "동의어 포함",
            css: "control-comm ipt-checkbox"
        }
    ]
})
// 모델리스트 > 모델 검색 키워드 노출 (TABBAR)
// 키워드 추가 관련 function 하단에 있습니다.
var mdSearchKeyword = new dhx.Tabbar(null, {
    css: "dhx_widget--bordered",
    mode: "top",
    tabAutoWidth: false,
    closable: true,
    noContent: true,
    /* views: [
        { tab: "입력한 검색키워드", id:"keyword-0" },
        { tab: "입력한 검색키워드", id:"keyword-1" },
        { tab: "입력한 검색키워드", id:"keyword-2" }
        // ...
    ], */
    css: "mdSearchKeyword_list"
});

// 모델리스트 > 모델 기매칭/추가/변경/삭제 버튼 영역
var mdControl = new dhx.Form(null, {
    css: "controller_ep",
    padding: 0,
    rows: [
        {
            // 모델 검색 옵션 세번째 행
            id: "mdFilterRow_3",
            cols: [
                { id: "btnOriginMatching", type: "button", text:"기매칭", css: "control-comm btn-srch" },
                { id: "btnAdd", type: "button", text:"추가", css: "control-comm btn-srch" },
                { id: "btnMod", type: "button", text:"변경", css: "control-comm btn-srch" },
                { id: "btnDel", type: "button", text:"삭제", css: "control-comm btn-srch" },
                { id: "btnUpload", type: "button", text:"사이트반영", css: "control-comm btn-srch" }
            ]
        }
    ]
})

/*********************************
 * 각 그리드 추가/수정/삭제 윈도우 생성
*********************************/
var editWindow = new dhx.Window({
    width: 650,
    title: "모델 추가",
    modal: true
});

var editFormConfig = {
    padding: 0,
    css: "editModalBox",
    rows: [
        {
            id: "id",
            type: "input",
            name: "id",
            hidden: true,

            rows: [
                {
                    id: "modelRow_1",
                    cols: [
                        { type: "text", label: "카테고리" },
                        // 221207 : 검색 input css 제거
                        // { type: "input", id:"catecode", name: "catecode", css : "ipt_full" },
                        { type: "input", id:"catecode", name: "catecode" },
                        // 221207 : 카테고리명 버튼 css 추가
                        // { type: "button", text: "카테고리명 확인", id: "btnCateConfirm" },
                        { type: "button", text: "카테고리명 확인", id: "btnCateConfirm", css: "btn_srch" },
                        { type: "button", text: "카테고리 정보", id: "btnCateInfo", css: "btn_info" }
                    ]
                },
                {
                    id: "modelRow_2",
                    cols: [
                        { type: "text", label: "제조사" },
                        { type: "input", id:"company", name: "company" },
                        // 221207 : 검색 버튼 id 변경
                        // { type: "button", text: "검색", id: "btnCateConfirm", css: "btn_srch" },
                        { type: "button", text: "검색", id: "btnSearch", css: "btn_srch" },
                        { type: "select", name: "", value: "0", css: "sel_pad", options: [
                                { value: "0", content: "제조사 선택" },
                                { value: "1", content: "아모레퍼시픽1" },
                                { value: "2", content: "아모레퍼시픽2222" } 
                            ]
                        },
                        { type: "button", text: "제조사/브랜드", id: "btnBrandInfo", css: "btn_info" }
                    ]
                },
                {
                    id: "modelRow_3",
                    cols: [
                        { type: "text", label: "브랜드" },
                        { type: "input", id:"brand", name: "brand" },
                        { type: "button", text: "검색", id: "btnBrandSearch", css: "btn_srch" },
                        { type: "select", name: "", value: "0", css: "sel_pad", options: [
                            { value: "0", content: "브랜드 선택" },
                            { value: "1", content: "아모레퍼시픽1" },
                            { value: "2", content: "아모레퍼시픽2223213sdfasdf2" } 
                        ]
                        }
                    ]
                },
                {
                    id: "modelRow_4",
                    cols: [
                        { type: "text", label: "모델명" },
                        { type: "input", id: "mdname", name: "mdname", css : "ipt_full" }
                    ]
                },
                {
                    id: "modelRow_5",
                    cols: [
                        { type: "text", label: "카피문구" },
                        { type: "input", id: "copytxt", name: "copytxt", css : "ipt_full" }
                    ]
                },
                {
                    id: "modelRow_6",
                    cols: [
                        { type: "text", label: "검색키워드" },
                        { type: "input", id: "srchkey", name: "srchkey", css : "ipt_full" }
                    ]
                }
            ]
        },
        
        {
            align: "end",
            cols: [
                {
                    id: "apply-button",
                    type: "button",
                    text: "추가/저장"
                }
            ]
        }
    ]
}

// 윈도우 내 폼 위젯 생성
var editForm = new dhx.Form(null, editFormConfig);

// 윈도우 내 추가/저장 버튼 클릭
editForm.getItem("apply-button").events.on("click", function () {
    var newData = editForm.getValue();
    var validate = editForm.validate(); // 입력 상태 체크
    if(validate){
        var dataIdx = (mdList_data.length+1); // 조건번호 카운팅
        
        // 추가되어야 할 컬럼값 넣어주세요. 
        // data key는 임의로 넣은 것이니, 편의에 맞게 배열 키랑 동일하게 변경해주세요.
        const dataVal = {
            idx: dataIdx,
            prdc_image : newData.catecode, // 카테코드
            prdc_price : newData.company, // 제조사
            prdc_pricem : newData.brand, // 브랜드
            prdc_name : newData.mdname, // 모델명
            copytxt : newData.copytxt, // 카피문구
            srchkey : newData.srchkey, // 검색키워드
        }
        mdList_data.push(dataVal); // 배열에 푸시
        mdList.data.add(dataVal); // 그리드에 표시
        
        closeEditor(); // 윈도우 닫기
    }
});
// 윈도우 내 폼 적용
editWindow.attach(editForm);

// 모델 추가 버튼 클릭
mdControl.getItem("btnAdd").events.on("click", function(){
    openEditor(mdList.data.row, "모델 추가");
})
// 모델 수정 버튼 클릭
mdControl.getItem("btnMod").events.on("click", function(){
    var cell = mdList.selection.getCell(); // 선택한 행

    if(cell != undefined) openEditor(mdList.data.row, "모델 수정")
    else alert("수정할 열을 선택해 주세요.") 
})
// 모델 삭제 버튼 클릭
mdControl.getItem("btnDel").events.on("click", function(){
    var cell = mdList.selection.getCell(); // 선택한 행

    if (cell.row) {
        if(window.confirm("삭제하시겠습니까?")) {
            mdList.data.remove(cell.row.id);
        }
    }
})

// 윈도우 열기
function openEditor(id, tit) {
    var winTitle = tit;
    
    editWindow.show();
    editWindow.header.data.update("title", { value: winTitle }); // 윈도우 타이틀 수정
    var item = mdList.data.getItem(id);
    if (item) {
        editForm.setValue(item);
    }
}
// 윈도우 닫기
function closeEditor() {
    editForm.clear();
    editWindow.hide();
}

/*********************
 * 레이아웃 좌측 모델리스트 > 검색 조건
 *********************/
// 검색 조건 FORM
var searchOption = new dhx.Form(null, {
    css: "form-radio--cond",
    padding: "5px 10px",
    width: "100%",
    rows:[
        {
            id: "addOption",
            cols:[
                {
                    type: "radioGroup",
                    name: "radioGroup",
                    disabled: false,
                    required: false,
                    label: "",
                    labelWidth: 0,
                    labelPosition: "left",
                    options: {
                        cols: [
                            { type: "radioButton", text: "OR", value: "0", checked:true },
                            { type: "radioButton", text: "AND", value: "1" },
                            { type: "radioButton", text: "NOT", value: "2" }
                        ]
                    },
                    css: "control-comm ipt-radio"
                },
                {
                    type: "input",
                    name: "input",
                    labelPosition: "left",
                    labelWidth: 0,
                    required: true,
                    placeholder: "",
                    css:"control-comm ipt-srch"
                },
                {
                    type: "button",
                    text: "추가",
                    id: "btn-findcond",
                    css: "control-comm btn-find"
                }
            ]
        }
    ]    
});

// 검색 조건 FORM, 찾기 폼(searchOption)에서 추가 시, searchOption_list.rows{} 추가
var searchOption_list = new dhx.Form(null, {
    css: "form-radio--cond",
    padding: "5px 10px",
    width: "100%",
    rows:[
        {
            id: "optionList-1",
            cols:[
                {
                    type: "radioGroup",
                    name: "addRadio-1",
                    disabled: false,
                    required: false,
                    label: "",
                    labelWidth: 0,
                    labelPosition: "left",
                    options: {
                        cols: [
                            { type: "radioButton", text: "OR", value: "0", checked:true },
                            { type: "radioButton", text: "AND", value: "1" },
                            { type: "radioButton", text: "NOT", value: "2" }
                        ]
                    },
                    css: "control-comm ipt-radio"
                },
                {
                    type: "input",
                    name: "addIpt-1",
                    labelPosition: "left",
                    labelWidth: 0,
                    required: true,
                    placeholder: "",
                    css:"control-comm ipt-srch"
                },
                {
                    type: "button",
                    text: "삭제",
                    id: "btn-del-1",
                    css: "control-comm btn-find"
                }
            ]
        },
        {
            id: "optionList-2",
            cols:[
                {
                    type: "radioGroup",
                    name: "addRadio-2",
                    disabled: false,
                    required: false,
                    label: "",
                    labelWidth: 0,
                    labelPosition: "left",
                    options: {
                        cols: [
                            { type: "radioButton", text: "OR", value: "0", checked:true },
                            { type: "radioButton", text: "AND", value: "1" },
                            { type: "radioButton", text: "NOT", value: "2" }
                        ]
                    },
                    css: "control-comm ipt-radio"
                },
                {
                    type: "input",
                    name: "addIpt-2",
                    labelPosition: "left",
                    labelWidth: 0,
                    required: true,
                    placeholder: "",
                    css:"control-comm ipt-srch"
                },
                {
                    type: "button",
                    text: "삭제",
                    id: "btn-del-2",
                    css: "control-comm btn-find"
                }
            ]
        },
        {
            id: "optionList-3",
            cols:[
                {
                    type: "radioGroup",
                    name: "addRadio-3",
                    disabled: false,
                    required: false,
                    label: "",
                    labelWidth: 0,
                    labelPosition: "left",
                    options: {
                        cols: [
                            { type: "radioButton", text: "OR", value: "0", checked:true },
                            { type: "radioButton", text: "AND", value: "1" },
                            { type: "radioButton", text: "NOT", value: "2" }
                        ]
                    },
                    css: "control-comm ipt-radio"
                },
                {
                    type: "input",
                    name: "addIpt-3",
                    labelPosition: "left",
                    labelWidth: 0,
                    required: true,
                    placeholder: "",
                    css:"control-comm ipt-srch"
                },
                {
                    type: "button",
                    text: "삭제",
                    id: "btn-del-3",
                    css: "control-comm btn-find"
                }
            ]
        },
    ]    
});


/*********************
 * 레이아웃 우측 상품리스트
 *********************/

// 상품리스트 > 매칭, 미매칭, 품절포함, -2/-5포함 버튼 영역
var prdcGridSorting = new dhx.Form(null, {
    css: "control-comm ep-chkbox mdpage",
    width:"100%",
    height:"42px",
    align: "end",
    rows: [
        {
            id: "epSorting",
            cols:[
                {
                    type: "checkbox",
                    text: "매칭"
                },
                {
                    //클릭시 팝업
                    type: "button",
                    id: "matchingSelLayer",
                    css:"btn-gmopen"
                },
                {
                    type: "checkbox",
                    text: "미매칭"
                },
                {
                    type: "checkbox",
                    text: "품절포함",
                },
                {
                    type: "checkbox",
                    text: "-2/-5 포함",
                },
                {
                    type: "checkbox",
                    id: "minCheck",
                    name: "minCheck",
                    value: false,
                    disabled: true,
                    css: "ipt_chk"
                },
                {
                    type: "input",
                    id: "minPriceIpt",
                    name: "minPriceIpt",
                    width: "140px",
                    placeholder: "최소금액",
                    css:"min_price"
                }
            ]
        }
    ]
})
// 최소 금액 인풋 체크/언체크
prdcGridSorting.getItem("minPriceIpt").events.on("input", function(inputValue){
    var minChk = prdcGridSorting.getItem("minCheck")
    console.log(inputValue)
    if(inputValue){
        minChk.setValue(true); 
    }else{
        minChk.setValue(false); 
    }
})

/* 상품리스트 > 매칭 > 매칭 팝업 */
var popMatching = new dhx.Popup({
    css: "pop_groupMatching"
});
var popMatchingHtml = "";
    popMatchingHtml += "<div class=\"lay_gm\">";
    popMatchingHtml += "   <p class=\"tx_tit\">매칭 항목 설정</p>";
    popMatchingHtml += "   <ul>";
    popMatchingHtml += "	    <li class=\"form-chk\"><input type=\"checkbox\" id=\"matching1_1\" class=\"input--checkbox-item\" checked=\"checked\"><label for=\"matching1_1\">일반매칭</label> <em class=\"tx_cnt\">(12,000)</em></li>";
    popMatchingHtml += "	    <li class=\"form-chk\"><input type=\"checkbox\" id=\"matching1_2\" class=\"input--checkbox-item\" checked=\"checked\"><label for=\"matching1_2\">그룹(자동)매칭</label> <em class=\"tx_cnt\">(99,999)</em></li>";
    popMatchingHtml += "   <ul>";
    popMatchingHtml += "</div>";

    popMatching.attachHTML(popMatchingHtml);

    // 매칭 + 클릭
    prdcGridSorting.getItem("matchingSelLayer").events.on("click", function(e){
        popMatching.show(e.srcElement);
    })

// 상품리스트 > 상품 키워드 검색 영역
var prdcSearch = new dhx.Form(null, {
    css: "controller_ep keyword_srch",
    padding: 0,
    width: "100%",
    cols: [
        {
            id: "prdcSelect",
            name: "prdcSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "상품명",
            required: true,
            options: [
                { value: "0", content: "전체" },
                { value: "1", content: "카테고리내" }
            ],
            css: "control-comm sel-sort"
        }, 
        {
            id: "prdcOptionSelect",
            name: "prdcOptionSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "전체",
            required: true,
            options: [
                { value: "0", content: "상품명" },
                { value: "1", content: "모델번호" },
                { value: "2", content: "PLNO" },
                { value: "3", content: "상품코드" }
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "prdcIncludeSelect",
            name: "prdcIncludeSelect",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "선택",
            required: true,
            options: [
                { value: "0", content: "결과내포함" },
                { value: "1", content: "결과내제외" },
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "prdcKeywordInput",
            name: "prdcKeywordInput",
            type: "input",
            label: "",
            labelPosition: "left",
            icon: "dxi dxi-magnify",
            labelWidth: 0,
            required: true,
            placeholder: "검색어를 입력하세요.",
            css: "control-comm ipt-srch"
        },
        {
            id: "prdcKeywordSubmit",
            type: "button",
            text:"검색",
            css: "control-comm btn-srch"
        },
        {
            id: "chkSynonym",
            name: "chkSynonym",
            type: "checkbox",
            text: "동의어 포함",
            css: "control-comm ipt-checkbox"
        }
    ]
})

// 상품리스트 > 상품 검색 키워드 노출 (TABBAR)
// 키워드 추가 관련 function 하단에 있습니다.
var prdcSearchKeyword = new dhx.Tabbar(null, {
    css: "dhx_widget--bordered",
    mode: "top",
    tabAutoWidth: false,
    closable: true,
    noContent: true,
    /* views: [
        { tab: "-제외키워드", id:"keyword-1" },
        { tab: "-제외키워드", id:"keyword-2" },
        { tab: "+포함키워드", id:"keyword-3" },
    ], */
    css: "prdcSearchKeyword_list"
});

// 상품리스트 > 상품 그리드 전체선택, 매칭, 매칭해제 버튼 영역
var prdcGridBtn = new dhx.Form(null, {
    css: "controller_sort",
    padding: 0,
    width: "100%",
    height:"42px",
    cols: [
        {
            type: "button",
            text: "전체선택",
            id: "btnAllchk",
            align:"left",
            size: "small",
            css: "control-comm btn-cond btn-all"
        },
        {
            type: "button",
            text: "매칭",
            id: "btnMatch",
            align:"left",
            size: "small",
            css: "control-comm btn-cond btn-matching"
        },
        {
            type: "button",
            text: "매칭해제",
            id: "btnMatchDis",
            align:"left",
            size: "small",
            css: "control-comm btn-cond"
        },
        {
            type: "button",
            text: "-2/-5 포함",
            id: "btnCodeInc",
            align:"left",
            size: "small",
            css: "control-comm btn-cond"
        },
        {
            type: "button",
            text: "분할",
            id: "btnDivision",
            align:"left",
            size: "small",
            css: "control-comm btn-cond"
        }
    ]
})


/*********************************
 * 전체 레이아웃 생성
*********************************/
var config = {
    type: "line", // space, wide, line
    width:"100%",
    maxWidth:"100%",

    // 그리드 컨텐츠 
    rows:[
        {
            type:"space",
            id: "gridContent",
            rows: [
                {
                    type: "line",
                    id: "userFinder",
                    width:"100%",
                    height: "38px"
                },
                {
                    cols: [
                        {
                            // 모델목록 (좌측)
                            type: "line",
                            id: "mdList",
                            headerHeight:32,
                            header: "모델 (n건)",
                            collapsable: true,
                            htmlEnable: true,
                            resizable: true,
                            customScroll: true,
                            rows : [
                                {
                                    id:"modelListBox",
                                    cols: [
                                        {
                                            rows: [
                                                {
                                                    // 모델 조회 (필터)
                                                    id: "mdOptionFilter",
                                                    height: "40px"
                                                },
                                                {
                                                    // 모델 키워드 검색
                                                    width:"100%",
                                                    height:"42px",
                                                    cols: [
                                                        {
                                                            // 모델 검색 영역
                                                            id:"mdSearch",
                                                            width:"100%",
                                                        }
                                                    ]
                                                },
                                                {
                                                    height: "42px",
                                                    cols: [
                                                        {
                                                            id: "mdControl",
                                                            width: "285px"
                                                        },
                                                        {
                                                            // 모델 키워드 영역
                                                            id:"mdSearchKeyword",
                                                            width:"calc(100% - 285px)",
                                                        }
                                                    ]
                                                },
                                                {
                                                    rows:[
                                                        {
                                                            // 모델목록 GRID
                                                            id: "mdGrid",
                                                            width:"100%",
                                                            height:"calc(100% - 42px)"
                                                        },
                                                        {
                                                            // 모델목록 페이징 영역
                                                            id:"mdPaging",
                                                            height:"42px"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    // 검색 조건 영역
                                    headerHeight:32,
                                    header: "검색 조건",
                                    collapsable: true,
                                    collapsed: true,
                                    height:"220px",
                                    cols:[
                                        {
                                            // 검색 조건 COL
                                            width:"100%",
                                            rows: [
                                                {
                                                    // 검색 조건 추가
                                                    id: "searchOption",
                                                    height:"40px"
                                                },
                                                {
                                                    // 검색 조건 목록 : FORM 위젯
                                                    id: "searchOption_list"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            // 상품목록 (우측)
                            type: "line",
                            id: "prdcList",
                            headerHeight:32,
                            header: "상품 (n건)",
                            collapsable: true,
                            htmlEnable: true,
                            resizable: true,
                            customScroll: true,
                            rows:[
                                {
                                    // 상품 필터 ROW : 매칭 미매칭 품절 -2/-5 체크박스
                                    id: "prdcGridSorting",
                                    width:"100%",
                                    height:"42px",
                                },
                                {
                                    // 상품 ROW : 검색&키워드
                                    width:"100%",
                                    height:"42px",
                                    cols: [
                                        {
                                            // 상품 > 검색 영역
                                            id:"prdcSearch",
                                            width:"625px",
                                        },
                                        {
                                            // 상품 > 키워드 영역
                                            id:"prdcSearchKeyword",
                                            width:"calc(100% - 625px)",
                                        }
                                    ]
                                },
                                {
                                    // 상품 > 정보
                                    id:"epProductInfo",
                                    html: productInfo,
                                    height:"82px"
                                },
                                {
                                    // 상품 > 버튼 컨트롤
                                    align: "between",
                                    height:"42px",
                                    cols: [
                                        {
                                            // 상품 > 전체선택,매칭,매칭해제,-2/-5, 분할
                                            id: "prdcGridBtn",
                                            width:"354px",
                                        },
                                        {
                                            // 상품 > 뷰타입 버튼
                                            width:"72px",
                                            html: viewTypeChange
                                        }
                                    ]
                                },
                                {
                                    // EP상품 ROW : 정보
                                    id:"epPrdcList",
                                    resizable:true, 
                                    cols:[
                                        {
                                            // EP상품 COL : 그리드&리스트 뷰
                                            id:"epGridBox",
                                            header:"",
                                            width:"100%",
                                            height:"100%",

                                            rows:[
                                                {
                                                    // EP 상품 그리드&리스트 목록 컨테이너
                                                    id:"prdcViewCont",
                                                    height:"calc(100% - 78px)"
                                                },
                                                {
                                                    // 선택 상품명 표시
                                                    id:"modelNameBox",
                                                    html: modelNameBox,
                                                    height:"36px"
                                                },
                                                {
                                                    // 미매칭 페이징 영역
                                                    id:"matchPaging",
                                                    height:"42px"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                        },
                    ]
                }
            ]
        }
    ]
};


// 레이아웃 구성
export var contentLayout = new dhx.Layout("contents", config);

    // 상단 > 일정 및 담당자 선택
    contentLayout.getCell("userFinder").attach(userFinder)

    // 모델리스트 
    contentLayout.getCell("mdOptionFilter").attach(mdOptionFilter) // > 검색 필터 영역
    contentLayout.getCell("mdSearch").attach(mdSearch) // > 검색 영역
    contentLayout.getCell("mdSearchKeyword").attach(mdSearchKeyword); // > 검색 영역 우측 키워드 표시
    contentLayout.getCell("mdControl").attach(mdControl) // > 버튼 영역
    
    // GRID 세팅
    contentLayout.getCell("mdGrid").attach(mdList); // 모델리스트 GRID
    contentLayout.getCell("mdPaging").attach(mdGridPaging); // EP상품 페이징 (그리드)

    contentLayout.getCell("searchOption").attach(searchOption); // 검색 조건 추가 FORM
    contentLayout.getCell("searchOption_list").attach(searchOption_list); // 검색 조건 목록 FORM
    
    contentLayout.getCell("matchPaging").attach(matchGridPaging); // EP상품 페이징 (그리드)

    contentLayout.getCell("prdcSearch").attach(prdcSearch); // EP 통합검색 : 검색 영역
    contentLayout.getCell("prdcSearchKeyword").attach(prdcSearchKeyword); // EP 통합검색 : 키워드 영역

    contentLayout.getCell("prdcGridBtn").attach(prdcGridBtn); // EP 버튼 좌측 : 전체선택, 매칭, 0(제외)
    contentLayout.getCell("prdcGridSorting").attach(prdcGridSorting); // EP 버튼 우측 : 전체선택, 미매칭보기, 매칭보기

    contentLayout.getCell("prdcViewCont").attach(prdcViewCont); // EP 상품 그리드&리스트 목록 컨테이너

    // EP상품 뷰타입 attach 합니다.
    prdcViewCont.getCell("gridTypeList").attach(prdcList); // EP상품 뷰타입 컨테이너 > 그리드뷰 노출
    prdcViewCont.getCell("imageTypeList").attach(imageTypeList); // EP상품 뷰타입 컨테이너 > 이미지뷰 노출

    
/********************************* 
 * 모델리스트 > 모델 검색 키워드 추가 기능입니다.
*********************************/
    // 모델 폼 위젯 이벤트 : 참고(https://docs.dhtmlx.com/suite/form/api/input/input_change_event/)
    // api 참고하여 적절하게 사용해주세요
    var mdKeywordSt = 0; // 모델 검색(0:결과내포함, 1:결과내제외) select name : mdIncludeSelect
    mdSearch.getItem("mdIncludeSelect").events.on("change", function(val){
        mdKeywordSt = val; // 셀렉트 선택한 값
    })
    $(function(){
        $("#mdKeywordInput").keyup(function(e){
            if(e.key === 'Enter' || e.keyCode === 13){
                mdKeywordSubmit();
            }
        })

        // 추가된 키워드 클릭(활성/비활성 토글)
        $(".mdSearchKeyword_list").on("click", ".dhx_tabbar-tab", function(e){
            if(!$(this).hasClass("is-disabled")){ // 비활성
                $(this).addClass("is-disabled");
            }else{ // 활성
                $(this).removeClass("is-disabled");
            }
        })
    })
    mdSearch.getItem("mdKeywordSubmit").events.on("click", function(e) {
        mdKeywordSubmit();
    })
    function mdKeywordSubmit(){ // 검색 키워드 서브밋
        var srchVal = mdSearch.getItem("mdKeywordInput").getValue();
        if(srchVal != ""){
            if(mdKeywordSt == 0){
                modelAddKeyword("+"+srchVal); // 결과내포함
            }else if(mdKeywordSt == 1){
                modelAddKeyword("-"+srchVal); // 결과내제외
            }
        }else{
            mdSearch.getItem("mdKeywordInput").focus(); // 포커싱
        }
        mdSearch.getItem("mdKeywordInput").clear(); // 검색 후 초기화
    }
    // EP상품 키워드 추가
    function modelAddKeyword(keyword) { 
        mdSearchKeyword.addTab({ tab: keyword }, -1); // 뒤로 추가(-1), 앞으로 추가(0)

        mdSearch.getItem("mdKeywordInput").focus(); // 포커싱
    };

/********************************* 
 * 모델리스트 > 선택한 상품명 상품리스트 검색 input에 표시됩니다.
*********************************/
    // 모델리스트 그리드 선택한 마지막 값 넣어주기
    mdList.selection.events.on("afterSelect", function(row, col){
        prdcSearch.getItem("prdcKeywordInput").setValue(row.md_name)
    });

/********************************* 
 * 상품리스트 > 그리드/리스트(이미지뷰) 선택한 상품명 표시입니다.
*********************************/
    // 매칭 그리드 선택한 마지막 값 넣어주기
    prdcList.selection.events.on("afterSelect", function(row, col){
        $("#modelNameIn").val(row.prdc_name);
    });
    // 매칭 리스트(이미지뷰) 선택한 마지막 값 넣어주기
    imageTypeList.selection.events.on("afterSelect", function(row){
        var col = imageTypeList.selection.getItem(); // 선택한 상품명

        $("#modelNameIn").val(col[col.length-1].prdc_name);
    });

/********************************* 
 * 상품리스트 > 검색 키워드 추가 기능입니다.
*********************************/
    var prdcKeywordSt = 0; // 셀렉트 초기값
    prdcSearch.getItem("prdcIncludeSelect").events.on("change", function(val){
        prdcKeywordSt = val; // 셀렉트 선택한 값 
    })
    $(function(){
        $("#prdcKeywordInput").keyup(function(e){
            if(e.key === 'Enter' || e.keyCode === 13){
                prdcKeywordSubmit();
            }
        })

        // 추가된 키워드 클릭(활성/비활성 토글)
        $(".prdcSearchKeyword_list").on("click", ".dhx_tabbar-tab", function(e){
            if(!$(this).hasClass("is-disabled")){ // 비활성
                $(this).addClass("is-disabled");
            }else{ // 활성
                $(this).removeClass("is-disabled");
            }
        })
    })
    prdcSearch.getItem("prdcKeywordSubmit").events.on("click", function(e) {
        prdcKeywordSubmit();
    })
    function prdcKeywordSubmit(){ // 검색 키워드 서브밋
        var srchVal = prdcSearch.getItem("prdcKeywordInput").getValue();
        if(srchVal != ""){
            if(prdcKeywordSt == 0){
                prdcAddKeyword("+"+srchVal); // 결과내포함
            }else if(prdcKeywordSt == 1){
                prdcAddKeyword("-"+srchVal); // 결과내제외
            }
        }else{
            prdcSearch.getItem("prdcKeywordInput").focus(); // 포커싱
        }
        prdcSearch.getItem("prdcKeywordInput").clear(); // 검색 후 초기화
    }
    // EP상품 키워드 추가
    function prdcAddKeyword(keyword) { 
        prdcSearchKeyword.addTab({ tab: keyword }, -1); // 뒤로 추가(-1), 앞으로 추가(0)

        prdcSearch.getItem("prdcKeywordInput").focus(); // 포커싱
    };

/********************************* 
 * 참고 : 기매칭 클릭, 모델/상품리스트 펼쳐짐 (width set은 불가합니다.)
*********************************/
mdControl.getItem("btnOriginMatching").events.on("click", function(e){
    contentLayout.cell('prdcList').expand()
})

/*********************************
 * 페이지 로딩 후 실행됩니다.
 * - 로딩 스피너
 * - 레이어 오픈, 팝업 오픈 등
*********************************/
$(function(){
    // 로그인 로딩
    $(".btn_login").on("click", function(){
        $(".loader_box").fadeIn()
        setTimeout(function(){
            $(".loader_box").fadeOut();

            $(".login__wrap").fadeOut();
        },2000)
        return false;
    })
    // EP상품 매칭 레이어 오픈
    $("#btnMatch").on("click", function(){
        var layer = $("#newPropertyAdd");
        layer.fadeIn(200);
    });

    // EP상품 HOVER 썸네일 APPEND
    var hoverImg = $("#prdcThumb > img");

    hoverImg.on("mouseenter", function(){ 
        var imgPosTop = $(this).offset().top; // 이미지 TOP 
        var imgPosLeft = $(this).offset().left+52; // 이미지 LEFT
        var imgSrc = $(this).attr("src"); // 이미지 SRC

        $("body").append("<div class=\"lay_thumb\" style=\"top:"+imgPosTop+"px;left:"+imgPosLeft+"px\"><img src=\""+imgSrc+"\" alt=\"\" /></div>")
        setTimeout(function(){
            $(".lay_thumb").addClass("is-animated");
        }, 500)
    }).on("mouseleave", function(){
        $(".lay_thumb").removeClass("is-animated");
        setTimeout(function(){
            $("body .lay_thumb").detach();
        }, 300)
    })

    // EP상품 옵션 전체보기
    var btnOptionAll = $("#btnOptionAll");
    
    $(document).on("click", "#btnOptionAll", function(){
        var _this = $(this);
        var posTop = _this.offset().top+20; // 레이어 위치 TOP 
        var posLeft = _this.offset().left; // 레이어 위치 LEFT

        if(!_this.hasClass("on")){
            _this.addClass("on");
            btnOptionAll.text("닫기");
    
            var optionHtml = '';
            optionHtml += "<div id=\"layEpOption\" class=\"lay_option\" style=\"top:"+posTop+"px;left:"+posLeft+"px\">";
            optionHtml += "    <span>바디클렌저</span>";
            optionHtml += "    <span>모든피부</span>";
            optionHtml += "    <span>펌프형</span>";
            optionHtml += "    <span>수분공급</span>";
            optionHtml += "    <span>주요성분:체리블라썸,코튼플라워,트로피컬패션,문라이트릴리</span>";
            optionHtml += "    <span>900ml</span>";
            optionHtml += "</div>";
            $("body").append(optionHtml);
        }else{
            _this.removeClass("on");
            btnOptionAll.text("전체보기");
            $("body #layEpOption").detach();
        }
    })
    
    // 매칭 단축키(F6)
    $(window).on("keydown",function(e){
        var key = e.key;
        if(key == "F6"){
            event.keyCode = 0;
            event.cancelBubble = true;
            event.returnValue = false;

            $("#btnMatch").trigger("click");
            return false;
        }
    })

    // EP 그리드/이미지 뷰타입 변경 
    $(document).on("click",".btn_type", function(){
        var _type = $(this).data("viewtype");
        
        $(this).addClass("is-on").siblings().removeClass("is-on");
        prdcViewCont.setActive(_type);

        if(_type === "gridTypeList"){
            contentLayout.getCell("matchPaging").attach(matchGridPaging); // EP상품 페이징 그리드타입
        }else if(_type === "imageTypeList"){
            contentLayout.getCell("matchPaging").attach(matchImgPaging); // EP상품 페이징 이미지타입
        }        
    })

    /*********************
 * 레이아웃 그리드 셀 노출/미노출 
 *********************/
// 모델리스트 > 테이블 헤더 우클릭 -> 필드 노출/미노출
var mdGridField = new dhx.Popup({
    css: "pop_headecell-sort"
});
var mdGridFieldListPop = "";

    mdGridFieldListPop += "<div id=\"mdFieldList\">";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_count\" name=\"mdFieldCustom\" checked='checked'>번호</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_catecode\" name=\"mdFieldCustom\" checked='checked'>카테코드</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_image\" name=\"mdFieldCustom\" checked='checked'>이미지</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_comp\" name=\"mdFieldCustom\" checked='checked'>제조사</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_brand\" name='mdFieldCustom' checked='checked'>브랜드</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_name\" name='mdFieldCustom' checked='checked'>모델명</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_group\" name='mdFieldCustom' checked='checked'>그룹조건명</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_group_st\" name='mdFieldCustom' checked='checked'>그룹여부</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_matching\" name='mdFieldCustom' checked='checked'>매칭수</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_resist\" name='mdFieldCustom' checked='checked'>등록일</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_img\" name=\"mdFieldCustom\" checked=\"checked\">IMG</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_sold\" name=\"mdFieldCustom\" checked=\"checked\">단종</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_front\" name=\"mdFieldCustom\" checked=\"checked\">작</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_property\" name=\"mdFieldCustom\" checked=\"checked\">속성</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_cmnum\" name=\"mdFieldCustom\" checked=\"checked\">담</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_expected\" name=\"mdFieldCustom\" checked=\"checked\">예정</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_volume\" name=\"mdFieldCustom\" checked=\"checked\">용량</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_quantity\" name=\"mdFieldCustom\" checked=\"checked\">수량</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_exchange\" name=\"mdFieldCustom\" checked=\"checked\">환산</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_unit\" name=\"mdFieldCustom\" checked=\"checked\">단위<label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_qna\" name=\"mdFieldCustom\" checked=\"checked\">문의</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_review\" name=\"mdFieldCustom\" checked=\"checked\">상품평</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_ingredient\" name=\"mdFieldCustom\" checked=\"checked\">성분</label>";
    mdGridFieldListPop += "	    <label><input type=\"checkbox\" id=\"md_color\" name=\"mdFieldCustom\" checked=\"checked\">색상<label>";
    mdGridFieldListPop += "</div>";

    mdGridField.attachHTML(mdGridFieldListPop);
    const mdConfig = {
        centering: true,
        mode: "bottom",
        indent: 0
    };
    mdList.events.on("headerCellRightClick", function(col, e){
        e.preventDefault();
        mdGridField.show(e.srcElement, mdConfig);
    })

    // 숨길 필드 클릭
    $(document).on("click", "input[name='mdFieldCustom']", function(){
        var field = $(this).attr("id");
        mdFieldCustomFunc(field)
    })
    function mdFieldCustomFunc(item) {
        if(!$("#"+item).is(":checked")){
            mdList.hideColumn(item)
        }else{
            mdList.showColumn(item)
        }
    }
    

// 상품리스트 > 테이블 헤더 우클릭 -> 필드 노출/미노출
var prdcGridField = new dhx.Popup({
    css: "pop_headecell-sort"
});
var prdcGridFieldPop = "";

    prdcGridFieldPop += "<div id=\"prdcFieldList\">";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_image\" name=\"prdcFieldCustom\" checked='checked'>이미지</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_mall\" name=\"prdcFieldCustom\" checked='checked'>쇼핑몰</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_price\" name=\"prdcFieldCustom\" checked='checked'>가격</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_pricem\" name=\"prdcFieldCustom\" checked='checked'>M가격</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_name\" name='prdcFieldCustom' checked='checked'>상품명</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_brand\" name='prdcFieldCustom' checked='checked'>브랜드</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_mdnum\" name='prdcFieldCustom' checked='checked'>모델번호</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_option\" name='prdcFieldCustom' checked='checked'>옵션</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_srchdate\" name='prdcFieldCustom' checked='checked'>검색일</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_noti\" name='prdcFieldCustom' checked='checked'>비고</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_direction\" name='prdcFieldCustom' checked='checked'>좌우</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_sold\" name=\"prdcFieldCustom\" checked=\"checked\">단종</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_keep\" name=\"prdcFieldCustom\" checked=\"checked\">보관</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_delivery\" name=\"prdcFieldCustom\" checked=\"checked\">배송비</label>";
    prdcGridFieldPop += "	<label><input type=\"checkbox\" id=\"prdc_lastdate\" name=\"prdcFieldCustom\" checked=\"checked\">최초수집일</label>";
    prdcGridFieldPop += "</div>";
    prdcGridField.attachHTML(prdcGridFieldPop);
    const pconfig = {
        centering: true,
        mode: "bottom",
        indent: 0
    };
    prdcList.events.on("headerCellRightClick", function(col, e){
        e.preventDefault();
        prdcGridField.show(e.srcElement, pconfig);
    })

    // 숨길 필드 클릭
    $(document).on("click", "input[name='prdcFieldCustom']", function(){
        var field = $(this).attr("id");
        prdcFieldCustomFunc(field)
    })
    function prdcFieldCustomFunc(item) {
        if(!$("#"+item).is(":checked")){
            prdcList.hideColumn(item)
        }else{
            prdcList.showColumn(item)
        }
    }
})

