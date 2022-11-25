import { AigPartecipationDTO } from "./partecipation-dto.class";

export class AigDesignatedCompanyDTO {
	id?: number;

	companyEopooCode: string;
	note: string;

	partecipation: AigPartecipationDTO;

}