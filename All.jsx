/*
 * 
 * @author: Erick Bessa
 * @email: erickbessa@gmail.com 
 * 
*/

//#include MakeLoop.jsxinc
#include UnlockLayers.jsx
#include RemoveUselessLayer.jsx
#include RasterizeSObjects.jsx

(function(GlobalObject,app){
	
		if ( app.documents.length > 0 )
		{
			var empty = 0,
				flattened = 0,
				unlocked = 0,
				inVisible = 0,
				dlg = new Window('dialog', 'PSD Otimizator' );
				
			dlg.msgPnl = dlg.add('panel', undefined, 'Escolha o que fazer:');
			dlg.msgPnl.pb = dlg.add('button', undefined, 'OK');
			dlg.msgPnl.alignChildren = "left";
			dlg.msgPnl.unlock = dlg.msgPnl.add('checkbox', undefined, 'Destravar (unlock) layers');
			dlg.msgPnl.invisible = dlg.msgPnl.add('checkbox', undefined, 'Remover layers e pastas invisíveis (ou vazias)');
			dlg.msgPnl.smarto = dlg.msgPnl.add('checkbox', undefined, 'Rasterizar "SmartObjects"');
			
			dlg.show(); //o script para.
			
			(function(dlgItens){//aqui só roda depois que a pessoa fecha a janela
				var unlock = dlgItens.unlock.value,
					invisible = dlgItens.invisible.value,
					rasterize = dlgItens.smarto.value,
					hasChecked = (unlock || invisible || rasterize);
					
				if(hasChecked){
					flattened = rasterize ? GlobalObject.rasterizeSObject() : 0;
					inVisible = invisible ? GlobalObject.removeUseless() : 0;
					if(!rasterize && !invisible && unlock){
						alert(true);
						unlocked = GlobalObject.unlockLayers();
					}
					
					alert(
						"Status Report: \n" +
						(unlocked > 0 ? unlocked + " layers destravadas \n" : "")+
						(flattened > 0 ? flattened + " Smart objects rasterizados. \n" : "")+
						(inVisible  > 0 ? inVisible + " Layers invisíveis removidas. \n" : "")+
						(empty     > 0 ? empty + "  Layers visiveis, mas sem conteúdo, removidas." : "")
					);
					
				}
			}(dlg.msgPnl));
			
		} else {
			
			alert("Nenhum documento aberto!");
			return;
			
		}
		
}(this, app));