$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideToggle();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endNovaImg = $('#end-img-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endNovaImg}" >`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${endNovaImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#end-img-nova').val('');
    })
});