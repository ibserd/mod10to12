function Telefon(marka, cena, kolor) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
  console.log('Marka tego telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a jego cena wynosi ' + this.cena + 'zł.')
}

var iphone6s = new Telefon("Apple", 3500, "czarny"),
    GalaxyS6 = new Telefon("Samsung", 2500, "czarny"),
    P9 = new Telefon("Huawei", 1100, "biały");

P9.printInfo();
GalaxyS6.printInfo();
iphone6s.printinfo();
