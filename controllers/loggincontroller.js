//home controller

module.exports = {
    //funciones del controlador

    loggin : function( req , res , next ){
        res.render( 'index' , {titulo : 'smacv'} );
    }
}
