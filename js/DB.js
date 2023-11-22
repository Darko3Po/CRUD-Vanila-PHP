class DB{
	//method for use data accounts from table accounts
	static getAll(){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest();
			xml.onreadystatechange = () => {
				if(xml.readyState == 4 && xml.status == 200){
					//xml.responseText
					resolve(JSON.parse(xml.responseText));
				}
			}
			xml.open('GET','get_data.php');
			xml.send();
		})
	}

	//method for save data in table accounts
	static save(newAccount){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest();
			xml.onreadystatechange = () => {
				if(xml.readyState == 4 && xml.status == 200){
					//xml.responseText
					resolve(xml.responseText);
					// console.log(xml.responseText);
				}
			}
			xml.open('POST','save_data.php');
			xml.setRequestHeader("Content-type","application/json");
			xml.send(JSON.stringify(newAccount));
		})	
	}

}