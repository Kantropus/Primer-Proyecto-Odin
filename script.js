class Grid_generator{
	div=document.getElementById("wrapper");
	creardivs(squares){
		let lll=squares*squares;
		this.div.style["display"]="grid";
		this.div.style["grid-gap"]="1px";

		
		let subdivs=new Array(lll);
		for(let x=0,y=1,i=0;i<subdivs.length;i++){
			x++;
			subdivs[i]=document.createElement("div");
			subdivs[i].setAttribute("class","griddiv");
			subdivs[i].style["grid-column"]=x;
			subdivs[i].style["grid-row"]=y;
			subdivs[i].style["height"]=toString(640/lll);
			subdivs[i].style["width"]=toString(640/lll);
			if(x==squares){
				x=0;
				y++;
			}
		}
		for (var i = 0; i < subdivs.length; i++) {
			this.div.appendChild(subdivs[i]);
		}
	}
	resize_grid(){
		let new_grid_size = prompt("ingrese la cantidad de cuadrados por lado de la grilla, maximo de 100");
		if(new_grid_size!=""){
			this.div.innerHTML="";
			if (new_grid_size>100) {
				new_grid_size=100;
			}
			this.creardivs(new_grid_size,new_grid_size);
		}
	}

}
