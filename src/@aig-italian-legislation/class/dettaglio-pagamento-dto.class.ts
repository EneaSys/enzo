import { AigDatiPagamentoDTO } from "./dati-pagamento-dto.class";

export class AigDettaglioPagamentoDTO {
	id?: number;

	beneficiario: string;
	modalitaPagamentoCode: string;
	dataRiferimentoTerminiPagamento: any;
	giorniTerminiPagamento: any;
	dataScadenzaPagamento: any;
	importoPagamento: any;
	codUfficioPostale: string;
	cognomeQuietanzante: string;
	nomeQuietanzante: string;
	cFQuietanzante: string;
	titoloQuietanzante: string;
	istitutoFinanziario: string;
	iban: string;
	abi: string;
	cab: string;
	bic: string;
	scontoPagamentoAnticipato: any;
	dataLimitePagamentoAnticipato: any;
	penalitaPagamentiRitardati: any;
	dataDecorrenzaPenale: any;
	codicePagamento: string;

	datiPagamento: AigDatiPagamentoDTO;

}