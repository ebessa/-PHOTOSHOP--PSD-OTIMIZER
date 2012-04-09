#include MakeLoop.jsxinc

(function(GlobalObject,app){
	
	// loop para rasterizar os smartobjects
	MakeLoop({
		watchVisibility : false,
		callback : function(currentLayer){
				//app.activeDocument.activeLayer = currentLayer;
				//var isVisible = currentLayer.visible;//armazena a visibilidade
				if(currentLayer.kind == LayerKind.SMARTOBJECT){
					currentLayer.rasterize(RasterizeType.ENTIRELAYER);
					++LoopStats.flattened;
				}
				//currentLayer.visible = isVisible;// restaura a visibilidade
		}
	});

}(this, app));