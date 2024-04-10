$(document).ready(iniciar);

function iniciar(){

    let listacontenido = $('.listacontenido');

    for (let i = 0; i < lista.length; i++) {
        listacontenido.append('<img src="'+lista[i].src+'" class="imglist" >')
        
    }


    $('.imglist').click(function (){
        $('.img-seleccionado').attr('src',this.src);
        let regex = /[0-9]{1,2}\.[a-z]{3}/i;
        let match = this.src.match(regex);
        let index = match[0].split('.')[0];
        
        let description = lista[index].description;
        let title = lista[index].title;

        $('.description').text(description);
        $('.title').text(title);
        
        $('.img-seleccionado')
        .wrap('<span style="display:inline-flex" ></span>')
        .css('display','block')
        .css('opacity',1)
        .parent()
        .zoom(
            {
                magnify:2,
                target:'.target'
            }
        )
    });

}