import { AigPartecipationStatusDTO } from "./partecipation-status-dto.class";
import { AigPartecipationModalityDTO } from "./partecipation-modality-dto.class";
import { AigProcurementLotDTO } from "./procurement-lot-dto.class";

export class AigPartecipationDTO {
	id?: number;

	proposerEopooCode: string;
	partecipationTypeCode: string;
	siteInspection: boolean;
	offering: string;
	note: string;
	creationDateTime: Date;

	status: AigPartecipationStatusDTO;
	modality: AigPartecipationModalityDTO;
	procurementLot: AigProcurementLotDTO;

}