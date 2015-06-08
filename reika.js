function Reika () {
	this.kaytossa = 0;
	this.sijainti = [];
	this.nappula = null;
	
	this.lisaaNappula = function(nappula){
		this.nappula = nappula;
	}
	
	this.poistaNappula = function(){
		this.nappula = null;
	}
}
