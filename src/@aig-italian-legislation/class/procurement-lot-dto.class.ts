import { AigProcurementDTO } from "./procurement-dto.class";

export class AigProcurementLotDTO {
	id?: number;

	cig: string;
	description: string;
	sectorCode: string;
	procedureCode: string;
	modalityCode: string;
	offerExpiryDate: Date;
	baseAmount: number;
	candidacy: boolean;
	securityAmount: number;
	istatCode: string;
	nutsCode: string;
	cpvCode: string;
	typeCode: string;
	awardCriterionCode: string;
	statusCode: string;
	workLocationCode: string;
	creationDateTime: Date;

	procurement: AigProcurementDTO;

}