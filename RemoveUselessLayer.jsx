#include MakeLoop.jsxinc

(function(GlobalObject,app){
	var inVisible = 0,
		empty = 0,
		wasLock;
		
	//loop para remover layers inúteis
	GlobalObject.removeUseless = function(){
		MakeLoop({
			watchVisibility : true,
			callback : function(currentLayer){//layers invisíveis, com conteúdo ou não.
						
						// wasLock = currentLayer.allLocked;
						// currentLayer.allLocked = false;
					
						if(currentLayer.visible !== true){ //layers invisíveis
							
							try{ 
								currentLayer.remove();
								++inVisible;
							}catch(e){}
							
						} else if (currentLayer.kind == LayerKind.NORMAL && currentLayer.bounds[2] == 0 && currentLayer.bounds[3] == 0){ //layers visíveis, mas sem conteúdo.
							
							try{
								currentLayer.remove();
								++empty;
							} catch(e){}
							
						} else { // se a layer não for removida, restaura o "lock";
							//currentLayer.allLocked = wasLock;
						}
				}
		}, true);
		
		return {
			invisible : inVisible,
			empty : empty
		};
	};

}(this, app));