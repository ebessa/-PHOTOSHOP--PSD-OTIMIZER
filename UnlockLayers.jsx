#include MakeLoop.jsxinc

(function(GlobalObject,app){
	var unlocked = 0;
	
	GlobalObject.unlockLayers = function(){
		// como a  classe MakeLoop obrigatoriamente tem que "unlockar"  as layers, esse arquivo vai apenas acionar um loop vazio - sem calback.
		GlobalObject.MakeLoop({
			watchVisibility : false,
			countLock: true,
			callback: function(count){
				if(count === true){
					++unlocked;
				}
			}
		});
		
		return unlocked;
	};
	
}(this, app));