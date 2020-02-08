import './pagination.scss';
import pagination from 'paginationjs/dist/pagination.js';

$.fn.pagination.defaults.nextText='arrow_forward';

$(function(){
  $('#pagination-container').pagination({
    dataSource: function(done){
         var result = [];
         for (var i = 1; i < 172; i++) {
             result.push(i);
         }
         done(result);
      },
    pageSize: 12,
    pageRange: 1,
    showPrevious: false,
    callback: function(data, pagination) {
      var html = template(data);
      dataContainer.html(html);
    }
  })
});

/*<script>
// список ресурсов
var resources = [
  {href :'https://www.yandex.ru/'},
  {href :'https://music.yandex.ru/'},
  {href :'http://www.ivi.ru/'},
  {href :'https://ege.yandex.ru/'},
  {href :'https://market.yandex.ru/'},
  {href :'http://getbootstrap.com/'},
  {href :'http://v4-alpha.getbootstrap.com/'}
];
// pageSize - количество ресурсов в одном блоке
$(function(){
  $('#pagination-container').pagination({
    dataSource: resources,
    pageSize: 3,
    formatResult: function(data) {
      for (var i = 0, len = data.length; i < len; i++) {
        data[i].href = data[i].href;
      }
    },
    callback: function(data, pagination) {
      var dataContainer = $('#data-container');
      var html = '<ul>';
      $.each(data, function(index, item) {
        html += '<li><a href="'+ item.href +'">'+item.href+'</a></li>';
      });
      html += '</ul>';
      dataContainer.html(html);
    }
  })
});
</script>*/
