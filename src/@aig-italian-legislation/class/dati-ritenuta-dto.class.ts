import { AigDatiGeneraliDocumentoDTO } from "./dati-generali-documento-dto.class";

export class AigDatiRitenutaDTO {
	id?: number;

	importoRitenuta: any;
	tipoRitenutaCode: string;
	aliquotaRitenuta: any;
	causalePagamento: string;

	datiGeneraliDocumento: AigDatiGeneraliDocumentoDTO;

}