#include MakeLoop.jsxinc

(function(GlobalObject,app){
	var flattened = 0,
		wasLock;
	
	// loop para rasterizar os smartobjects
	GlobalObject.rasterizeSObject = function(){
		MakeLoop({
			watchVisibility : false,
			callback : function(currentLayer){
					//app.activeDocument.activeLayer = currentLayer;
					//var isVisible = currentLayer.visible;//armazena a visibilidade
					// wasLock = currentLayer.allLocked;
					// currentLayer.allLocked = false;
						
					if(currentLayer.kind == LayerKind.SMARTOBJECT){
						currentLayer.rasterize(RasterizeType.ENTIRELAYER);
						//currentLayer.allLocked = wasLock;
						++flattened;
					}
					//currentLayer.visible = isVisible;// restaura a visibilidade
			}
		});
	};

}(this, app));