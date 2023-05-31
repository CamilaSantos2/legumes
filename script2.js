$(document).ready(function() {
    const legumes = [
      {
        nome: 'Abóbora',
        foto: 'abóbora.png',
        especificacoes: 'Preço: R$ 8,72/kg',
      },
      {
        nome: 'Batata-doce',
        foto: 'batata-doce.png',
        especificacoes: 'Preço: R$ 3,99/kg',
      },
      {
        nome: 'Beterraba',
        foto: 'beterraba.png',
        especificacoes: 'Preço: R$ 3,59/kg',
      },
      {
        nome: 'Cenoura',
        foto: 'cenoura.png',
        especificacoes: 'Preço: R$ 4,99/kg'
      },
      {
        nome: 'Batata',
        foto: 'batata.png',
        especificacoes: 'Preço: R$ 3,99/kg'
      },
      {
        nome: 'Pepino',
        foto: 'pepino.png',
        especificacoes: 'Preço: R$ 3,50/kg'

      },
      {
        nome: 'Tomate',
        foto: 'tomate.png',
        especificacoes: 'Preço: R$ 6,99/kg'

      },

      {
        nome: 'Beringela',
        foto: 'beringela.png',
        especificacoes: 'Preço: R$ 3,99/kg'

      },
      {
        nome: 'Cebola',
        foto: 'cebola.png',
        especificacoes: 'Preço: R$ 4,50/kg'

      },
      {
        nome: 'Brócolis',
        foto: 'brocolis.png',
        especificacoes: 'Preço: R$ 7,99/kg'

      },
      {
        nome: 'Pimentão',
        foto: 'pimentao.png',
        especificacoes: 'Preço: R$ 7,99/kg',
        disponível: true

      },
      {
        nome: 'Couve-flor',
        foto: 'couve-flor.png',
        especificacoes: 'Preço: R$ 9,00/kg'
      }

    ];
  
    const legumesContainer = $('#legumes-container');

  legumes.forEach(legume => {
    const div = $('<div>').addClass(legume.nome);

    const h2 = $('<h2>').text(legume.nome);

    const img = $('<img>').attr('src', `legumes_img/${legume.foto}`).attr('alt', legume.foto).addClass('legumes_img');

    const p = $('<p>').text(legume.especificacoes);

    const link = $('<a>').attr('href', '#').text('Comprar');

    link.on('click', function() {
      window.open('nao_sou_robo.html', '_blank');
    });

    div.append(h2, img, p, link);

    legumesContainer.append(div);
  });
});








  