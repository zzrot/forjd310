$(document).ready(function(){
    var from,to,subject,text;
    $("#send_email").click(function(){      
        to= "fredk1018@gmail.com";
        subject="NO-REPLY From FredKhoury.me, ("+$("#phone").val()+")"+$("#name").val()+" <"+$("#email").val()+"> has sent you a message."
        text=$("#message").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            console.log('success');
        }

});
    });
});