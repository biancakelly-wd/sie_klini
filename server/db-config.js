const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;//Servidor
const express = require('express')
const app = express();
const port = 3002;

//Banco de dados
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'test',
})


//GET PLANOS
app.get('/getPlano', (req, res) => {
    var SQL = "SELECT NOM_REDE FROM rede_completa WHERE DIVULGA_WEB = 'S' ";
    
    db.query(SQL, (err, result) => {
        const setPlano = new Set();
        const planos = result;
        const filterPlanos = planos.filter((plano) =>{
            const duplicatedPlano = setPlano.has(plano.NOM_REDE);
            setPlano.add(plano.NOM_REDE)
            return !duplicatedPlano;
        })
        if (err) console.log(err);
        else res.send(filterPlanos);
    });
})

//GET TIPO DE SERVIÇO
app.get('/getServico', (req, res) => {
    var SQL = "SELECT NOME_TIPO_PRESTADOR FROM rede_completa WHERE DIVULGA_WEB = 'S' ";
    
    db.query(SQL, (err, result) => {
        const setServico = new Set();
        const servicos = result;
        const filterServico = servicos.filter((servico) =>{
            const duplicatedServico = setServico.has(servico.NOME_TIPO_PRESTADOR);
            setServico.add(servico.NOME_TIPO_PRESTADOR)
            return !duplicatedServico;
        })
        if (err) console.log(err);
        else res.send(filterServico);
    });
});

//GET BAIRRO

//GET CIDADE

//GET ESPECIALIDADES

app.listen(port, () => console.log(`Example app listening on port ${port}!`))