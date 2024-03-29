
const db=require('../models');
const User=db.users;
const {Sequelize}=require("sequelize");



let addUser=async (req,res)=>{
	//create new user
	// let data=await User.build({name:"hamza",email:"hamza@gmai.com"});

	//it will create and save new user
	let dat=await User.create({})
	data.save();
	resp.status(200).json(resp) 
}


let crudOperations=async (req,res)=>{
	let dt=await User.update({name:"final"},{
		where:{
			id:3
		}
	})


	let data=await User.bulkCreate([
		{name:"hamza",email:"hamzawebdev@gmail.como",gender:"male"},
		{name:"hamza",email:"hamzawebdev@gmail.como",gender:"male"},
	])

	//findOne,findAll
}

let queryData=async (req,res)=>{
	await User.create({name:"hamza",email:"helloworl@gmail.com",gender:"male"},{fields:["email"]})

	// let data=await User.findAll({
	// 	attributes:[
	// 		'name',
	// 		['email','emailID'],
	// 		'gender',
	// 		[Sequelize.fn('Count',Sequelize.col('email'))]
	// 	]
	// });

	let data=await User.findAll({
		// attributes:{
		// 	exclude:['create_at','modified_at']
		// }
		where:{
			id:{

			},
			email:{

			}
		},
		order:[
			['name','DESC']
		],
		group:['email','name'],
		limit:2,
	})
	 
	//findOne,findAll
}

const finderData=async(req,res)=>{
	// let data=await User.findOne({});
	let data=await User.findAndCountAll({
		where:{
			email:"hamza@gmail.com"
		}
	})


}

module.exports={addUser,crudOperations,queryData} 