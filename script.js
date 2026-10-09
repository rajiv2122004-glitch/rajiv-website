(function(){
  document.getElementById('yr').textContent=new Date().getFullYear();
  var t=document.getElementById('tilt');
  if(t&&matchMedia('(hover:hover)').matches){
    var h=t.parentElement;
    h.addEventListener('mousemove',function(e){
      var r=h.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      t.style.transform='rotateY('+(x*22)+'deg) rotateX('+(-y*22)+'deg)';
    });
    h.addEventListener('mouseleave',function(){t.style.transform='';});
  }
  var f=document.getElementById('bookForm'),n=document.getElementById('fNote');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var name=f.fName.value.trim(),mail=f.fMail.value.trim(),msg=f.fMsg.value.trim();
    if(!name||!/^\S+@\S+\.\S+$/.test(mail)){n.textContent='Enter your name and a valid email address.';return;}
    var body='Name: '+name+'\nEmail: '+mail+'\n\n'+msg;
    window.location.href='mailto:rajiv2122004@gmail.com?subject='+encodeURIComponent('Booking request from '+name)+'&body='+encodeURIComponent(body);
    n.textContent='Opening your email app to send the request.';
  });
})();
