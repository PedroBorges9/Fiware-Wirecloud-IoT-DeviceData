/*global MashupPlatform*/

	function updateDataWidget(entity){
	    
		MashupPlatform.wiring.pushEvent('send_entity', entity);
	}
