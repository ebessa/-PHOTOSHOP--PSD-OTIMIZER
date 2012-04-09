#include MakeLoop.jsxinc

(function(GlobalObject,app){

	// como a  classe MakeLoop obrigatoriamente tem que "unlockar"  as layers, esse arquivo vai apenas acionar um loop vazio - sem calback.
	GlobalObject.MakeLoop({
		watchVisibility : false
	});
	
}(this, app));