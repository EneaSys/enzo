import { AigInsurancePolicyStatusDTO } from "./insurance-policy-status-dto.class";
import { AigPartecipationDTO } from "./partecipation-dto.class";

export class AigInsurancePolicyDTO {
	id?: number;

	companyPreparatorEopooCode: string;
	note: string;
	totalAmount: number;

	status: AigInsurancePolicyStatusDTO;
	partecipation: AigPartecipationDTO;

}