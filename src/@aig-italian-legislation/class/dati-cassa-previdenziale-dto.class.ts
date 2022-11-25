import { AigDatiGeneraliDocumentoDTO } from "./dati-generali-documento-dto.class";

export class AigDatiCassaPrevidenzialeDTO {
	id?: number;

	alCassa: any;
	importoContributo: any;
	imponibileCassa: any;
	tipoCassaCode: string;
	aliquotaIva: any;
	naturaCode: string;
	ritenuta: string;
	riferimentoAmministrativo: string;

	datiGeneraliDocumento: AigDatiGeneraliDocumentoDTO;

}