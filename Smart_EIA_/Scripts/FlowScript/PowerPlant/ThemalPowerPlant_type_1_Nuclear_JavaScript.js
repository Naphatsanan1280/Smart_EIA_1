﻿

/************************************ สรุปผล***************************** */

function resulte() {
    $(".specify").hide();
    $("#inresulte").show();
    $("#Resulte").show();
    document.getElementById('changeLabel').innerHTML = "เข้าข่าย";
    document.getElementById('changeLabel').style.color = 'Red';
}  

/*********************************************** นิวเคลียร์ **********************************************/
function N8_152() {
resulte();
document.getElementById('labeltype').innerHTML = 
     '<div id = "b">'+'<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม สำหรับโครงการ กิจการ หรือการดำเนินการฯ ที่อาจมีผลกระทบอย่างรุนแรง (EHIA)</h5>'
    + "<h5> เสนอต่อ </h5>"
    + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
    + "<h5> ตามกฎหมาย </h5>"
    + '- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EHIA พ.ศ. 2562 (ลำดับที่ 11)'
    + '</div>'
    + '<br />'
    + "<hr />";
}