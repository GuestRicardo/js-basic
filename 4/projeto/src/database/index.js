import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Aluno from "../model/Aluno";
import User from "../model/User";

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model)=> model.init(connection));
