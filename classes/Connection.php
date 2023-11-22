<?php 
	// Klasa za povezivanje sa bazom podataka
	class Connection
	{
		//Ova funkcija vraca PDO podatke za bazu podataka
		//Posto je static function povezati bazu podataka mozemo
		//pomocu  Connection::connect()
		public static function connect($database)
		{
		//try and catch test da li baza radi- ako ne onda izbaci gresku
			try{
				return new PDO('mysql:host='.$database['host'].';dbname='.$database['dbname'].';',$database['user'],'');

			}catch(PDOException $e){
				die("Error". $e->getMessage());
			}

		}
	}

 ?>