var monPanier = new Array();
function chargerArticles()
      {
		var articles =document.getElementById("content");
		var search = localStorage.getItem("search");
		for(var i = 0; i < All.length; i++)
          {
			  if(search ==All[i].prix)
			  {
			  var article = document.createElement("div");
			      article.className ="article";
				  article.id = i + "-article";
		      var articleNom = document.createElement("h2");
			      articleNom.className ="nom_art";
				  articleNom.innerText = All[i].nom ;
				  article.appendChild(articleNom);
			  var articleImg = document.createElement("img");
                   	articleImg.className ="img_art";
                    articleImg.setAttribute("src", All[i].image);
                    article.appendChild(articleImg);	
              var articleDesc =document.createElement("div");
                     articleDesc.className ="desc_art";
                   articleDesc.innerText = All[i].desc;
                      article.appendChild(articleDesc);
              var articlePrix = document.createElement("div");
				   articlePrix.className ="prix_art";
				  articlePrix.innerText = All[i].prix +"Dh";
				  article.appendChild(articlePrix);
              var zoneCmd = document.createElement("div");
			      zoneCmd.className ="cmd_art";
			  var inputCmd  =  document.createElement("input");
				    inputCmd.className ="input_art";
                  inputCmd.id= i +"-qte";
                  inputCmd.type ="number";
                  inputCmd.value = 0;
                  inputCmd.min = 0 ;
                  inputCmd.max = 5 ;
			      zoneCmd.appendChild(inputCmd);
            var bouton = document.createElement("button");
			    bouton.className ="btn_art";
				bouton.id = i+"-cmd";
				bouton.onclick = function() { 
            var item = this.getAttribute("id");
                           var pos = item.substring(0,2) ;
			              if(pos>=10 && pos<60)
                        // On ajoute cet article au panier
                             ajouterAuPanier(pos);
                            else {
				                    var pos1 =item.substring(0,1);
					                 ajouterAuPanier(pos1);
			                      }	
                   }
				   zoneCmd.appendChild(bouton);
				 article.appendChild(zoneCmd);
                 articles.appendChild(article);
			  }
		  }
 }
function searchDansPanier(nom)
{ 
      var existe =false ;
      for(var i=0 ;i<monPanier.length;i++)
	  {
			  if(monPanier[i].nom==nom)
			  {
				  existe = true;
			  }
	  }
	return existe ;	  
}
function ajouterAuPanier(pos) { 
   if (searchDansPanier(All[pos].nom))
   {
           alert("l'article se trouve déja dans le panier");
   }
  else
     {
    var ident = pos +"-qte";
    var qte = document.getElementById(ident).value;  
            if(qte > 0)
			{
				var articleCmd = {};
				articleCmd.nom = All[pos].nom; 
				articleCmd.prix = All[pos].prix;
				articleCmd.qte =qte;
				articleCmd.prixHt = articleCmd.prix* articleCmd.qte;
				monPanier.push(articleCmd);
				alert("Nom "+articleCmd.nom);
				alert("prix "+articleCmd.prix);
				alert("quantite"+articleCmd.qte);
				alert("prixHt"+articleCmd.prixHt);
			}
			else{
				alert("choisissez une quantité > 0");
			}
}
}
function stockerPanier(data)
{
var panierJSON = {}; 
panierJSON.monPanier = data;
localStorage.setItem("panierLocalStorage", JSON.stringify(panierJSON));
}