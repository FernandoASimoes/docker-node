import { Sequelize } from 'sequelize';
import User from '../models/User.js';
import crypto from 'node:crypto';

export const createUser = async (req, res) => {

   try {
      const userToCreate = {
         id: crypto.randomUUID(),
         name: req.body.name,
         age: req.body.age,
         email: req.body.email
      }

      const user = await User.create(userToCreate)

      res.status(201).json(user)
   } catch (err) {
      res.status(500).json(err)
   }
}

export const getAllUsers = async (req, res) => {

   try {
      const users = await User.findAll();

      res.status(200).json(users)
   } catch (err) {
      res.status(500).json(err)
   }

}

export const deletUser = async (req, res) => {

   try {

      const user = await User.destroy({
         where: { id: req.params.id }
      })
      res.status(200).json({ message: 'Usuario deletado com sucesso!' })
   } catch {

   }


}