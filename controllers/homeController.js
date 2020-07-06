let fs = require('fs');
let bdConcesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))


const home = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        
        res.write('Listado de Concesionarias' + '\n\n') 
        
        res.write('------------------------------------------------------------'+ '\n\n')   
        bdConcesionaria.forEach((concesionaria)=>{            
            res.write(concesionaria.sucursal + '\n\n');
            
        })
        
        res.write('------------------------------------------------------------')   

        res.end()
    },

}    

module.exports = home;