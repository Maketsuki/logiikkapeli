var PeliLauta = {
	sivunPituus: 7,
	ristinPaksuus :2,
	reiat : [],
	keski:0,
	
	//alustetaan pelilauta ja sen sisältö
	init : function (){
		this.keski = Math.round(this.sivunPituus / 2) - 1;
		//käydään reiät läpi ja lisätään niihin nappula
		for(i = 0; i < this.sivunPituus; i++){
			this.reiat[i] = [];
			for(a = 0; a < this.sivunPituus; a++){
				
				reika = new Reika();
				
				//jos ruutu on ristikon ulkopuolella, disabloidaan se
				//ja ohitetaan nappulan lisääminen siihen
				if((i < this.ristinPaksuus || i > this.sivunPituus - this.ristinPaksuus -1 ) && (a < this.ristinPaksuus || a > this.sivunPituus - this.ristinPaksuus -1 )){
					reika.kaytossa = 0;
					
				}
				else{
					reika.kaytossa = 1;
				}
				
				//tarkistetaan, ettei ole keskikohta ja reikä on käytössä
				//lisätään nappula
				if(!(a == this.keski && i == this.keski) && reika.kaytossa){
					nappula = new Nappula();
					nappula.sijainti.push(a);
					nappula.sijainti.push(i);
					reika.lisaaNappula(nappula);
				}
				
				reika.sijainti.push(a);
				reika.sijainti.push(i);
				this.reiat[i][a] = reika;
			}
		}
	},
	
	//palauttaa -1, jos alueen ulkopuolella, 0, jos tyhjä, 1 jos siinä on nappula
	annaRuudunSisalto: function(x, y){}
}
