import {Sequelize} from 'sequelize-typescript';
import { Dog } from './models/dogmodel';
import { dbconfig } from './config';

export const sequelize = new Sequelize({
 database: dbconfig.database,
 dialect: dbconfig.dialect,
 username: dbconfig.username,
 password: dbconfig.password,
 host: dbconfig.host,
 port: dbconfig.port
});

sequelize.addModels([Dog]);

sequelize.authenticate().then(() => {
 console.log('Connected to DB');
})
.catch((err) => {
 console.log(err);
});

function initializeDatabase() {
    sequelize
        .sync({ force: true })
        .then(() => {
            console.log('Connection synced');
            return;
        })
        .catch(err => {
            console.log('err');
        });
}

function populateData() {
    const mydog = new Dog({ name: 'Fifi', breed: 'Shitweiler' });
    mydog.save()
        .then(() => {
            console.log('Dog ' + mydog.name + ' added to DB');
        })
        .catch((err) => {
            console.log(err);
        });

}
