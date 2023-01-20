var wms_layers = [];

var lyr_PLPZGiK3401061__OT_SKJZ_L_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://editor.giscloud.com/wms/maps/2157508",
    attributions: ' ',
                              params: {
                                "LAYERS": "5403735:PL.PZGiK.340.1061__OT_SKJZ_L",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "PL.PZGiK.340.1061__OT_SKJZ_L",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PLPZGiK3401061__OT_SKJZ_L_0, 0]);
var lyr_dzielnice_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://editor.giscloud.com/wms/maps/2157508",
    attributions: ' ',
                              params: {
                                "LAYERS": "5403734:dzielnice",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "dzielnice",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dzielnice_1, 0]);
var lyr_Linie_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://editor.giscloud.com/wms/maps/2157508",
    attributions: ' ',
                              params: {
                                "LAYERS": "5403739:Linie",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Linie",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Linie_2, 0]);

lyr_PLPZGiK3401061__OT_SKJZ_L_0.setVisible(true);lyr_dzielnice_1.setVisible(true);lyr_Linie_2.setVisible(true);
var layersList = [lyr_PLPZGiK3401061__OT_SKJZ_L_0,lyr_dzielnice_1,lyr_Linie_2];
