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

// 제조사 가짜 데이터
var mdList_data = [
    {"gcol2": "12,345,678","gcol3": "15010101","gcol3": "이미지","gcol4":"솔가","gcol5":"솔가","gcol6":"비타민 D3 5000IU 240정","gcol7":"1개","gcol8":"대표","gcol9":"5","gcol10":"2022-01-24","gcol11":"1","gcol12":"1","gcol13":"1","gcol14":"1","gcol15":"","gcol6":"0","gcol17":"","gcol18":"","gcol19":"","gcol20":"","gcol21":"",},
]
// 그리드3 넘버링
var mdListNum = mdList_data.length;
for(var i = 0; i < mdListNum; i++) {
    var row = mdList_data[i];
    row.idx = i+1;
}
// 브랜드 가짜 데이터
var grid2_data = [
    {"gcol1": "미쟝센","gcol2": "157","gcol3": "76","gcol4": "미쟝센","gcol5": "157","gcol6": "76","gcol7": "미쟝센","gcol8": "157","gcol9": "76"}, 
    {"gcol1": "려","gcol2": "121","gcol3": "127"}, 
    {"gcol1": "댄트롤","gcol2": "100","gcol3": "16"}, 
    {"gcol1": "이니스프리","gcol2": "81","gcol3": "22"}, 
    {"gcol1": "비타민","gcol2": "55","gcol3": "2"}, 
    {"gcol1": "아모레퍼시픽","gcol2": "1","gcol3": "20"}, 
    {"gcol1": "프레시팝","gcol2": "3","gcol3": "23"}, 
    {"gcol1": "프리메라","gcol2": "234","gcol3": "5"}, 
    {"gcol1": "아리따움","gcol2": "157","gcol3": "1"}, 
    {"gcol1": "해피바스","gcol2": "121","gcol3": "4"}, 
    {"gcol1": "에뛰드하우스","gcol2": "100","gcol3": "5"}, 
]
// 원부 가짜 데이터
var grid3_data = [
    {"gco3_img": "","gco3_name":"[미생성 원부]","gco3_cnt": "157", "nmaking": true},
    {"gco3_img": "http://image.enuri.info/webimage_300/9533000000/9533000000/9533002157.jpg","gco3_name":"스칼프 케어 샴푸","gco3_cnt": "157"},
    {"gco3_img": "http://image.enuri.info/webimage_300/3828500000/3828590000/3828594408.jpg","gco3_name":"데미지 케어 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","gco3_name":"스칼프 케어 그린티 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7621000000/7621070000/7621079541.jpg","gco3_name":"퍼펙트 세럼 샴푸 오리지널","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","gco3_name":"퍼펙트 세럼 스타일링 샴푸","gco3_cnt": "55", "similarMd": true},
    {"gco3_img": "http://image.enuri.info/webimage_300/5431700000/5431780000/5431780716.jpg","gco3_name":"퍼펙트 세럼 샴푸 슈퍼리치","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/6972900000/6972910000/6972913054.jpg","gco3_name":"에이징케어 파워베리 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9622000000/9622040000/9622045486.jpg","gco3_name":"데미지 케어 로즈프로틴 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10462800000/10462880000/10462886671.jpg","gco3_name":"헤어테라미 모이스처 샴푸","gco3_cnt": "157"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8201800000/8201840000/8201848704.jpg","gco3_name":"퍼펙트 세럼 미셀라 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8286700000/8286770000/8286776059.jpg","gco3_name":"체리블라썸 퍼퓸샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","gco3_name":"화이트머스크 퍼퓸샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8897300000/8897330000/8897330949.jpg","gco3_name":"살롱 플러스 클리닉 10 손상모발","gco3_cnt": "55", "similarMd": true},
    {"gco3_img": "http://image.enuri.info/webimage_300/9163500000/9163540000/9163540716.jpg","gco3_name":"페어앤프리지아 퍼퓸 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8985500000/8985570000/8985572647.jpg","gco3_name":"살롱 플러스 클리닉 10 극손상모발용 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10228500000/10228590000/10228593298","gco3_name":"슈퍼 보태니컬 리페어 릴렉싱 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9366900000/9366930000/9366936493.jpg","gco3_name":"에이징케어 콜라겐 샴푸","gco3_cnt": "157"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8355800000/8355870000/8355870293.jpg","gco3_name":"그린데이지 퍼퓸 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10631200000/10631210000/10631219526.jpg","gco3_name":"스무스&실키 모이스처 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4688700000/4688790000/4688791914","gco3_name":"헤어테라피 샤이닝 모이스처 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8840900000/8840910000/8840910396.jpg","gco3_name":"살롱 플러스 클리닉 10 건조모발용 샴푸","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8473500000/8473500000/8473503520.jpg","gco3_name":"리본드 프로틴 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7163400000/7163480000/7163484250.jpg","gco3_name":"5.5 프로틴 약산성 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7631200000/7631230000/7631230907","gco3_name":"풀&글래머러스 볼륨 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/2229100000/2229130000/2229132621.jpg","gco3_name":"안티에이징 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8939500000/8939580000/8939583209.jpg","gco3_name":"5.5 콜라겐 약산성 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5358600000/5358650000/5358653398.jpg","gco3_name":"아로마 에센셜 릴랙싱 샴푸 로터스&라벤더","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5455800000/5455800000/5455807674","gco3_name":"헬시&스트롱 리페어 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4572900000/4572930000/4572935120.jpg","gco3_name":"데미지 케어 케라틴 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10229500000/10229550000/10229555748.jpg","gco3_name":"펄 샤이닝 모이스처 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5038100000/5038120000/5038125404.jpg","gco3_name":"아로마 에센셜 리프레싱 샴푸 오렌지플라워&베르가못","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/2531200000/2531240000/2531245239.jpg","gco3_name":"퍼펙트 리페어 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5037900000/5037950000/5037950877.jpg","gco3_name":"아로마 에센셜리바이탈라이징 샴푸 자스민&로즈마리","gco3_cnt": "55"},
    {"gco3_img": "http://photo3.enuri.info/data/images/service/img_300/11357000/11357074.jpg","gco3_name":"쿨링 케어 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/6580800000/6580870000/6580871736.jpg","gco3_name":"데미지 케어 샴푸 일회용","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4371900000/4371910000/4371913345.jpg","gco3_name":"슈퍼 보태니컬 모이스처&리프레쉬 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7651600000/7651640000/7651646859.jpg","gco3_name":"슈퍼 보태니컬 볼륨 리바이탈라이징 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://photo3.enuri.info/data/images/service/img_300/11164000/11164870.jpg","gco3_name":"샤이닝 케어 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/3864600000/3864610000/3864616559.jpg","gco3_name":"슈퍼 보태니컬 볼륨&리바이탈라이징 500ml 샴푸2+린스","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4420700000/4420700000/4420708294.jpg","gco3_name":"스칼프 케어 마일드 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5619200000/5619250000/5619250929.jpg","gco3_name":"스파클링 선샤인 퍼퓸샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/6610600000/6610640000/6610646969.jpg","gco3_name":"시어버터 5% 화이트머스크 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/3828500000/3828590000/3828594408.jpg","gco3_name":"데미지 케어 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","gco3_name":"스칼프 케어 그린티 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7621000000/7621070000/7621079541.jpg","gco3_name":"퍼펙트 세럼 샴푸 오리지널","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","gco3_name":"퍼펙트 세럼 스타일링 샴푸","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5431700000/5431780000/5431780716.jpg","gco3_name":"퍼펙트 세럼 샴푸 슈퍼리치","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/6972900000/6972910000/6972913054.jpg","gco3_name":"에이징케어 파워베리 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9622000000/9622040000/9622045486.jpg","gco3_name":"데미지 케어 로즈프로틴 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10462800000/10462880000/10462886671.jpg","gco3_name":"헤어테라미 모이스처 샴푸","gco3_cnt": "157"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8201800000/8201840000/8201848704.jpg","gco3_name":"퍼펙트 세럼 미셀라 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8286700000/8286770000/8286776059.jpg","gco3_name":"체리블라썸 퍼퓸샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","gco3_name":"화이트머스크 퍼퓸샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8897300000/8897330000/8897330949.jpg","gco3_name":"살롱 플러스 클리닉 10 손상모발","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9163500000/9163540000/9163540716.jpg","gco3_name":"페어앤프리지아 퍼퓸 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8985500000/8985570000/8985572647.jpg","gco3_name":"살롱 플러스 클리닉 10 극손상모발용 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10228500000/10228590000/10228593298","gco3_name":"슈퍼 보태니컬 리페어 릴렉싱 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9366900000/9366930000/9366936493.jpg","gco3_name":"에이징케어 콜라겐 샴푸","gco3_cnt": "157"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8355800000/8355870000/8355870293.jpg","gco3_name":"그린데이지 퍼퓸 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10631200000/10631210000/10631219526.jpg","gco3_name":"스무스&실키 모이스처 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4688700000/4688790000/4688791914","gco3_name":"헤어테라피 샤이닝 모이스처 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8840900000/8840910000/8840910396.jpg","gco3_name":"살롱 플러스 클리닉 10 건조모발용 샴푸","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8473500000/8473500000/8473503520.jpg","gco3_name":"리본드 프로틴 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7163400000/7163480000/7163484250.jpg","gco3_name":"5.5 프로틴 약산성 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7631200000/7631230000/7631230907","gco3_name":"풀&글래머러스 볼륨 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/2229100000/2229130000/2229132621.jpg","gco3_name":"안티에이징 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8939500000/8939580000/8939583209.jpg","gco3_name":"5.5 콜라겐 약산성 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5358600000/5358650000/5358653398.jpg","gco3_name":"아로마 에센셜 릴랙싱 샴푸 로터스&라벤더","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5455800000/5455800000/5455807674","gco3_name":"헬시&스트롱 리페어 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4572900000/4572930000/4572935120.jpg","gco3_name":"데미지 케어 케라틴 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10229500000/10229550000/10229555748.jpg","gco3_name":"펄 샤이닝 모이스처 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5038100000/5038120000/5038125404.jpg","gco3_name":"아로마 에센셜 리프레싱 샴푸 오렌지플라워&베르가못","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/2531200000/2531240000/2531245239.jpg","gco3_name":"퍼펙트 리페어 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5037900000/5037950000/5037950877.jpg","gco3_name":"아로마 에센셜리바이탈라이징 샴푸 자스민&로즈마리","gco3_cnt": "55"},
    {"gco3_img": "http://photo3.enuri.info/data/images/service/img_300/11357000/11357074.jpg","gco3_name":"쿨링 케어 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/6580800000/6580870000/6580871736.jpg","gco3_name":"데미지 케어 샴푸 일회용","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4371900000/4371910000/4371913345.jpg","gco3_name":"슈퍼 보태니컬 모이스처&리프레쉬 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7651600000/7651640000/7651646859.jpg","gco3_name":"슈퍼 보태니컬 볼륨 리바이탈라이징 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://photo3.enuri.info/data/images/service/img_300/11164000/11164870.jpg","gco3_name":"샤이닝 케어 샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/3864600000/3864610000/3864616559.jpg","gco3_name":"슈퍼 보태니컬 볼륨&리바이탈라이징 500ml 샴푸2+린스","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4420700000/4420700000/4420708294.jpg","gco3_name":"스칼프 케어 마일드 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5619200000/5619250000/5619250929.jpg","gco3_name":"스파클링 선샤인 퍼퓸샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/6610600000/6610640000/6610646969.jpg","gco3_name":"시어버터 5% 화이트머스크 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/3828500000/3828590000/3828594408.jpg","gco3_name":"데미지 케어 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg","gco3_name":"스칼프 케어 그린티 샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7621000000/7621070000/7621079541.jpg","gco3_name":"퍼펙트 세럼 샴푸 오리지널","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg","gco3_name":"퍼펙트 세럼 스타일링 샴푸","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/5431700000/5431780000/5431780716.jpg","gco3_name":"퍼펙트 세럼 샴푸 슈퍼리치","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/6972900000/6972910000/6972913054.jpg","gco3_name":"에이징케어 파워베리 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9622000000/9622040000/9622045486.jpg","gco3_name":"데미지 케어 로즈프로틴 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10462800000/10462880000/10462886671.jpg","gco3_name":"헤어테라미 모이스처 샴푸","gco3_cnt": "157"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8201800000/8201840000/8201848704.jpg","gco3_name":"퍼펙트 세럼 미셀라 샴푸","gco3_cnt": "121"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8286700000/8286770000/8286776059.jpg","gco3_name":"체리블라썸 퍼퓸샴푸","gco3_cnt": "100"},
    {"gco3_img": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276","gco3_name":"화이트머스크 퍼퓸샴푸","gco3_cnt": "81"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8897300000/8897330000/8897330949.jpg","gco3_name":"살롱 플러스 클리닉 10 손상모발","gco3_cnt": "55"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9163500000/9163540000/9163540716.jpg","gco3_name":"페어앤프리지아 퍼퓸 샴푸","gco3_cnt": "1"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8985500000/8985570000/8985572647.jpg","gco3_name":"살롱 플러스 클리닉 10 극손상모발용 샴푸","gco3_cnt": "3"},
    {"gco3_img": "http://image.enuri.info/webimage_300/10228500000/10228590000/10228593298","gco3_name":"슈퍼 보태니컬 리페어 릴렉싱 샴푸","gco3_cnt": "234"},
    {"gco3_img": "http://image.enuri.info/webimage_300/9366900000/9366930000/9366936493.jpg","gco3_name":"에이징케어 콜라겐 샴푸","gco3_cnt": "157"},
    {"gco3_img": "http://image.enuri.info/webimage_300/8355800000/8355870000/8355870293.jpg","gco3_name":"그린데이지 퍼퓸 샴푸","gco3_cnt": "121"},
];
// 그리드3 넘버링
var grid3len = grid3_data.length;
for(var i = 0; i < grid3len; i++) {
    var row = grid3_data[i];
    row.idx = i+1;
}
// 조건 가짜 데이터
var grid4_data = [
    {"gcol1": "1L","gcol2": "1개","gcol3": "0"}, 
    {"gcol1": "1L","gcol2": "2개","gcol3": "0"}, 
    {"gcol1": "1L","gcol2": "3개","gcol3": "0"}, 
    {"gcol1": "1L","gcol2": "4개","gcol3": "0"}, 
    {"gcol1": "1L","gcol2": "5개","gcol3": "0"}, 
    {"gcol1": "1L","gcol2": "6개","gcol3": "0"}, 
    {"gcol1": "1L","gcol2": "7개","gcol3": "0"}, 
    {"gcol1": "1L","gcol2": "481개","gcol3": "0"}, 
    {"gcol1": "530ml","gcol2": "1개","gcol3": "0"}, 
    {"gcol1": "530ml","gcol2": "2개","gcol3": "0"}, 
    {"gcol1": "530ml","gcol2": "3개","gcol3": "0"}, 
    {"gcol1": "530ml","gcol2": "12개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "1개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "2개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "3개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "4개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "5개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "6개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "7개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "8개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "9개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "10개","gcol3": "0"}, 
    {"gcol1": "680ml","gcol2": "12개","gcol3": "0"}, 

]
// 가격리스트(EP) 가짜 데이터
var eslist = [
    {"pl_no": 9125260161, "imgurl": "http://image.enuri.info/webimage_300/9533000000/9533000000/9533002157.jpg", "shopname": "쇼핑몰명 노출", "goodsnm": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "1,238,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=4828080850&coupon_srl=2728990", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 9125370004, "imgurl": "http://image.enuri.info/webimage_300/3828500000/3828590000/3828594408.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "234,238,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=5025867878&coupon_srl=2728990", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8506035857, "imgurl": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "239,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=2046241393&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7716796560, "imgurl": "http://image.enuri.info/webimage_300/7621000000/7621070000/7621079541.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=1957914737&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": true},
    {"pl_no": 7972212437, "imgurl": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg", "shopname": "쇼핑몰명", "goodsnm": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,210", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.g9.co.kr/Display/VIP/Index/1957914737?jaehuid=200006435", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7719433575, "imgurl": "http://image.enuri.info/webimage_300/5431700000/5431780000/5431780716.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4505627456&lptag=P4505627456&itemId=5414295739&vendorItemId=72736989083", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/6972900000/6972910000/6972913054.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/9622000000/9622040000/9622045486.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/10462800000/10462880000/10462886671.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/8201800000/8201840000/8201848704.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/8286700000/8286770000/8286776059.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/8897300000/8897330000/8897330949.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/9163500000/9163540000/9163540716.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/8985500000/8985570000/8985572647.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/10228500000/10228590000/10228593298", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/9366900000/9366930000/9366936493.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/8355800000/8355870000/8355870293.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/10631200000/10631210000/10631219526.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/4688700000/4688790000/4688791914", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 9125260161, "imgurl": "http://image.enuri.info/webimage_300/8840900000/8840910000/8840910396.jpg", "shopname": "쇼핑몰명", "goodsnm": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=4828080850&coupon_srl=2728990", "matchYn": false, "groupMatchYn": true},
    {"pl_no": 9125370004, "imgurl": "http://image.enuri.info/webimage_300/8473500000/8473500000/8473503520.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=5025867878&coupon_srl=2728990", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 8506035857, "imgurl": "http://image.enuri.info/webimage_300/7163400000/7163480000/7163484250.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=2046241393&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7716796560, "imgurl": "http://image.enuri.info/webimage_300/7631200000/7631230000/7631230907", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=1957914737&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7972212437, "imgurl": "http://image.enuri.info/webimage_300/2229100000/2229130000/2229132621.jpg", "shopname": "쇼핑몰명", "goodsnm": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,210", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.g9.co.kr/Display/VIP/Index/1957914737?jaehuid=200006435", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7719433575, "imgurl": "http://image.enuri.info/webimage_300/8939500000/8939580000/8939583209.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4505627456&lptag=P4505627456&itemId=5414295739&vendorItemId=72736989083", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/5358600000/5358650000/5358653398.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/5455800000/5455800000/5455807674", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/4572900000/4572930000/4572935120.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/10229500000/10229550000/10229555748.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/5038100000/5038120000/5038125404.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/2531200000/2531240000/2531245239.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/5037900000/5037950000/5037950877.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://photo3.enuri.info/data/images/service/img_300/11357000/11357074.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/6580800000/6580870000/6580871736.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/4371900000/4371910000/4371913345.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": true},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/7651600000/7651640000/7651646859.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://photo3.enuri.info/data/images/service/img_300/11164000/11164870.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/3864600000/3864610000/3864616559.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/4420700000/4420700000/4420708294.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 9125260161, "imgurl": "http://image.enuri.info/webimage_300/5619200000/5619250000/5619250929.jpg", "shopname": "쇼핑몰명", "goodsnm": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=4828080850&coupon_srl=2728990", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 9125370004, "imgurl": "http://image.enuri.info/webimage_300/6610600000/6610640000/6610646969.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=5025867878&coupon_srl=2728990", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8506035857, "imgurl": "http://image.enuri.info/webimage_300/3828500000/3828590000/3828594408.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=2046241393&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7716796560, "imgurl": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=1957914737&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7972212437, "imgurl": "http://image.enuri.info/webimage_300/7621000000/7621070000/7621079541.jpg", "shopname": "쇼핑몰명", "goodsnm": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,210", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.g9.co.kr/Display/VIP/Index/1957914737?jaehuid=200006435", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7719433575, "imgurl": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4505627456&lptag=P4505627456&itemId=5414295739&vendorItemId=72736989083", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/5431700000/5431780000/5431780716.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/6972900000/6972910000/6972913054.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/9622000000/9622040000/9622045486.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/10462800000/10462880000/10462886671.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/8201800000/8201840000/8201848704.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/8286700000/8286770000/8286776059.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/8897300000/8897330000/8897330949.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": true},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/9163500000/9163540000/9163540716.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/8985500000/8985570000/8985572647.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/10228500000/10228590000/10228593298", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/9366900000/9366930000/9366936493.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/8355800000/8355870000/8355870293.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/10631200000/10631210000/10631219526.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 9125260161, "imgurl": "http://image.enuri.info/webimage_300/4688700000/4688790000/4688791914", "shopname": "쇼핑몰명", "goodsnm": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=4828080850&coupon_srl=2728990", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 9125370004, "imgurl": "http://image.enuri.info/webimage_300/8840900000/8840910000/8840910396.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=5025867878&coupon_srl=2728990", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 8506035857, "imgurl": "http://image.enuri.info/webimage_300/8473500000/8473500000/8473503520.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=2046241393&GoodsSale=Y&jaehuid=200002673", "matchYn": true, "groupMatchYn": true},
    {"pl_no": 7716796560, "imgurl": "http://image.enuri.info/webimage_300/7163400000/7163480000/7163484250.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=1957914737&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7972212437, "imgurl": "http://image.enuri.info/webimage_300/7631200000/7631230000/7631230907", "shopname": "쇼핑몰명", "goodsnm": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,210", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.g9.co.kr/Display/VIP/Index/1957914737?jaehuid=200006435", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7719433575, "imgurl": "http://image.enuri.info/webimage_300/2229100000/2229130000/2229132621.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4505627456&lptag=P4505627456&itemId=5414295739&vendorItemId=72736989083", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/8939500000/8939580000/8939583209.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/5358600000/5358650000/5358653398.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/5455800000/5455800000/5455807674", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/4572900000/4572930000/4572935120.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/10229500000/10229550000/10229555748.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": true},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/5038100000/5038120000/5038125404.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/2531200000/2531240000/2531245239.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/5037900000/5037950000/5037950877.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://photo3.enuri.info/data/images/service/img_300/11357000/11357074.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/6580800000/6580870000/6580871736.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/4371900000/4371910000/4371913345.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/7651600000/7651640000/7651646859.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://photo3.enuri.info/data/images/service/img_300/11164000/11164870.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/3864600000/3864610000/3864616559.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 9125260161, "imgurl": "http://image.enuri.info/webimage_300/4420700000/4420700000/4420708294.jpg", "shopname": "쇼핑몰명", "goodsnm": "[삼성카드]나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=4828080850&coupon_srl=2728990", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 9125370004, "imgurl": "http://image.enuri.info/webimage_300/5619200000/5619250000/5619250929.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m 1팩 - 나무야나무야", "price": "8,520", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.tmon.co.kr/entry/?jp=80024&ln=205013&p_no=5025867878&coupon_srl=2728990", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8506035857, "imgurl": "http://image.enuri.info/webimage_300/6610600000/6610640000/6610646969.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=2046241393&GoodsSale=Y&jaehuid=200002673", "matchYn": false, "groupMatchYn": true},
    {"pl_no": 7716796560, "imgurl": "http://image.enuri.info/webimage_300/3828500000/3828590000/3828594408.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,000", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.gmarket.co.kr/challenge/neo_jaehu/jaehu_goods_gate.asp?goodscode=1957914737&GoodsSale=Y&jaehuid=200002673", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7972212437, "imgurl": "http://image.enuri.info/webimage_300/8978000000/8978040000/8978041284.jpg", "shopname": "쇼핑몰명", "goodsnm": "[NH카드 7% 할인]나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,210", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://www.g9.co.kr/Display/VIP/Index/1957914737?jaehuid=200006435", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7719433575, "imgurl": "http://image.enuri.info/webimage_300/7621000000/7621070000/7621079541.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4505627456&lptag=P4505627456&itemId=5414295739&vendorItemId=72736989083", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/7169500000/7169540000/7169544203.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/5431700000/5431780000/5431780716.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/6972900000/6972910000/6972913054.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": false, "groupMatchYn": true},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/9622000000/9622040000/9622045486.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/10462800000/10462880000/10462886671.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/8201800000/8201840000/8201848704.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 8741964188, "imgurl": "http://image.enuri.info/webimage_300/8286700000/8286770000/8286776059.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 나무야 나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "9,900", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "http://pd.auction.co.kr/pd_redirect.asp?itemno=C313249249&pc=589", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731350781, "imgurl": "http://image.enuri.info/webimage_300/4394900000/4394990000/4394999276", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,600", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511105947&lptag=P4511105947&itemId=5426578221&vendorItemId=72726474090", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7354495399, "imgurl": "http://image.enuri.info/webimage_300/8897300000/8897330000/8897330949.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=2258724710&lptag=P2258724710&itemId=3868134922&vendorItemId=71852863740", "matchYn": true, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/9163500000/9163540000/9163540716.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/8985500000/8985570000/8985572647.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731329206, "imgurl": "http://image.enuri.info/webimage_300/10228500000/10228590000/10228593298", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511115041&lptag=P4511115041&itemId=5426602276&vendorItemId=72726497586", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 7731353879, "imgurl": "http://image.enuri.info/webimage_300/9366900000/9366930000/9366936493.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=4511122149&lptag=P4511122149&itemId=5426622335&vendorItemId=72726516762", "matchYn": false, "groupMatchYn": false},
    {"pl_no": 6532986870, "imgurl": "http://image.enuri.info/webimage_300/8355800000/8355870000/8355870293.jpg", "shopname": "쇼핑몰명", "goodsnm": "나무야나무야 도톰한 3겹 깨끗한 무향 롤화장지 27m", "price": "17,800", "cond02": "27m", "cond03": "", "cond04": "1팩", "score": 0, "modelno": 0, "brnd": "나무야나무야", "url": "https://link.coupang.com/re/PCSENURIPCSDP?pageKey=1731310866&lptag=P1731310866&itemId=2947076155&vendorItemId=70935643852", "matchYn": false, "groupMatchYn": false}
];
// 가격리스트(EP) 넘버링
var eslen = eslist.length;
for (var i = 0; i < eslen; i++) {
    var row = eslist[i];
    row.idx = i+1;
}


// 브랜드 컴퍼넌트
var brandComponent = "";

    brandComponent += "<div class=\"control__box\">";
    brandComponent += " <div class=\"container\">";
    brandComponent += "     <div class=\"row row-foot\">";
    brandComponent += "         <div class=\"col-12\">";
    brandComponent += "             <div class=\"input-group\">";
    brandComponent += "                 <input type=\"text\" class=\"form-control ipt-txt--srch\" placeholder=\"검색어를 입력하세요.\" aria-label=\"\" aria-describedby=\"basic-addon2\">";
    brandComponent += "                 <button class=\"btn btn-submit\" type=\"button\"><i class=\"bi bi-search\"></i></button>";
    brandComponent += "             </div>";
    brandComponent += "         </div>";
    brandComponent += "     </div>";
    brandComponent += " </div>";
    brandComponent += "</div>";

// 원부 컴퍼넌트
var originComponent = "";

    originComponent += "<div class=\"control__box control__box--origin\">";
    originComponent += "    <div class=\"container\">";
    originComponent += "        <div class=\"row row-head\">";
    originComponent += "            <div class=\"col-4\">";
    originComponent += "                <div class=\"btn-group\">";
    originComponent += "                    <button type=\"button\" class=\"btn btn-sort\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"bi bi-filter-left\" style=\"\"></i> 인기순</button>";
    originComponent += "                    <div class=\"dropdown-menu\">";
    originComponent += "                        <a class=\"dropdown-item\" href=\"#\">인기순</a>";
    originComponent += "                        <a class=\"dropdown-item\" href=\"#\">GMV순</a>";
    originComponent += "                        <a class=\"dropdown-item\" href=\"#\">신상품순</a>";
    originComponent += "                        <a class=\"dropdown-item\" href=\"#\">검색수순</a>";
    originComponent += "                    </div>";
    originComponent += "                </div>";
    originComponent += "            </div>";
    originComponent += "            <div class=\"col-8\">";
    originComponent += "                <div class=\"btn-group btn-group--right\">";
    originComponent += "                    <button type=\"button\" class=\"btn btn-add\" onclick=\"$('#originEdit').fadeIn();\">추가</button>";
    originComponent += "                    <button type=\"button\" class=\"btn btn-modify\" onclick=\"$('#originEdit').fadeIn();\">변경</button>";
    originComponent += "                    <button type=\"button\" class=\"btn btn-save\" id=\"btnOriginDel\">삭제</button>";
    originComponent += "                </div>";
    originComponent += "            </div>";
    originComponent += "        </div>";
    
    originComponent += "        <div class=\"row row-foot\">";
    originComponent += "            <div class=\"col-12\">";
    originComponent += "                <div class=\"origin_srch\">";
    originComponent += "                    <div class=\"btn-group\">";
    originComponent += "                        <button type=\"button\" class=\"btn btn-srch\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" title=\"전체\">전체</button>";
    originComponent += "                        <div class=\"dropdown-menu\">";
    originComponent += "                            <a class=\"dropdown-item\" href=\"#\">전체</a>";
    originComponent += "                            <a class=\"dropdown-item\" href=\"#\">카테고리내</a>";
    originComponent += "                            <a class=\"dropdown-item\" href=\"#\">결과내</a>";
    originComponent += "                        </div>";
    originComponent += "                    </div>";
    originComponent += "                    <div class=\"input-group\">";
    originComponent += "                        <input type=\"text\" class=\"form-control ipt-txt--srch\" placeholder=\"검색어를 입력하세요.\" aria-label=\"\" aria-describedby=\"basic-addon2\">";
    originComponent += "                        <div class=\"input-group-append\">";
    originComponent += "                            <button class=\"btn btn-submit\" type=\"button\"><i class=\"bi bi-search\"></i></button>";
    originComponent += "                        </div>";
    originComponent += "                    </div>";
    originComponent += "                </div>";
    originComponent += "            </div>";
    originComponent += "        </div>";
    originComponent += "    </div>";
    originComponent += "</div>";  

// 조건 컴퍼넌트
var termComponent = "";

    termComponent += "<div class=\"control__box\">";
    termComponent += "  <div class=\"container\">";
    termComponent += "      <div class=\"row row-head\">";
    termComponent += "          <div class=\"col-12\">";
    termComponent += "              <div class=\"btn-group btn-group--right\">";
    termComponent += "                  <button type=\"button\" class=\"btn btn-add\" onclick=\"$('#conditionEdit').fadeIn();\">추가</button>";
    termComponent += "                  <button type=\"button\" class=\"btn btn-modify\" onclick=\"$('#conditionEdit').fadeIn();\">변경</button>";
    termComponent += "              </div>";
    termComponent += "          </div>";
    termComponent += "      </div>";
    termComponent += "  </div>";
    termComponent += "</div>";

// 신규조건 컴퍼넌트
var srchNewComponent = "";

    srchNewComponent += "<div class=\"control__box control__box-newsr\">";
    srchNewComponent += "  <div class=\"container\">";
    srchNewComponent += "      <div class=\"row row-head\">";
    srchNewComponent += "          <div class=\"col-12\">";
    srchNewComponent += "              <div class=\"btn-group btn-group--fluid\">";
    srchNewComponent += "                  <button type=\"button\" class=\"btn btn-srch-full\">찾기</button>";
    srchNewComponent += "              </div>";
    srchNewComponent += "          </div>";
    srchNewComponent += "      </div>";
    srchNewComponent += "  </div>";
    srchNewComponent += "</div>";

// 상품 검색 영역 컴퍼넌트 
var prdcSrchComponent = "";

    prdcSrchComponent += "<div class=\"searchbar\">";
    prdcSrchComponent += "    <div class=\"container-fluid\">";
    prdcSrchComponent += "        <div class=\"row\">";
    prdcSrchComponent += "            <div class=\"col-12\">";
    prdcSrchComponent += "                <form>";
    prdcSrchComponent += "                <div class=\"srchbox\">";
    prdcSrchComponent += "                    <div class=\"dropdownbox\">";
    prdcSrchComponent += "                        <button type=\"button\" class=\"btn btn-srch-select dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">전체</button>";
    prdcSrchComponent += "                        <div class=\"dropdown-menu\">";
    prdcSrchComponent += "                            <a class=\"dropdown-item\" href=\"#\">전체</a>";
    prdcSrchComponent += "                            <a class=\"dropdown-item\" href=\"#\">카테고리내</a>";
    prdcSrchComponent += "                            <a class=\"dropdown-item\" href=\"#\">결과내</a>";
    prdcSrchComponent += "                        </div>";
    prdcSrchComponent += "                    </div>";    
    prdcSrchComponent += "                    <div class=\"input-group\">";
    prdcSrchComponent += "                        <input type=\"text\" class=\"form-control ipt-txt--srch\" placeholder=\"검색어를 입력하세요.\">";
    prdcSrchComponent += "                        <div class=\"input-group-append\">";
    prdcSrchComponent += "                            <button class=\"btn btn-submit\" type=\"submit\"><i class=\"bi bi-search\"></i></button>";
    prdcSrchComponent += "                        </div>";
    prdcSrchComponent += "                    </div>"; 
    prdcSrchComponent += "                </div>";
    prdcSrchComponent += "                </form>";
    prdcSrchComponent += "            </div>";
    prdcSrchComponent += "        </div>";
    prdcSrchComponent += "    </div>";
    prdcSrchComponent += "</div>";

// 매칭/미매칭 컴퍼넌트
var matchingComponent = "";

    matchingComponent += "<div class=\"control__box control__box--comp\">";
    matchingComponent += "    <div class=\"container-fluid\">";
    matchingComponent += "        <div class=\"row\">";
    matchingComponent += "            <div class=\"col-12\">";
    matchingComponent += "                <div class=\"prdc__info\">";
    matchingComponent += "                    <div class=\"thumb\" id=\"prdcThumb\"><img src=\"http://image.enuri.info/webimage_300/6285200000/6285280000/6285280423.jpg\" alt=\"\" /></div>";
    
    matchingComponent += "                    <div class=\"tx\">";
    matchingComponent += "                        <div class=\"tx_util\">";
    matchingComponent += "                            <div class=\"tx_unit\">";
    matchingComponent += "                                <a href=\"#\" class=\"tx_mnum\">모델번호 : 11577831</a>";
    matchingComponent += "                                <div class=\"tx_price\">";
    matchingComponent += "                                    <p class=\"tx_min\">최저가 : <em>44,440</em></p>";
    matchingComponent += "                                    <p class=\"tx_max\">최고가 : <em>12,620</em></p>";
    matchingComponent += "                                </div>";
    matchingComponent += "                            </div>";
    matchingComponent += "                            <div class=\"model_info\">";
    matchingComponent += "                                <ul>";
    matchingComponent += "                                  <li><p class=\"tx_dt\">제조사</p><p class=\"tx_dd\">한국P&amp;G</p></li>";
    matchingComponent += "                                  <li><p class=\"tx_dt\">브랜드</p><p class=\"tx_dd\">헤어레시피</p></li>";
    matchingComponent += "                                  <li><p class=\"tx_dt\">스칼프 케어 샴푸 1L 481개</p></li>";
    matchingComponent += "                                </ul>";
    matchingComponent += "                            </div>";
    matchingComponent += "                            <div class=\"model_option\">";
    matchingComponent += "                                <button type=\"button\" id=\"btnOptionAll\" class=\"btn_all\">전체보기</button>";
    matchingComponent += "                                <ul>";
    matchingComponent += "                                  <li>용량: 900ml</li>";
    matchingComponent += "                                  <li>수량: 1개</li>";
    matchingComponent += "                                </ul>";
    matchingComponent += "                            </div>";
    matchingComponent += "                        </div>";
    matchingComponent += "                    </div>";
    matchingComponent += "                    <div class=\"attr_input\">";
    matchingComponent += "                        <button class=\"btn btn-attrin\" type=\"button\" data-target=\"./popup_productAttrAdmin.html\" data-pname=\"prdcAttributeAdmin\" onclick=\"popupOpen($(this).data('target'), $(this).data('pname'), 1180, 980)\">속성 입력</button>";
    matchingComponent += "                    </div>";
    matchingComponent += "                </div>";
    matchingComponent += "            </div>";
    matchingComponent += "        </div>";
    matchingComponent += "    </div>";
    matchingComponent += "</div>";

// 선택 상품 명 표시 영역
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
var epViewContainer; // EP상품 뷰타입 컨테이너
var imageTypeList; // EP상품 이미지뷰 위젯 생성

// 모델리스트 그리드 생성
mdList = new dhx.Grid(null, {
    columns: [
        {id: "idx", width: 40, header: [{text: "flag", align:"center"}], align:"center",},
        {id: "gcol2", minWidth:60, header: [{ text: "번호", align: "center" }], align: "right" },
        {id: "gcol3", minWidth:60, header: [{ text: "카테코드", align: "center" }], align: "right" },
        {id: "gcol4", minWidth:60, header: [{ text: "이미지", align: "center" }], htmlEnable: true, align: "center",
            template: function (text, row, col) { 
                return "<img src=\""+text+"\" alt=\"\" class=\"thumb thumb-40\">"; 
            } 
        },
        {id: "gcol5", minWidth:60, header: [{ text: "제조사", align: "center" }], align: "right" },
        {id: "gcol6", minWidth:60, header: [{ text: "브랜드", align: "center" }], align: "right" },
        {id: "gcol7", minWidth:60, header: [{ text: "모델명", align: "center" }], align: "right" },
        {id: "gcol8", minWidth:60, header: [{ text: "그룹조건명", align: "center" }], align: "right" },
        {id: "gcol9", minWidth:60, header: [{ text: "그룹여부", align: "center" }], align: "right" },
        {id: "gcol10", minWidth:60, header: [{ text: "매칭수", align: "center" }], align: "right" },
        {id: "gcol11", minWidth:60, header: [{ text: "등록일", align: "center" }], align: "right" },
        {id: "gcol12", minWidth:60, header: [{ text: "IMG", align: "center" }], align: "right" },
        {id: "gcol13", minWidth:60, header: [{ text: "단종", align: "center" }], align: "right" },
        {id: "gcol14", minWidth:60, header: [{ text: "작", align: "center" }], align: "right" },
        {id: "gcol15", minWidth:60, header: [{ text: "속성", align: "center" }], align: "right" },
        {id: "gcol16", minWidth:60, header: [{ text: "담", align: "center" }], align: "right" },
        {id: "gcol17", minWidth:60, header: [{ text: "예정", align: "center" }], align: "right" },
        {id: "gcol18", minWidth:60, header: [{ text: "용량", align: "center" }], align: "right" },
        {id: "gcol19", minWidth:60, header: [{ text: "수량", align: "center" }], align: "right" },
        {id: "gcol20", minWidth:60, header: [{ text: "환산", align: "center" }], align: "right" },
        {id: "gcol21", minWidth:60, header: [{ text: "단위", align: "center" }], align: "right" },
    ],
    headerRowHeight: 32,
    rowHeight: 32,
    autoWidth:true,
    data: mdList_data,
    selection: "row",
    multiselection:false,
    keyNavigation: true,
    resizable:true,
    adjust: false,
    tooltip: false,
});

// 상품리스트 그리드 생성
prdcList = new dhx.Grid(null, {
    columns: [
        { width: 40, id: "idx", header: [{text: "#", align:"center"}], resizable:false, align:"center",},
        { width: 50, id: "chkBox", header: [{ text: "선택", align: "center" }], sortable: false, resizable: false, htmlEnable: true, align: "center",
            template: function (text, row, col) { 
                // 단순 체크 이미지 (기능없음)
                return "<div class=\"form-chk ep-chk\"><input type=\"checkbox\" class=\"input--checkbox-item\" disabled=\"disabled\"><label></label></div>";
            } 
        },
        { width: 90, id: "imgurl", header: [{ text: "이미지", align: "center" }], htmlEnable: true, tooltip: true, align: "center",
            template: function (text, row, col) { 
                return "<img src=\""+text+"\" alt=\"\" class=\"thumb\">"; 
            } 
        },
        { width: 100, id: "shopname", header: [{ text: "쇼핑몰", align: "center" }], htmlEnable: true,  align: "center",
            template: function (text, row, col) { 
                return "<p class=\"tx_tit\">"+text+"</p>"; 
            } 
        },
        { width: 90, id: "price", header: [{ text: "가격", align: "center" }], htmlEnable: true, align: "right",
        template: function (text, row, col) { 
            return "<a href=\"#\" target=\"_blank\" onclick=\"alert(\'VIP 이동\');return false;\">"+text+"</a>"; 
        } 
    },
        { width: 550, id: "goodsnm", header: [{ text: "상품명", align: "center" }], htmlEnable: true, align: "left",
            template: function (text, row, col) { 
                return "<p class=\"tx_tit tx_tit_clamp-2\">"+text+"</p>"; 
            } 
        },
        { width: 100, id: "brnd", header: [{ text: "브랜드", align: "center" }], htmlEnable: true, align: "center",
            template: function (text, row, col) { 
                return "<p class=\"tx_tit\">"+text+"</p>"; 
            } 
        },
        { width: 100, id: "score", header: [{ text: "스코어", align: "center" }], align: "center" },
        { width: 80, id: "cond02", header: [{ text: "조건1", align: "center" }], align: "center" },
        { width: 80, id: "cond04", header: [{ text: "조건2", align: "center" }], align: "center" },
        { width: 80, id: "modelno", header: [{ text: "모델번호", align: "center" }], align: "center" },
        { hidden: true, width: 80, id: "matchYn", header: [{ text: "매칭여부", align: "center" }], align: "center" },
        { hidden: true, width: 80, id: "groupMatchYn", header: [{ text: "그룹매칭여부", align: "center" }], align: "center" },
    ],
    rowCss: function(row){
        if(row.matchYn) return "matching_row"; // 매칭된 행 클래스 추가
        else if(row.groupMatchYn) return "groupmatching_row"; // 그룹매칭 행 색상 추가
        else return "";
    },
    headerRowHeight: 32,
    rowHeight: 90,
    autoWidth:true,
    selection: "row",
    multiselection:true,
    keyNavigation: true,
    resizable:true,
    tooltip: false
});
// EP상품 뷰타입(그리드/이미지) 탭바 생성
epViewContainer = new dhx.Tabbar(null, {
    css: "tab_type", 
    mode: "top",    
    tabAutoWidth: false,
    tabWidth:30,
    views: [
        { tab: "그리드뷰", id: "gridTypeList" },
        { tab: "이미지뷰", id: "imageTypeList" }
    ]
});
// EP상품 이미지뷰 위젯 생성
imageTypeList = new dhx.List("list", {
    css: "type_img", 
    template: imgViewTemplate,
    data: eslist,
    multiselection: "ctrlClick",
    keyNavigation: true
});
// EP상품 이미지뷰 목록 템플릿
function imgViewTemplate(item) {
    var template = "";
        template += "<div class='thumb_box'>";
        template += "   <div class='item_thumb'><img src='" + item.imgurl + "' alt='' /></div>";
        template += "   <div class='item_summ'>";
        template += "       <p class='tx_mall'>"+item.shopname+"</p>";
        template += "       <p class='tx_price'><em>"+item.price+"</em>원</p>";
        template += "       <p class='tx_nm' title='"+item.goodsnm+"'>"+item.goodsnm+"</p>";
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
// EP 상품 페이징 연동
// 그리드 타입일 때
prdcList.data.parse(eslist)
var matchGridPaging = new dhx.Pagination(null, {
    css: "",
    data: prdcList.data,
    pageSize: 30 // 100단위로 바꿔주세요
});
// 이미지 타입일때
imageTypeList.data.parse(eslist)
var matchImgPaging = new dhx.Pagination(null, {
    css: "",
    data: imageTypeList.data,
    pageSize: 30 // 100단위로 바꿔주세요
});


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
            labelPosition: "left",
            weekNumbers: false,
            timePicker: false,
            disabled: false,
            required: false,
            editable: false,
            thisMonthOnly: false,
            helpMessage: "",
            preMessage: "",
            successMessage: "",
            errorMessage: "",
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
            labelPosition: "left",
            weekNumbers: false,
            timePicker: false,
            disabled: false,
            required: false,
            editable: false,
            thisMonthOnly: false,
            helpMessage: "",
            preMessage: "",
            successMessage: "",
            errorMessage: "",
            weekStart: "sunday",
            dateFormat: "%Y-%m-%d",
            css: "control-comm sel-sort"
        },
        {
            id: "prdcSelect",
            name: "prdcSelect",
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
            ],
            css: "control-comm sel-sort"
        }, 
        {
            id: "keywordSelect",
            name: "select",
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
            id: "keywordSubmit",
            type: "button",
            text:"열기",
            css: "control-comm btn-srch"
        }
    ]
})

var mdOptionFilter = new dhx.Form(null, {
    css: "form-radio--cond",
    padding: "5px 10px",
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
                        { value: "0", content: "출시예정" },
                        { value: "1", content: "미서비스확인" },
                        { value: "2", content: "핵심속성점검" },
                        { value: "3", content: "추가분류" },
                        { value: "4", content: "그룹등록" },
                        { value: "5", content: "그룹미등록" },
                        { value: "6", content: "환산가미등록" },
                        { value: "7", content: "유사상품" },
                        { value: "8", content: "유사 ★관리용" },
                        { value: "9", content: "속성" },
                        { value: "9", content: "사양선택" }
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
        {
            // 모델 검색 옵션 두번째 행
            id: "mdFilterRow_2",
            cols: [
                {
                    id: "prdcSelect",
                    name: "prdcSelect",
                    type: "select",
                    label: "",
                    labelPosition: "left",
                    labelWidth: 0,
                    value: "선택",
                    required: true,
                    options: [
                        { value: "0", content: "전체" },
                        { value: "1", content: "카테고리내" },
                        { value: "2", content: "담당" },
                    ],
                    css: "control-comm sel-sort"
                }, 
                {
                    id: "keywordSelect1",
                    name: "select",
                    type: "select",
                    label: "",
                    labelPosition: "left",
                    labelWidth: 0,
                    value: "선택",
                    required: true,
                    options: [
                        { value: "0", content: "통합" },
                        { value: "1", content: "모델번호" },
                        { value: "2", content: "모델번호(G)" },
                        { value: "3", content: "모델명" },
                        { value: "3", content: "조건명" },
                        { value: "3", content: "속성" },
                        { value: "3", content: "제조사" },
                        { value: "3", content: "브랜드" }
                    ],
                    css: "control-comm sel-sort"
                },
                {
                    id: "keywordSelect2",
                    name: "select",
                    type: "select",
                    label: "",
                    labelPosition: "left",
                    labelWidth: 0,
                    value: "선택",
                    required: true,
                    options: [
                        { value: "0", content: "결과내포함" },
                    ],
                    css: "control-comm sel-sort"
                },
                {
                    id: "keywordInput",
                    name: "input",
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
                    id: "keywordSubmit",
                    type: "button",
                    text:"검색",
                    css: "control-comm btn-srch"
                }
            ]
        },
        {
            // 모델 검색 옵션 세번째 행
            id: "mdFilterRow_3",
            cols: [
                {
                    id: "btnOriginMatching",
                    type: "button",
                    text:"기매칭",
                    css: "control-comm btn-srch"
                },
                {
                    id: "btnAdd",
                    type: "button",
                    text:"추가",
                    css: "control-comm btn-srch"
                },
                {
                    id: "btnMod",
                    type: "button",
                    text:"변경",
                    css: "control-comm btn-srch"
                },
                {
                    id: "btnDel",
                    type: "button",
                    text:"삭제",
                    css: "control-comm btn-srch"
                }
            ]
        }
    ]
})
// EP상품 통합 검색 키워드 추가 TABBAR
var keywordAdd = new dhx.Tabbar(null, {
    css: "dhx_widget--bordered",
    mode: "top",
    tabAutoWidth: false,
    closable: true,
    noContent: true,
    /* views: [
        { tab: "-제외키워드", id:"keyword-1" },
        { tab: "-제외키워드", id:"keyword-2" },
        { tab: "+포함키워드", id:"keyword-3" },
        { tab: "-키워드", id:"keyword-4" },
        { tab: "+포함키워드", id:"keyword-5" },
        { tab: "-키워드", id:"keyword-6" },
        { tab: "-키워드", id:"keyword-7" },
        { tab: "-키워드", id:"keyword-8" },
        { tab: "-키워드", id:"keyword-9" },
        { tab: "-키워드", id:"keyword-10" },
        { tab: "-키워드", id:"keyword-11" },
    ], */
    css: "keyword_list"
});


// 검색제외조건 찾기 FORM
var form_orgEctKwd_top = new dhx.Form(null, {
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
                            {
                                type: "radioButton",
                                text: "포함",
                                value: "",
                            },
                            {
                                type: "radioButton",
                                text: "제외",
                                value: "",
                            }
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
                    text: "찾기",
                    id: "btn-findcond",
                    css: "control-comm btn-find"
                }
            ]
        }
    ]    
});


// EP 통합검색 FORM : 검색 영역
var matchSrchControll = new dhx.Form(null, {
    css: "controller_ep",
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
                {
                    value: "0",
                    content: "상품명"
                },
                {
                    value: "1",
                    content: "카탈로그번호"
                },
                {
                    value: "2",
                    content: "상품코드"
                },
                {
                    value: "3",
                    content: "PLNO"
                }
            ],
            css: "control-comm sel-sort"
        }, 
        {
            id: "keywordSelect",
            name: "select",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "전체",
            required: true,
            options: [
                {
                    value: "0",
                    content: "전체"
                },
                {
                    value: "1",
                    content: "카테고리내"
                },,
                {
                    value: "2",
                    content: "키워드 포함"
                },
                {
                    value: "3",
                    content: "키워드 제외"
                }
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "keywordInput",
            name: "input",
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
            id: "keywordSubmit",
            type: "button",
            text:"검색",
            css: "control-comm btn-srch"
        }
    ]
})

// EP 버튼 좌측 FORM : 매칭, 매칭해제
var epGridControll = new dhx.Form(null, {
    css: "controller_sort",
    padding: 0,
    width: "100%",
    height:"42px",
    cols: [
        {
            type: "button",
            text: "전체선택",
            id: "allCheck",
            align:"left",
            size: "small",
            css: "control-comm btn-cond btn-all"
        },
        {
            type: "button",
            text: "매칭",
            id: "btnMatching1",
            align:"left",
            size: "small",
            css: "control-comm btn-cond btn-matching"
        },
        {
            type: "button",
            text: "매칭해제",
            id: "btnMatching2",
            align:"left",
            size: "small",
            css: "control-comm btn-cond"
        }
    ]
})

// EP 버튼 우측 FORM : 가매칭, 그룹매칭, 매칭
var epGridSorting = new dhx.Form(null, {
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
                    disabled: false,
                    required: false,
                    hidden: false,
                    text: "매칭"
                },
                {
                    //클릭시 팝업
                    type: "button",
                    id: "layPop1",
                    css:"btn-gmopen"
                },
                {
                    type: "checkbox",
                    disabled: false,
                    required: false,
                    hidden: false,
                    text: "미매칭"
                },
                {
                    type: "checkbox",
                    disabled: false,
                    required: false,
                    hidden: false,
                    text: "품절포함",
                },
                {
                    type: "checkbox",
                    disabled: false,
                    required: false,
                    hidden: false,
                    text: "-2/-5 포함",
                },
                {
                    type: "checkbox",
                    disabled: false,
                    required: false,
                    hidden: false
                },
                {
                    id: "keywordInput",
                    name: "input",
                    type: "input",
                    label: "",
                    labelPosition: "left",
                    icon: "dxi dxi-magnify",
                    labelWidth: 0,
                    required: false,
                    placeholder: "최소금액",
                    css: "control-comm"
                }
            ]
        }
    ]
})

/* 매칭 팝업 */
var popMatching1 = new dhx.Popup({
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
popMatching1.attachHTML(popMatchingHtml);
epGridSorting.getItem("layPop1").events.on("click", function(e){
    popMatching1.show(e.srcElement);
})



// EP상품 통합 검색 키워드 추가 TABBAR
var keywordAdd = new dhx.Tabbar(null, {
    css: "dhx_widget--bordered",
    mode: "top",
    tabAutoWidth: false,
    closable: true,
    noContent: true,
    /* views: [
        { tab: "-제외키워드", id:"keyword-1" },
        { tab: "-제외키워드", id:"keyword-2" },
        { tab: "+포함키워드", id:"keyword-3" },
        { tab: "-키워드", id:"keyword-4" },
        { tab: "+포함키워드", id:"keyword-5" },
        { tab: "-키워드", id:"keyword-6" },
        { tab: "-키워드", id:"keyword-7" },
        { tab: "-키워드", id:"keyword-8" },
        { tab: "-키워드", id:"keyword-9" },
        { tab: "-키워드", id:"keyword-10" },
        { tab: "-키워드", id:"keyword-11" },
    ], */
    css: "keyword_list"
});


/* EP그리드 우클릭 (개발 common.js 참고) */
var popup = new dhx.Popup({
    css: "pop_headecell-sort"
});
var popHtml = "";

popHtml += "<div>";
popHtml += "	<input type=\'checkbox\' id=\'imgurl\' name=\'escustom\' onclick='customField(\"imgurl\");' checked='checked'>이미지	<br>";
popHtml += "	<input type=\'checkbox\' id=\'shopname\' name=\'escustom\' onclick='customField(\"shopname\");' checked='checked'>쇼핑몰	<br>";
popHtml += "	<input type=\'checkbox\' id=\'price\' name=\'escustom\' onclick='customField(\"price\");' checked='checked'>가격	<br>";
popHtml += "	<input type=\'checkbox\' id=\'goodsnm\' name=\'escustom\' onclick='customField(\"goodsnm\");' checked='checked'>상품명	<br>";
popHtml += "	<input type=\'checkbox\' id=\'brnd\' onclick=\'customField(\"brnd\");\' name='escustom' checked='checked'>브랜드	<br>";
popHtml += "	<input type=\'checkbox\' id=\'cond02\' onclick=\'customField(\"cond02\");\' name='escustom' checked='checked'>원부조건	<br>";
popHtml += "	<input type=\'checkbox\' id=\'cond03\' onclick=\'customField(\"cond03\");\' name='escustom' checked='checked'>조건1	<br>";
popHtml += "	<input type=\'checkbox\' id=\'cond04\' onclick=\'customField(\"cond04\");\' name='escustom' checked='checked'>조건2	<br>";
popHtml += "	<input type=\'checkbox\' id=\'score\' onclick=\'customField(\"score\");\' name='escustom' checked='checked'>스코어	<br>";
popHtml += "	<input type=\'checkbox\' id=\'modelno\' onclick=\'customField(\"modelno\");\' name='escustom' checked='checked'>모델번호	<br>";
popHtml += "	<input type=\'checkbox\' id=\'matchYn\' onclick=\'customField(\"matchYn\");\' name=\'escustom\' checked=\'checked\'>매칭여부";
//popHtml += "	<input type=\'checkbox\' id=\'groupMatchYn\' onclick=\'customField(\"groupMatchYn\");\' name=\'escustom\' checked=\'checked\'>그룹매칭여부";
popHtml += "</div>";
popup.attachHTML(popHtml);
const pconfig = {
    centering: true,
    mode: "bottom",
    indent: 0
};
prdcList.events.on("headerCellRightClick", function(col, e){
    e.preventDefault();
    popup.show(e.srcElement, pconfig);
})
function customField(item) {
	if(!$("#"+item).is(":checked")){
		prdcList.hideColumn(item);
	}else{
		prdcList.showColumn(item);
	}
}
/* // */

// 통합검색 FORM : 검색 영역
var wrapSrchControll = new dhx.Form(null, {
    css: "controller_all",
    padding: 0,
    width: "100%",
    cols: [
        {
            id: "selectStep1",
            name: "selectStep1",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "통합",
            required: true,
            options: [
                {
                    value: "0",
                    content: "통합"
                },
                {
                    value: "1",
                    content: "카탈로그번호"
                },
                {
                    value: "2",
                    content: "원부명"
                },
                {
                    value: "3",
                    content: "제조사"
                },
                {
                    value: "4",
                    content: "브랜드"
                }
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "selectStep2",
            name: "selectStep2",
            type: "select",
            label: "",
            labelPosition: "left",
            labelWidth: 0,
            value: "전체",
            required: true,
            options: [
                {
                    value: "0",
                    content: "전체"
                },
                {
                    value: "1",
                    content: "카테고리내"
                },
                {
                    value: "2",
                    content: "키워드포함"
                },
                {
                    value: "3",
                    content: "키워드제외"
                },
            ],
            css: "control-comm sel-sort"
        },
        {
            id: "allKeywordInput",
            name: "input",
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
            id: "allKeywordSubmit",
            type: "button",
            text:"검색",
            css: "control-comm btn-srch"
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
                            //width:"222px",
                            headerHeight:32,
                            header: "모델 (n건)",
                            collapsable: true,
                            htmlEnable: true,
                            resizable: true,
                            customScroll: true,
                            rows : [
                                {
                                    // 모델목록 HEADER
                                    id: "mdOptionFilter",
                                    height: "116px"
                                },
                                {
                                    // 모델목록 GRID
                                    id: "mdGrid",
                                    height:"calc(100% - 48px)"
                                }
                            ]
                        },
                        {
                            // EP상품 COL
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
                                    // EP상품 ROW : 매칭 미매칭 품절 -2/-5 체크박스
                                    id: "epGridSorting",
                                    width:"100%",
                                    height:"42px",
                                },
                                {
                                    // EP상품 ROW : 검색&키워드
                                    width:"100%",
                                    height:"42px",
                                    cols: [
                                        {
                                            // EP 통합검색 : 검색 영역
                                            id:"epSearch",
                                            width:"440px",
                                        },
                                        {
                                            // EP 통합검색 : 키워드 영역
                                            id:"epSearchKeyword",
                                            width:"calc(100% - 440px)",
                                        }
                                    ]
                                },
                                {
                                    // EP상품 ROW : 정보
                                    id:"epProductInfo",
                                    html: matchingComponent,
                                    height:"82px"
                                },
                                {
                                    // EP상품 ROW : 버튼 컨트롤
                                    height:"42px",
                                    cols: [
                                        {
                                            // 버튼 좌측 : 전체선택,매칭,매칭해제
                                            id: "epGridControll",
                                            width:"205px",
                                        },
                                        {
                                            // 우측 뷰타입 버튼 넣기 위한 빈 공간 
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
                                                    id:"epTabContainer",
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

export var contentLayout = new dhx.Layout("contents", config);

    contentLayout.getCell("userFinder").attach(userFinder)

    contentLayout.getCell("mdOptionFilter").attach(mdOptionFilter)
    // GRID 세팅
    contentLayout.getCell("mdGrid").attach(mdList); // 제조사 GRID    
    
    contentLayout.getCell("matchPaging").attach(matchGridPaging); // EP상품 페이징 (그리드)

    contentLayout.getCell("epSearch").attach(matchSrchControll); // EP 통합검색 : 검색 영역
    contentLayout.getCell("epSearchKeyword").attach(keywordAdd); // EP 통합검색 : 키워드 영역

    contentLayout.getCell("epGridControll").attach(epGridControll); // EP 버튼 좌측 : 전체선택, 매칭, 0(제외)
    contentLayout.getCell("epGridSorting").attach(epGridSorting); // EP 버튼 우측 : 전체선택, 미매칭보기, 매칭보기

    contentLayout.getCell("epTabContainer").attach(epViewContainer); // EP 상품 그리드&리스트 목록 컨테이너

    // EP상품 뷰타입 attach 합니다.
    epViewContainer.getCell("gridTypeList").attach(prdcList); // EP상품 뷰타입 컨테이너 > 그리드뷰 노출
    epViewContainer.getCell("imageTypeList").attach(imageTypeList); // EP상품 뷰타입 컨테이너 > 이미지뷰 노출

    

/********************************* 
 * 참고 : EP상품 그리드/리스트(이미지뷰) 선택한 상품명 표시입니다.
*********************************/

    // 매칭 그리드 선택한 마지막 값 넣어주기
    prdcList.selection.events.on("afterSelect", function(row, col){
        $("#modelNameIn").val(row.goodsnm);
    });
    // 매칭 리스트(이미지뷰) 선택한 마지막 값 넣어주기
    imageTypeList.selection.events.on("afterSelect", function(row){
        var col = imageTypeList.selection.getItem(); // 선택한 상품명

        $("#modelNameIn").val(col[col.length-1].goodsnm);
    });

/********************************* 
 * 참고 : EP상품 검색 키워드 추가 기능입니다.
*********************************/
    // EP상품 폼 위젯 이벤트 : 참고(https://docs.dhtmlx.com/suite/form/api/input/input_change_event/)
    // api 참고하여 적절하게 사용해주세요
    var keywordSt = 0; // 셀렉트 초기값
    matchSrchControll.getItem("select").events.on("change", function(val){
        keywordSt = val; // 셀렉트 선택한 값 
    })
    $(function(){
        $("#keywordInput").keyup(function(e){
            if(e.key === 'Enter' || e.keyCode === 13){
                keywordSubmit();
            }
        })

        // 추가된 키워드 클릭(활성/비활성 토글)
        $(".keyword_list").on("click", ".dhx_tabbar-tab", function(e){
            if(!$(this).hasClass("is-disabled")){ // 비활성
                $(this).addClass("is-disabled");
            }else{ // 활성
                $(this).removeClass("is-disabled");
            }
        })
    })
    matchSrchControll.getItem("keywordSubmit").events.on("click", function(e) {
        keywordSubmit();
    })
    function keywordSubmit(){ // 검색 키워드 서브밋
        var srchVal = matchSrchControll.getItem("input").getValue();
        if(srchVal != ""){
            if(keywordSt == 2){
                addKeyword("+"+srchVal); // 키워드 포함
            }else if(keywordSt == 3){
                addKeyword("-"+srchVal); // 키워드 제외
            }else{ 
                addKeyword(srchVal); // 전체선택
            }
        }else{
            matchSrchControll.getItem("input").focus(); // 포커싱
        }
        matchSrchControll.getItem("input").clear(); // 검색 후 초기화
    }
    // EP상품 키워드 추가
    function addKeyword(keyword) { 
        keywordAdd.addTab({ tab: keyword }, -1); // 뒤로 추가(-1), 앞으로 추가(0)

        matchSrchControll.getItem("input").focus(); // 포커싱
    };

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

    // 조건 매칭 레이어 드래그
    $('.lay-wrap .lay-comm').draggable({
        cancel :'.lay-body, .lay-foot',
        containment : "parent",
        scroll : false
    });

    // EP상품 매칭 레이어 오픈
    $("#btnMatching1, #btnMatching2").on("click", function(){
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
    
    btnOptionAll.on("click", function(){
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

            $("#btnMatching1").trigger("click");
            return false;
        }
    })

    // EP 그리드/이미지 뷰타입 변경 
    $(".btn_type").on("click",function(){
        var _type = $(this).data("viewtype");
        
        $(this).addClass("is-on").siblings().removeClass("is-on");
        epViewContainer.setActive(_type);

        if(_type === "gridTypeList"){
            contentLayout.getCell("matchPaging").attach(matchGridPaging); // EP상품 페이징 그리드타입
        }else if(_type === "imageTypeList"){
            contentLayout.getCell("matchPaging").attach(matchImgPaging); // EP상품 페이징 이미지타입
        }        
    })
})

