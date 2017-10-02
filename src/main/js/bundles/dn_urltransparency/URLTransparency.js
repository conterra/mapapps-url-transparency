define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "ct/_lang"
], function (declare, array, _lang) {
    return declare([], {
        encodeURLParameter: function () {
            var operationalLayer = this._mapModel.getOperationalLayer().children;
            var opacityLayers = _getLayerWithChangedOpacity(operationalLayer);

            var urlExtensionLayers = '';   //hier ändern --> eckige Klammer bugggen??

            for (var i = 0; i < opacityLayers.length; i++) {
                if (urlExtensionLayers === "") {
                    urlExtensionLayers = '{"layerID":"' + opacityLayers[i].id +
                            '", "opacity":' + opacityLayers[i].opacity + '}';

                } else {
                    urlExtensionLayers = urlExtensionLayers + ', {"layerID":"' + opacityLayers[i].id +
                            '", "opacity":' + opacityLayers[i].opacity + '}';
                }
                ;

            }
            ;
            var urlExtensionLayersString = JSON.stringify(urlExtensionLayers);
            var urlExtension = JSON.parse('{"transparencyLayers": [' + urlExtensionLayersString + ']}');
            return urlExtension;
        },

        decodeURLParameter: function (params) {
            if (params.transparencyLayers) {
                var layerOpacity = JSON.parse('[' + params.transparencyLayers + ']');
                var operationalLayer = this._mapModel.getOperationalLayer().children;
                if (!layerOpacity) {
                    return;
                }
                for (var i = 0; i < operationalLayer.length; i++) {
                    for (var n = 0; n < layerOpacity.length; n++) {
                        if (layerOpacity[n].layerID === operationalLayer[i].id) {

                            operationalLayer[i].set("opacity", (layerOpacity[n].opacity));
                        }
                    }
                    ;
                };
            };
        }
    });

    function _getLayerWithChangedOpacity(operationalLayer) {
        var opacityLayers = [];
        for (var i = 0; i < operationalLayer.length; i++) {
            if (operationalLayer[i].opacity > 0 && operationalLayer[i].opacity <= 1) {
                opacityLayers.push(operationalLayer[i]);
            }
        }
        ;
        return opacityLayers;
    }
    ;
});


