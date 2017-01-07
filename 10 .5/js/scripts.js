function Button(text) {
  this.text = text || 'Hello';
}
Button.prototype = {
  create: function() {
    this.$element = $('<button>');
    this.$element.text(this.text);
    var self = this
    this.$element.click(function() {
      alert(self.text);
    });
    $('<body>').append(this.$element);
  }
}

var btn1 = new Button('Hello!');
btn1.create();
