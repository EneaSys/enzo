import { AigDatiGeneraliDTO } from "./dati-generali-dto.class";
import { AigDatiBeniServiziDTO } from "./dati-beni-servizi-dto.class";

export class AigFatturaElettronicaBodyDTO {
	id?: number;

	numero: string;

	datiGenerali: AigDatiGeneraliDTO;
	datiBeniServizi: AigDatiBeniServiziDTO;

}