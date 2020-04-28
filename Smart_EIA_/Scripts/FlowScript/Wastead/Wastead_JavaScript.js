function resulte() {
    $(".specify").hide();
    $("#inresulte").show();
    $("#Resulte").show();
    $("#label2").show();

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

function was_7_1() {
    resulte2();
    document.getElementById('labeltype').innerHTML = "";
}
function was_7_2() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a"> รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + "<hr />";
}
function was_7_3() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_4() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_5() {
    resulte();
    var areaIndrustry = $('#selectprotectarea1').find(":selected").val();
    if (areaIndrustry == "1") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a"> รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.ชลบุรี พ.ศ. 2553 '
            + '</div>'
            + "<hr />";
    }
    else if (areaIndrustry == "2" || areaIndrustry == "3") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a"> รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.เพชรบุรี และ จ.ประจวบคีรีขันธ์ พ.ศ. 2561 '
            + '</div>'
            + "<hr />";
    }
    else if ( areaIndrustry == "4" ) {
        document.getElementById('labeltype').innerHTML =
           '<div id = "b">' +  '<h5 id="a"> รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.พังงา พ.ศ. 2559'
            + '</div>'
            + "<hr />";
    }
    else if (areaIndrustry == "5") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a"> รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.กระบี่ พ.ศ. 2559'
            + '</div>'
            + "<hr />";
    }
    else if (areaIndrustry == "6") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a"> รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.สุราษฎร์ธานี พ.ศ. 2557'
            + '</div>'
            + "<hr />";
    }
   
   
}
function was_7_6() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_7() {
    resulte();
    var areaIndrustry = $('#selectprotectarea2').find(":selected").val();
    if (areaIndrustry == "1") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a"> รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.พังงา พ.ศ. 2559'
            + '</div>'
            + "<hr />";
    }
    else if (areaIndrustry == "2") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a"> รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.กระบี่ พ.ศ. 2559'
            + '</div>'
            + "<hr />";
    }  
}
function was_7_8() {
    resulte();
    var areaIndrustry = $('#selectprotectarea3').find(":selected").val();
    if (areaIndrustry == "1") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.ชลบุรี พ.ศ. 2553 '
            + '</div>'
            + "<hr />";
    }
    else if (areaIndrustry == "2") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ. ภูเก็ต พ.ศ. 2560'
            + '</div>'
            + "<hr />";
    }
    else if (areaIndrustry == "3" || areaIndrustry == "4") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.เพชรบุรี และ จ.ประจวบคีรีขันธ์ พ.ศ. 2561 '
            + '</div>'
            + "<hr />";
    }
    else if (areaIndrustry == "5") {
        document.getElementById('labeltype').innerHTML = 
           '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
            + "<h5> เสนอต่อ </h5>"
            + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
            + "<h5> ตามกฎหมาย </h5>"
            + 'ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.สุราษฎร์ธานี พ.ศ. 2557'
            + '</div>'
            + "<hr />";
    }


}
function was_7_9() {
    resulte2();
    document.getElementById('labeltype').innerHTML = "";
}
function was_7_10() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a"> รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + "<hr />";
}
function was_7_11() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ. 2562 (ลำดับที่ 17)"
        + '</div>'
        + "<hr />";
}
function was_7_12() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม สำหรับโครงการ กิจการ หรือการดำเนินการฯ ที่อาจมีผลกระทบอย่างรุนแรง (EHIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EHIA พ.ศ. 2562 (ลำดับที่ 7)"
        + '</div>'
        + "<hr />";
}
function was_7_13() {
    resulte2();
    document.getElementById('labeltype').innerHTML = "";
}
function was_7_14() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a"> รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + "<hr />";
}
function was_7_15() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_16() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_17() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_18() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.ชลบุรี พ.ศ. 2553"
        + '</div>'
        + "<hr />";
}
function was_7_19() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a"> 1. รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + '<div id = "b">' + '<h5 id="a"> 2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.ชลบุรี พ.ศ. 2553 "
        + "<hr />"; 

}
function was_7_20() {
    resulte();
    document.getElementById('labeltype').innerHTML =  
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + "<br />"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.ชลบุรี พ.ศ. 2553 "
        + "<hr />";

}

function was_7_21() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.ชลบุรี พ.ศ. 2553 "
        + "<hr />";

}
function was_7_22() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_23() {
    resulte2();
    document.getElementById('labeltype').innerHTML = "";
}
function was_7_24() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a"> รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + "<hr />";
}
function was_7_25() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_26() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_27() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_28() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + '</div>'
        + "<hr />";
}
function was_7_29() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_30() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
        '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"

        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}

function was_7_31() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_32() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดเขตพื้นที่และมาตรการคุ้มครองสิ่งแวดล้อมฯ จ.ชลบุรี พ.ศ. 2553 "
        + '</div>'
        + "<hr />";
}
function was_7_33() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_34() {
    resulte2();
    document.getElementById('labeltype').innerHTML = "";
}
function was_7_35() {
    resulte();
    document.getElementById('labeltype').innerHTML =
       '<div id = "b">' +  '<h5 id="a"> รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + "<hr />";
}
function was_7_36() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_37() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_38() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_39() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + '</div>'
        + "<hr />";
}
function was_7_40() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}

function was_7_41() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
        '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"

        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_42() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_43() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_44() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม สำหรับโครงการ กิจการ หรือการดำเนินการฯ ที่อาจมีผลกระทบอย่างรุนแรง (EHIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EHIA พ.ศ. 2562 (ลำดับที่ 7)"
        + '</div>'
        + "<hr />";
}
function was_7_45() {
    resulte2();
    document.getElementById('labeltype').innerHTML = "";
}
function was_7_46() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a"> รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + 'มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554'
        + '</div>'
        + "<hr />";
}
function was_7_47() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_48() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"
        + '</div>'
        + "<hr />";
}
function was_7_49() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_50() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + '</div>'
        + "<hr />";
}

function was_7_51() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_52() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"

        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_53() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_54() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม เรื่อง กำหนดโครงการ กิจการหรือการดำเนินการ ซึ่งต้องจัดทำ EIA พ.ศ.2562 (ลำดับที่ 33)"
        + '</div>'
        + "<hr />";
}
function was_7_55() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + '</div>'
        + "<hr />";
}
function was_7_56() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id = "im1" width = "50px" height = "50px" src = "/Image/กรมป่าไม้.png" /> &nbsp; กรมป่าไม้ '
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_57() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ. 2554"

        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_58() {
    resulte();
    document.getElementById('labeltype').innerHTML =
       '<div id = "b">' +  '<h5 id="a">1. รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}
function was_7_59() {
    resulte();
    document.getElementById('labeltype').innerHTML = 
       '<div id = "b">' + '<h5 id="a">1. รายงานการประเมินผลกระทบสิ่งแวดล้อม (EIA)</h5>'
        + "<h5> เสนอต่อ </h5>"
        + '<img id="im2" width="50px" height="50px" src="/Image/สผ.png" /> &nbsp; สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + '- มติคณะรัฐมนตรีเกี่ยวกับป่าอนุรักษ์เพิ่มเติม พ.ศ.2554'
        + '</div>'
        + "<hr />"

        + 
       '<div id = "b">' + '<h5 id="a">2. รายงานผลกระทบสิ่งแวดล้อมเบื้องต้น (IEE) </h5>'
        + "<h5> เสนอต่อ </h5>"
        + ' <img id = "im2" width = "50px" height = "50px" src = "/Image/กนอ.jpg" /> &nbsp; การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)'
        + "<h5> ตามกฎหมาย </h5>"
        + "- ข้อกำหนดการขออนุญาตของการนิคมอุตสาหกรรมแห่งประเทศไทย พ.ศ.2562 "
        + "<hr />";

}





