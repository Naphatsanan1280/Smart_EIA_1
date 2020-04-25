$(document).ready(function () {
    $("#selectPowerplanttype").on('change', function () {
        $('#selectFueltype').prop('selectedIndex', 0);
        var type = $('#selectPowerplanttype').find(":selected").val();
        if (type == "none") {
            alert("กรุณาเลือกประเภทโรงไฟฟ้า");
        }
        else if (type == "1") {
            $('#Fueltype').show();//ประเภทเชื้อเพลิง
            $("#selectFueltype").on('change', function () {
                $('#selectTotalcapacity').prop('selectedIndex', 0);
                var Fueltype = $('#selectFueltype').find(":selected").val();
                if (Fueltype === "none") {
                    alert("กรุณาเลือกประเภทเชื้อเพลิง");
                }
                else if (Fueltype === "1") { //ก๊าซธรรมชาติ
                    $("#okbtn").hide();
                    $("#Totalcapacity").show();//กำลังการผลิตรวม (เมกะวัตต์)
                    $("#selectTotalcapacity").on('change', function () {
                        var Totalcapacity = $('#selectTotalcapacity').find(":selected").val();
                        if (Totalcapacity === "none") {
                            alert("กรุณาเลือกกำลังการผลิตรวม");
                        } else if (Totalcapacity === "1") {//<10
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //8.1
                                                G1_8_1();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //G1 EIA  ชล
                                                        G1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //G2  (Environmental Checklist)  + IEE ชล
                                                                        G2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //G3 IEE ชล
                                                                        G3();
                                                                    } else if (Factorytype == "3") {
                                                                        //G4 EIA +IEE ชล
                                                                        G4();
                                                                    }
                                                                     else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //IEE G5 ชล
                                                                G5();
                                                            }
                                                        });
                                                    }
                                                });


                                            }
                                            else if (areaProtect === "3" || areaProtect === "4" ) {//เพชรบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //G1 EIA  พ ป 
                                                        G1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //G2  (Environmental Checklist)  + IEE พ ป 
                                                                        G2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //G3 IEE พ ป 
                                                                        G3();
                                                                    } else if (Factorytype == "3") {
                                                                        //G4 EIA +IEE พ ป 
                                                                        G4();
                                                                    }
                                                                     else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //IEE G5 พ ป
                                                                G5();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //EIA 8.2
                                                        G1_8_2();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //8.3  (Environmental Checklist)  + IEE
                                                                        G1_8_3();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.4 IEE
                                                                        G1_8_4();

                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        // 8.5 EIA + IEE
                                                                        G1_8_5();
                                                                    }
                                                                     else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //IEE 8.6
                                                                G1_8_6();
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                            
                                        });
                                    }
/*---------*/                        else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //8.7 EIA+IEE
                                                G1_8_7();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.8 EIA ชลบุรี
                                                        G1_8_8();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.9 (Environmental Checklist) + ESA ชลบุรี
                                                                        G1_8_9();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.10 IEE+ESA ชลบุรี
                                                                        G1_8_10();
                                                                    } else if (Factorytype == "3") {
                                                                        // 8.11 EIA+IEE + ESA ชลบุรี
                                                                        G1_8_11();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                  //IEE + ESA 8.12 ชลบุรี
                                                                       G1_8_12();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี ประจวบ
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.8 EIA
                                                        G1_8_8();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.9 (Environmental Checklist) + ESA
                                                                        G1_8_9();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.10 IEE+ESA
                                                                        G1_8_10();
                                                                    } else if (Factorytype == "3") {
                                                                        // 8.11 EIA+IEE + ESA
                                                                        G1_8_11();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //IEE + ESA 8.12
                                                                G1_8_12();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.13 EIA
                                                        G1_8_13();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.14 (Environmental Checklist) + ESA
                                                                        G1_8_14();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.15 IEE+ESA
                                                                        G1_8_15();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.16 EAI+IEE + ESA
                                                                        G1_8_16();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //ESA 8.17
                                                                G1_8_17();
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        }
                        else if (Totalcapacity === "2") {//>  หรือ เท่ากับ  10 ถึง < 3,000
                            //EHIA 8.18
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                G1_8_19();
                            });
                        }
                        else if (Totalcapacity === "3") {//>  หรือ เท่ากับ  3,000
                            //EIA 8.19
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                G1_8_18()();
                            });
                        }
                    });
                }
                else if (Fueltype === "2") { // ชีวมวล
                    $("#okbtn").hide();
                    $("#Totalcapacity2").show();
                    $("#selectTotalcapacity2").on('change', function () {
                        $('#selectsolidfuel').prop('selectedIndex', 0);
                        var Totalcapacity2 = $('#selectTotalcapacity2').find(":selected").val();
                        if (Totalcapacity2 == "1") { // < 10
                            $("#solidfuel").show();
                            $("#selectsolidfuel").on('change', function () {
                                var solidfuel = $('#selectsolidfuel').find(":selected").val();
                                if (solidfuel == "1") { // เชื้อเพลิง ใช่
                                    $("#okbtn").show();
                                    $("#Btnok").click(function () {
                                        $("#areaIndrustry").show();
                                        $("#BtnareaIndrustry").click(function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                                $("#areaProtect").show();
                                                $("#BtnareaProtect").on('click', function () {
                                                    var areaProtect = $('#selectareaProtect').find(":selected").val();
                                                    if (areaProtect === "1") { //ภูเก็ต
                                                        //EIA+IEE+CoP 8.20
                                                        Bio_8_20();
                                                    }
                                                    else if (areaProtect === "2") {//ชลบุรี
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA B1
                                                                Bio_B1();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype === "1") {
                                                                                //รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) +CoP + IEE B2
                                                                                Bio_B2();
                                                                            }
                                                                            else if (Factorytype === "2") {
                                                                                // IEE+CoP B3
                                                                                Bio_B3();
                                                                            } else if (Factorytype == "3") {
                                                                                // EIA+IEE+CoP B4
                                                                                Bio_B4();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    } else {
                                                                        //IEE+CoP B5
                                                                        Bio_B5();
                                                                    }
                                                                });
                                                            }
                                                        });


                                                    }
                                                    else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA B1
                                                                Bio_B1();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype === "1") {
                                                                                //รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) +CoP + IEE B2
                                                                                Bio_B2();
                                                                            }
                                                                            else if (Factorytype === "2") {
                                                                                // IEE+CoP B3
                                                                                Bio_B3();
                                                                            } else if (Factorytype == "3") {
                                                                                // EIA+IEE+CoP B4
                                                                                Bio_B4();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    } else {
                                                                        //IEE+CoP B5
                                                                        Bio_B5();
                                                                    }
                                                                });
                                                            }
                                                        });

                                                    }
                                                    else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA 8.21
                                                                Bio_8_21();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype === "1") {
                                                                                //รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) +CoP + IEE B8.22
                                                                                Bio_8_22();
                                                                            }
                                                                            else if (Factorytype === "2") {
                                                                                // IEE+CoP 8.23
                                                                                Bio_8_23();

                                                                            } else if (Factorytype == "3") {
                                                                                // EIA+IEE+CoP 8.24
                                                                                Bio_8_24();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });
                                                                    } else {
                                                                        //IEE+CoP 8.25
                                                                        Bio_8_25();
                                                                    }
                                                                });
                                                            }

                                                        });
                                                    }

                                                });
                                            }
                                            /*---------*/
                                            else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                                $("#areaProtect").show();
                                                $("#BtnareaProtect").on('click', function () {
                                                    var areaProtect = $('#selectareaProtect').find(":selected").val();
                                                    if (areaProtect === "1") { //ภูเก็ต
                                                        // 8.26 EIA+ESA
                                                        Bio_8_26();
                                                    }
                                                    else if (areaProtect === "2") {//ชลบุรี
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA 8.27
                                                                Bio_8_27();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype === "1") {
                                                                                // 8.28  รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + CoP + IEE + ESA
                                                                                Bio_8_28();
                                                                            }
                                                                            else if (Factorytype == '2') {
                                                                                // 8.29 EIA+IEE+CoP+ESA
                                                                                Bio_8_29();
                                                                            }
                                                                            else if (Factorytype == '3') {
                                                                                // 8.30  EIA+IEE+CoP+ESA
                                                                                Bio_8_30();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    }
                                                                    else {
                                                                        // IEE+ESA+CoP 8.31
                                                                        Bio_8_31();
                                                                    }
                                                                });
                                                            }
                                                        });

                                                    }
                                                    else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี ประจวบ
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA 8.27
                                                                Bio_8_27();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype === "1") {
                                                                                // 8.28  รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + CoP + IEE + ESA
                                                                                Bio_8_28();
                                                                            }
                                                                            else if (Factorytype == '3') {
                                                                                // 8.30  EIA+IEE+CoP+ESA
                                                                                Bio_8_30();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    }
                                                                    else {
                                                                        // IEE+ESA+CoP 8.31
                                                                        Bio_8_31();
                                                                    }
                                                                });
                                                            }
                                                        });

                                                    }
                                                    else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                // 8.32 EIA
                                                                Bio_8_32();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype == '1') {
                                                                                // 8.33  รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + CoP + IEE + ESA
                                                                                Bio_8_33();
                                                                            }
                                                                            else if (Factorytype == '2') {
                                                                                // 8.34  IEE+CoP+ESA
                                                                                Bio_8_34();
                                                                            }
                                                                            else if (Factorytype == '3') {
                                                                                // 8.35  EIA+IEE+CoP+ESA
                                                                                Bio_8_35();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });
                                                                    } else {
                                                                        // ESA+CoP 8.36
                                                                        Bio_8_36();
                                                                    }
                                                                });
                                                            }

                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    });
                                }
                                else if (solidfuel == "2") {// เชื้อเพลิง ไม่ใช่
                                    $("#okbtn").show();
                                    $("#Btnok").click(function () {
                                        $("#areaIndrustry").show();
                                        $("#BtnareaIndrustry").click(function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                                $("#areaProtect").show();
                                                $("#BtnareaProtect").on('click', function () {
                                                    var areaProtect = $('#selectareaProtect').find(":selected").val();
                                                    if (areaProtect === "1") { //ภูเก็ต
                                                        //EIA+IEE 8.37
                                                        Bio_8_37();
                                                    }
                                                    else if (areaProtect === "2") {//ชลบุรี
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA B6
                                                                Bio_B6();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype === "1") {
                                                                                //รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) +IEE B7
                                                                                Bio_B7();
                                                                            }
                                                                            else if (Factorytype === "2") {
                                                                                // IEE B8
                                                                                Bio_B8();
                                                                            } else if (Factorytype == "3") {
                                                                                // EIA+IEE B9
                                                                                Bio_B9();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    }
                                                                    else {
                                                                        //IEE B10
                                                                        Bio_B10();
                                                                    }
                                                                });
                                                            }
                                                        });


                                                    }
                                                    else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA B6
                                                                Bio_B6();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype === "1") {
                                                                                //รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) +IEE B7
                                                                                Bio_B7();
                                                                            }
                                                                            else if (Factorytype === "2") {
                                                                                // IEE B8
                                                                                Bio_B8();
                                                                            } else if (Factorytype == "3") {
                                                                                // EIA+IEE B9
                                                                                Bio_B9();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    }
                                                                    else {
                                                                        //IEE B10
                                                                        Bio_B10();
                                                                    }
                                                                });
                                                            }
                                                        });

                                                    }
                                                    else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA 8.38
                                                                Bio_8_38();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype == "1") {
                                                                                //รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) +IEE 8.39
                                                                                Bio_8_39();
                                                                            }
                                                                            else if (Factorytype == "2") {
                                                                                // IEE 8.40
                                                                                Bio_8_40();
                                                                            }
                                                                            else if (Factorytype == "3") {
                                                                                // EIA+IEE 8.41
                                                                                Bio_8_41();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });
                                                                    } else {
                                                                        //IEE 8.42
                                                                        Bio_8_42();
                                                                    }
                                                                });
                                                            }

                                                        });
                                                    }

                                                });
                                            }
                                            /*---------*/
                                            else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                                $("#areaProtect").show();
                                                $("#BtnareaProtect").on('click', function () {
                                                    var areaProtect = $('#selectareaProtect').find(":selected").val();
                                                    if (areaProtect === "1") { //ภูเก็ต
                                                        // 8.43 EIA+ESA
                                                        Bio_8_43();
                                                    }
                                                    else if (areaProtect === "2") {//ชลบุรี
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA 8.44
                                                                Bio_8_44();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype == '1') {
                                                                                // 8.45  รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + IEE + ESA
                                                                                Bio_8_45();
                                                                            }
                                                                            else if (Factorytype == '2') {
                                                                                // 8.46  IEE+ESA
                                                                                Bio_8_46();
                                                                            }
                                                                            else if (Factorytype == '3') {
                                                                                // 8.47 EIA+IEE+ESA
                                                                                Bio_8_47();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    }
                                                                    else {
                                                                        // IEE+ESA 8.48
                                                                        Bio_8_48();
                                                                    }
                                                                });
                                                            }
                                                        });

                                                    }
                                                    else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี ประจวบ
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                //EIA 8.44
                                                                Bio_8_44();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype == '1') {
                                                                                // 8.45  รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + IEE + ESA
                                                                                Bio_8_45();
                                                                            }
                                                                            else if (Factorytype == '2') {
                                                                                // 8.46  IEE+ESA
                                                                                Bio_8_46();
                                                                            }
                                                                            else if (Factorytype == '3') {
                                                                                // 8.47 EIA+IEE+ESA
                                                                                Bio_8_47();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });

                                                                    }
                                                                    else {
                                                                        // IEE+ESA 8.48
                                                                        Bio_8_48();
                                                                    }
                                                                });
                                                            }
                                                        });

                                                    }
                                                    else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                        $("#RiverArea").show();
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea === "1") {
                                                                // 8.49 EIA
                                                                Bio_8_49();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").on('click', function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype == '1') {
                                                                                // 8.50  รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + ESA
                                                                                Bio_8_50();
                                                                            }
                                                                            else if (Factorytype == '2') {
                                                                                // 8.51  IEE+ESA
                                                                                Bio_8_51();
                                                                            }
                                                                            else if (Factorytype == '3') {
                                                                                // 8.52  EIA+ESA
                                                                                Bio_8_52();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });
                                                                    } else {
                                                                        // ESA 8.53
                                                                        Bio_8_53();
                                                                    }
                                                                });
                                                            }

                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    });
                                }
                            });
                        }
                        else if (Totalcapacity2 == "2") { //>10 - <150
                            //EIA 8.54
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                Bio_8_54();
                            });
                        }
                        else if (Totalcapacity2 == "3") { // >150
                            //EHIA 8.55
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                Bio_8_55();
                            });

                        } else {
                            $("#okbtn").hide();
                        }
                    });


                }
                else if (Fueltype === "3") { // ถ่านหิน
                    $("#okbtn").hide();
                    $("#Totalcapacity3").show();//กำลังการผลิตรวม (เมกะวัตต์)
                    $("#selectTotalcapacity3").on('change', function () {
                        var Totalcapacity3 = $('#selectTotalcapacity3').find(":selected").val();
                        if (Totalcapacity3 === "none") {
                            alert("กรุณาเลือกกำลังการผลิตรวม");
                        }
                        else if (Totalcapacity3 === "1") {//<10
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //EIA+IEE 8.56
                                                C_8_56();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //C1
                                                        c1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //C2  (Environmental Checklist)  + IEE
                                                                        c2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //C3 IEE
                                                                        c3();
                                                                    } else if (Factorytype == "3") {
                                                                        //G4 EIA +IEE ชล
                                                                        G4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //IEE C5
                                                                c5();
                                                            }
                                                        });
                                                    }
                                                });


                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //C1
                                                        c1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //C2  (Environmental Checklist)  + IEE
                                                                        c2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //C3 IEE
                                                                        c3();
                                                                    } else if (Factorytype == "3") {
                                                                        //G4 EIA +IEE ชล
                                                                        G4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //IEE C5
                                                                c5();
                                                            }
                                                        });
                                                    }
                                                });



                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //EIA 8.57
                                                        C_8_57();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //8.58 (Environmental Checklist)  + IEE
                                                                        C_8_58();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.59 IEE
                                                                        C_8_59();

                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        // 8.60 EIA + IEE
                                                                        C_8_60();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //IEE 8.61
                                                                C_8_61();
                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }
/*---------*/                        else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //8.62 EIA+IEE
                                                C_8_62();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.63 EIA
                                                        C_8_63();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.64 (Environmental Checklist) + ESA
                                                                        C_8_64();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.65 IEE+ESA
                                                                        C_8_65();
                                                                    } else if (Factorytype == "3") {
                                                                        // 8.66 EIA+IEE + ESA
                                                                        C_8_66();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //IEE + ESA 8.67
                                                                C_8_67();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.63 EIA
                                                        C_8_63();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.64 (Environmental Checklist) + ESA
                                                                        C_8_64();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.65 IEE+ESA
                                                                        C_8_65();
                                                                    } else if (Factorytype == "3") {
                                                                        // 8.66 EIA+IEE + ESA
                                                                        C_8_66();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //IEE + ESA 8.67
                                                                C_8_67();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.68 EIA
                                                        C_8_68();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.69 (Environmental Checklist) + ESA
                                                                        C_8_69();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.70 IEE+ESA
                                                                        C_8_70();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.71 EAI+IEE + ESA
                                                                        C_8_71();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //ESA 8.72
                                                                C_8_72();
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                        });
                                    }
                                });
                            });

                        }
                        else if (Totalcapacity3 === "2") {//>  หรือ เท่ากับ  10 ถึง < 3,000
                            //EHIA 8.73
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                C_8_73();
                            });
                        }
                        else if (Totalcapacity3 === "3") {//>  หรือ เท่ากับ  3,000
                            //EIA 8.74
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                C_8_74();
                            });
                        }
                    });

                }
                else if (Fueltype === "4") {// ขยะมูลฝอย
                    $("#okbtn").hide();
                    $("#Totalcapacity4").show();//กำลังการผลิตรวม (เมกะวัตต์)
                    $("#selectTotalcapacity4").on('change', function () {
                        var Totalcapacity4 = $('#selectTotalcapacity4').find(":selected").val();
                        if (Totalcapacity4 === "none") {
                            alert("กรุณาเลือกกำลังการผลิตรวม");
                        }
                        else if (Totalcapacity4 === "1") {//<10
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //EIA+IEE 8.75
                                                s_8_75();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //S1 EIA
                                                        s1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //S2 รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + CoP + IEE 
                                                                        s2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //S3 IEE+CoP
                                                                        s3();
                                                                    } else if (Factorytype == "3") {
                                                                        //S4 EIA+IEE+CoP   
                                                                        s4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //S5 IEE+CoP  
                                                                s5();
                                                            }
                                                        });
                                                    }
                                                });


                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //S1 EIA
                                                        s1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //S2 รายการข้อมูลด้านสิ่งแวดล้อม (Environmental Checklist) + CoP + IEE 
                                                                        s2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //S3 IEE+CoP
                                                                        s3();
                                                                    } else if (Factorytype == "3") {
                                                                        //S4 EIA+IEE+CoP   
                                                                        s4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //S5 IEE+CoP  
                                                                s5();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //EIA 8.76
                                                        s_8_76();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //8.77  (Environmental Checklist)  + IEE
                                                                        s_8_77();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.78 IEE
                                                                        s_8_78();

                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        // 8.79 EIA + IEE
                                                                        s_8_79();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //IEE 8.80
                                                                s_8_80();
                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }
/*---------*/                        else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //8.81 EIA+IEE
                                                s_8_81();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.82 EIA
                                                        s_8_82();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.83 (Environmental Checklist) + ESA
                                                                        s_8_83();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.84 IEE+ESA
                                                                        s_8_84();
                                                                    } else if (Factorytype == "3") {
                                                                        // 8.85 EIA+IEE + ESA
                                                                        s_8_85();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //IEE + ESA 8.86
                                                                s_8_86();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี ประจวบ
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.82 EIA
                                                        s_8_82();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.83 (Environmental Checklist) + ESA
                                                                        s_8_83();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.84 IEE+ESA
                                                                        s_8_84();
                                                                    } else if (Factorytype == "3") {
                                                                        // 8.85 EIA+IEE + ESA
                                                                        s_8_85();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //IEE + ESA 8.86
                                                                s_8_86();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.87 EIA
                                                        s_8_87();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.88 (Environmental Checklist) + ESA
                                                                        s_8_88();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.89 IEE+ESA
                                                                        s_8_89();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.90 EAI+IEE + ESA
                                                                        s_8_90();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //ESA 8.91
                                                                s_8_91();
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        }
                        else {//>  หรือ เท่ากับ  10                               
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry == "1") {
                                        $("#area80").show();
                                        $("#Btnarea80").on('click', function () {
                                            var area80 = $('#selectarea80').find(":selected").val();
                                            if (area80 == "1") {
                                                //8.102
                                                s_8_102();
                                            }
                                            else {
                                                $("#AreaAll").show();
                                                $("#BtnAreaAll").on('click', function () {
                                                    var areaAll = $('#leftValues').find(":selected").val();
                                                    if (areaAll == "1") {
                                                        //8.92
                                                        s_8_92();
                                                    }
                                                    else if (areaAll == "2") {
                                                        //8.94
                                                        s_8_94();
                                                    }
                                                    else if (areaAll == "3") {
                                                        //8.96
                                                        s_8_96();
                                                    }
                                                    else if (areaAll == "4") {
                                                        //8.98
                                                        s_8_98();
                                                    }
                                                    else if (areaAll == "5") {
                                                        //8.100
                                                        s_8_100();
                                                    }
                                                    else if (areaAll == "6") {
                                                        //8.97
                                                        s_8_93();
                                                    }
                                                   
                                                });
                                            }
                                        });
                                    } else {
                                        $("#area80").show();
                                        $("#Btnarea80").on('click', function () {
                                            var area80 = $('#selectarea80').find(":selected").val();
                                            if (area80 == "1") {
                                                //8.114
                                                s_8_114();
                                            }
                                            else {
                                                $("#AreaAll").show();
                                                $("#BtnAreaAll").on('click', function () {
                                                    var areaAll = $('#leftValues').find(":selected").val();
                                                    if (areaAll == "1") {
                                                        //8.104
                                                        s_8_104();
                                                    }
                                                    else if (areaAll == "2") {
                                                        //8.106
                                                        s_8_106();
                                                    }
                                                    else if (areaAll == "3") {
                                                        //8.108
                                                        s_8_108();
                                                    }
                                                    else if (areaAll == "4") {
                                                        //8.110
                                                        s_8_110();
                                                    }
                                                    else if (areaAll == "5") {
                                                        //8.112
                                                        s_8_112();
                                                    }
                                                    else if (areaAll == "6") {
                                                        //8.105
                                                        s_8_105();
                                                    }
                                                });
                                            }
                                        });
                                    }

                                });
                            });
                        }
                    });
                }
                else if (Fueltype === "5") {// ก๊าซชีวภาพ
                    $("#okbtn").hide();
                    $("#Totalcapacity4").show();//กำลังการผลิตรวม (เมกะวัตต์)
                    $("#selectTotalcapacity4").on('change', function () {
                        var Totalcapacity4 = $('#selectTotalcapacity4').find(":selected").val();
                        if (Totalcapacity4 === "none") {
                            alert("กรุณาเลือกกำลังการผลิตรวม");
                        }
                        else if (Totalcapacity4 === "1") {//<10
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                // 8.116
                                                bg_8_116();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //BG1
                                                        bg1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //BG2    
                                                                        bg2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //BG3
                                                                        bg3();
                                                                    } else if (Factorytype == "3") {
                                                                        //BG4 
                                                                        bg4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //BG5     
                                                                bg5();
                                                            }
                                                        });
                                                    }
                                                });


                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //BG1
                                                        bg1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //BG2    
                                                                        bg2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //BG3
                                                                        bg3();
                                                                    } else if (Factorytype == "3") {
                                                                        //BG4 
                                                                        bg4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //BG5     
                                                                bg5();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //8.117
                                                        bg_8_117();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //8.118
                                                                        bg_8_118();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.119
                                                                        bg_8_119();

                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        // 8.120
                                                                        bg_8_120();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //8.121
                                                                bg_8_121();
                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }
/*---------*/                        else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //8.122
                                                bg_8_122();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.123
                                                        bg_8_123();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.124
                                                                        bg_8_124();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.125
                                                                        bg_8_125();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.126
                                                                        bg_8_126();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //8.127
                                                                bg_8_127();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี ประจวบ
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.123
                                                        bg_8_123();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.124
                                                                        bg_8_124();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.125
                                                                        bg_8_125();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.126
                                                                        bg_8_126();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //8.127
                                                                bg_8_127();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.128
                                                        bg_8_128();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.129
                                                                        bg_8_129();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.130
                                                                        bg_8_130();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.131
                                                                        bg_8_131();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //ESA 8.132
                                                                bg_8_132();
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        }
                        else {//>  หรือ เท่ากับ  10                               

                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                // 8.133
                                bg_8_133();
                            });

                        }
                    });

                }
                else if (Fueltype === "6") {//ขยะอุตสาหกรรม
                    $("#okbtn").hide();
                    $("#Totalcapacity4").show();//กำลังการผลิตรวม (เมกะวัตต์)
                    $("#selectTotalcapacity4").on('change', function () {
                        var Totalcapacity4 = $('#selectTotalcapacity4').find(":selected").val();
                        if (Totalcapacity4 === "none") {
                            alert("กรุณาเลือกกำลังการผลิตรวม");
                        }
                        else if (Totalcapacity4 === "1") {//<10
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                // 8.134
                                                i_8_134();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //l1
                                                        i1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //l2   
                                                                        i2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //l3
                                                                        i3();
                                                                    } else if (Factorytype == "3") {
                                                                        //l4    
                                                                        i4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //l5    
                                                                i5();
                                                            }
                                                        });
                                                    }
                                                });


                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //l1
                                                        i1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //l2   
                                                                        i2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //l3
                                                                        i3();
                                                                    } else if (Factorytype == "3") {
                                                                        //l4    
                                                                        i4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //l5    
                                                                i5();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //8.135
                                                        i_8_135();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //8.136
                                                                        i_8_136();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.137
                                                                        i_8_137();

                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        // 8.138
                                                                        i_8_138();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //8.139
                                                                i_8_139();
                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }
/*---------*/                        else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //8.140
                                                i_8_140();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.141
                                                        i_8_141();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.142
                                                                        i_8_142();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.143
                                                                        i_8_143();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.144
                                                                        i_8_144();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //8.145
                                                                i_8_145();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี ประจวบ
                                               
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.141
                                                        i_8_141();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.142
                                                                        i_8_142();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.143
                                                                        i_8_143();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.144
                                                                        i_8_144();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                //8.145
                                                                i_8_145();
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.146
                                                        i_8_146();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.147
                                                                        i_8_147();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.148
                                                                        i_8_148();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.149
                                                                        i_8_149();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //ESA 8.150
                                                                i_8_150();
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        }
                        else {//>  หรือ เท่ากับ  10     
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                // 8.151
                                i_8_151();
                            });


                        }
                    });
                }
                else if (Fueltype === "7") { //นิวเคลียร์
                    /*EHIA*/
                    $("#okbtn").show();
                    $("#Btnok").click(function () {
                        N8_152();
                    });
                }
                else if (Fueltype === "8") { //อื่นๆ 
                    $("#okbtn").hide();
                    $("#Totalcapacity4").show();//กำลังการผลิตรวม (เมกะวัตต์)
                    $("#selectTotalcapacity4").on('change', function () {
                        var Totalcapacity4 = $('#selectTotalcapacity4').find(":selected").val();
                        if (Totalcapacity4 === "none") {
                            alert("กรุณาเลือกกำลังการผลิตรวม");
                        }
                        else if (Totalcapacity4 === "1") {//<10
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry === "1") {//อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                // 8.153
                                                O_8_153();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //O1
                                                        O1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //O2 
                                                                        O2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //O3

                                                                        O3();
                                                                    } else if (Factorytype == "3") {
                                                                        //O4    

                                                                        O4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //O5     

                                                                O5();
                                                            }
                                                        });
                                                    }
                                                });


                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //O1
                                                        O1();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //O2 
                                                                        O2();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        //O3

                                                                        O3();
                                                                    } else if (Factorytype == "3") {
                                                                        //O4    

                                                                        O4();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            } else {
                                                                //O5     

                                                                O5();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        //8.154
                                                        O_8_154();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        //8.155
                                                                        O_8_155();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.156
                                                                        O_8_156();

                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        // 8.157
                                                                        O_8_157();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //8.158
                                                                O_8_158();
                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }
/*---------*/                        else if (areaIndrustry === "2") {//ไม่อยู่พื้นที่นิคมอุตสาหกรรม
                                        $("#areaProtect").show();
                                        $("#BtnareaProtect").on('click', function () {
                                            var areaProtect = $('#selectareaProtect').find(":selected").val();
                                            if (areaProtect === "1") { //ภูเก็ต
                                                //8.159
                                                O_8_159();
                                            }
                                            else if (areaProtect === "2") {//ชลบุรี
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.160
                                                        O_8_160();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.161
                                                                        O_8_161();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.162
                                                                        O_8_162();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.163
                                                                        O_8_163();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                // 8.164
                                                                O_8_164();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else if (areaProtect === "3" || areaProtect === "4") {//เพชรบุรี ประจวบ

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.160
                                                        O_8_160();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.161
                                                                        O_8_161();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.162
                                                                        O_8_162();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.163
                                                                        O_8_163();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });

                                                            }
                                                            else {
                                                                // 8.164
                                                                O_8_164();
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                            else if (areaProtect === "5") {//ไม่อยู่ในพื้นที่คุ้มครองสิ่งแวดล้อม
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea === "1") {
                                                        // 8.165
                                                        O_8_165();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype === "1") {
                                                                        // 8.166
                                                                        O_8_166();
                                                                    }
                                                                    else if (Factorytype === "2") {
                                                                        // 8.167
                                                                        O_8_167();

                                                                    } else if (Factorytype == "3") {
                                                                        // 8.168
                                                                        O_8_168();
                                                                    } else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            } else {
                                                                //ESA 8.169
                                                                O_8_169();
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        }
                        else {//>  หรือ เท่ากับ  10   
                            $("#okbtn").show();
                            $("#Btnok").click(function () {
                                // 8.170
                                O_8_170();
                            });

                        }
                    });
                }
            });
        }
        else if (type == "2") {
            Type_2();
        }
        else {
            $('#Fueltype').hide();
        }
    });
});