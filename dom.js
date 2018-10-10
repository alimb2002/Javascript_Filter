var addForm = document.getElementById('addForm');
var listUl = document.getElementById('items');

// Target the from and ul


addForm.addEventListener("submit" , addToList);

function addToList(e){
e.preventDefault();

var inputText = document.getElementById('addText').value;
// Get form value

var newLi = document.createElement('li');
newLi.className = "list-group-item";
var newText = document.createTextNode(inputText);
newLi.appendChild(newText);
var newButton = document.createElement('button');
newButton.className = "btn btn-warning btn-sm float-right delete ";
newButton.appendChild(document.createTextNode('Delete'));
newLi.appendChild(newButton);

listUl.appendChild(newLi);

} 

// Remove from list
var deleteBtns = document.querySelectorAll('.delete');

deleteBtns.forEach(delbtn = function() {
    addEventListener('click' , deleteList)

})

function deleteList (e){
    if (e.target.classList.contains("delete") ) {
       if (confirm("Are You Sure To Delete?") ){
        var parentLiToDel = e.target.parentElement;
        parentLiToDel.parentElement.removeChild(parentLiToDel);
         }
        
    }
   
}
// Search in Items

var searchIn = document.getElementById('search');
searchIn.addEventListener('keyup' , searchFun);

function searchFun(e){
   var searchText = e.target.value.toLowerCase();
    var allLis = document.getElementsByClassName('list-group-item');

    Array.from(allLis).forEach( function(Li){
     var LiName = Li.firstChild.textContent;
     
     if (LiName.toLowerCase().indexOf(searchText) != -1 ){
         Li.style.display ='block';
     }else{
         Li.style.display = 'none';
     }

    } )


}