// store-10-downtown-manhattan - JuanMa - 07.16.19


if(window.location.href.indexOf("store.html") > -1){
	stores_api_database();
}

function stores_api_database(){

var jm_current_time = new Date().getHours();

	const api_stores = "https://api.airtable.com/v0/apppyH5b3WcPLVnJD/store_hours?&api_key=keyjtf3IfzEJEha5M"

	fetch(api_stores)
	  .then(res => res.json())
	  .then(data => {
	    // console.log(data);
	    //printData_store(data.records);
	    callDropData(data.records);
	  })

	const callDropData = (data) => {
	console.log("STORES LIST :");	
	  data.map( (data, i) => {
	  	console.log(jm_current_time);
	  	console.log(data.fields.sun_o);
	    var search_store_url = data.fields.slug;
		if(window.location.href.indexOf(search_store_url) > -1){
	    	console.log("data for current store:");
	    	console.log(jm_current_time);
	    	console.log(data.fields.store);
	  		console.log(data.fields.mon);
	    }
	    //   if(window.location.href.indexOf("/search") > -1){
	    //     designer_name_byword = data.fields.designer_name.match(/\w+|[^\s\w]+/g);
	    //     //theDropBanner(i,data.fields.designer_name,designer_name_byword,data.fields.disclaimer_drop);
	    //   };
	    // };
	    ;	    
	  })  
	}

	function store_10_build(){
		console
	} 
}