import { AigDettaglioLineaDTO } from "./dettaglio-linea-dto.class";

export class AigScontoMaggiorazioneLineaDTO {
	id?: number;

	percentuale: any;
	importo: any;
	tipoScontoMaggiorazioneCode: string;

	dettaglioLinea: AigDettaglioLineaDTO;

}