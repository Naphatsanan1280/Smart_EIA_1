

function Type_2() {
$("#Powersource").show();
            $("#selectPowersource").on('change', function () {
                $('#selectTechnology').prop('selectedIndex', 0);
                var Powersource = $('#selectPowersource').find(":selected").val();
                if (Powersource == "1") { //พลังงานแสงอาทิตย์
                    $("#Technology").show();
                    $("#selectTechnology").on('change', function () {
                        $('#selectFueltype').prop('selectedIndex', 0);
                        var Technology = $('#selectTechnology').find(":selected").val();
                        if (Technology == "1") {
                            $("#maximum").show();
                            $("#selectmaximum").on('change', function () {
                                var maximum = $('#selectmaximum').find(":selected").val();
                                if (maximum == "1") {//<=1000
                                 $("#RoofOrBuilding").show();
                                     $("#selectRoofOrBuilding").on('change', function () {
                                         var RoofOrBuilding = $('#selectRoofOrBuilding').find(":selected").val();
                                         if (RoofOrBuilding == "1") {
                                             $("#okbtn").show();
                                             $("#Btnok").click(function () {
                                                 $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                                 $("#BtnareaIndrustry").on('click', function () {
                                                     var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                                     if (areaIndrustry == "1") {
                                                         $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                         $("#BtnRiverArea").on('click', function () {
                                                             var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                             if (RiverArea == "1") {
                                                                 //EIA 8.175
                                                                 L_8_175();
                                                             } else {
                                                                 $("#WildArea").show();
                                                                 $("#BtnWildArea").on('click', function () {
                                                                     var WildArea = $('#selectWildArea').find(":selected").val();
                                                                     if (WildArea === "1") {
                                                                         $("#Factorytype").show();
                                                                         $("#BtnFactorytype").click(function () {
                                                                             var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                             if (Factorytype == "1") {
                                                                               // 8.171
                                                                                 L_8_171();
                                                                             }
                                                                             else if (Factorytype == "2") {
                                                                                 //8.172
                                                                                 L_8_172();
                                                                             }
                                                                             else if (Factorytype == "3") {
                                                                                 //8.173
                                                                                 L_8_173();
                                                                             }
                                                                             else {
                                                                                 alert("กรุณาเลือกประเภทโรงงาน");
                                                                             }
                                                                         });
                                                                     }
                                                                     else {
                                                                         //8.174
                                                                         L_8_174();
                                                                     }
                                                                 });
                                                             }
                                                         });
                                                     }
                                                     else {
                                                        
                                                                     $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                                     $("#BtnRiverArea").on('click', function () {
                                                                         var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                                         if (RiverArea == "1") {
                                                                             //EIA 8.180
                                                                             L_8_180();
                                                                         } else {
                                                                             $("#WildArea").show();
                                                                             $("#BtnWildArea").on('click', function () {
                                                                                 var WildArea = $('#selectWildArea').find(":selected").val();
                                                                                 if (WildArea === "1") {
                                                                                     $("#Factorytype").show();
                                                                                     $("#BtnFactorytype").click(function () {
                                                                                         var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                                         if (Factorytype == "1") {
                                                                                             // 8.176
                                                                                             L_8_176();
                                                                                         }
                                                                                         else if (Factorytype == "2") {
                                                                                             //8.177
                                                                                             L_8_177();
                                                                                         }
                                                                                         else if (Factorytype == "3") {
                                                                                             //8.178
                                                                                             L_8_178();
                                                                                         }
                                                                                         else {
                                                                                             alert("กรุณาเลือกประเภทโรงงาน");
                                                                                         }
                                                                                     });
                                                                                 }
                                                                                 else {
                                                                                     //8.179
                                                                                     L_8_179();
                                                                                 }
                                                                             });
                                                                         }
                                                            

                                                         });
                                                     }
                                                 });

                                             });
                                             
                                         } else {
                                             $("#okbtn").show();
                                             $("#Btnok").click(function () {
                                                 $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                                 $("#BtnareaIndrustry").on('click', function () {
                                                     var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                                     if (areaIndrustry == "1") {
                                                         $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                         $("#BtnRiverArea").on('click', function () {
                                                             var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                             if (RiverArea == "1") {
                                                                 //EIA 8.185
                                                                 L_8_185();
                                                             } else {
                                                                 $("#WildArea").show();
                                                                 $("#BtnWildArea").on('click', function () {
                                                                     var WildArea = $('#selectWildArea').find(":selected").val();
                                                                     if (WildArea === "1") {
                                                                         $("#Factorytype").show();
                                                                         $("#BtnFactorytype").click(function () {
                                                                             var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                             if (Factorytype == "1") {
                                                                                 // 8.181
                                                                                 L_8_181();
                                                                             }
                                                                             else if (Factorytype == "2") {
                                                                                 //8.182
                                                                                 L_8_182();
                                                                             }
                                                                             else if (Factorytype == "3") {
                                                                                 //8.183
                                                                                 L_8_183();
                                                                             }
                                                                             else {
                                                                                 alert("กรุณาเลือกประเภทโรงงาน");
                                                                             }
                                                                         });
                                                                     }
                                                                     else {
                                                                         //8.184
                                                                         L_8_184();
                                                                     }
                                                                 });
                                                             }
                                                         });
                                                     }
                                                     else {

                                                         $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                         $("#BtnRiverArea").on('click', function () {
                                                             var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                             if (RiverArea == "1") {
                                                                 //EIA 8.190
                                                                 L_8_190();
                                                             } else {
                                                                 $("#WildArea").show();
                                                                 $("#BtnWildArea").on('click', function () {
                                                                     var WildArea = $('#selectWildArea').find(":selected").val();
                                                                     if (WildArea === "1") {
                                                                         $("#Factorytype").show();
                                                                         $("#BtnFactorytype").click(function () {
                                                                             var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                             if (Factorytype == "1") {
                                                                                 // 8.186
                                                                                 L_8_186();
                                                                             }
                                                                             else if (Factorytype == "2") {
                                                                                 //8.187
                                                                                 L_8_187();
                                                                             }
                                                                             else if (Factorytype == "3") {
                                                                                 //8.188
                                                                                 L_8_188();
                                                                             }
                                                                             else {
                                                                                 alert("กรุณาเลือกประเภทโรงงาน");
                                                                             }
                                                                         });
                                                                     }
                                                                     else {
                                                                         //8.189
                                                                         L_8_189();
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
                                else { //>1000
                                    $("#okbtn").show();
                                    $("#Btnok").click(function () {
                                        $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") {
                                                $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //EIA 8.195
                                                        L_8_195();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").click(function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        // 8.191
                                                                        L_8_191();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.192
                                                                        L_8_192();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.193
                                                                        L_8_193();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.194
                                                                L_8_194();
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                            else {
                                                $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //EIA 8.200
                                                        L_8_200();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").click(function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        // 8.196
                                                                        L_8_196();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.197
                                                                        L_8_197();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.198
                                                                        L_8_198();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.199
                                                                L_8_199();
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
                        else {

                            $("#maximum").show();
                            $("#selectmaximum").on('change', function () {
                                var maximum = $('#selectmaximum').find(":selected").val();
                                if (maximum == "1") {//<=1000                                   
                                            $("#okbtn").show();
                                            $("#Btnok").click(function () {
                                                $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                                $("#BtnareaIndrustry").on('click', function () {
                                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                                    if (areaIndrustry == "1") {
                                                        $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea == "1") {
                                                                //EIA 8.205
                                                                L_8_205();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").click(function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype == "1") {
                                                                                // 8.201
                                                                                L_8_201();
                                                                            }
                                                                            else if (Factorytype == "2") {
                                                                                //8.202
                                                                                L_8_202();
                                                                            }
                                                                            else if (Factorytype == "3") {
                                                                                //8.203
                                                                                L_8_203();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });
                                                                    }
                                                                    else {
                                                                        //8.204
                                                                        L_8_204();
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                    else {

                                                        $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                        $("#BtnRiverArea").on('click', function () {
                                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                            if (RiverArea == "1") {
                                                                //EIA 8.210
                                                                L_8_210();
                                                            } else {
                                                                $("#WildArea").show();
                                                                $("#BtnWildArea").on('click', function () {
                                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                                    if (WildArea === "1") {
                                                                        $("#Factorytype").show();
                                                                        $("#BtnFactorytype").click(function () {
                                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                            if (Factorytype == "1") {
                                                                                // 8.206
                                                                                L_8_206();
                                                                            }
                                                                            else if (Factorytype == "2") {
                                                                                //8.207
                                                                                L_8_207();
                                                                            }
                                                                            else if (Factorytype == "3") {
                                                                                //8.208
                                                                                L_8_208();
                                                                            }
                                                                            else {
                                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                                            }
                                                                        });
                                                                    }
                                                                    else {
                                                                        //8.209
                                                                        L_8_209();
                                                                    }
                                                                });
                                                            }


                                                        });
                                                    }
                                                });

                                            });   
                                }
                                else { //>1000
                                    $("#okbtn").show();
                                    $("#Btnok").click(function () {
                                        $("#areaIndrustry").show();//พื้นที่นิคมอุตสาหกรรม
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") {
                                                $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //EIA 8.215
                                                        L_8_215();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").click(function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        // 8.211
                                                                        L_8_211();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.212
                                                                        L_8_212();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.213
                                                                        L_8_213();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.214
                                                                L_8_214();
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                            else {
                                                $("#RiverArea").show();//พื้นที่นิคมอุตสาหกรรม
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //EIA 8.220
                                                        L_8_220();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea === "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").click(function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        // 8.216
                                                                        L_8_216();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.217
                                                                        L_8_217();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.218
                                                                        L_8_218();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.219
                                                                L_8_219();
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

                    });


                }
                else if (Powersource == "2") {//พลังงานน้ำ
                    $("#maximum2").show(); //  กำลังการผลิตสูงสุดรวมกัน (เมกะวัตต์)
                    $("#selectmaximum2").on('change', function () {
                        var maximum2 = $('#selectmaximum2').find(":selected").val();
                        if (maximum2 == "1") {// น้อยกว่า 0.2
                            $("#WaterPower").show(); //   แหล่งพลังงานน้ำ
                            $("#selectWaterPower").on('change', function () {
                                var WaterPower = $('#selectWaterPower').find(":selected").val();
                                if (WaterPower == "1" || WaterPower == "2" || WaterPower == "3" || WaterPower == "4" || WaterPower == "5" ) {
                                    //น้ำจากเขื่อนเก็บกักน้ำหรืออ่างเก็บน้ำ
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.225
                                                        w_8_225();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.221
                                                                        w_8_221();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.222
                                                                        w_8_222();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.223
                                                                        w_8_223();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.224
                                                                w_8_224();
                                                            }
                                                        });
                                                    }

                                                });


                                            }
                                            else { // out

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.230
                                                        w_8_230();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.226
                                                                        w_8_226();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.227
                                                                        w_8_227();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.228
                                                                        w_8_228();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.229
                                                                w_8_229();
                                                            }
                                                        });
                                                    }

                                                });

                                            }


                                        });
                                    });
                                }                                
                                else if (WaterPower == "6") {
                                    //น้ำจากแหล่งอื่น                                    
                                        $("#okbtn").show();
                                        $("#Btnok").on('click', function () {
                                            $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                            $("#BtnareaIndrustry").on('click', function () {
                                                var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                                if (areaIndrustry == "1") { // in
                                                    $("#RiverArea").show();
                                                    $("#BtnRiverArea").on('click', function () {
                                                        var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                        if (RiverArea == "1") {
                                                            // 8.235
                                                            w_8_235();
                                                        } else {
                                                            $("#WildArea").show();
                                                            $("#BtnWildArea").on('click', function () {
                                                                var WildArea = $('#selectWildArea').find(":selected").val();
                                                                if (WildArea == "1") {
                                                                    $("#Factorytype").show();
                                                                    $("#BtnFactorytype").on('click', function () {
                                                                        var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                        if (Factorytype == "1") {
                                                                            //8.231
                                                                            w_8_231();
                                                                        }
                                                                        else if (Factorytype == "2") {
                                                                            //8.232
                                                                            w_8_232();
                                                                        }
                                                                        else if (Factorytype == "3") {
                                                                            //8.233
                                                                            w_8_233();
                                                                        }
                                                                        else {
                                                                            alert("กรุณาเลือกประเภทโรงงาน");
                                                                        }
                                                                    });
                                                                }
                                                                else {
                                                                    //8.234
                                                                    w_8_234();
                                                                }
                                                            });
                                                        }

                                                    });


                                                }
                                                else { // out

                                                    $("#RiverArea").show();
                                                    $("#BtnRiverArea").on('click', function () {
                                                        var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                        if (RiverArea == "1") {
                                                            // 8.240
                                                            w_8_240();
                                                        } else {
                                                            $("#WildArea").show();
                                                            $("#BtnWildArea").on('click', function () {
                                                                var WildArea = $('#selectWildArea').find(":selected").val();
                                                                if (WildArea == "1") {
                                                                    $("#Factorytype").show();
                                                                    $("#BtnFactorytype").on('click', function () {
                                                                        var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                        if (Factorytype == "1") {
                                                                            //8.236
                                                                            w_8_236();
                                                                        }
                                                                        else if (Factorytype == "2") {
                                                                            //8.237

                                                                            w_8_237();
                                                                        }
                                                                        else if (Factorytype == "3") {
                                                                            //8.238
                                                                            w_8_238();
                                                                        }
                                                                        else {
                                                                            alert("กรุณาเลือกประเภทโรงงาน");
                                                                        }
                                                                    });
                                                                }
                                                                else {
                                                                    //8.239
                                                                    w_8_239();
                                                                }
                                                            });
                                                        }

                                                    });

                                                }


                                            });
                                        });
                                    
                                }
                                else {
                                    alert("กรุณาเลือกแหล่งพลังงานน้ำ");
                                }


                            });
                        }
                        else if (maximum2 == "2") {// มากกว่า หรือ เท่ากับ 0.2 ถึง น้อกว่า 10
                            $("#WaterPower").show(); //   แหล่งพลังงานน้ำ
                            $("#selectWaterPower").on('change', function () {
                                var WaterPower = $('#selectWaterPower').find(":selected").val();
                                if (WaterPower == "1" || WaterPower == "2") {
                                    $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                    $("#BtnareaIndrustry").on('click', function () {
                                        var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                        if (areaIndrustry == "1") { // in 
                                            $("#RiverArea").show();
                                            $("#BtnRiverArea").on('click', function () {
                                                var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                if (RiverArea == "1") {
                                                    //8.243
                                                    w_8_243();
                                                } else {
                                                    $("#WildArea").show();
                                                    $("#BtnWildArea").on('click', function () {
                                                        var WildArea = $('#selectWildArea').find(":selected").val();
                                                        if (WildArea == "1") {
                                                            //8.241
                                                            w_8_241();
                                                        }
                                                        else {
                                                           // 8.242
                                                            w_8_242();
                                                        }
                                                    });
                                                }
                                            });

                                        }
                                        else { // out
                                            $("#RiverArea").show();
                                            $("#BtnRiverArea").on('click', function () {
                                                var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                if (RiverArea == "1") {
                                                    //8.246
                                                    w_8_246();
                                                } else {
                                                    $("#WildArea").show();
                                                    $("#BtnWildArea").on('click', function () {
                                                        var WildArea = $('#selectWildArea').find(":selected").val();
                                                        if (WildArea == "1") {
                                                            //8.244
                                                            w_8_244();
                                                        }
                                                        else {
                                                            // 8.245  
                                                            w_8_245();
                                                        }
                                                    });
                                                }
                                            });
                                        }

                                    });
                                }
                                else if (WaterPower == "3" || WaterPower == "4" || WaterPower == "5") {
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.251
                                                        w_8_251();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.247
                                                                        w_8_247();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.248
                                                                        w_8_248();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.249
                                                                        w_8_249();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.250
                                                                w_8_250();
                                                            }
                                                        });
                                                    }

                                                });


                                            }
                                            else { // out

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.256
                                                        w_8_256();

                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.252
                                                                        w_8_252();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.253
                                                                        w_8_253();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.254
                                                                        w_8_254();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.255
                                                                w_8_255();
                                                            }
                                                        });
                                                    }

                                                });

                                            }


                                        });
                                    });
                                }
                                else if (WaterPower == "6") {
                                    //น้ำจากแหล่งอื่น                                    
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.261
                                                        w_8_261();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.257
                                                                        w_8_257();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.258
                                                                        w_8_258();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.259
                                                                        w_8_259();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.260
                                                                w_8_260();
                                                            }
                                                        });
                                                    }

                                                });


                                            }
                                            else { // out

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.266
                                                        w_8_266();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.262
                                                                        w_8_262();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.263
                                                                        w_8_263();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.264
                                                                        w_8_264();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.265
                                                                w_8_265();
                                                            }
                                                        });
                                                    }

                                                });

                                            }


                                        });
                                    });

                                }
                                else {
                                    alert("กรุณาเลือกแหล่งพลังงานน้ำ");
                                }
                            });
                        }
                        else if (maximum2 == "3") {//  มากกว่า หรือ เท่ากับ 10 ถึง น้อกว่า 15
                            $("#WaterPower").show(); //   แหล่งพลังงานน้ำ
                            $("#selectWaterPower").on('change', function () {
                                var WaterPower = $('#selectWaterPower').find(":selected").val();
                                if (WaterPower == "1" || WaterPower == "2") {
                                    $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                    $("#BtnareaIndrustry").on('click', function () {
                                        var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                        if (areaIndrustry == "1") { // in 
                                            $("#RiverArea").show();
                                            $("#BtnRiverArea").on('click', function () {
                                                var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                if (RiverArea == "1") {
                                                    //8.268
                                                    w_8_268();
                                                } else {
                                                    $("#WildArea").show();
                                                    $("#BtnWildArea").on('click', function () {
                                                        var WildArea = $('#selectWildArea').find(":selected").val();
                                                        if (WildArea == "1") {
                                                            //8.267
                                                            w_8_267();
                                                        }
                                                        else {
                                                            // 8.269
                                                            w_8_269();
                                                        }
                                                    });
                                                }
                                            });

                                        }
                                        else { // out
                                            $("#RiverArea").show();
                                            $("#BtnRiverArea").on('click', function () {
                                                var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                if (RiverArea == "1") {
                                                    //8.271
                                                    w_8_271();
                                                } else {
                                                    $("#WildArea").show();
                                                    $("#BtnWildArea").on('click', function () {
                                                        var WildArea = $('#selectWildArea').find(":selected").val();
                                                        if (WildArea == "1") {
                                                            //8.270
                                                            w_8_270();
                                                        }
                                                        else {
                                                            // 8.272
                                                            w_8_272();
                                                        }
                                                    });
                                                }
                                            });
                                        }

                                    });
                                }
                                else if (WaterPower == "3" || WaterPower == "4" || WaterPower == "5") {
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.277
                                                        w_8_277();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.273
                                                                        w_8_273();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.274
                                                                        w_8_274();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.275
                                                                        w_8_275();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.276
                                                                w_8_276();
                                                            }
                                                        });
                                                    }

                                                });


                                            }
                                            else { // out

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.282
                                                        w_8_282();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.278
                                                                        w_8_278();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.279
                                                                        w_8_279();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.280
                                                                        w_8_280();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.281
                                                                w_8_281();
                                                            }
                                                        });
                                                    }

                                                });

                                            }


                                        });
                                    });
                                }
                                else if (WaterPower == "6") {
                                    //น้ำจากแหล่งอื่น                                    
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.287
                                                        w_8_287();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.283
                                                                        w_8_283();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.284
                                                                        w_8_284();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.285
                                                                        w_8_285();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.286
                                                                w_8_286();
                                                            }
                                                        });
                                                    }

                                                });


                                            }
                                            else { // out

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.292
                                                        w_8_292();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.288
                                                                        w_8_288();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.289
                                                                        w_8_289();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.290
                                                                        w_8_290();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.291
                                                                w_8_291();
                                                            }
                                                        });
                                                    }

                                                });

                                            }


                                        });
                                    });

                                }
                                else {
                                    alert("กรุณาเลือกแหล่งพลังงานน้ำ");
                                }
                            });



                        }
                        else if (maximum2 == "4") {// มากกว่า หรือ เท่ากับ 15
                            $("#WaterPower").show(); //   แหล่งพลังงานน้ำ
                            $("#selectWaterPower").on('change', function () {
                                var WaterPower = $('#selectWaterPower').find(":selected").val();
                                if (WaterPower == "1") {
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show();
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in 
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //8.295
                                                        w_8_295();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                //8.293
                                                                w_8_293();
                                                            }
                                                            else {
                                                                // 8.294
                                                                w_8_294();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else { // out
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //8.297
                                                        w_8_297();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                //8.296
                                                                w_8_296();
                                                            }
                                                            else {
                                                                // 8.298
                                                                w_8_298();
                                                            }
                                                        });
                                                    }
                                                });
                                            }

                                        });
                                    });
                                }
                                else if (WaterPower == "2") {
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show();
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in 
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //8.300
                                                        w_8_300();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                //8.299
                                                                w_8_299();
                                                            }
                                                            else {
                                                                // 8.301
                                                                w_8_301();
                                                            }
                                                        });
                                                    }
                                                });

                                            }
                                            else { // out
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        //8.303
                                                        w_8_303();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                //8.302
                                                                w_8_302();
                                                            }
                                                            else {
                                                                // 8.304
                                                                w_8_304();
                                                            }
                                                        });
                                                    }
                                                });
                                            }

                                        });
                                    });
                                }
                                else if (WaterPower == "3" || WaterPower == "4" || WaterPower == "5") {
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show();
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.309
                                                        w_8_309();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.305
                                                                        w_8_305();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.306
                                                                        w_8_306();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.307
                                                                        w_8_307();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.308
                                                                w_8_308();
                                                            }
                                                        });
                                                    }

                                                });


                                            }
                                            else { // out

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.314
                                                        w_8_314();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.310
                                                                        w_8_310();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.311
                                                                        w_8_311();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.312
                                                                        w_8_312();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.313
                                                                w_8_313();
                                                            }
                                                        });
                                                    }

                                                });

                                            }


                                        });
                                    });
                                }

                                else if (WaterPower == "6") {
                                    $("#okbtn").show();
                                    $("#Btnok").on('click', function () {
                                        $("#areaIndrustry").show();
                                        $("#BtnareaIndrustry").on('click', function () {
                                            var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                            if (areaIndrustry == "1") { // in
                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.319
                                                        w_8_319();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.315
                                                                        w_8_315();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.316
                                                                        w_8_316();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.317
                                                                        w_8_317();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.318
                                                                w_8_318();
                                                            }
                                                        });
                                                    }

                                                });


                                            }
                                            else { // out

                                                $("#RiverArea").show();
                                                $("#BtnRiverArea").on('click', function () {
                                                    var RiverArea = $('#selectRiverArea').find(":selected").val();
                                                    if (RiverArea == "1") {
                                                        // 8.324
                                                        w_8_324();
                                                    } else {
                                                        $("#WildArea").show();
                                                        $("#BtnWildArea").on('click', function () {
                                                            var WildArea = $('#selectWildArea').find(":selected").val();
                                                            if (WildArea == "1") {
                                                                $("#Factorytype").show();
                                                                $("#BtnFactorytype").on('click', function () {
                                                                    var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                                    if (Factorytype == "1") {
                                                                        //8.320
                                                                        w_8_320();
                                                                    }
                                                                    else if (Factorytype == "2") {
                                                                        //8.321
                                                                        w_8_321();
                                                                    }
                                                                    else if (Factorytype == "3") {
                                                                        //8.322
                                                                        w_8_322();
                                                                    }
                                                                    else {
                                                                        alert("กรุณาเลือกประเภทโรงงาน");
                                                                    }
                                                                });
                                                            }
                                                            else {
                                                                //8.323
                                                                w_8_323();
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
                    });
                }
                else if (Powersource == "3") {// พลังงานอื่น เช่น ลม
                    $("#maximum3").show(); //  กำลังการผลิตสูงสุดรวมกัน (เมกะวัตต์)
                    $("#selectmaximum3").on('change', function () {
                        var maximum3 = $('#selectmaximum3').find(":selected").val();
                        if (maximum3 == "1") {
                            $("#okbtn").show();
                            $("#Btnok").on('click', function () {
                                $("#areaIndrustry").show(); //   แหล่งพลังงานน้ำ
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry == "1") { // in
                                        $("#RiverArea").show();
                                        $("#BtnRiverArea").on('click', function () {
                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                            if (RiverArea == "1") {
                                                // 8.329
                                                E_8_329();
                                            } else {
                                                $("#WildArea").show();
                                                $("#BtnWildArea").on('click', function () {
                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                    if (WildArea == "1") {
                                                        $("#Factorytype").show();
                                                        $("#BtnFactorytype").on('click', function () {
                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                            if (Factorytype == "1") {
                                                                //8.325
                                                                E_8_325();
                                                            }
                                                            else if (Factorytype == "2") {
                                                                //8.326
                                                                E_8_326();
                                                            }
                                                            else if (Factorytype == "3") {
                                                                //8.327
                                                                E_8_327();
                                                            }
                                                            else {
                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                            }
                                                        });
                                                    }
                                                    else {
                                                        //8.328
                                                        E_8_328();
                                                    }
                                                });
                                            }

                                        });


                                    }
                                    else { // out

                                        $("#RiverArea").show();
                                        $("#BtnRiverArea").on('click', function () {
                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                            if (RiverArea == "1") {
                                                // 8.334
                                                E_8_334();
                                            } else {
                                                $("#WildArea").show();
                                                $("#BtnWildArea").on('click', function () {
                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                    if (WildArea == "1") {
                                                        $("#Factorytype").show();
                                                        $("#BtnFactorytype").on('click', function () {
                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                            if (Factorytype == "1") {
                                                                //8.330
                                                                E_8_330();
                                                            }
                                                            else if (Factorytype == "2") {
                                                                //8.331
                                                                E_8_331();
                                                            }
                                                            else if (Factorytype == "3") {
                                                                //8.332
                                                                E_8_332();
                                                            }
                                                            else {
                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                            }
                                                        });
                                                    }
                                                    else {
                                                        //8.333
                                                        E_8_333();
                                                    }
                                                });
                                            }

                                        });

                                    }


                                });
                            });
                        }
                        else if (maximum3 == "2") {
                            $("#okbtn").show();
                            $("#Btnok").on('click', function () {
                                $("#areaIndrustry").show(); //   
                                $("#BtnareaIndrustry").on('click', function () {
                                    var areaIndrustry = $('#selectareaIndrustry').find(":selected").val();
                                    if (areaIndrustry == "1") { // in
                                        $("#RiverArea").show();
                                        $("#BtnRiverArea").on('click', function () {
                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                            if (RiverArea == "1") {
                                                // 8.339
                                                E_8_339();
                                            } else {
                                                $("#WildArea").show();
                                                $("#BtnWildArea").on('click', function () {
                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                    if (WildArea == "1") {
                                                        $("#Factorytype").show();
                                                        $("#BtnFactorytype").on('click', function () {
                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                            if (Factorytype == "1") {
                                                                //8.335
                                                                E_8_335();
                                                            }
                                                            else if (Factorytype == "2") {
                                                                //8.336
                                                                E_8_336();
                                                            }
                                                            else if (Factorytype == "3") {
                                                                //8.337
                                                                E_8_337();
                                                            }
                                                            else {
                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                            }
                                                        });
                                                    }
                                                    else {
                                                        //8.338
                                                        E_8_338();
                                                    }
                                                });
                                            }

                                        });


                                    }
                                    else { // out

                                        $("#RiverArea").show();
                                        $("#BtnRiverArea").on('click', function () {
                                            var RiverArea = $('#selectRiverArea').find(":selected").val();
                                            if (RiverArea == "1") {
                                                // 8.344
                                                E_8_344();
                                            } else {
                                                $("#WildArea").show();
                                                $("#BtnWildArea").on('click', function () {
                                                    var WildArea = $('#selectWildArea').find(":selected").val();
                                                    if (WildArea == "1") {
                                                        $("#Factorytype").show();
                                                        $("#BtnFactorytype").on('click', function () {
                                                            var Factorytype = $('#selectFactorytype').find(":selected").val();
                                                            if (Factorytype == "1") {
                                                                //8.340
                                                                E_8_340();
                                                            }
                                                            else if (Factorytype == "2") {
                                                                //8.341
                                                                E_8_341();
                                                            }
                                                            else if (Factorytype == "3") {
                                                                //8.342
                                                                E_8_342();
                                                            }
                                                            else {
                                                                alert("กรุณาเลือกประเภทโรงงาน");
                                                            }
                                                        });
                                                    }
                                                    else {
                                                        //8.343
                                                        E_8_343();
                                                    }
                                                });
                                            }

                                        });

                                    }


                                });
                            });
                        }
                        else {
                            alert("กรุณาเลือกกำลังการผลิตสูงสุดรวมกัน");
                        }
                    });
                }
                else {
                    alert("กรุณาเลือกแหล่งพลังงาน");
                }
            });


}