import { AigPartecipationDTO } from "./partecipation-dto.class";
import { AigPreparationStatusDTO } from "./preparation-status-dto.class";
import { AigPreparationModalityDTO } from "./preparation-modality-dto.class";

export class AigPreparationDTO {
	id?: number;

	companyPreparatorEopooCode: string;
	note: string;

	partecipation: AigPartecipationDTO;
	status: AigPreparationStatusDTO;
	modality: AigPreparationModalityDTO;

}