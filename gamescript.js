	function getMaxOfArray(numArray) {
  	return Math.max.apply(null, numArray);
	}
	function getMinOfArray(numArray) {
  	return Math.min.apply(null, numArray);
	}

	//var colors = ["blue", "red","purple","pink","yellow","green","black","#B464AE"]
	function getRandomColor(){
		var code = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i<6;i++){
			color+= code[Math.round(Math.random() *15)];
		}
		return color;
	}
	
	function getSum(total,num){
		return total+num;
	}
	var clickedTime; var createdTime = Date.now(); var reactionTime;
	var reactionTimeAll=[];
	var playing = true;
	
	function makeBox(){
		var time=Math.random()*5000;
		var positions = [Math.floor(Math.random()*200),Math.floor(Math.random()*300),Math.floor(Math.random()*100),Math.floor(Math.random()*200)];
		setTimeout(function() {
			//set it to randomly choose between box + circle shape
			if (Math.random()>0.5){
				document.getElementById("box").style.borderRadius="100px";
			} else{
				document.getElementById("box").style.borderRadius="0";
			}
			document.getElementById("box").style.backgroundColor=getRandomColor();
			document.getElementById("box").style.margin=positions[0]+"px "+positions[1]+"px "+positions[2]+"px "+positions[3]+"px";
			document.getElementById("box").style.display="block";
			createdTime=Date.now();
		}, time);
		}
	document.getElementById("box").onclick=function(){
			playing = true;
			clickedTime = Date.now();
			reactionTime = clickedTime-createdTime;
			reactionTimeAll = reactionTimeAll.concat(reactionTime); 
			document.getElementById("yourtime").innerHTML=reactionTime;
			this.style.display="none";
			makeBox();
		}; makeBox();
		document.getElementById("Done").onclick=function(){
		while (playing === true){
		reactTimes = reactionTimeAll;
		sumRTs = reactTimes.reduce(getSum);
		avRT = sumRTs/reactTimes.length;
		maxRT = getMaxOfArray(reactTimes);
		minRT = getMinOfArray(reactTimes);
		document.getElementById("results").innerHTML="Average RT: "+avRT+"  "+"Best Time: "+minRT+"  Worst Time: "+maxRT;
		//document.getElementById("Done").innerHTML="Play Again!";
		reactionTimeAll=[];
		playing = false;
		}
		};