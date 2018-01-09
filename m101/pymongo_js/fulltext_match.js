db.sentences.aggregate(
	[
	  {$match:
		{ $text: {$search:"tree rat"} }
	
	  },
	  {$sort: 
		{ $score: {$meta:"textScore" }	
	  },
	  {$project:
		{words:1,_id:0}
	  }
	]
)

