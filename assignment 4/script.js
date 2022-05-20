var names=new Array();
names[0]="Yaakov";
names[1]="dick";
names[2]="jack";
names[3]="harley";
names[4]="robert";
names[5]="steve";
names[6]="laura";
names[7]="pina";
names[8]="Yaana";
names[9]="jhonny";

for (var i = 0;  i < names.length;  i++) {
	 if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
	 	console.log("Goodbye "+ names[i])
	 }
	 else{
	 	   console.log("hello "+ names[i])
	 }
}