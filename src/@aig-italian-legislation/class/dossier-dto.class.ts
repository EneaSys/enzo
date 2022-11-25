import { AigProcurementDTO } from "./procurement-dto.class";
import { AigProcurementLotDTO } from "./procurement-lot-dto.class";
import { AigPartecipationDTO } from "./partecipation-dto.class";
import { AigPreparationDTO } from "./preparation-dto.class";

export class AigDossierDTO {
	id?: number;

	description: string;
	dossierCode: string;

	procurement: AigProcurementDTO;
	procurementLot: AigProcurementLotDTO;
	partecipation: AigPartecipationDTO;
	preparation: AigPreparationDTO;

}