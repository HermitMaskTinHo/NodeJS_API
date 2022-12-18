import express from 'express'
import bodyParser from 'body-parser'
import { request, response } from "express"
import { Users } from "../entity/Users"
import { getManager } from "typeorm"

const control = express()
control.use(bodyParser.json())

//register a new account 
control.post('/register', async (request, response) => {
    try {
        let entityManager = getManager()
        let registerUser = {
            'email': request.body.email,
            'password': request.body.password,
            'username': request.body.username
        }

        if (!registerUser.email || !registerUser.password || !registerUser.username) {
            let responseData = {
                message: "email, pass or username can't empty",
                status_code: 400
            }
            return response.status(400).send(responseData)
        }
        else {
            let userDB = await entityManager.getRepository(Users).findOneBy({
                email: registerUser.email
            })
            if (userDB) {
                let responseData = {
                    message: "account existed",
                    status_code: 200
                }
                return response.status(200).send(responseData)
            }
            else {
                let user = await entityManager.getRepository(Users).create(registerUser)
                let result = await entityManager.getRepository(Users).save(user)

                let responseData = {
                    message: "account is registed success",
                    status_code: 200,
                    result
                }
                return response.status(200).send(responseData)
            }
        }
    } catch (e) {
        return response.status(500).send(e)
    }
})

//login account 
control.post('/login',async(request,response)=>{
    let entityManager = getManager()
    let userDB = {
        'email' : request.body.email,
        'password': request.body.password
    }
    
    if(!userDB.email || !userDB.password){
        let responseData = {
            message: "email or pass is emptying",
            status_code: 400
        }
        return response.status(400).send(responseData)
    }
    else{
        let userManager = await entityManager.getRepository(Users).findOneBy({
            email: userDB.email
        })
        if(userManager){
            let findPass = await entityManager.getRepository(Users).findOneBy({
                password: userDB.password
            })
            if(findPass)
            {
                let responseData = {
                    message: "login success",
                    status_code: 200
                }
                return response.status(200).send(responseData)
            }
            else{
                let responseData = {
                    message: "password invalid",
                    status_code: 400
                }
                return response.status(400).send(responseData)
            }
        }
    }
})

//change pass account
control.put('/edit',async(request,response)=>{
})

module.exports = control