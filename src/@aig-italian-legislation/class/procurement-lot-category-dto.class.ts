import { AigProcurementLotDTO } from "./procurement-lot-dto.class";

export class AigProcurementLotCategoryDTO {
	id?: number;

	categoryCode: string;
	level: string;

	procurementLot: AigProcurementLotDTO;

}