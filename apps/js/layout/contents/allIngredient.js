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
 * 서브 > 전성분 컨텐츠
 *********************************/

// 성분그룹 가짜 데이터
var ingredientGroupData = [
    { "idn": "1","attr_a": "화장품 성분" },
    { "idn": "2","attr_a": "분유 성분" },
    { "idn": "3","attr_a": "분유 성분" },
]
// 성분타이틀 가짜 데이터
var ingredientTitleData = [
    { "idn": "1","attr_a": "알레르기",   "attr_b": "", "attr_c": 1, "attr_d":1, "attr_e":"212441", "attr_f":1 }, 
    { "idn": "2","attr_a": "자외선차단", "attr_b": "", "attr_c": 0, "attr_d":0, "attr_e":"212441", "attr_f":2 }, 
    { "idn": "3","attr_a": "미백",       "attr_b": "", "attr_c": 1, "attr_d":0, "attr_e":"212441", "attr_f":3 }, 
    { "idn": "4","attr_a": "탄력",       "attr_b": "", "attr_c": 1, "attr_d":0, "attr_e":"212441", "attr_f":4 }, 
    { "idn": "5","attr_a": "여드름",     "attr_b": "지성", "attr_c": 0, "attr_d":1, "attr_e":"212441", "attr_f":6 }, 
    { "idn": "6","attr_a": "지성 피부",  "attr_b": "지성", "attr_c": 0, "attr_d":0, "attr_e":"212441", "attr_f":5 }, 
    { "idn": "7","attr_a": "건성 피부",  "attr_b": "건성", "attr_c": 1, "attr_d":1, "attr_e":"212441", "attr_f":8 }, 
    { "idn": "8","attr_a": "피부보습",   "attr_b": "건성", "attr_c": 1, "attr_d":0, "attr_e":"212441", "attr_f":7 }, 
    { "idn": "9","attr_a": "자극",       "attr_b": "민감성", "attr_c": 0, "attr_d":1, "attr_e":"212441", "attr_f":10 }, 
    { "idn": "3","attr_a": "민감성 피부","attr_b": "민감성", "attr_c": 0, "attr_d":0, "attr_e":"212441", "attr_f":9 }, 
]
// 성분 가짜 데이터
var ingredientItemData = [
    { "idn": "21", "attr_a": "향료","attr_b": 0, "attr_c": "Limonene", "attr_d": "향료", "attr_e": "" }, 
    { "idn": "22", "attr_a": "향료","attr_b": 1, "attr_c": "Limonene", "attr_d": "향료", "attr_e": ""  }, 
    { "idn": "23", "attr_a": "향료","attr_b": 2, "attr_c": "Limonene", "attr_d": "향료", "attr_e": ""  }, 
]

// 동의어 가짜 데이터
var ingredientSameData = [
    //{ "idn": "", "attr_a": "" }, 
    { "idn": "1", "attr_a": "알레르기" }, 
    { "idn": "2", "attr_a": "자외선차단" }, 
    { "idn": "3", "attr_a": "미백" }, 
]


/*********************************
 * DHTMLX 위젯 생성하여, attach 합니다.
 * FORM 위젯 내 > css명 수정X
 * FORM 위젯 내 > options value 는 수정해서 사용해주세요.
 * FORM 위젯 내 > id 변경 시, 공유해 주세요.
*********************************/
// 성분그룹 헤더
var ingreGroupHeader = new dhx.Form(null, {
    css: "step_header",
    padding: "0 10px",
    width: "100%",
    cols:[   
        {
            css:"tx_count",
            cols:[                
                {
                    name: "text",
                    type: "text",
                    value: "성분 그룹 : 2건",
                },
            ]
        },
        {
            css:"btn-group",
            cols: [
                {
                    type: "button",
                    text: "추가",
                    id: "btnAdd",
                    css: "control-comm"
                }
            ]            
        }
    ]
    
});

// 성분타이틀 헤더
var ingreTitleHeader = new dhx.Form(null, {
    css: "step_header",
    padding: "0 10px",
    width: "100%",
    cols:[   
        {
            css:"tx_count",
            cols:[                
                {
                    name: "text",
                    type: "text",
                    value: "타이틀 : 10건",
                },
            ]
        },
        {
            css:"btn-group",
            cols: [
                {
                    type: "button",
                    text: "추가",
                    id: "btnAdd",
                    css: "control-comm"
                }
            ]            
        }
    ]
    
});

// 성분 헤더
var ingreItemHeader = new dhx.Form(null, {
    css: "step_header",
    padding: "0 10px",
    width: "100%",
    cols:[   
        {
            css:"tx_count",
            cols:[                
                {
                    name: "text",
                    type: "text",
                    value: "성분 : 178건",
                },
            ]
        },
        {
            css:"btn-group",
            cols: [
                {
                    type: "button",
                    text: "추가",
                    id: "btnAdd",
                    css: "control-comm"
                },
            ]            
        }
    ]
});

// 동의어 헤더
var ingreSameHeader = new dhx.Form(null, {
    css: "step_header",
    padding: "0 10px",
    width: "100%",
    cols:[   
        {
            css:"tx_count",
            cols:[                
                {
                    name: "text",
                    type: "text",
                    value: "동의어 : 178건",
                },
            ]
        },
        {
            css:"btn-group",
            cols: [
                {
                    type: "button",
                    text: "추가",
                    id: "btnAdd",
                    css: "control-comm"
                }
            ]            
        }
    ]
});

/*********************************
 * 각 COL 그리드/리스트 생성하여 attach 합니다.
*********************************/
var ingreGroupGrid, ingreTitleGrid, ingreItemGrid, ingreSameGrid; // 성분그룹, 성분타이틀, 성분, 동의어 그리드

// 성분그룹 그리드 생성
ingreGroupGrid = new dhx.Grid(null, {
    columns: [ 
        {id: "idn",     width: 40, header: [{ text: "ID", align: "center" }], align: "center" },
        {id: "attr_a",  header: [{ text: "그룹명", align: "center" }], align: "left" },
        {id: "attr_c",  width: 90, header: [{ text: "관리", align: "center" }], align: "left", htmlEnable: true,
            template: function(text, row, col){
                var btnTag = "";
                    btnTag += "<div class=\"group_grid_btn\">";
                    btnTag += "     <button type='button' class='btn save-button'>저장</button>";
                    btnTag += "     <button type='button' class='btn remove-button'>삭제</button>";
                    btnTag += "</div>";
                return btnTag;
            } 
        },
    ],
    headerRowHeight: 32,
    rowHeight: 32,
    autoWidth: true,
    data: ingredientGroupData,
    selection: "row",
    editable: true, 
    multiselection: false,
    keyNavigation: true,
    resizable:true,
    eventHandlers: {
        onclick: {
            "remove-button": function (e, data) {
                if(window.confirm("정말 삭제하시겠습니까?")){
                    // 예
                    ingreGroupGrid.data.remove(data.row.id);
                }else{
                    // 아니오
                }
                
            },
            "save-button": function (e, data) {
                console.log("저장")
            }
        }
    }
});
// 타이틀 그리드 생성
ingreTitleGrid = new dhx.Grid(null, {
    columns: [
        {id: "idn",     width: 40,  header: [{ text: "ID", align: "center" }], align: "center", gravity: 1.5 },
        {id: "attr_a",  header: [{ text: "타이틀명", align: "center" }], align: "left" },
        {id: "attr_b",  header: [{ text: "타이틀 그룹명", align: "center" }], align: "left" },
        {id: "attr_c",  width: 40,  header: [{ text: "노출", align: "center" }], align: "center",
            template : function(text, row, col){
                if(text == 1) return "Y";
                else return "N";
            }
        },
        {id: "attr_d",  width: 40,  header: [{ text: "유해", align: "center" }], align: "center" },
        {id: "attr_e",  width: 60,  header: [{ text: "속성ID", align: "center" }], align: "center" },
        {id: "attr_f",  width: 60,  header: [{ text: "속성원ID", align: "center" }], align: "center" },
        {id: "attr_g",  width: 90, header: [{ text: "관리", align: "center" }], align: "left", htmlEnable: true,
            template: function(text, row, col){
                var btnTag = "";
                    btnTag += "<div class=\"group_grid_btn\">";
                    btnTag += "     <button type='button' class='btn save-button'>저장</button>";
                    btnTag += "     <button type='button' class='btn remove-button'>삭제</button>";
                    btnTag += "</div>";
                return btnTag;
            } 
        },
    ],
    headerRowHeight: 32,
    rowHeight: 32,
    autoWidth: true,
    data: ingredientTitleData,
    selection: "row",
    editable: true, 
    multiselection: true,
    keyNavigation: true,
    resizable:true,
    eventHandlers: {
        onclick: {
            "remove-button": function (e, data) {
                if(window.confirm("정말 삭제하시겠습니까?")){
                    // 예
                    ingreTitleGrid.data.remove(data.row.id);
                }else{
                    // 아니오
                }
                
            },
            "save-button": function (e, data) {
                console.log("저장")
            }
        }
    }
});
// 성분 그리드 생성
ingreItemGrid = new dhx.Grid(null, {
    columns: [
        {id: "idn",     width: 40,  header: [{ text: "ID", align: "center" }], align: "center" },
        {id: "attr_a",  header: [{ text: "한글 성분명", align: "center" }], align: "left" },
        {id: "attr_b",  header: [{ text: "타이틀", align: "center" }], align: "center" },
        {id: "attr_c",  header: [{ text: "영문 성분명", align: "center" }], align: "left" },
        {id: "attr_d",  header: [{ text: "목적", align: "center" }], align: "center" },
        {id: "attr_e",  header: [{ text: "설명", align: "center" }], align: "left" },
        {id: "attr_f",  minWidth: 165, header: [{ text: "관리", align: "center" }], align: "center", htmlEnable: true,
            template: function(text, row, col){
                var btnTag = "";
                    btnTag += "<div class=\"group_grid_btn\">";
                    btnTag += "     <button type='button' class='btn save-button'>저장</button>";
                    btnTag += "     <button type='button' class='btn remove-button'>삭제</button>";
                    btnTag += "     <button type='button' class='btn titlesave-button'>타이틀 저장</button>";
                    btnTag += "</div>";
                return btnTag;
            } 
        },
    ],
    headerRowHeight: 32,
    rowHeight: 32,
    autoWidth: true,
    //adjust: true,
    data: ingredientItemData,
    selection: "row",
    editable: true, 
    multiselection: false,
    keyNavigation: true,
    resizable:true,
    eventHandlers: {
        onclick: {
            "remove-button": function (e, data) {
                if(window.confirm("정말 삭제하시겠습니까?")){
                    // 예
                    ingreItemGrid.data.remove(data.row.id);
                }else{
                    // 아니오
                }
                
            },
            "save-button": function (e, data) {
                console.log("저장")
            },
            "titlesave-button": function(e, data){
                editWindow.attach(titleSave);
                openEditor("타이틀 저장"); // 윈도우 TITLE 전달
                
                // 동의어 : 추가 버튼 클릭
                titleSave.getItem("apply-button").events.on("click", function () {
                    var newData = titleSave.getValue(); // 입력 값 저장
                    var validate = titleSave.validate(); // 입력 상태 체크
                    if(validate){
                        // 로직 넣어주세요.
                        
                        closeEditor();
                    }
                }); 
            }
        }
    }
});
// 동의어 그리드 생성
ingreSameGrid = new dhx.Grid(null, {
    columns: [
        {id: "idn",    width: 40,   header: [{ text: "ID", align: "center" }], align: "center" },
        {id: "attr_a", header: [{ text: "동의어", align: "center" }], align: "left" },
        {id: "attr_ㅊ",  width: 90, header: [{ text: "관리", align: "center" }], align: "left", htmlEnable: true,
            template: function(text, row, col){
                var btnTag = "";
                    btnTag += "<div class=\"group_grid_btn\">";
                    btnTag += "     <button type='button' class='btn save-button'>저장</button>";
                    btnTag += "     <button type='button' class='btn remove-button'>삭제</button>";
                    btnTag += "</div>";
                return btnTag;
            } 
        },
    ],
    headerRowHeight: 32,
    rowHeight: 32,
    autoWidth: true,
    data: ingredientSameData,
    selection: "row",
    editable: true, 
    multiselection: false,
    keyNavigation: true,
    resizable:true,
    tooltip: false,
    eventHandlers: {
        onclick: {
            "remove-button": function (e, data) {
                if(window.confirm("정말 삭제하시겠습니까?")){
                    // 예
                    ingreSameGrid.data.remove(data.row.id);
                }else{
                    // 아니오
                }
                
            },
            "save-button": function (e, data) {
                console.log("저장")
            },
        }
    }
});

/*********************************
 * 전체 레이아웃 생성
*********************************/
var config = {
    type: "line", // space, wide, line
    width:"100%",
    maxWidth:"100%",
    rows: [
        {
            type:"space",
            id: "rowTop",
            cols:[
                {
                    // [타이틀]
                    id: "ingredientTitle",
                    width: "40%",
                    headerHeight:32,
                    header: "[타이틀]",
                    collapsable: false,
                    htmlEnable: true,
                    resizable: false,
                    customScroll: true,                                    
                    rows : [
                        {
                            // 타이틀 HEADER
                            id: "ingreTitleHeader",
                            height: "48px"
                        },
                        {
                            // 타이틀 GRID
                            id: "ingreTitleGrid",
                            height:"calc(100% - 48px)"
                        }
                    ]
                },
                {
                    type:"line",
                    rows: [
                        {
                    
                            // [성분 그룹]
                            id: "ingredientGroup",
                            headerHeight:32,
                            header: "[성분 그룹]",
                            collapsable: false,
                            htmlEnable: true,
                            resizable: false,
                            customScroll: true,      
                            
                            
                            type:"line",
                            rows : [
                                {
                                    // 성분그룹 HEADER
                                    id: "ingreGroupHeader",
                                    height: "48px"
                                },
                                {
                                    // 성분그룹 GRID
                                    id: "ingreGroupGrid",
                                    height:"calc(100% - 48px)"
                                }
                            ]
                        },                        
                        {
                            cols: [
                                {
                                    // [성분]
                                    type: "line",
                                    id: "ingredientItem",
                                    width: "60%",
                                    headerHeight:32,
                                    header: "[성분]",
                                    collapsable: true,
                                    htmlEnable: true,
                                    resizable: false,
                                    customScroll: true,
                                    
                                    rows : [
                                        {
                                            // 성분 HEADER
                                            id: "ingreItemHeader",
                                            height: "48px"
                                        },
                                        {
                                            // 성분 GRID
                                            id: "ingreItemGrid",
                                            height:"calc(100% - 48px)"
                                        }
                                    ]
                                },
                                {
                                    // [동의어]
                                    type: "line",
                                    id: "ingredientSame",
                                    headerHeight:32,
                                    header: "[동의어]",
                                    collapsable: true,
                                    htmlEnable: true,
                                    resizable: false,
                                    customScroll: true,
                                    rows : [
                                        {
                                            // 동의어 HEADER
                                            id: "ingreSameHeader",
                                            height: "48px"
                                        },
                                        {
                                            // 동의어 GRID
                                            id: "ingreSameGrid",
                                            height:"calc(100% - 48px)"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                
                
            ],
        }
    ]
};


/*********************************
 * 생성된 레이아웃에 ID별로 attach합니다.
*********************************/
export var contentLayout = new dhx.Layout("allIngredientsLayout", config);

    // GRID 세팅
    contentLayout.getCell("ingreGroupGrid").attach(ingreGroupGrid); // 성분그룹 GRID
    contentLayout.getCell("ingreTitleGrid").attach(ingreTitleGrid); // 성분타이틀 GRID
    contentLayout.getCell("ingreItemGrid").attach(ingreItemGrid); // 성분 GRID    
    contentLayout.getCell("ingreSameGrid").attach(ingreSameGrid); // 동의어 GRID

    contentLayout.getCell("ingreGroupHeader").attach(ingreGroupHeader); // 성분그룹 헤더
    contentLayout.getCell("ingreTitleHeader").attach(ingreTitleHeader); // 성분타이틀 헤더
    contentLayout.getCell("ingreItemHeader").attach(ingreItemHeader); // 성분 헤더
    contentLayout.getCell("ingreSameHeader").attach(ingreSameHeader); // 동의어 헤더

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
})

/*********************************
 * 각 그리드 추가/수정/삭제 윈도우 생성
*********************************/
var editWindow = new dhx.Window({
    width: 440,
    title: "타이틀",
//    minHeight: 500,
    modal: true
});

// editWindow 폼 : 성분 > 타이틀저장 config
var titleSaveConfig = {
    padding: 0,
    rows: [
        {
            id:"registCheck",
            type: "checkboxGroup",
            name: "registCheck",
            disabled: false,
            required: false,
            hidden: false,
            options:{
                cols: [
                    { 
                        type: "checkbox", 
                        text: "알레르기 (나쁨)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "자외선차단 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "미백 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "자외선차단 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "미백 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "탄력 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "알레르기 (나쁨)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "자외선차단 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "미백 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "탄력 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "미백 (좋음)",
                        width: "50%"
                    },
                    { 
                        type: "checkbox", 
                        text: "탄력 (좋음)",
                        width: "50%"
                    },
                ]
            },
        },
        {
            align: "end",
            cols: [
                {
                    id: "apply-button",
                    type: "button",
                    text: "추가/저장",              
                    icon: "mdi mdi-check",
                    circle: true,
                    submit: true,
                }
            ]
        }
        
    ]
}

// 추가/수정 윈도우 내 폼 생성
var titleSave = new dhx.Form(null, titleSaveConfig); // 성분 > 타이틀 저장 폼 생성

// 윈도우 열기
function openEditor(tit) {
    var winTitle = tit;
    
    editWindow.show();
    editWindow.header.data.update("title", { value: winTitle });
}

// 윈도우 닫기
function closeEditor() {
    titleSave.clear();
    editWindow.hide();
}
