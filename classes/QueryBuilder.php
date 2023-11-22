<?php 
//Sluzi da selektujemo sve iz baze podatka
	class QueryBuilder{

		protected $db;

		public function __construct($db)
		{
			$this->db = $db;
		}
		
		public function selectAll($table)
		{
			$sql = "SELECT * FROM {$table}";
			$query = $this->db->prepare($sql);
			$query->execute();
			return $query->fetchAll(PDO::FETCH_ASSOC);
		}

		public function save($data)
		{
			$sql = "INSERT INTO accounts VALUES(NULL,?,?,?)";
			$query = $this->db->prepare($sql);
			$query->execute([$data->name,$data->deposit,$data->credit_card]);

			if ($query) {
				return "success";
			}else {
				return "error";
			}
		}


	}

 ?>