//Função para o botão de busca
const content = document.querySelector('.content')

content.addEventListener('click', () => {
  const firstContainer = document.querySelector('.first-container')
  const secondContainer = document.querySelector('.second-container')
  
  firstContainer.classList.toggle('visible')
  secondContainer.classList.toggle('visible2')
})


//Função para seleção de cores
function _filterByColor(color) {
    if (color) {
      color = color.trim();
      $('.container-circles').find('.circle').each(function () {
        var $elm = $(this);
        console.log($elm, $elm.attr('class'), $elm.hasClass(color))
        if ($elm.hasClass(color))
          $elm.show();
        else
          $elm.hide();
      });
    }
  }
  
  function _clearFilter() {
    $('.container-circles .circle').show();
  }
  
  $(document).ready(function () {
    $('.btn-colors-wrapper').find('.btn-background-colors').on('click', function () {
  
      var isActive = $(this).hasClass('active');
      $('.btn-colors-wrapper .btn-background-colors').removeClass('active');
      if (isActive) {
        _clearFilter();
      } else {
        $(this).addClass('active');
        _filterByColor($(this).data('color'));
      }
    });
  });
