/*global MashupPlatform*/

    var url = 'http://10.0.1.29:8090/ngsi10/contextEntities/'

    function requestSensorData(entity){
    	alert(entity);

    	var req = new XMLHttpRequest();
    	console.log("init");
    	var urlEntity = url + entity;
    	
    	req.onreadystatechange = function() {
    		
    	    if (req.readyState == 4 && req.status == 200) {
    	    	
    	    	console.log("req");
    	    	console.log(req);
    	    	
    	    	//var respT = req.responseText;
    	    	//var resp = respT.split('\n');
    	    	var resp = req.responseXML;
    	    	
    	    	console.log("resp");
    	    	console.log(resp);
    	    	updateData(resp);
    	    }
    	}
    	
    	req.open("GET", urlEntity, true);
    	//req.overrideMimeType('text/xml');
    	req.send();
    	
    	
    }

    var updateData = function updateData(resp){
        console.log("Entered update data");
        document.getElementById('sensor_id').textContent = resp.getElementsByTagName("id")[0].childNodes[0].nodeValue;
        document.getElementById('sensor_data').textContent = resp.getElementsByTagName("providingApplication")[0].childNodes[0].nodeValue;

    }
    
    MashupPlatform.wiring.registerCallback('sdata', requestSensorData);

