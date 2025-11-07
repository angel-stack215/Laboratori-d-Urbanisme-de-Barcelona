var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> '
            });

lyr_Positronnolabels_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr__1];
lyr__1.set('fieldAliases', {'Comarca': 'Comarca', 'Link': 'Link', });
lyr__1.set('fieldImages', {'Comarca': '', 'Link': '', });
lyr__1.set('fieldLabels', {'Comarca': 'inline label - always visible', 'Link': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});