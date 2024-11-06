var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SRMAPBLOCKS_1 = new ol.format.GeoJSON();
var features_SRMAPBLOCKS_1 = format_SRMAPBLOCKS_1.readFeatures(json_SRMAPBLOCKS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRMAPBLOCKS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRMAPBLOCKS_1.addFeatures(features_SRMAPBLOCKS_1);
var lyr_SRMAPBLOCKS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRMAPBLOCKS_1, 
                style: style_SRMAPBLOCKS_1,
                popuplayertitle: "SRM AP BLOCKS ",
                interactive: true,
                title: '<img src="styles/legend/SRMAPBLOCKS_1.png" /> SRM AP BLOCKS '
            });
var format_SRMDATA_2 = new ol.format.GeoJSON();
var features_SRMDATA_2 = format_SRMDATA_2.readFeatures(json_SRMDATA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRMDATA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRMDATA_2.addFeatures(features_SRMDATA_2);
var lyr_SRMDATA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRMDATA_2, 
                style: style_SRMDATA_2,
                popuplayertitle: "SRM DATA",
                interactive: true,
                title: 'SRM DATA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SRMAPBLOCKS_1.setVisible(true);lyr_SRMDATA_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SRMAPBLOCKS_1,lyr_SRMDATA_2];
lyr_SRMAPBLOCKS_1.set('fieldAliases', {'id': 'id', });
lyr_SRMDATA_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SRMAPBLOCKS_1.set('fieldImages', {'id': '', });
lyr_SRMDATA_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SRMAPBLOCKS_1.set('fieldLabels', {'id': 'no label', });
lyr_SRMDATA_2.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SRMDATA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});