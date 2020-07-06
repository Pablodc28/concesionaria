let fs = require('fs');
let bdAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))


const autos = {

    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})               
        res.write("LISTADO DE TODOS LOS AUTOS DE NUESTRA CONCESIONARIA"+ '\n\n')
        
        //cuenta el primer nivel de autos
        for(var i = 0; i < bdAutos.length; i++) {                                   
            res.write('SUCURSAL: '+ bdAutos[i].sucursal + '\n') // la uso solo para saber si esta bien la sucursal que ingreso, los datos y cantidad del listado Json
            
            //console.log(bdAutos[i].autos) //me devuelve todos los autos del Json
            //console.log(bdAutos[i].autos.length) //LONGITUD DEL ARRAY ONJ AUTOS
            //cuenta el segundo nivel de autos osea las propiedades (marca modelo anio modelo)
            for(var j = 0; j < bdAutos[i].autos.length; j++) {                       
                res.write('Marca ' + bdAutos[i].autos[j].marca +" Modelo:"+  bdAutos[i].autos[j].modelo +" ")
                res.write('año:' + bdAutos[i].autos[j].anio + ' color:' + bdAutos[i].autos[j].color + '\n')
           }
           res.write('Cantidad total son : '+ bdAutos[i].autos.length + '\n\n')
           res.write('---------------------------------------------------------------' + '\n\n')
        }
        res.end()
    },  

    autoMarca:(req,res)=>{
        //traer todos los autos con todos sus datos de la marca ingresada  
        res.set({'content-type':'text/plain;charset=utf-8'}) 
        let contador = 0
        let IDautoMarca = req.params.autoYMarca;
        res.write('MARCA BUSCADA: '+ IDautoMarca + '\n') // la uso solo para verifica los datos y cantidad del listado Json

        for(var i = 0; i < bdAutos.length; i++) {                                               
            for(var j = 0; j < bdAutos[i].autos.length; j++) {   
                if(bdAutos[i].autos[j].marca == IDautoMarca){                     
                        res.write('Modelo:' + bdAutos[i].autos[j].modelo +" ")
                        res.write('año:' + bdAutos[i].autos[j].anio + ' color:' + bdAutos[i].autos[j].color + '\n')
                    contador++ 
                }      
            }          
        }
        res.write('\n\n' +'Cantidad total son : '+ contador + '\n\n')
        res.write('---------------------------------------------------------------' + '\n\n')
        res.end()

    }         
}


    module.exports = autos;