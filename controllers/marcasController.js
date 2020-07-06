let fs = require('fs');
let bdAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))


const marcas = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})               
        res.write('******** LISTADO DE MARCAS UNICAS ********* ' + '\n\n')
        var marcasUnicas = []
        
        //cuenta el primer nivel de autos
        for(var i = 0; i < bdAutos.length; i++) {
            for(var j = 0; j < bdAutos[i].autos.length; j++) { 
                //si la marca NO existe con funcion incluide, agregarla a nueva matriz                                        
              if (marcasUnicas.includes(bdAutos[i].autos[j].marca)==false){
                marcasUnicas.push(bdAutos[i].autos[j].marca)
                res.write(bdAutos[i].autos[j].marca + '\n')                 
              }                
           }           
        }
        res.write('Cantidad total de Marcas : '+ marcasUnicas.length + '\n')     
        res.end()
    },

    detalleDeMarca:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'}) 
        let idNombMarca = req.params.NombreDeMarca;
        let contador = 0
        res.write("-----------------MARCA BUSCADA: " + idNombMarca + "----------------------------------------------" + '\n\n')
        for(var i = 0; i < bdAutos.length; i++) {
                for(var j = 0; j < bdAutos[i].autos.length; j++) { 
                    //console.log("si "+ idNombMarca + "="+ bdAutos[i].autos[j].marca)    
                    if(bdAutos[i].autos[j].marca == idNombMarca){                          
                        res.write(" MODELO:"+  bdAutos[i].autos[j].modelo +" AÑO: " + bdAutos[i].autos[j].anio + '\n\n')    
                        contador++  
                }                
            }    
        }    
        if (contador>0){
            res.write('Cantidad total son : '+ contador + '\n\n')        
        }else{
            res.write('---- NO se encontro la marca   :) ---------' + '\n\n')  
        }
            
        res.end()
    }

}


    module.exports = marcas;