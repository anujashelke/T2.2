
function MyClassDecorator(target){
	target.prototype.skills='criket';
	console.log(target)
}


@MyClassDecorator
class player1{

	skills: String;
}

var virat = new player1();
console.log(virat.skills);

//mixins

class eats{
	item: String;
	constructor(item){
		this.item=item;

	}
}

class playes{
	game: String;
	constructor(game){
		this.game=game;

	}
}

class codes{
	lang: String;
	constructor(lang){
		this.lang=lang;

	}
}

function giveInfo(mixins){
	if(mixin==undefined){
		return new eats('cake');
	}

	if(mixin=='playes'){
		let e= new eats('cake');
		let p=new playes('badminton');

		return{
			MI: e.item,
			PG: p.game
		}
	}
	if(mixin=='codes'){
		let e= new eats('cake');
		let c=new codes('typescript');

		return{
			MI: e.item,
			CL: c.lang
		}
	}
}

let details = giveInfo('playes');
console.log(details);