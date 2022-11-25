import { AigDettaglioLineaDTO } from "./dettaglio-linea-dto.class";

export class AigAltriDatiGestionaliDTO {
	id?: number;

	tipiDato: string;
	riferimentoTesto: string;
	riferimentoNumero: any;
	riferimentoData: any;

	dettaglioLinea: AigDettaglioLineaDTO;

}