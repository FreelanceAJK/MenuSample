 var itemlist = document.getElementById('itemlist'); 
 setItemList(); 
 var item = itemlist.getElementsByTagName('li'); 
 var check = document.getElementsByClassName('item'); 
 
 var selectedlist = document.getElementById('selectedlist');
 
 var selectme = document.getElementById('selectme'); 
 var deSelect = document.getElementById('deSelect'); 
 var upButton = document.getElementById('selectUp'); 
 var downButton = document.getElementById('selectDown');

selectme.addEventListener('click', ()=>{ 
	for(i=0; i<= check.length; i++){
		while (check[i].checked === true){
			var parentLi = check[i].parentNode; 
			var record = parentLi.innerText;
			var list_node = document.createElement("LI");
			var textnode = document.createTextNode(record);
			var checkBx = document.createElement("INPUT");
			checkBx.setAttribute("type", "checkbox");
			checkBx.className = 'selectItem'; 
		
			list_node.appendChild(checkBx); 
			list_node.appendChild(textnode);
			selectedlist.appendChild(list_node);
			
			var greyeditem = document.createElement("LI");
			greyeditem.setAttribute("id", record); 
			greyeditem.className = "grey";
			var greyednode = document.createTextNode("----" + record + "----");
			greyeditem.appendChild(greyednode);
			itemlist.insertBefore(greyeditem, parentLi);
			itemlist.removeChild(parentLi);
		}
	}
 });
deSelect.addEventListener('click', ()=>{
	var selectedLi = selectedlist.getElementsByTagName('li'); /all the li in menue 2/ 
	var check = document.getElementsByClassName('selectItem');/ all the checkboxes in menue 2/ 
	for(i=0; i<= selectedLi.length; i++){
		if(check[i].checked === true){
			var selectMenueInnterTXT = selectedLi[i].innerText;
			selectedlist.removeChild(selectedLi[i]);
			var greyedMatchingitem = find_greyedMatchingitem(selectMenueInnterTXT);
			console.log(selectMenueInnterTXT); 
		}
	}
 });

upButton.addEventListener('click', ()=>{
	//dummy(upButton.type);
	var selectionList = document.getElementById('selectedlist'); 
	var li = selectionList.getElementsByTagName('li'); 
	for (i=1; i<li.length; i++){ / search through this list to find the fist checked box/
		var checkbox = document.getElementsByClassName('selectItem'); 
		if(checkbox[i].checked === true){
			var prevLi = li[i].previousSibling;
			selectionList.insertBefore(li[i], prevLi); 
		}
	} 
}); 
downButton.addEventListener('click', ()=>{
	//dummy(downButton.type); 
	var selectionList = document.getElementById('selectedlist'); 
	var li = selectionList.getElementsByTagName('li'); 
	for(i= li.length-1; i>= 0; i-- ){
		var checkbox = document.getElementsByClassName('selectItem'); 
		if(checkbox[i].checked === false && checkbox[i-1].checked === true){
			var prevLi = li[i].previousSibling;
			selectionList.insertBefore(li[i], prevLi); 
			//break; 
		}
	}
;}); 
 
function find_greyedMatchingitem(text){
	var itemlist = document.getElementById('itemlist');
	var items = itemlist.getElementsByTagName('li');/ grabs all the li's in the first menue/ 
	for(i = 0; i< items.length; i++){ 
		if (items[i].hasAttribute('id')=== true){
			var idName = items[i].getAttribute("id"); /loops through all the li items and grabs their id/
			if(idName === text){ /if the element mathes the one from box 2/ 
				var replacementElement = create_replacementElement(text); / creat a replacementElement/ 
				itemlist.removeChild(itemlist.childNodes[i+1]); 
				itemlist.insertBefore(replacementElement, itemlist.childNodes[i+1]);
			}
		}
	}
 }
function create_replacementElement(elementName){
	var lItem = document.createElement("li");
	var chitem = document.createElement("INPUT");
	chitem.setAttribute("type", "checkbox");
	chitem.className = 'item'; 
	var innertxt = document.createTextNode(elementName);
	lItem.appendChild(chitem); 
	lItem.appendChild(innertxt);
	return lItem; 
 }
function addItem(number){
 var lItem = document.createElement("LI");
 var item = document.createElement("INPUT");
 item.setAttribute("type", "checkbox");
 item.className = 'item'; 
 var nodetxt = document.createTextNode(number);
 lItem.appendChild(item); 
 lItem.appendChild(nodetxt);
 itemlist.appendChild(lItem);
}
function setItemList(){
	 for (i = 1; i <= 5; i++){
		var number = i;
		var name = "Item ";
		var name = name + number;
		addItem(name);
	 }
}
function dummy(type){
	alert("This "+ type + " is not available at this time. Please check back soon for more fucntionality"); 
}


