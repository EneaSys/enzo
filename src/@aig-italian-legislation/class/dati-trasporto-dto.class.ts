import { AigIndirizzoResaDTO } from "./indirizzo-resa-dto.class";
import { AigDatiGeneraliDTO } from "./dati-generali-dto.class";

export class AigDatiTrasportoDTO {
	id?: number;

	vettoreEopooCode: string;
	mezzoTrasporto: string;
	causaleTrasporto: string;
	numeroColli: any;
	descrizione: string;
	unitaMisuraPeso: string;
	pesoLordo: any;
	pesoNetto: any;
	dataOraRitiro: any;
	dataInizioTrasporto: any;
	tipoResa: string;
	dataOraConsegna: any;

	indirizzoResa: AigIndirizzoResaDTO;
	datiGenerali: AigDatiGeneraliDTO;

}