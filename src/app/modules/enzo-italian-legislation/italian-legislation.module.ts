import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnzoSharedModule } from 'app/shared/shared.module';
import { italianLegislationRoutes } from './italian-legislation.route';
import { AgalItalianLegislationModule } from '@agal-italian-legislation/italian-legislation.module';

import { EnzoProcurementListPageComponent } from './components/procurement/procurement-list-page/procurement-list-page.component';
import { EnzoProcurementDetailPageComponent } from './components/procurement/procurement-detail-page/procurement-detail-page.component';
import { EnzoProcurementLotCategoryListPageComponent } from './components/procurement-lot-category/procurement-lot-category-list-page/procurement-lot-category-list-page.component';
import { EnzoProcurementLotCategoryDetailPageComponent } from './components/procurement-lot-category/procurement-lot-category-detail-page/procurement-lot-category-detail-page.component';
import { EnzoProcurementLotListPageComponent } from './components/procurement-lot/procurement-lot-list-page/procurement-lot-list-page.component';
import { EnzoProcurementLotDetailPageComponent } from './components/procurement-lot/procurement-lot-detail-page/procurement-lot-detail-page.component';
import { EnzoPartecipationStatusListPageComponent } from './components/partecipation-status/partecipation-status-list-page/partecipation-status-list-page.component';
import { EnzoPartecipationStatusDetailPageComponent } from './components/partecipation-status/partecipation-status-detail-page/partecipation-status-detail-page.component';
import { EnzoPartecipationModalityListPageComponent } from './components/partecipation-modality/partecipation-modality-list-page/partecipation-modality-list-page.component';
import { EnzoPartecipationModalityDetailPageComponent } from './components/partecipation-modality/partecipation-modality-detail-page/partecipation-modality-detail-page.component';
import { EnzoPartecipationListPageComponent } from './components/partecipation/partecipation-list-page/partecipation-list-page.component';
import { EnzoPartecipationDetailPageComponent } from './components/partecipation/partecipation-detail-page/partecipation-detail-page.component';
import { EnzoPreparationStatusListPageComponent } from './components/preparation-status/preparation-status-list-page/preparation-status-list-page.component';
import { EnzoPreparationStatusDetailPageComponent } from './components/preparation-status/preparation-status-detail-page/preparation-status-detail-page.component';
import { EnzoPreparationModalityListPageComponent } from './components/preparation-modality/preparation-modality-list-page/preparation-modality-list-page.component';
import { EnzoPreparationModalityDetailPageComponent } from './components/preparation-modality/preparation-modality-detail-page/preparation-modality-detail-page.component';
import { EnzoPreparationListPageComponent } from './components/preparation/preparation-list-page/preparation-list-page.component';
import { EnzoPreparationDetailPageComponent } from './components/preparation/preparation-detail-page/preparation-detail-page.component';
import { EnzoDesignatedCompanyListPageComponent } from './components/designated-company/designated-company-list-page/designated-company-list-page.component';
import { EnzoDesignatedCompanyDetailPageComponent } from './components/designated-company/designated-company-detail-page/designated-company-detail-page.component';
import { EnzoInsurancePolicyStatusListPageComponent } from './components/insurance-policy-status/insurance-policy-status-list-page/insurance-policy-status-list-page.component';
import { EnzoInsurancePolicyStatusDetailPageComponent } from './components/insurance-policy-status/insurance-policy-status-detail-page/insurance-policy-status-detail-page.component';
import { EnzoInsurancePolicyListPageComponent } from './components/insurance-policy/insurance-policy-list-page/insurance-policy-list-page.component';
import { EnzoInsurancePolicyDetailPageComponent } from './components/insurance-policy/insurance-policy-detail-page/insurance-policy-detail-page.component';
import { EnzoDossierListPageComponent } from './components/dossier/dossier-list-page/dossier-list-page.component';
import { EnzoDossierDetailPageComponent } from './components/dossier/dossier-detail-page/dossier-detail-page.component';
import { EnzoFatturaElettronicaHeaderListPageComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-list-page/fattura-elettronica-header-list-page.component';
import { EnzoFatturaElettronicaHeaderDetailPageComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-detail-page/fattura-elettronica-header-detail-page.component';
import { EnzoDatiTrasmissioneListPageComponent } from './components/dati-trasmissione/dati-trasmissione-list-page/dati-trasmissione-list-page.component';
import { EnzoDatiTrasmissioneDetailPageComponent } from './components/dati-trasmissione/dati-trasmissione-detail-page/dati-trasmissione-detail-page.component';
import { EnzoCedentePrestatoreListPageComponent } from './components/cedente-prestatore/cedente-prestatore-list-page/cedente-prestatore-list-page.component';
import { EnzoCedentePrestatoreDetailPageComponent } from './components/cedente-prestatore/cedente-prestatore-detail-page/cedente-prestatore-detail-page.component';
import { EnzoRappresentanteFiscaleListPageComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-list-page/rappresentante-fiscale-list-page.component';
import { EnzoRappresentanteFiscaleDetailPageComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-detail-page/rappresentante-fiscale-detail-page.component';
import { EnzoCessionarioCommittenteListPageComponent } from './components/cessionario-committente/cessionario-committente-list-page/cessionario-committente-list-page.component';
import { EnzoCessionarioCommittenteDetailPageComponent } from './components/cessionario-committente/cessionario-committente-detail-page/cessionario-committente-detail-page.component';
import { EnzoTerzoIntermediarioOSoggettoEmittenteListPageComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-list-page/terzo-intermediario-o-soggetto-emittente-list-page.component';
import { EnzoTerzoIntermediarioOSoggettoEmittenteDetailPageComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-detail-page/terzo-intermediario-o-soggetto-emittente-detail-page.component';
import { EnzoSoggettoEmittenteListPageComponent } from './components/soggetto-emittente/soggetto-emittente-list-page/soggetto-emittente-list-page.component';
import { EnzoSoggettoEmittenteDetailPageComponent } from './components/soggetto-emittente/soggetto-emittente-detail-page/soggetto-emittente-detail-page.component';
import { EnzoFatturaElettronicaBodyListPageComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-list-page/fattura-elettronica-body-list-page.component';
import { EnzoFatturaElettronicaBodyDetailPageComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-detail-page/fattura-elettronica-body-detail-page.component';
import { EnzoDatiGeneraliListPageComponent } from './components/dati-generali/dati-generali-list-page/dati-generali-list-page.component';
import { EnzoDatiGeneraliDetailPageComponent } from './components/dati-generali/dati-generali-detail-page/dati-generali-detail-page.component';
import { EnzoDatiGeneraliDocumentoListPageComponent } from './components/dati-generali-documento/dati-generali-documento-list-page/dati-generali-documento-list-page.component';
import { EnzoDatiGeneraliDocumentoDetailPageComponent } from './components/dati-generali-documento/dati-generali-documento-detail-page/dati-generali-documento-detail-page.component';
import { EnzoDatiRitenutaListPageComponent } from './components/dati-ritenuta/dati-ritenuta-list-page/dati-ritenuta-list-page.component';
import { EnzoDatiRitenutaDetailPageComponent } from './components/dati-ritenuta/dati-ritenuta-detail-page/dati-ritenuta-detail-page.component';
import { EnzoDatiBolloListPageComponent } from './components/dati-bollo/dati-bollo-list-page/dati-bollo-list-page.component';
import { EnzoDatiBolloDetailPageComponent } from './components/dati-bollo/dati-bollo-detail-page/dati-bollo-detail-page.component';
import { EnzoDatiCassaPrevidenzialeListPageComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-list-page/dati-cassa-previdenziale-list-page.component';
import { EnzoDatiCassaPrevidenzialeDetailPageComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-detail-page/dati-cassa-previdenziale-detail-page.component';
import { EnzoScontoMaggiorazioneListPageComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-list-page/sconto-maggiorazione-list-page.component';
import { EnzoScontoMaggiorazioneDetailPageComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-detail-page/sconto-maggiorazione-detail-page.component';
import { EnzoDatiOrdineAcquistoListPageComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-list-page/dati-ordine-acquisto-list-page.component';
import { EnzoDatiOrdineAcquistoDetailPageComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-detail-page/dati-ordine-acquisto-detail-page.component';
import { EnzoDatiContrattoListPageComponent } from './components/dati-contratto/dati-contratto-list-page/dati-contratto-list-page.component';
import { EnzoDatiContrattoDetailPageComponent } from './components/dati-contratto/dati-contratto-detail-page/dati-contratto-detail-page.component';
import { EnzoDatiConvenzioneListPageComponent } from './components/dati-convenzione/dati-convenzione-list-page/dati-convenzione-list-page.component';
import { EnzoDatiConvenzioneDetailPageComponent } from './components/dati-convenzione/dati-convenzione-detail-page/dati-convenzione-detail-page.component';
import { EnzoDatiRicezioneListPageComponent } from './components/dati-ricezione/dati-ricezione-list-page/dati-ricezione-list-page.component';
import { EnzoDatiRicezioneDetailPageComponent } from './components/dati-ricezione/dati-ricezione-detail-page/dati-ricezione-detail-page.component';
import { EnzoDatiFattureCollegateListPageComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-list-page/dati-fatture-collegate-list-page.component';
import { EnzoDatiFattureCollegateDetailPageComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-detail-page/dati-fatture-collegate-detail-page.component';
import { EnzoDatiSalListPageComponent } from './components/dati-sal/dati-sal-list-page/dati-sal-list-page.component';
import { EnzoDatiSalDetailPageComponent } from './components/dati-sal/dati-sal-detail-page/dati-sal-detail-page.component';
import { EnzoDatiDdtListPageComponent } from './components/dati-ddt/dati-ddt-list-page/dati-ddt-list-page.component';
import { EnzoDatiDdtDetailPageComponent } from './components/dati-ddt/dati-ddt-detail-page/dati-ddt-detail-page.component';
import { EnzoRiferimentoNumeroLineaListPageComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-list-page/riferimento-numero-linea-list-page.component';
import { EnzoRiferimentoNumeroLineaDetailPageComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-detail-page/riferimento-numero-linea-detail-page.component';
import { EnzoDatiTrasportoListPageComponent } from './components/dati-trasporto/dati-trasporto-list-page/dati-trasporto-list-page.component';
import { EnzoDatiTrasportoDetailPageComponent } from './components/dati-trasporto/dati-trasporto-detail-page/dati-trasporto-detail-page.component';
import { EnzoIndirizzoResaListPageComponent } from './components/indirizzo-resa/indirizzo-resa-list-page/indirizzo-resa-list-page.component';
import { EnzoIndirizzoResaDetailPageComponent } from './components/indirizzo-resa/indirizzo-resa-detail-page/indirizzo-resa-detail-page.component';
import { EnzoFatturaPrincipaleListPageComponent } from './components/fattura-principale/fattura-principale-list-page/fattura-principale-list-page.component';
import { EnzoFatturaPrincipaleDetailPageComponent } from './components/fattura-principale/fattura-principale-detail-page/fattura-principale-detail-page.component';
import { EnzoDatiBeniServiziListPageComponent } from './components/dati-beni-servizi/dati-beni-servizi-list-page/dati-beni-servizi-list-page.component';
import { EnzoDatiBeniServiziDetailPageComponent } from './components/dati-beni-servizi/dati-beni-servizi-detail-page/dati-beni-servizi-detail-page.component';
import { EnzoDettaglioLineaListPageComponent } from './components/dettaglio-linea/dettaglio-linea-list-page/dettaglio-linea-list-page.component';
import { EnzoDettaglioLineaDetailPageComponent } from './components/dettaglio-linea/dettaglio-linea-detail-page/dettaglio-linea-detail-page.component';
import { EnzoScontoMaggiorazioneLineaListPageComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-list-page/sconto-maggiorazione-linea-list-page.component';
import { EnzoScontoMaggiorazioneLineaDetailPageComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-detail-page/sconto-maggiorazione-linea-detail-page.component';
import { EnzoAltriDatiGestionaliListPageComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-list-page/altri-dati-gestionali-list-page.component';
import { EnzoAltriDatiGestionaliDetailPageComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-detail-page/altri-dati-gestionali-detail-page.component';
import { EnzoDatiRiepilogoListPageComponent } from './components/dati-riepilogo/dati-riepilogo-list-page/dati-riepilogo-list-page.component';
import { EnzoDatiRiepilogoDetailPageComponent } from './components/dati-riepilogo/dati-riepilogo-detail-page/dati-riepilogo-detail-page.component';
import { EnzoDatiPagamentoListPageComponent } from './components/dati-pagamento/dati-pagamento-list-page/dati-pagamento-list-page.component';
import { EnzoDatiPagamentoDetailPageComponent } from './components/dati-pagamento/dati-pagamento-detail-page/dati-pagamento-detail-page.component';
import { EnzoDettaglioPagamentoListPageComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-list-page/dettaglio-pagamento-list-page.component';
import { EnzoDettaglioPagamentoDetailPageComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-detail-page/dettaglio-pagamento-detail-page.component';
import { EnzoDatiVeicoliListPageComponent } from './components/dati-veicoli/dati-veicoli-list-page/dati-veicoli-list-page.component';
import { EnzoDatiVeicoliDetailPageComponent } from './components/dati-veicoli/dati-veicoli-detail-page/dati-veicoli-detail-page.component';
import { EnzoAllegatiListPageComponent } from './components/allegati/allegati-list-page/allegati-list-page.component';
import { EnzoAllegatiDetailPageComponent } from './components/allegati/allegati-detail-page/allegati-detail-page.component';

@NgModule({
	imports: [ 
		RouterModule.forChild(italianLegislationRoutes),
		EnzoSharedModule,
		AgalItalianLegislationModule,
	],
	declarations: [
            EnzoProcurementListPageComponent,
            EnzoProcurementDetailPageComponent,
            EnzoProcurementLotCategoryListPageComponent,
            EnzoProcurementLotCategoryDetailPageComponent,
            EnzoProcurementLotListPageComponent,
            EnzoProcurementLotDetailPageComponent,
            EnzoPartecipationStatusListPageComponent,
            EnzoPartecipationStatusDetailPageComponent,
            EnzoPartecipationModalityListPageComponent,
            EnzoPartecipationModalityDetailPageComponent,
            EnzoPartecipationListPageComponent,
            EnzoPartecipationDetailPageComponent,
            EnzoPreparationStatusListPageComponent,
            EnzoPreparationStatusDetailPageComponent,
            EnzoPreparationModalityListPageComponent,
            EnzoPreparationModalityDetailPageComponent,
            EnzoPreparationListPageComponent,
            EnzoPreparationDetailPageComponent,
            EnzoDesignatedCompanyListPageComponent,
            EnzoDesignatedCompanyDetailPageComponent,
            EnzoInsurancePolicyStatusListPageComponent,
            EnzoInsurancePolicyStatusDetailPageComponent,
            EnzoInsurancePolicyListPageComponent,
            EnzoInsurancePolicyDetailPageComponent,
            EnzoDossierListPageComponent,
            EnzoDossierDetailPageComponent,
            EnzoFatturaElettronicaHeaderListPageComponent,
            EnzoFatturaElettronicaHeaderDetailPageComponent,
            EnzoDatiTrasmissioneListPageComponent,
            EnzoDatiTrasmissioneDetailPageComponent,
            EnzoCedentePrestatoreListPageComponent,
            EnzoCedentePrestatoreDetailPageComponent,
            EnzoRappresentanteFiscaleListPageComponent,
            EnzoRappresentanteFiscaleDetailPageComponent,
            EnzoCessionarioCommittenteListPageComponent,
            EnzoCessionarioCommittenteDetailPageComponent,
            EnzoTerzoIntermediarioOSoggettoEmittenteListPageComponent,
            EnzoTerzoIntermediarioOSoggettoEmittenteDetailPageComponent,
            EnzoSoggettoEmittenteListPageComponent,
            EnzoSoggettoEmittenteDetailPageComponent,
            EnzoFatturaElettronicaBodyListPageComponent,
            EnzoFatturaElettronicaBodyDetailPageComponent,
            EnzoDatiGeneraliListPageComponent,
            EnzoDatiGeneraliDetailPageComponent,
            EnzoDatiGeneraliDocumentoListPageComponent,
            EnzoDatiGeneraliDocumentoDetailPageComponent,
            EnzoDatiRitenutaListPageComponent,
            EnzoDatiRitenutaDetailPageComponent,
            EnzoDatiBolloListPageComponent,
            EnzoDatiBolloDetailPageComponent,
            EnzoDatiCassaPrevidenzialeListPageComponent,
            EnzoDatiCassaPrevidenzialeDetailPageComponent,
            EnzoScontoMaggiorazioneListPageComponent,
            EnzoScontoMaggiorazioneDetailPageComponent,
            EnzoDatiOrdineAcquistoListPageComponent,
            EnzoDatiOrdineAcquistoDetailPageComponent,
            EnzoDatiContrattoListPageComponent,
            EnzoDatiContrattoDetailPageComponent,
            EnzoDatiConvenzioneListPageComponent,
            EnzoDatiConvenzioneDetailPageComponent,
            EnzoDatiRicezioneListPageComponent,
            EnzoDatiRicezioneDetailPageComponent,
            EnzoDatiFattureCollegateListPageComponent,
            EnzoDatiFattureCollegateDetailPageComponent,
            EnzoDatiSalListPageComponent,
            EnzoDatiSalDetailPageComponent,
            EnzoDatiDdtListPageComponent,
            EnzoDatiDdtDetailPageComponent,
            EnzoRiferimentoNumeroLineaListPageComponent,
            EnzoRiferimentoNumeroLineaDetailPageComponent,
            EnzoDatiTrasportoListPageComponent,
            EnzoDatiTrasportoDetailPageComponent,
            EnzoIndirizzoResaListPageComponent,
            EnzoIndirizzoResaDetailPageComponent,
            EnzoFatturaPrincipaleListPageComponent,
            EnzoFatturaPrincipaleDetailPageComponent,
            EnzoDatiBeniServiziListPageComponent,
            EnzoDatiBeniServiziDetailPageComponent,
            EnzoDettaglioLineaListPageComponent,
            EnzoDettaglioLineaDetailPageComponent,
            EnzoScontoMaggiorazioneLineaListPageComponent,
            EnzoScontoMaggiorazioneLineaDetailPageComponent,
            EnzoAltriDatiGestionaliListPageComponent,
            EnzoAltriDatiGestionaliDetailPageComponent,
            EnzoDatiRiepilogoListPageComponent,
            EnzoDatiRiepilogoDetailPageComponent,
            EnzoDatiPagamentoListPageComponent,
            EnzoDatiPagamentoDetailPageComponent,
            EnzoDettaglioPagamentoListPageComponent,
            EnzoDettaglioPagamentoDetailPageComponent,
            EnzoDatiVeicoliListPageComponent,
            EnzoDatiVeicoliDetailPageComponent,
            EnzoAllegatiListPageComponent,
            EnzoAllegatiDetailPageComponent,
	],
	providers: [
		
	],
})
export class EnzoItalianLegislationModule {}