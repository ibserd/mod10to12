,$(function() {
    function Column(name) {
      var self = this;
			
      this.id = randomString();
      this.name = name;
      this.$element = createColumn();
			
      function createColumn() {  
				var $column = $('<div>').addClass('column'),
						$columnTitle = $('<h2>').addClass('column-title').text(self.name),
						$columnCardList = $('<ul>').addClass('column-card-list'),
						$columnDelete = $('<button>').addClass('btn-delete').text('x'),
						$columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');
 			
			}
		}

 });
