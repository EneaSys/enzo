import { AigDatiGeneraliDocumentoDTO } from "./dati-generali-documento-dto.class";

export class AigScontoMaggiorazioneDTO {
	id?: number;

	percentuale: any;
	importo: any;
	tipoScontoMaggiorazioneCode: string;

	datiGeneraliDocumento: AigDatiGeneraliDocumentoDTO;

}