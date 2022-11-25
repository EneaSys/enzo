import { AigDatiGeneraliDocumentoDTO } from "./dati-generali-documento-dto.class";

export class AigDatiBolloDTO {
	id?: number;

	bolloVirtuale: string;
	importoBollo: any;

	datiGeneraliDocumento: AigDatiGeneraliDocumentoDTO;

}