#include MakeLoop.jsxinc

(function(GlobalObject,app){
	
	//loop para remover layers inúteis
	GlobalObject.removeUseless = function(){
		MakeLoop({
			watchVisibility : true,
			callback : function(currentLayer){//layers invisíveis, com conteúdo ou não.
						
						//currentLayer.allLocked = false;
					
						if(currentLayer.visible !== true){ //layers invisíveis
							
							try{ 
								currentLayer.remove();
								++LoopStats.inVisible;
							}catch(e){}
							
						} else if (currentLayer.kind == LayerKind.NORMAL && currentLayer.bounds[2] == 0 && currentLayer.bounds[3] == 0){ //layers visíveis, mas sem conteúdo.
							
							try{
								currentLayer.remove();
								++LoopStats.empty;
							} catch(e){}
							
						}
				}
		}, true);
	};

}(this, app));