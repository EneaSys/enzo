import { AigDatiBeniServiziDTO } from "./dati-beni-servizi-dto.class";

export class AigDettaglioLineaDTO {
	id?: number;

	numeroLinea: any;
	tipoCessionePrestazioneCode: string;
	codiceArticoloTipo: string;
	codiceArticoloValore: string;
	descrizione: string;
	quantita: any;
	unitaMisura: string;
	dataInizioPeriodo: any;
	dataFinePeriodo: any;
	prezzoUnitario: any;
	prezzoTotale: any;
	aliquotaIva: any;
	ritenuta: string;
	naturaCode: string;
	riferimentoAmministrazione: string;

	datiBeniServizi: AigDatiBeniServiziDTO;

}