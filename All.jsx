//#include MakeLoop.jsxinc
//#include RemoveUselessLayer.jsxinc
//#include RasterizeSObjects.jsxinc

/*
 * 
 * @author: Erick Bessa
 * @email: erickbessa@gmail.com 
 * 
*/
(function(GlobalObject,app){
	var dlg = new Window('dialog', 'Alert Box Builder' );
	dlg.msgPnl = dlg.add('panel', undefined, 'Messages');
	dlg.msgPnl.title = dlg.msgPnl.add('group');
	dlg.title.st = dlg.title.add('statictext', undefined, 'Alert box title:');
	dlg.title.et = dlg.title.add('edittext', undefined, 'Sample Alert');
	dlg.title.et.preferredSize = [200,20];
	
	dlg.show();
}(this, app));