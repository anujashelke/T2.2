var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyClassDecorator(target) {
    target.prototype.skills = 'criket';
    console.log(target);
}
var player1 = (function () {
    function player1() {
    }
    return player1;
}());
player1 = __decorate([
    MyClassDecorator
], player1);
var virat = new player1();
console.log(virat.skills);
//mixins
var eats = (function () {
    function eats(item) {
        this.item = item;
    }
    return eats;
}());
var playes = (function () {
    function playes(game) {
        this.game = game;
    }
    return playes;
}());
var codes = (function () {
    function codes(lang) {
        this.lang = lang;
    }
    return codes;
}());
function giveInfo(mixins) {
    if (mixin == undefined) {
        return new eats('cake');
    }
    if (mixin == 'playes') {
        var e = new eats('cake');
        var p = new playes('badminton');
        return {
            MI: e.item,
            PG: p.game
        };
    }
    if (mixin == 'codes') {
        var e = new eats('cake');
        var c = new codes('typescript');
        return {
            MI: e.item,
            CL: c.lang
        };
    }
}
var details = giveInfo('playes');
console.log(details);
