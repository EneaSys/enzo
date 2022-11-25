import { AigFatturaElettronicaBodyDTO } from "./fattura-elettronica-body-dto.class";

export class AigDatiPagamentoDTO {
	id?: number;

	condizioniPagamento: string;

	fatturaElettronicaBody: AigFatturaElettronicaBodyDTO;

}