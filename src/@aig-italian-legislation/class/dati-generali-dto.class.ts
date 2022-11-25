import { AigDatiGeneraliDocumentoDTO } from "./dati-generali-documento-dto.class";
import { AigDatiSalDTO } from "./dati-sal-dto.class";
import { AigDatiTrasportoDTO } from "./dati-trasporto-dto.class";
import { AigFatturaPrincipaleDTO } from "./fattura-principale-dto.class";
import { AigFatturaElettronicaBodyDTO } from "./fattura-elettronica-body-dto.class";

export class AigDatiGeneraliDTO {
	id?: number;


	datiGeneraliDocumento: AigDatiGeneraliDocumentoDTO;
	datiSal: AigDatiSalDTO;
	datiTrasporto: AigDatiTrasportoDTO;
	fatturaPrincipale: AigFatturaPrincipaleDTO;
	fatturaElettronicaBody: AigFatturaElettronicaBodyDTO;

}