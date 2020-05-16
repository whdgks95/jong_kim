function randomlink(){
  var n, b, a, answer;
  answer = confirm("마음에 안들어도 무조건 이 메뉴를 선택하시는 것에 동의합니까?");
  n = Math.random();
  b = n*8;
  a = Math.ceil(b)
  c = a+".html"
  if(answer==true){
    location.href="file:///C:/Users/%EC%A2%85%ED%95%9C/Desktop/%EA%B3%B5%EC%A3%BC%EB%A7%9B%EC%A7%91/"+c;
  }
}

function changeimg(){
  var found = null;
    var sel = document.getElementsByName("고가네");
    var img = document.getElementById("고가네사진");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}

function msb(){
  var found = null;
    var sel = document.getElementsByName("명성");
    var img = document.getElementById("명성불고기");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}

function chung(){
  var found = null;
    var sel = document.getElementsByName("청운");
    var img = document.getElementById("청운식당");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}

function jin(){
  var found = null;
    var sel = document.getElementsByName("진흥");
    var img = document.getElementById("진흥각");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}

function chobab(){
  var found = null;
    var sel = document.getElementsByName("인생");
    var img = document.getElementById("인생초밥");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}

function gugbab(){
  var found = null;
    var sel = document.getElementsByName("새이학");
    var img = document.getElementById("새이학가든");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}

function pork(){
  var found = null;
    var sel = document.getElementsByName("공주돈");
    var img = document.getElementById("공주돈까스");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}

function dubu(){
  var found = null;
    var sel = document.getElementsByName("맛깔");
    var img = document.getElementById("맛깔사진");

    for(var i=0; i<sel.length; i++)
    {
        if(sel[i].checked == true)
        {
            found = sel[i];
            break;
        }
    }
    img.src = found.value;
}
