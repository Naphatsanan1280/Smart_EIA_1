$(function(){
    
    
});
var status_check_position_inlocation;
    var list_position_inlocation = [];
// variable global javascript
var bermudaTriangle = [];
var check_data_in_area = [];
var data_obj = {};
var countyLayer = [];//["test.geojson"];
var file_map_data = ["นิคมอุตสาหกรรม1.json"]; 
var lat1 =13.680052 ,
    lng1 = 100.631976;
//end variable global javascript


function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {
      lat: lat1,
      lng: lat1
    },
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
	
	
    for(var fl=0;fl<file_map_data.length;fl++)
    {
        countyLayer[fl] = new google.maps.Data();
        countyLayer[fl].loadGeoJson(file_map_data[fl]);
        countyLayer[fl].setStyle({
        strokeColor: 'red',
        strokeWeight: 1
        }); 
        countyLayer[fl].setMap(map);
    }
}

//วาดภาพบน map
// จบการทำงาน วาดภาพบน map

// function mng file 
$.getScript('Stuk-jszip-bead269/dist/jszip.js', function() // get scrip in file 
{
   
    let getDom = xml => (new DOMParser()).parseFromString(xml, "text/xml")
    let getExtension = fileName => fileName.split(".").pop()

    let getKmlDom = (kmzFile) => {
        var zip = new JSZip()
        return zip.loadAsync(kmzFile)
            .then(zip => {
                let kmlDom = null
                zip.forEach((relPath, file) => {
                    if (getExtension(relPath) === "kml" && kmlDom === null) {
                        kmlDom = file.async("string").then(getDom)
                    }
                })
                return kmlDom || Promise.reject("No kml file found")
            });
    }


    var f = document.getElementById("f")
    f.addEventListener("change", e => {
        var last_name = e.target.files[0].name.split('.');
        //alert(last_name[1]);
        if(last_name[1] == "kmz" || last_name[1] == "KMZ")
        {
            let geoJson = getKmlDom(e.target.files[0]).then(kmlDom => {
                let geoJsonObject = toGeoJSON.kml(kmlDom)
                return JSON.stringify(geoJsonObject)
            })
             geoJson.then(value => document.getElementById("output").innerText = value);
             geoJson.then(function(val){
                set_data_kmz_file(val);
             });
        }
        else
        {
            alert("ใช้ไฟล์ KMZ เท่านั้น");
        }
        
    })
});



function set_data_kmz_file(data)
{
    data_obj = JSON.parse(data);
}

function get_data_file()
{
    var data_all = [];
var array_set = [];
for(var i=0;i<data_obj.features.length;i++)
{
    var data_sort =  data_obj.features[i].geometry; //
    
    if(data_sort.type)
    {
        console.log(data_sort.type);
        switch (data_sort.type) {
        case "GeometryCollection":
            console.log(data_sort.geometries.length);
            break;
        case "LineString":
            console.log("---");
            break;
        case "MultiPolygon":
            console.log("---");
            break;
        default:
            break;
    }   
    }
}
    console.log(data_obj);
}
//end function mng file


function check_inmap(type_mng)
{
    var point_is1 = [];
    var status = false;
    var loop_add = 1;
    if(bermudaTriangle.length >0 )
    {
       console.log(bermudaTriangle.length);
        for(var i=0;i<bermudaTriangle.length;i++)
        {
           // bermudaTriangle[i].setMap(null);
        }

    }
    if(type_mng == 1)
    {
        status = true;
        var East = $('#East').val(),
        North = $('#North').val(),
        zone = $('#zone_data').val();
        var list_data = utmToLatLng(zone,East,North);
        point_is1 = [
            [list_data.latitude,list_data.longitude],
        ];
        console.log(point_is1);
    }
    else if(type_mng == 2)
    {
        status = true;
        var sub_data =[];
        var data_all = [];
        var array_set = [];
       var opts = {};
       var path = [];
        for(var i=0;i<data_obj.features.length;i++)
        {
            var data_sort =  data_obj.features[i].geometry; //
            if(data_sort.type == "GeometryCollection")
            {
               
                for(var j=0;j<data_sort.geometries[0].coordinates.length;j++)
                {
                    var ll = new google.maps.LatLng(data_sort.geometries[0].coordinates[j][1], data_sort.geometries[0].coordinates[j][0]);
                    path.push(ll);
                    point_is1.push([data_sort.geometries[0].coordinates[j][1],data_sort.geometries[0].coordinates[j][0]]);
                }
            }
            else
            {
                for(var j=0;j<data_sort.coordinates.length;j++)
                {
                    var ll = new google.maps.LatLng(data_sort.coordinates[j][1], data_sort.coordinates[j][0]);
                    path.push(ll);
                    point_is1.push([data_sort.coordinates[j][1],data_sort.coordinates[j][0]]);
                }
                //"LineString"

            }
        }
        opts.path = path;
        bermudaTriangle[loop_add] = new google.maps.Polyline(opts);
        bermudaTriangle[loop_add].setMap(map);
        loop_add++;
        //console.log(data_obj);
        
    }
    else if(type_mng == 3)
    {
        status = true;

    }
    if(status)
    {
     var point = "";
      status_check_position_inlocation = false;
      list_position_inlocation = [];
    
         $.getJSON('นิคมอุตสาหกรรม1.json', function(data) {
             for(var lo_ch=0;lo_ch<point_is1.length;lo_ch++)
             {
             point = new google.maps.LatLng(point_is1[lo_ch][0], point_is1[lo_ch][1]);
             //bermudaTriangle[i] = new google.maps.Marker(point);
             if(type_mng == 1)
             {
                bermudaTriangle[loop_add] = new google.maps.Marker({
                    position: point,
                    map: map
                 });
                 loop_add++;
             }
             
         //console.log(data.features[0].geometry.coordinates[0][0]);
                 var data_all = [];
                 var array_set = [];
                 for(var i=0;i<data.features.length;i++)
                 {
                     var data_sort =  data.features[i].geometry.coordinates[0][0];
                     var data_set = [];
                     var data_add = "";
                     for(var j=0;j<data_sort.length;j++)
                     {
                     // point_is = new google.maps.LatLng(data_sort[j][1], data_sort[j][0]);
                         data_set.push({
                         lat:data_sort[j][1] ,lng:data_sort[j][0]
                         });
                     }
                     array_set.push({
                     name_polygon:data.features[i].properties.Name,
                     own_polygon:data.features[i].properties.Owner,
                     location:data_set
                     }); 
                 }
                 data_all.push({
                 type:"MultiPolygon",
                 coordinates:array_set
                 });
                 //console.log(data_all);
                 
             
                 for(var i=0;i<data_all[0].coordinates.length;i++)
                 {
                    check_data_in_area[i] = new google.maps.Polygon({
                     paths: data_all[0].coordinates[i].location,
                     });
                     if(google.maps.geometry.poly.containsLocation(point, check_data_in_area[i]) == true) 
                     {
                         console.log(data_all[0].coordinates[i].name_polygon);
                         set_data_show(true,data_all[0].coordinates[i].name_polygon);
                     }
                 }
     //console.log(data_all[0].coordinates.length);
             }
             if(status_check_position_inlocation)
             {
             var name_position = "<p>";
             for(var i=0;i<list_position_inlocation.length;i++)
             {
                 name_position+= list_position_inlocation[i]+'<br>';
             }
             name_position +='</p>';
             $('.show_status_data').html('<h1 style="color:green;">อยู่ในพื้นที่</h1><br>'+name_position);
             }
             else
             {
             //alert("N");
             $('.show_status_data').html('<h1 style="color:red;">ไม่อยู่ในพื้นที่</h1>');
             }
     });
     


    
            
     
    
            
    }
    else
    {
        alert("กรุณาป้อนข้อมูล");

    }
    //var status_type = $(data).attr('data-type');
    /*
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(13.680062, 100.632079),
        map: map,
     });
     */

      
      
      
        
    
   //var joy = File.createFromFileName("M1_Geojson/ท่อ_is.kmz");
}

function set_data_show(conditon,name_location_dupli)
{
    status_check_position_inlocation = conditon;
    if(list_position_inlocation.indexOf(name_location_dupli) < 0)
    {
        list_position_inlocation.push(name_location_dupli); 
    }
       
}

function mng_json_to_array(array)
{
    
    var array_send = [];
   console.log(array);
            var array_set = [];
            var data_set = [];
            var data_add = "";
            for(var j=0;j<data_sort.length;j++)
            {
             // point_is = new google.maps.LatLng(data_sort[j][1], data_sort[j][0]);
                data_set.push({
                  lat:data_sort[j][1] ,lng:data_sort[j][0]
                });
            }
            array_set.push({
              name_polygon:data.features[i].properties.Name,
              own_polygon:data.features[i].properties.Owner,
              location:data_set
            })
            return  array_set;

   
}





var toGeoJSON = (function() {
    'use strict';

    var removeSpace = /\s*/g,
        trimSpace = /^\s*|\s*$/g,
        splitSpace = /\s+/;
    // generate a short, numeric hash of a string
    function okhash(x) {
        if (!x || !x.length) return 0;
        for (var i = 0, h = 0; i < x.length; i++) {
            h = ((h << 5) - h) + x.charCodeAt(i) | 0;
        } return h;
    }
    // all Y children of X
    function get(x, y) { return x.getElementsByTagName(y); }
    function attr(x, y) { return x.getAttribute(y); }
    function attrf(x, y) { return parseFloat(attr(x, y)); }
    // one Y child of X, if any, otherwise null
    function get1(x, y) { var n = get(x, y); return n.length ? n[0] : null; }
    // https://developer.mozilla.org/en-US/docs/Web/API/Node.normalize
    function norm(el) { if (el.normalize) { el.normalize(); } return el; }
    // cast array x into numbers
    function numarray(x) {
        for (var j = 0, o = []; j < x.length; j++) { o[j] = parseFloat(x[j]); }
        return o;
    }
    // get the content of a text node, if any
    function nodeVal(x) {
        if (x) { norm(x); }
        return (x && x.textContent) || '';
    }
    // get the contents of multiple text nodes, if present
    function getMulti(x, ys) {
        var o = {}, n, k;
        for (k = 0; k < ys.length; k++) {
            n = get1(x, ys[k]);
            if (n) o[ys[k]] = nodeVal(n);
        }
        return o;
    }
    // add properties of Y to X, overwriting if present in both
    function extend(x, y) { for (var k in y) x[k] = y[k]; }
    // get one coordinate from a coordinate array, if any
    function coord1(v) { return numarray(v.replace(removeSpace, '').split(',')); }
    // get all coordinates from a coordinate array as [[],[]]
    function coord(v) {
        var coords = v.replace(trimSpace, '').split(splitSpace),
            o = [];
        for (var i = 0; i < coords.length; i++) {
            o.push(coord1(coords[i]));
        }
        return o;
    }
    function coordPair(x) {
        var ll = [attrf(x, 'lon'), attrf(x, 'lat')],
            ele = get1(x, 'ele'),
            // handle namespaced attribute in browser
            heartRate = get1(x, 'gpxtpx:hr') || get1(x, 'hr'),
            time = get1(x, 'time'),
            e;
        if (ele) {
            e = parseFloat(nodeVal(ele));
            if (!isNaN(e)) {
                ll.push(e);
            }
        }
        return {
            coordinates: ll,
            time: time ? nodeVal(time) : null,
            heartRate: heartRate ? parseFloat(nodeVal(heartRate)) : null
        };
    }

    // create a new feature collection parent object
    function fc() {
        return {
            type: 'FeatureCollection',
            features: []
        };
    }

    var serializer;
    if (typeof XMLSerializer !== 'undefined') {
        /* istanbul ignore next */
        serializer = new XMLSerializer();
    } else {
        var isNodeEnv = (typeof process === 'object' && !process.browser);
        var isTitaniumEnv = (typeof Titanium === 'object');
        if (typeof exports === 'object' && (isNodeEnv || isTitaniumEnv)) {
            serializer = new (require('xmldom').XMLSerializer)();
        } else {
            throw new Error('Unable to initialize serializer');
        }
    }
    function xml2str(str) {
        // IE9 will create a new XMLSerializer but it'll crash immediately.
        // This line is ignored because we don't run coverage tests in IE9
        /* istanbul ignore next */
        if (str.xml !== undefined) return str.xml;
        return serializer.serializeToString(str);
    }

    var t = {
        kml: function(doc) {

            var gj = fc(),
                // styleindex keeps track of hashed styles in order to match features
                styleIndex = {}, styleByHash = {},
                // stylemapindex keeps track of style maps to expose in properties
                styleMapIndex = {},
                // atomic geospatial types supported by KML - MultiGeometry is
                // handled separately
                geotypes = ['Polygon', 'LineString', 'Point', 'Track', 'gx:Track'],
                // all root placemarks in the file
                placemarks = get(doc, 'Placemark'),
                styles = get(doc, 'Style'),
                styleMaps = get(doc, 'StyleMap');

            for (var k = 0; k < styles.length; k++) {
                var hash = okhash(xml2str(styles[k])).toString(16);
                styleIndex['#' + attr(styles[k], 'id')] = hash;
                styleByHash[hash] = styles[k];
            }
            for (var l = 0; l < styleMaps.length; l++) {
                styleIndex['#' + attr(styleMaps[l], 'id')] = okhash(xml2str(styleMaps[l])).toString(16);
                var pairs = get(styleMaps[l], 'Pair');
                var pairsMap = {};
                for (var m = 0; m < pairs.length; m++) {
                    pairsMap[nodeVal(get1(pairs[m], 'key'))] = nodeVal(get1(pairs[m], 'styleUrl'));
                }
                styleMapIndex['#' + attr(styleMaps[l], 'id')] = pairsMap;

            }
            for (var j = 0; j < placemarks.length; j++) {
                gj.features = gj.features.concat(getPlacemark(placemarks[j]));
            }
            function kmlColor(v) {
                var color, opacity;
                v = v || '';
                if (v.substr(0, 1) === '#') { v = v.substr(1); }
                if (v.length === 6 || v.length === 3) { color = v; }
                if (v.length === 8) {
                    opacity = parseInt(v.substr(0, 2), 16) / 255;
                    color = '#' + v.substr(6, 2) +
                        v.substr(4, 2) +
                        v.substr(2, 2);
                }
                return [color, isNaN(opacity) ? undefined : opacity];
            }
            function gxCoord(v) { return numarray(v.split(' ')); }
            function gxCoords(root) {
                var elems = get(root, 'coord', 'gx'), coords = [], times = [];
                if (elems.length === 0) elems = get(root, 'gx:coord');
                for (var i = 0; i < elems.length; i++) coords.push(gxCoord(nodeVal(elems[i])));
                var timeElems = get(root, 'when');
                for (var j = 0; j < timeElems.length; j++) times.push(nodeVal(timeElems[j]));
                return {
                    coords: coords,
                    times: times
                };
            }
            function getGeometry(root) {
                var geomNode, geomNodes, i, j, k, geoms = [], coordTimes = [];
                if (get1(root, 'MultiGeometry')) { return getGeometry(get1(root, 'MultiGeometry')); }
                if (get1(root, 'MultiTrack')) { return getGeometry(get1(root, 'MultiTrack')); }
                if (get1(root, 'gx:MultiTrack')) { return getGeometry(get1(root, 'gx:MultiTrack')); }
                for (i = 0; i < geotypes.length; i++) {
                    geomNodes = get(root, geotypes[i]);
                    if (geomNodes) {
                        for (j = 0; j < geomNodes.length; j++) {
                            geomNode = geomNodes[j];
                            if (geotypes[i] === 'Point') {
                                geoms.push({
                                    type: 'Point',
                                    coordinates: coord1(nodeVal(get1(geomNode, 'coordinates')))
                                });
                            } else if (geotypes[i] === 'LineString') {
                                geoms.push({
                                    type: 'LineString',
                                    coordinates: coord(nodeVal(get1(geomNode, 'coordinates')))
                                });
                            } else if (geotypes[i] === 'Polygon') {
                                var rings = get(geomNode, 'LinearRing'),
                                    coords = [];
                                for (k = 0; k < rings.length; k++) {
                                    coords.push(coord(nodeVal(get1(rings[k], 'coordinates'))));
                                }
                                geoms.push({
                                    type: 'Polygon',
                                    coordinates: coords
                                });
                            } else if (geotypes[i] === 'Track' ||
                                geotypes[i] === 'gx:Track') {
                                var track = gxCoords(geomNode);
                                geoms.push({
                                    type: 'LineString',
                                    coordinates: track.coords
                                });
                                if (track.times.length) coordTimes.push(track.times);
                            }
                        }
                    }
                }
                return {
                    geoms: geoms,
                    coordTimes: coordTimes
                };
            }
            function getPlacemark(root) {
                var geomsAndTimes = getGeometry(root), i, properties = {},
                    name = nodeVal(get1(root, 'name')),
                    address = nodeVal(get1(root, 'address')),
                    styleUrl = nodeVal(get1(root, 'styleUrl')),
                    description = nodeVal(get1(root, 'description')),
                    timeSpan = get1(root, 'TimeSpan'),
                    timeStamp = get1(root, 'TimeStamp'),
                    extendedData = get1(root, 'ExtendedData'),
                    lineStyle = get1(root, 'LineStyle'),
                    polyStyle = get1(root, 'PolyStyle'),
                    visibility = get1(root, 'visibility');

                if (!geomsAndTimes.geoms.length) return [];
                if (name) properties.name = name;
                if (address) properties.address = address;
                if (styleUrl) {
                    if (styleUrl[0] !== '#') {
                        styleUrl = '#' + styleUrl;
                    }

                    properties.styleUrl = styleUrl;
                    if (styleIndex[styleUrl]) {
                        properties.styleHash = styleIndex[styleUrl];
                    }
                    if (styleMapIndex[styleUrl]) {
                        properties.styleMapHash = styleMapIndex[styleUrl];
                        properties.styleHash = styleIndex[styleMapIndex[styleUrl].normal];
                    }
                    // Try to populate the lineStyle or polyStyle since we got the style hash
                    var style = styleByHash[properties.styleHash];
                    if (style) {
                        if (!lineStyle) lineStyle = get1(style, 'LineStyle');
                        if (!polyStyle) polyStyle = get1(style, 'PolyStyle');
                        var iconStyle = get1(style, 'IconStyle');
                        if (iconStyle) {
                            var icon = get1(iconStyle, 'Icon');
                            if (icon) {
                                var href = nodeVal(get1(icon, 'href'));
                                if (href) properties.icon = href;
                            }
                        }
                    }
                }
                if (description) properties.description = description;
                if (timeSpan) {
                    var begin = nodeVal(get1(timeSpan, 'begin'));
                    var end = nodeVal(get1(timeSpan, 'end'));
                    properties.timespan = { begin: begin, end: end };
                }
                if (timeStamp) {
                    properties.timestamp = nodeVal(get1(timeStamp, 'when'));
                }
                if (lineStyle) {
                    var linestyles = kmlColor(nodeVal(get1(lineStyle, 'color'))),
                        color = linestyles[0],
                        opacity = linestyles[1],
                        width = parseFloat(nodeVal(get1(lineStyle, 'width')));
                    if (color) properties.stroke = color;
                    if (!isNaN(opacity)) properties['stroke-opacity'] = opacity;
                    if (!isNaN(width)) properties['stroke-width'] = width;
                }
                if (polyStyle) {
                    var polystyles = kmlColor(nodeVal(get1(polyStyle, 'color'))),
                        pcolor = polystyles[0],
                        popacity = polystyles[1],
                        fill = nodeVal(get1(polyStyle, 'fill')),
                        outline = nodeVal(get1(polyStyle, 'outline'));
                    if (pcolor) properties.fill = pcolor;
                    if (!isNaN(popacity)) properties['fill-opacity'] = popacity;
                    if (fill) properties['fill-opacity'] = fill === '1' ? properties['fill-opacity'] || 1 : 0;
                    if (outline) properties['stroke-opacity'] = outline === '1' ? properties['stroke-opacity'] || 1 : 0;
                }
                if (extendedData) {
                    var datas = get(extendedData, 'Data'),
                        simpleDatas = get(extendedData, 'SimpleData');

                    for (i = 0; i < datas.length; i++) {
                        properties[datas[i].getAttribute('name')] = nodeVal(get1(datas[i], 'value'));
                    }
                    for (i = 0; i < simpleDatas.length; i++) {
                        properties[simpleDatas[i].getAttribute('name')] = nodeVal(simpleDatas[i]);
                    }
                }
                if (visibility) {
                    properties.visibility = nodeVal(visibility);
                }
                if (geomsAndTimes.coordTimes.length) {
                    properties.coordTimes = (geomsAndTimes.coordTimes.length === 1) ?
                        geomsAndTimes.coordTimes[0] : geomsAndTimes.coordTimes;
                }
                var feature = {
                    type: 'Feature',
                    geometry: (geomsAndTimes.geoms.length === 1) ? geomsAndTimes.geoms[0] : {
                        type: 'GeometryCollection',
                        geometries: geomsAndTimes.geoms
                    },
                    properties: properties
                };
                if (attr(root, 'id')) feature.id = attr(root, 'id');
                return [feature];
            }
            return gj;
        },
        gpx: function(doc) {
            var i,
                tracks = get(doc, 'trk'),
                routes = get(doc, 'rte'),
                waypoints = get(doc, 'wpt'),
                // a feature collection
                gj = fc(),
                feature;
            for (i = 0; i < tracks.length; i++) {
                feature = getTrack(tracks[i]);
                if (feature) gj.features.push(feature);
            }
            for (i = 0; i < routes.length; i++) {
                feature = getRoute(routes[i]);
                if (feature) gj.features.push(feature);
            }
            for (i = 0; i < waypoints.length; i++) {
                gj.features.push(getPoint(waypoints[i]));
            }
            function initializeArray(arr, size) {
                for (var h = 0; h < size; h++) {
                    arr.push(null);
                }
                return arr;
            }
            function getPoints(node, pointname) {
                var pts = get(node, pointname),
                    line = [],
                    times = [],
                    heartRates = [],
                    l = pts.length;
                if (l < 2) return {};  // Invalid line in GeoJSON
                for (var i = 0; i < l; i++) {
                    var c = coordPair(pts[i]);
                    line.push(c.coordinates);
                    if (c.time) times.push(c.time);
                    if (c.heartRate || heartRates.length) {
                        if (!heartRates.length) initializeArray(heartRates, i);
                        heartRates.push(c.heartRate || null);
                    }
                }
                return {
                    line: line,
                    times: times,
                    heartRates: heartRates
                };
            }
            function getTrack(node) {
                var segments = get(node, 'trkseg'),
                    track = [],
                    times = [],
                    heartRates = [],
                    line;
                for (var i = 0; i < segments.length; i++) {
                    line = getPoints(segments[i], 'trkpt');
                    if (line) {
                        if (line.line) track.push(line.line);
                        if (line.times && line.times.length) times.push(line.times);
                        if (heartRates.length || (line.heartRates && line.heartRates.length)) {
                            if (!heartRates.length) {
                                for (var s = 0; s < i; s++) {
                                    heartRates.push(initializeArray([], track[s].length));
                                }
                            }
                            if (line.heartRates && line.heartRates.length) {
                                heartRates.push(line.heartRates);
                            } else {
                                heartRates.push(initializeArray([], line.line.length || 0));
                            }
                        }
                    }
                }
                if (track.length === 0) return;
                var properties = getProperties(node);
                extend(properties, getLineStyle(get1(node, 'extensions')));
                if (times.length) properties.coordTimes = track.length === 1 ? times[0] : times;
                if (heartRates.length) properties.heartRates = track.length === 1 ? heartRates[0] : heartRates;
                return {
                    type: 'Feature',
                    properties: properties,
                    geometry: {
                        type: track.length === 1 ? 'LineString' : 'MultiLineString',
                        coordinates: track.length === 1 ? track[0] : track
                    }
                };
            }
            function getRoute(node) {
                var line = getPoints(node, 'rtept');
                if (!line.line) return;
                var prop = getProperties(node);
                extend(prop, getLineStyle(get1(node, 'extensions')));
                var routeObj = {
                    type: 'Feature',
                    properties: prop,
                    geometry: {
                        type: 'LineString',
                        coordinates: line.line
                    }
                };
                return routeObj;
            }
            function getPoint(node) {
                var prop = getProperties(node);
                extend(prop, getMulti(node, ['sym']));
                return {
                    type: 'Feature',
                    properties: prop,
                    geometry: {
                        type: 'Point',
                        coordinates: coordPair(node).coordinates
                    }
                };
            }
            function getLineStyle(extensions) {
                var style = {};
                if (extensions) {
                    var lineStyle = get1(extensions, 'line');
                    if (lineStyle) {
                        var color = nodeVal(get1(lineStyle, 'color')),
                            opacity = parseFloat(nodeVal(get1(lineStyle, 'opacity'))),
                            width = parseFloat(nodeVal(get1(lineStyle, 'width')));
                        if (color) style.stroke = color;
                        if (!isNaN(opacity)) style['stroke-opacity'] = opacity;
                        // GPX width is in mm, convert to px with 96 px per inch
                        if (!isNaN(width)) style['stroke-width'] = width * 96 / 25.4;
                    }
                }
                return style;
            }
            function getProperties(node) {
                var prop = getMulti(node, ['name', 'cmt', 'desc', 'type', 'time', 'keywords']),
                    links = get(node, 'link');
                if (links.length) prop.links = [];
                for (var i = 0, link; i < links.length; i++) {
                    link = { href: attr(links[i], 'href') };
                    extend(link, getMulti(links[i], ['text', 'type']));
                    prop.links.push(link);
                }
                return prop;
            }
            return gj;
        }
    };
    return t;
})();

if (typeof module !== 'undefined') module.exports = toGeoJSON;



    function utmToLatLng(zone, easting, northing)
    {
    

        var a = 6378137;
        var e = 0.081819191;
        var e1sq = 0.006739497;
        var k0 = 0.9996;

        var arc = northing / k0;
        var mu = arc / (a * (1 - Math.pow(e, 2) / 4.0 - 3 * Math.pow(e, 4) / 64.0 - 5 * Math.pow(e, 6) / 256.0));

        var ei = (1 - Math.pow((1 - e * e), (1 / 2.0))) / (1 + Math.pow((1 - e * e), (1 / 2.0)));

        var ca = 3 * ei / 2 - 27 * Math.pow(ei, 3) / 32.0;

        var cb = 21 * Math.pow(ei, 2) / 16 - 55 * Math.pow(ei, 4) / 32;
        var cc = 151 * Math.pow(ei, 3) / 96;
        var cd = 1097 * Math.pow(ei, 4) / 512;
        var phi1 = mu + ca * Math.sin(2 * mu) + cb * Math.sin(4 * mu) + cc * Math.sin(6 * mu) + cd * Math.sin(8 * mu);

        var n0 = a / Math.pow((1 - Math.pow((e * Math.sin(phi1)), 2)), (1 / 2.0));

        var r0 = a * (1 - e * e) / Math.pow((1 - Math.pow((e * Math.sin(phi1)), 2)), (3 / 2.0));
        var fact1 = n0 * Math.tan(phi1) / r0;

        var _a1 = 500000 - easting;
        var dd0 = _a1 / (n0 * k0);
        var fact2 = dd0 * dd0 / 2;

        var t0 = Math.pow(Math.tan(phi1), 2);
        var Q0 = e1sq * Math.pow(Math.cos(phi1), 2);
        var fact3 = (5 + 3 * t0 + 10 * Q0 - 4 * Q0 * Q0 - 9 * e1sq) * Math.pow(dd0, 4) / 24;

        var fact4 = (61 + 90 * t0 + 298 * Q0 + 45 * t0 * t0 - 252 * e1sq - 3 * Q0 * Q0) * Math.pow(dd0, 6) / 720;

        var lof1 = _a1 / (n0 * k0);
        var lof2 = (1 + 2 * t0 + Q0) * Math.pow(dd0, 3) / 6.0;
        var lof3 = (5 - 2 * Q0 + 28 * t0 - 3 * Math.pow(Q0, 2) + 8 * e1sq + 24 * Math.pow(t0, 2)) * Math.pow(dd0, 5) / 120;
        var _a2 = (lof1 - lof2 + lof3) / Math.cos(phi1);
        var _a3 = _a2 * 180 / Math.PI;

        var latitude = 180 * (phi1 - fact1 * (fact2 + fact3 + fact4)) / Math.PI;

       
        var longitude = ((zone > 0) && (6 * zone - 183.0) || 3.0) - _a3;

        var obj = {
              latitude : latitude,
              longitude: longitude
        };


        return obj;
      }


function detail_multi_polygon(geojsonGeometry)
      {
            var options;
            var googleObj, opts = _copy(options);
            googleObj = [];
				for (var i = 0; i < geojsonGeometry.coordinates.length; i++){
					var paths = [];
					var exteriorDirection;
					var interiorDirection;
					for (var j = 0; j < geojsonGeometry.coordinates[i].length; j++){
						var path = [];
						for (var k = 0; k < geojsonGeometry.coordinates[i][j].length; k++){
							var ll = new google.maps.LatLng(geojsonGeometry.coordinates[i][j][k][1], geojsonGeometry.coordinates[i][j][k][0]);
							path.push(ll);
						}
						if(!j){
							exteriorDirection = _ccw(path);
							paths.push(path);
						}else if(j == 1){
							interiorDirection = _ccw(path);
							if(exteriorDirection == interiorDirection){
								paths.push(path.reverse());
							}else{
								paths.push(path);
							}
						}else{
							if(exteriorDirection == interiorDirection){
								paths.push(path.reverse());
							}else{
								paths.push(path);
							}
						}
					}
					opts.paths = paths;
					googleObj.push(new google.maps.Polygon(opts));
                        }
                       
                        return googleObj;
      }

      // function ย่อย
      var _ccw = function( path ){
		var isCCW;
		var a = 0;
		for (var i = 0; i < path.length-2; i++){
			a += ((path[i+1].lat() - path[i].lat()) * (path[i+2].lng() - path[i].lng()) - (path[i+2].lat() - path[i].lat()) * (path[i+1].lng() - path[i].lng()));
		}
		if(a > 0){
			isCCW = true;
		}
		else{
			isCCW = false;
		}
		return isCCW;
      };
      var _copy = function(obj){
    var newObj = {};
    for(var i in obj){
      if(obj.hasOwnProperty(i)){
        newObj[i] = obj[i];
      }
    }
    return newObj;
  };
      
      // จบการทำงานฟังก์ชั่นย่อย
