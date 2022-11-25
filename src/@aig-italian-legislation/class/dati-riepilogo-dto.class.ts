import { AigDatiBeniServiziDTO } from "./dati-beni-servizi-dto.class";

export class AigDatiRiepilogoDTO {
	id?: number;

	aliquotaIva: any;
	esigibilitaIvaCode: string;
	naturaCode: string;
	speseAccessorie: any;
	arrotondamento: any;
	imponibileImporto: any;
	imposta: any;
	riferimentoNormativo: string;

	datiBeniServizi: AigDatiBeniServiziDTO;

}