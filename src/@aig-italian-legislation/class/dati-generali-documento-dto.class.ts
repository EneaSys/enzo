import { AigDatiBolloDTO } from "./dati-bollo-dto.class";
import { AigDatiGeneraliDTO } from "./dati-generali-dto.class";

export class AigDatiGeneraliDocumentoDTO {
	id?: number;

	divisa: string;
	data: string;
	numero: string;
	importoTotaleDocumento: string;
	arrotondamento: string;
	causale: string;
	art73: string;
	tipoDocumentoCode: string;

	datiBollo: AigDatiBolloDTO;
	datiGenerali: AigDatiGeneraliDTO;

}