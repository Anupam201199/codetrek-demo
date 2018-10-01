

function buttonreacts(){
var objtitle=document.getElementById('Title1');
var obdescription=document.getElementById('Description1');
if(objtitle.value=='' || obdescription.value=='')
{alert("empty fields");}
else
{alert("success");}
}

var count=false;
var increase1=14;
var decrease1=2;
var discount=false;
function Likecolor(){
var like1=document.getElementById('like');

like1.classList.add("text-success");
if (count==false) {
	increase1 += 1;
	count= true;
} else {
increase1 -= 1;
count=false;
}
document.getElementById('increase1').innerHTML=increase1;
    }

// }
function DislikeColor(){

var dislike1=document.getElementById('dislike');
dislike1.classList.add("text-danger");
if (discount==false) {
	decrease1 += 1;
	discount=true;
} else {

	decrease1 -=1;
	discount=false;
}
document.getElementById('decrease1').innerHTML=decrease1;
}
