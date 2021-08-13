canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color1 = "skyblue";
color2 = "black";
color3 = "red";
color4 = "yellow";
color5 = "green";


ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 10;
ctx.arc(200,250,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 10;
ctx.arc(300,300,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 10;
ctx.arc(400,250,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 10;
ctx.arc(500,300,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 10;
ctx.arc(600,250,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 10;
ctx.rect(50,122,700,350);
ctx.stroke();

