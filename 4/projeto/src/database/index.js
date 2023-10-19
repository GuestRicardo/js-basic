import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Aluno from "../model/Aluno";
import User from "../model/User";
import Foto from "../model/Foto"

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model)=> model.init(connection));
models.forEach((model)=> model.associate && model.associate(connection.models));
