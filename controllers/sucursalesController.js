let fs = require('fs');
let bdsucursal = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))


const sucursales = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})

        bdsucursal.forEach((sucursalNombre)=>{                
            res.write("---------------------------------" + '\n\n');      
            res.write(sucursalNombre.sucursal + '\n\n');
            res.write("Direccion:" + sucursalNombre.direccion + '\n\n');
            res.write("Telefono:" + sucursalNombre.telefono + '\n\n');
            res.write("---------------------------------");      
        })

        res.end()
    },


    detalle:(req,res)=>{
        let idNombSucursal = req.params.NombreSucursal;
                      
        bdsucursal.forEach((sucursalNombre)=>{
            if(sucursalNombre.sucursal == idNombSucursal){
                res.send('Sucursal: '+ sucursalNombre.sucursal + '\n\n' + ' Direccion: ' + sucursalNombre.direccion + '\n\n' + ' Telefono: ' + sucursalNombre.telefono )              
            }
        })
        res.end("No se encuentro la Sucursal que buscabas")
    }

}




    module.exports = sucursales;