import { AigDatiGeneraliDTO } from "./dati-generali-dto.class";

export class AigDatiOrdineAcquistoDTO {
	id?: number;

	riferimentoNumeroLinea: any;
	idDocumento: string;
	data: any;
	numItem: string;
	codiceCommessaConvenzione: string;
	codiceCup: string;
	codiceCig: string;

	datiGenerali: AigDatiGeneraliDTO;

}