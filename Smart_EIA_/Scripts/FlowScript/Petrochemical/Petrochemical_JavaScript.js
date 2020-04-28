

/************************************ สรุปผล***************************** */

function resulte() {
    $(".specify").hide();
    $("#inresulte").show();
    $("#Resulte").show();
    document.getElementById('changeLabel').innerHTML = "เข้าข่าย";
    document.getElementById('changeLabel').style.color = 'Red';
}  

function resulte2() {
    $(".specify").hide();
    $("#inresulte").show();
    $("#Resulte").show();
    $("#label2").hide();
    document.getElementById('changeLabel').innerHTML = "ไม่เข้าข่าย";
    document.getElementById('changeLabel').style.color = 'Green';
}  

/*********************************************** อุตสาหกรรมปิโตรเคมี **********************************************/

/** คำตอบ */
function Pe_4_1() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
        '<div id = "b">'
        + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม สำหรับโครงการ กิจการ หรือการดำเนินการฯ ที่อาจมีผลกระทบอย่างรุนแรง (EHIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EHIA พ.ศ. 2562 (ลำดับที่ 4)'
        + '</div>'
        + "<hr />";

}
function Pe_4_2() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
        '<div id = "b">'
        + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562'
        + '</div>'
        + "<hr />";
}
function Pe_4_3() {

    resulte();
    document.getElementById('labeltype').innerHTML =
        '<div id = "b">' +
        '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 33)'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_4() {
    resulte2();
    document.getElementById('labeltype').innerHTML = '';

}
function Pe_4_5() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_6() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_7() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_8() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562'
        + '</div>'
        + "<hr />";
}
function Pe_4_9() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 33)'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_10() {
    resulte2();
    document.getElementById('labeltype').innerHTML = '';

}
function Pe_4_11() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_12() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_13() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_14() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 5)'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_15() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม สำหรับโครงการ กิจการ หรือการดำเนินการฯ ที่อาจมีผลกระทบอย่างรุนแรง (EHIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EHIA พ.ศ. 2562 (ลำดับที่ 4)'
        + '</div>'
        + "<hr />";

}
function Pe_4_16() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562'
        + '</div>'
        + "<hr />";
}
function Pe_4_17() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 33)'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_18() {
    resulte2();
    document.getElementById('labeltype').innerHTML = '';

}
function Pe_4_19() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_20() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_21() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_22() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 5)'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_23() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562'
        + '</div>'
        + "<hr />";
}
function Pe_4_24() {

    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 33)'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_25() {
    resulte2();
    document.getElementById('labeltype').innerHTML = '';

}
function Pe_4_26() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_27() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_28() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + '<br />'
        + "<hr />";
}
function Pe_4_29() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 5)'
        + '</div>'
        + '<br />'
        + "<hr />";
}

/** Flow */





