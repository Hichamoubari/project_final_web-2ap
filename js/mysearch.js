var mySearch = document.getElementById("recherche");
mySearch.onclick = function(){
	
	var search = document.getElementById("search").value;
	
     localStorage.setItem("search",search);	
}