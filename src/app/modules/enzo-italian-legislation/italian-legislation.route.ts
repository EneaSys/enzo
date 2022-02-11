import { Route } from '@angular/router';

import { EnzoProcurementListPageComponent } from './components/procurement/procurement-list-page/procurement-list-page.component';
import { EnzoProcurementDetailPageComponent } from './components/procurement/procurement-detail-page/procurement-detail-page.component';
import { ProcurementResolver } from '@agal-italian-legislation/resolvers/procurement.resolver';
import { EnzoProcurementLotCategoryListPageComponent } from './components/procurement-lot-category/procurement-lot-category-list-page/procurement-lot-category-list-page.component';
import { EnzoProcurementLotCategoryDetailPageComponent } from './components/procurement-lot-category/procurement-lot-category-detail-page/procurement-lot-category-detail-page.component';
import { ProcurementLotCategoryResolver } from '@agal-italian-legislation/resolvers/procurement-lot-category.resolver';
import { EnzoProcurementLotListPageComponent } from './components/procurement-lot/procurement-lot-list-page/procurement-lot-list-page.component';
import { EnzoProcurementLotDetailPageComponent } from './components/procurement-lot/procurement-lot-detail-page/procurement-lot-detail-page.component';
import { ProcurementLotResolver } from '@agal-italian-legislation/resolvers/procurement-lot.resolver';
import { EnzoPartecipationStatusListPageComponent } from './components/partecipation-status/partecipation-status-list-page/partecipation-status-list-page.component';
import { EnzoPartecipationStatusDetailPageComponent } from './components/partecipation-status/partecipation-status-detail-page/partecipation-status-detail-page.component';
import { PartecipationStatusResolver } from '@agal-italian-legislation/resolvers/partecipation-status.resolver';
import { EnzoPartecipationModalityListPageComponent } from './components/partecipation-modality/partecipation-modality-list-page/partecipation-modality-list-page.component';
import { EnzoPartecipationModalityDetailPageComponent } from './components/partecipation-modality/partecipation-modality-detail-page/partecipation-modality-detail-page.component';
import { PartecipationModalityResolver } from '@agal-italian-legislation/resolvers/partecipation-modality.resolver';
import { EnzoPartecipationListPageComponent } from './components/partecipation/partecipation-list-page/partecipation-list-page.component';
import { EnzoPartecipationDetailPageComponent } from './components/partecipation/partecipation-detail-page/partecipation-detail-page.component';
import { PartecipationResolver } from '@agal-italian-legislation/resolvers/partecipation.resolver';
import { EnzoPreparationStatusListPageComponent } from './components/preparation-status/preparation-status-list-page/preparation-status-list-page.component';
import { EnzoPreparationStatusDetailPageComponent } from './components/preparation-status/preparation-status-detail-page/preparation-status-detail-page.component';
import { PreparationStatusResolver } from '@agal-italian-legislation/resolvers/preparation-status.resolver';
import { EnzoPreparationModalityListPageComponent } from './components/preparation-modality/preparation-modality-list-page/preparation-modality-list-page.component';
import { EnzoPreparationModalityDetailPageComponent } from './components/preparation-modality/preparation-modality-detail-page/preparation-modality-detail-page.component';
import { PreparationModalityResolver } from '@agal-italian-legislation/resolvers/preparation-modality.resolver';
import { EnzoPreparationListPageComponent } from './components/preparation/preparation-list-page/preparation-list-page.component';
import { EnzoPreparationDetailPageComponent } from './components/preparation/preparation-detail-page/preparation-detail-page.component';
import { PreparationResolver } from '@agal-italian-legislation/resolvers/preparation.resolver';
import { EnzoDesignatedCompanyListPageComponent } from './components/designated-company/designated-company-list-page/designated-company-list-page.component';
import { EnzoDesignatedCompanyDetailPageComponent } from './components/designated-company/designated-company-detail-page/designated-company-detail-page.component';
import { DesignatedCompanyResolver } from '@agal-italian-legislation/resolvers/designated-company.resolver';
import { EnzoInsurancePolicyStatusListPageComponent } from './components/insurance-policy-status/insurance-policy-status-list-page/insurance-policy-status-list-page.component';
import { EnzoInsurancePolicyStatusDetailPageComponent } from './components/insurance-policy-status/insurance-policy-status-detail-page/insurance-policy-status-detail-page.component';
import { InsurancePolicyStatusResolver } from '@agal-italian-legislation/resolvers/insurance-policy-status.resolver';
import { EnzoInsurancePolicyListPageComponent } from './components/insurance-policy/insurance-policy-list-page/insurance-policy-list-page.component';
import { EnzoInsurancePolicyDetailPageComponent } from './components/insurance-policy/insurance-policy-detail-page/insurance-policy-detail-page.component';
import { InsurancePolicyResolver } from '@agal-italian-legislation/resolvers/insurance-policy.resolver';
import { EnzoDossierListPageComponent } from './components/dossier/dossier-list-page/dossier-list-page.component';
import { EnzoDossierDetailPageComponent } from './components/dossier/dossier-detail-page/dossier-detail-page.component';
import { DossierResolver } from '@agal-italian-legislation/resolvers/dossier.resolver';
import { EnzoFatturaElettronicaHeaderListPageComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-list-page/fattura-elettronica-header-list-page.component';
import { EnzoFatturaElettronicaHeaderDetailPageComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-detail-page/fattura-elettronica-header-detail-page.component';
import { FatturaElettronicaHeaderResolver } from '@agal-italian-legislation/resolvers/fattura-elettronica-header.resolver';
import { EnzoDatiTrasmissioneListPageComponent } from './components/dati-trasmissione/dati-trasmissione-list-page/dati-trasmissione-list-page.component';
import { EnzoDatiTrasmissioneDetailPageComponent } from './components/dati-trasmissione/dati-trasmissione-detail-page/dati-trasmissione-detail-page.component';
import { DatiTrasmissioneResolver } from '@agal-italian-legislation/resolvers/dati-trasmissione.resolver';
import { EnzoCedentePrestatoreListPageComponent } from './components/cedente-prestatore/cedente-prestatore-list-page/cedente-prestatore-list-page.component';
import { EnzoCedentePrestatoreDetailPageComponent } from './components/cedente-prestatore/cedente-prestatore-detail-page/cedente-prestatore-detail-page.component';
import { CedentePrestatoreResolver } from '@agal-italian-legislation/resolvers/cedente-prestatore.resolver';
import { EnzoRappresentanteFiscaleListPageComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-list-page/rappresentante-fiscale-list-page.component';
import { EnzoRappresentanteFiscaleDetailPageComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-detail-page/rappresentante-fiscale-detail-page.component';
import { RappresentanteFiscaleResolver } from '@agal-italian-legislation/resolvers/rappresentante-fiscale.resolver';
import { EnzoCessionarioCommittenteListPageComponent } from './components/cessionario-committente/cessionario-committente-list-page/cessionario-committente-list-page.component';
import { EnzoCessionarioCommittenteDetailPageComponent } from './components/cessionario-committente/cessionario-committente-detail-page/cessionario-committente-detail-page.component';
import { CessionarioCommittenteResolver } from '@agal-italian-legislation/resolvers/cessionario-committente.resolver';
import { EnzoTerzoIntermediarioOSoggettoEmittenteListPageComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-list-page/terzo-intermediario-o-soggetto-emittente-list-page.component';
import { EnzoTerzoIntermediarioOSoggettoEmittenteDetailPageComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-detail-page/terzo-intermediario-o-soggetto-emittente-detail-page.component';
import { TerzoIntermediarioOSoggettoEmittenteResolver } from '@agal-italian-legislation/resolvers/terzo-intermediario-o-soggetto-emittente.resolver';
import { EnzoSoggettoEmittenteListPageComponent } from './components/soggetto-emittente/soggetto-emittente-list-page/soggetto-emittente-list-page.component';
import { EnzoSoggettoEmittenteDetailPageComponent } from './components/soggetto-emittente/soggetto-emittente-detail-page/soggetto-emittente-detail-page.component';
import { SoggettoEmittenteResolver } from '@agal-italian-legislation/resolvers/soggetto-emittente.resolver';
import { EnzoFatturaElettronicaBodyListPageComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-list-page/fattura-elettronica-body-list-page.component';
import { EnzoFatturaElettronicaBodyDetailPageComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-detail-page/fattura-elettronica-body-detail-page.component';
import { FatturaElettronicaBodyResolver } from '@agal-italian-legislation/resolvers/fattura-elettronica-body.resolver';
import { EnzoDatiGeneraliListPageComponent } from './components/dati-generali/dati-generali-list-page/dati-generali-list-page.component';
import { EnzoDatiGeneraliDetailPageComponent } from './components/dati-generali/dati-generali-detail-page/dati-generali-detail-page.component';
import { DatiGeneraliResolver } from '@agal-italian-legislation/resolvers/dati-generali.resolver';
import { EnzoDatiGeneraliDocumentoListPageComponent } from './components/dati-generali-documento/dati-generali-documento-list-page/dati-generali-documento-list-page.component';
import { EnzoDatiGeneraliDocumentoDetailPageComponent } from './components/dati-generali-documento/dati-generali-documento-detail-page/dati-generali-documento-detail-page.component';
import { DatiGeneraliDocumentoResolver } from '@agal-italian-legislation/resolvers/dati-generali-documento.resolver';
import { EnzoDatiRitenutaListPageComponent } from './components/dati-ritenuta/dati-ritenuta-list-page/dati-ritenuta-list-page.component';
import { EnzoDatiRitenutaDetailPageComponent } from './components/dati-ritenuta/dati-ritenuta-detail-page/dati-ritenuta-detail-page.component';
import { DatiRitenutaResolver } from '@agal-italian-legislation/resolvers/dati-ritenuta.resolver';
import { EnzoDatiBolloListPageComponent } from './components/dati-bollo/dati-bollo-list-page/dati-bollo-list-page.component';
import { EnzoDatiBolloDetailPageComponent } from './components/dati-bollo/dati-bollo-detail-page/dati-bollo-detail-page.component';
import { DatiBolloResolver } from '@agal-italian-legislation/resolvers/dati-bollo.resolver';
import { EnzoDatiCassaPrevidenzialeListPageComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-list-page/dati-cassa-previdenziale-list-page.component';
import { EnzoDatiCassaPrevidenzialeDetailPageComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-detail-page/dati-cassa-previdenziale-detail-page.component';
import { DatiCassaPrevidenzialeResolver } from '@agal-italian-legislation/resolvers/dati-cassa-previdenziale.resolver';
import { EnzoScontoMaggiorazioneListPageComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-list-page/sconto-maggiorazione-list-page.component';
import { EnzoScontoMaggiorazioneDetailPageComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-detail-page/sconto-maggiorazione-detail-page.component';
import { ScontoMaggiorazioneResolver } from '@agal-italian-legislation/resolvers/sconto-maggiorazione.resolver';
import { EnzoDatiOrdineAcquistoListPageComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-list-page/dati-ordine-acquisto-list-page.component';
import { EnzoDatiOrdineAcquistoDetailPageComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-detail-page/dati-ordine-acquisto-detail-page.component';
import { DatiOrdineAcquistoResolver } from '@agal-italian-legislation/resolvers/dati-ordine-acquisto.resolver';
import { EnzoDatiContrattoListPageComponent } from './components/dati-contratto/dati-contratto-list-page/dati-contratto-list-page.component';
import { EnzoDatiContrattoDetailPageComponent } from './components/dati-contratto/dati-contratto-detail-page/dati-contratto-detail-page.component';
import { DatiContrattoResolver } from '@agal-italian-legislation/resolvers/dati-contratto.resolver';
import { EnzoDatiConvenzioneListPageComponent } from './components/dati-convenzione/dati-convenzione-list-page/dati-convenzione-list-page.component';
import { EnzoDatiConvenzioneDetailPageComponent } from './components/dati-convenzione/dati-convenzione-detail-page/dati-convenzione-detail-page.component';
import { DatiConvenzioneResolver } from '@agal-italian-legislation/resolvers/dati-convenzione.resolver';
import { EnzoDatiRicezioneListPageComponent } from './components/dati-ricezione/dati-ricezione-list-page/dati-ricezione-list-page.component';
import { EnzoDatiRicezioneDetailPageComponent } from './components/dati-ricezione/dati-ricezione-detail-page/dati-ricezione-detail-page.component';
import { DatiRicezioneResolver } from '@agal-italian-legislation/resolvers/dati-ricezione.resolver';
import { EnzoDatiFattureCollegateListPageComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-list-page/dati-fatture-collegate-list-page.component';
import { EnzoDatiFattureCollegateDetailPageComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-detail-page/dati-fatture-collegate-detail-page.component';
import { DatiFattureCollegateResolver } from '@agal-italian-legislation/resolvers/dati-fatture-collegate.resolver';
import { EnzoDatiSalListPageComponent } from './components/dati-sal/dati-sal-list-page/dati-sal-list-page.component';
import { EnzoDatiSalDetailPageComponent } from './components/dati-sal/dati-sal-detail-page/dati-sal-detail-page.component';
import { DatiSalResolver } from '@agal-italian-legislation/resolvers/dati-sal.resolver';
import { EnzoDatiDdtListPageComponent } from './components/dati-ddt/dati-ddt-list-page/dati-ddt-list-page.component';
import { EnzoDatiDdtDetailPageComponent } from './components/dati-ddt/dati-ddt-detail-page/dati-ddt-detail-page.component';
import { DatiDdtResolver } from '@agal-italian-legislation/resolvers/dati-ddt.resolver';
import { EnzoRiferimentoNumeroLineaListPageComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-list-page/riferimento-numero-linea-list-page.component';
import { EnzoRiferimentoNumeroLineaDetailPageComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-detail-page/riferimento-numero-linea-detail-page.component';
import { RiferimentoNumeroLineaResolver } from '@agal-italian-legislation/resolvers/riferimento-numero-linea.resolver';
import { EnzoDatiTrasportoListPageComponent } from './components/dati-trasporto/dati-trasporto-list-page/dati-trasporto-list-page.component';
import { EnzoDatiTrasportoDetailPageComponent } from './components/dati-trasporto/dati-trasporto-detail-page/dati-trasporto-detail-page.component';
import { DatiTrasportoResolver } from '@agal-italian-legislation/resolvers/dati-trasporto.resolver';
import { EnzoIndirizzoResaListPageComponent } from './components/indirizzo-resa/indirizzo-resa-list-page/indirizzo-resa-list-page.component';
import { EnzoIndirizzoResaDetailPageComponent } from './components/indirizzo-resa/indirizzo-resa-detail-page/indirizzo-resa-detail-page.component';
import { IndirizzoResaResolver } from '@agal-italian-legislation/resolvers/indirizzo-resa.resolver';
import { EnzoFatturaPrincipaleListPageComponent } from './components/fattura-principale/fattura-principale-list-page/fattura-principale-list-page.component';
import { EnzoFatturaPrincipaleDetailPageComponent } from './components/fattura-principale/fattura-principale-detail-page/fattura-principale-detail-page.component';
import { FatturaPrincipaleResolver } from '@agal-italian-legislation/resolvers/fattura-principale.resolver';
import { EnzoDatiBeniServiziListPageComponent } from './components/dati-beni-servizi/dati-beni-servizi-list-page/dati-beni-servizi-list-page.component';
import { EnzoDatiBeniServiziDetailPageComponent } from './components/dati-beni-servizi/dati-beni-servizi-detail-page/dati-beni-servizi-detail-page.component';
import { DatiBeniServiziResolver } from '@agal-italian-legislation/resolvers/dati-beni-servizi.resolver';
import { EnzoDettaglioLineaListPageComponent } from './components/dettaglio-linea/dettaglio-linea-list-page/dettaglio-linea-list-page.component';
import { EnzoDettaglioLineaDetailPageComponent } from './components/dettaglio-linea/dettaglio-linea-detail-page/dettaglio-linea-detail-page.component';
import { DettaglioLineaResolver } from '@agal-italian-legislation/resolvers/dettaglio-linea.resolver';
import { EnzoScontoMaggiorazioneLineaListPageComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-list-page/sconto-maggiorazione-linea-list-page.component';
import { EnzoScontoMaggiorazioneLineaDetailPageComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-detail-page/sconto-maggiorazione-linea-detail-page.component';
import { ScontoMaggiorazioneLineaResolver } from '@agal-italian-legislation/resolvers/sconto-maggiorazione-linea.resolver';
import { EnzoAltriDatiGestionaliListPageComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-list-page/altri-dati-gestionali-list-page.component';
import { EnzoAltriDatiGestionaliDetailPageComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-detail-page/altri-dati-gestionali-detail-page.component';
import { AltriDatiGestionaliResolver } from '@agal-italian-legislation/resolvers/altri-dati-gestionali.resolver';
import { EnzoDatiRiepilogoListPageComponent } from './components/dati-riepilogo/dati-riepilogo-list-page/dati-riepilogo-list-page.component';
import { EnzoDatiRiepilogoDetailPageComponent } from './components/dati-riepilogo/dati-riepilogo-detail-page/dati-riepilogo-detail-page.component';
import { DatiRiepilogoResolver } from '@agal-italian-legislation/resolvers/dati-riepilogo.resolver';
import { EnzoDatiPagamentoListPageComponent } from './components/dati-pagamento/dati-pagamento-list-page/dati-pagamento-list-page.component';
import { EnzoDatiPagamentoDetailPageComponent } from './components/dati-pagamento/dati-pagamento-detail-page/dati-pagamento-detail-page.component';
import { DatiPagamentoResolver } from '@agal-italian-legislation/resolvers/dati-pagamento.resolver';
import { EnzoDettaglioPagamentoListPageComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-list-page/dettaglio-pagamento-list-page.component';
import { EnzoDettaglioPagamentoDetailPageComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-detail-page/dettaglio-pagamento-detail-page.component';
import { DettaglioPagamentoResolver } from '@agal-italian-legislation/resolvers/dettaglio-pagamento.resolver';
import { EnzoDatiVeicoliListPageComponent } from './components/dati-veicoli/dati-veicoli-list-page/dati-veicoli-list-page.component';
import { EnzoDatiVeicoliDetailPageComponent } from './components/dati-veicoli/dati-veicoli-detail-page/dati-veicoli-detail-page.component';
import { DatiVeicoliResolver } from '@agal-italian-legislation/resolvers/dati-veicoli.resolver';
import { EnzoAllegatiListPageComponent } from './components/allegati/allegati-list-page/allegati-list-page.component';
import { EnzoAllegatiDetailPageComponent } from './components/allegati/allegati-detail-page/allegati-detail-page.component';
import { AllegatiResolver } from '@agal-italian-legislation/resolvers/allegati.resolver';

export const italianLegislationRoutes: Route[] = [
	{
		path: '', 
		pathMatch : 'full',
		redirectTo: 'page'
	},

		{
			path: 'procurement', 
			component: EnzoProcurementListPageComponent,
		},
		{
			path: 'procurement/detail/:id', 
			component: EnzoProcurementDetailPageComponent,
			resolve: {
                procurement: ProcurementResolver,
            },
		},       
		{
			path: 'procurement-lot-category', 
			component: EnzoProcurementLotCategoryListPageComponent,
		},
		{
			path: 'procurement-lot-category/detail/:id', 
			component: EnzoProcurementLotCategoryDetailPageComponent,
			resolve: {
                procurementLotCategory: ProcurementLotCategoryResolver,
            },
		},       
		{
			path: 'procurement-lot', 
			component: EnzoProcurementLotListPageComponent,
		},
		{
			path: 'procurement-lot/detail/:id', 
			component: EnzoProcurementLotDetailPageComponent,
			resolve: {
                procurementLot: ProcurementLotResolver,
            },
		},       
		{
			path: 'partecipation-status', 
			component: EnzoPartecipationStatusListPageComponent,
		},
		{
			path: 'partecipation-status/detail/:id', 
			component: EnzoPartecipationStatusDetailPageComponent,
			resolve: {
                partecipationStatus: PartecipationStatusResolver,
            },
		},       
		{
			path: 'partecipation-modality', 
			component: EnzoPartecipationModalityListPageComponent,
		},
		{
			path: 'partecipation-modality/detail/:id', 
			component: EnzoPartecipationModalityDetailPageComponent,
			resolve: {
                partecipationModality: PartecipationModalityResolver,
            },
		},       
		{
			path: 'partecipation', 
			component: EnzoPartecipationListPageComponent,
		},
		{
			path: 'partecipation/detail/:id', 
			component: EnzoPartecipationDetailPageComponent,
			resolve: {
                partecipation: PartecipationResolver,
            },
		},       
		{
			path: 'preparation-status', 
			component: EnzoPreparationStatusListPageComponent,
		},
		{
			path: 'preparation-status/detail/:id', 
			component: EnzoPreparationStatusDetailPageComponent,
			resolve: {
                preparationStatus: PreparationStatusResolver,
            },
		},       
		{
			path: 'preparation-modality', 
			component: EnzoPreparationModalityListPageComponent,
		},
		{
			path: 'preparation-modality/detail/:id', 
			component: EnzoPreparationModalityDetailPageComponent,
			resolve: {
                preparationModality: PreparationModalityResolver,
            },
		},       
		{
			path: 'preparation', 
			component: EnzoPreparationListPageComponent,
		},
		{
			path: 'preparation/detail/:id', 
			component: EnzoPreparationDetailPageComponent,
			resolve: {
                preparation: PreparationResolver,
            },
		},       
		{
			path: 'designated-company', 
			component: EnzoDesignatedCompanyListPageComponent,
		},
		{
			path: 'designated-company/detail/:id', 
			component: EnzoDesignatedCompanyDetailPageComponent,
			resolve: {
                designatedCompany: DesignatedCompanyResolver,
            },
		},       
		{
			path: 'insurance-policy-status', 
			component: EnzoInsurancePolicyStatusListPageComponent,
		},
		{
			path: 'insurance-policy-status/detail/:id', 
			component: EnzoInsurancePolicyStatusDetailPageComponent,
			resolve: {
                insurancePolicyStatus: InsurancePolicyStatusResolver,
            },
		},       
		{
			path: 'insurance-policy', 
			component: EnzoInsurancePolicyListPageComponent,
		},
		{
			path: 'insurance-policy/detail/:id', 
			component: EnzoInsurancePolicyDetailPageComponent,
			resolve: {
                insurancePolicy: InsurancePolicyResolver,
            },
		},       
		{
			path: 'dossier', 
			component: EnzoDossierListPageComponent,
		},
		{
			path: 'dossier/detail/:id', 
			component: EnzoDossierDetailPageComponent,
			resolve: {
                dossier: DossierResolver,
            },
		},       
		{
			path: 'fattura-elettronica-header', 
			component: EnzoFatturaElettronicaHeaderListPageComponent,
		},
		{
			path: 'fattura-elettronica-header/detail/:id', 
			component: EnzoFatturaElettronicaHeaderDetailPageComponent,
			resolve: {
                fatturaElettronicaHeader: FatturaElettronicaHeaderResolver,
            },
		},       
		{
			path: 'dati-trasmissione', 
			component: EnzoDatiTrasmissioneListPageComponent,
		},
		{
			path: 'dati-trasmissione/detail/:id', 
			component: EnzoDatiTrasmissioneDetailPageComponent,
			resolve: {
                datiTrasmissione: DatiTrasmissioneResolver,
            },
		},       
		{
			path: 'cedente-prestatore', 
			component: EnzoCedentePrestatoreListPageComponent,
		},
		{
			path: 'cedente-prestatore/detail/:id', 
			component: EnzoCedentePrestatoreDetailPageComponent,
			resolve: {
                cedentePrestatore: CedentePrestatoreResolver,
            },
		},       
		{
			path: 'rappresentante-fiscale', 
			component: EnzoRappresentanteFiscaleListPageComponent,
		},
		{
			path: 'rappresentante-fiscale/detail/:id', 
			component: EnzoRappresentanteFiscaleDetailPageComponent,
			resolve: {
                rappresentanteFiscale: RappresentanteFiscaleResolver,
            },
		},       
		{
			path: 'cessionario-committente', 
			component: EnzoCessionarioCommittenteListPageComponent,
		},
		{
			path: 'cessionario-committente/detail/:id', 
			component: EnzoCessionarioCommittenteDetailPageComponent,
			resolve: {
                cessionarioCommittente: CessionarioCommittenteResolver,
            },
		},       
		{
			path: 'terzo-intermediario-o-soggetto-emittente', 
			component: EnzoTerzoIntermediarioOSoggettoEmittenteListPageComponent,
		},
		{
			path: 'terzo-intermediario-o-soggetto-emittente/detail/:id', 
			component: EnzoTerzoIntermediarioOSoggettoEmittenteDetailPageComponent,
			resolve: {
                terzoIntermediarioOSoggettoEmittente: TerzoIntermediarioOSoggettoEmittenteResolver,
            },
		},       
		{
			path: 'soggetto-emittente', 
			component: EnzoSoggettoEmittenteListPageComponent,
		},
		{
			path: 'soggetto-emittente/detail/:id', 
			component: EnzoSoggettoEmittenteDetailPageComponent,
			resolve: {
                soggettoEmittente: SoggettoEmittenteResolver,
            },
		},       
		{
			path: 'fattura-elettronica-body', 
			component: EnzoFatturaElettronicaBodyListPageComponent,
		},
		{
			path: 'fattura-elettronica-body/detail/:id', 
			component: EnzoFatturaElettronicaBodyDetailPageComponent,
			resolve: {
                fatturaElettronicaBody: FatturaElettronicaBodyResolver,
            },
		},       
		{
			path: 'dati-generali', 
			component: EnzoDatiGeneraliListPageComponent,
		},
		{
			path: 'dati-generali/detail/:id', 
			component: EnzoDatiGeneraliDetailPageComponent,
			resolve: {
                datiGenerali: DatiGeneraliResolver,
            },
		},       
		{
			path: 'dati-generali-documento', 
			component: EnzoDatiGeneraliDocumentoListPageComponent,
		},
		{
			path: 'dati-generali-documento/detail/:id', 
			component: EnzoDatiGeneraliDocumentoDetailPageComponent,
			resolve: {
                datiGeneraliDocumento: DatiGeneraliDocumentoResolver,
            },
		},       
		{
			path: 'dati-ritenuta', 
			component: EnzoDatiRitenutaListPageComponent,
		},
		{
			path: 'dati-ritenuta/detail/:id', 
			component: EnzoDatiRitenutaDetailPageComponent,
			resolve: {
                datiRitenuta: DatiRitenutaResolver,
            },
		},       
		{
			path: 'dati-bollo', 
			component: EnzoDatiBolloListPageComponent,
		},
		{
			path: 'dati-bollo/detail/:id', 
			component: EnzoDatiBolloDetailPageComponent,
			resolve: {
                datiBollo: DatiBolloResolver,
            },
		},       
		{
			path: 'dati-cassa-previdenziale', 
			component: EnzoDatiCassaPrevidenzialeListPageComponent,
		},
		{
			path: 'dati-cassa-previdenziale/detail/:id', 
			component: EnzoDatiCassaPrevidenzialeDetailPageComponent,
			resolve: {
                datiCassaPrevidenziale: DatiCassaPrevidenzialeResolver,
            },
		},       
		{
			path: 'sconto-maggiorazione', 
			component: EnzoScontoMaggiorazioneListPageComponent,
		},
		{
			path: 'sconto-maggiorazione/detail/:id', 
			component: EnzoScontoMaggiorazioneDetailPageComponent,
			resolve: {
                scontoMaggiorazione: ScontoMaggiorazioneResolver,
            },
		},       
		{
			path: 'dati-ordine-acquisto', 
			component: EnzoDatiOrdineAcquistoListPageComponent,
		},
		{
			path: 'dati-ordine-acquisto/detail/:id', 
			component: EnzoDatiOrdineAcquistoDetailPageComponent,
			resolve: {
                datiOrdineAcquisto: DatiOrdineAcquistoResolver,
            },
		},       
		{
			path: 'dati-contratto', 
			component: EnzoDatiContrattoListPageComponent,
		},
		{
			path: 'dati-contratto/detail/:id', 
			component: EnzoDatiContrattoDetailPageComponent,
			resolve: {
                datiContratto: DatiContrattoResolver,
            },
		},       
		{
			path: 'dati-convenzione', 
			component: EnzoDatiConvenzioneListPageComponent,
		},
		{
			path: 'dati-convenzione/detail/:id', 
			component: EnzoDatiConvenzioneDetailPageComponent,
			resolve: {
                datiConvenzione: DatiConvenzioneResolver,
            },
		},       
		{
			path: 'dati-ricezione', 
			component: EnzoDatiRicezioneListPageComponent,
		},
		{
			path: 'dati-ricezione/detail/:id', 
			component: EnzoDatiRicezioneDetailPageComponent,
			resolve: {
                datiRicezione: DatiRicezioneResolver,
            },
		},       
		{
			path: 'dati-fatture-collegate', 
			component: EnzoDatiFattureCollegateListPageComponent,
		},
		{
			path: 'dati-fatture-collegate/detail/:id', 
			component: EnzoDatiFattureCollegateDetailPageComponent,
			resolve: {
                datiFattureCollegate: DatiFattureCollegateResolver,
            },
		},       
		{
			path: 'dati-sal', 
			component: EnzoDatiSalListPageComponent,
		},
		{
			path: 'dati-sal/detail/:id', 
			component: EnzoDatiSalDetailPageComponent,
			resolve: {
                datiSal: DatiSalResolver,
            },
		},       
		{
			path: 'dati-ddt', 
			component: EnzoDatiDdtListPageComponent,
		},
		{
			path: 'dati-ddt/detail/:id', 
			component: EnzoDatiDdtDetailPageComponent,
			resolve: {
                datiDdt: DatiDdtResolver,
            },
		},       
		{
			path: 'riferimento-numero-linea', 
			component: EnzoRiferimentoNumeroLineaListPageComponent,
		},
		{
			path: 'riferimento-numero-linea/detail/:id', 
			component: EnzoRiferimentoNumeroLineaDetailPageComponent,
			resolve: {
                riferimentoNumeroLinea: RiferimentoNumeroLineaResolver,
            },
		},       
		{
			path: 'dati-trasporto', 
			component: EnzoDatiTrasportoListPageComponent,
		},
		{
			path: 'dati-trasporto/detail/:id', 
			component: EnzoDatiTrasportoDetailPageComponent,
			resolve: {
                datiTrasporto: DatiTrasportoResolver,
            },
		},       
		{
			path: 'indirizzo-resa', 
			component: EnzoIndirizzoResaListPageComponent,
		},
		{
			path: 'indirizzo-resa/detail/:id', 
			component: EnzoIndirizzoResaDetailPageComponent,
			resolve: {
                indirizzoResa: IndirizzoResaResolver,
            },
		},       
		{
			path: 'fattura-principale', 
			component: EnzoFatturaPrincipaleListPageComponent,
		},
		{
			path: 'fattura-principale/detail/:id', 
			component: EnzoFatturaPrincipaleDetailPageComponent,
			resolve: {
                fatturaPrincipale: FatturaPrincipaleResolver,
            },
		},       
		{
			path: 'dati-beni-servizi', 
			component: EnzoDatiBeniServiziListPageComponent,
		},
		{
			path: 'dati-beni-servizi/detail/:id', 
			component: EnzoDatiBeniServiziDetailPageComponent,
			resolve: {
                datiBeniServizi: DatiBeniServiziResolver,
            },
		},       
		{
			path: 'dettaglio-linea', 
			component: EnzoDettaglioLineaListPageComponent,
		},
		{
			path: 'dettaglio-linea/detail/:id', 
			component: EnzoDettaglioLineaDetailPageComponent,
			resolve: {
                dettaglioLinea: DettaglioLineaResolver,
            },
		},       
		{
			path: 'sconto-maggiorazione-linea', 
			component: EnzoScontoMaggiorazioneLineaListPageComponent,
		},
		{
			path: 'sconto-maggiorazione-linea/detail/:id', 
			component: EnzoScontoMaggiorazioneLineaDetailPageComponent,
			resolve: {
                scontoMaggiorazioneLinea: ScontoMaggiorazioneLineaResolver,
            },
		},       
		{
			path: 'altri-dati-gestionali', 
			component: EnzoAltriDatiGestionaliListPageComponent,
		},
		{
			path: 'altri-dati-gestionali/detail/:id', 
			component: EnzoAltriDatiGestionaliDetailPageComponent,
			resolve: {
                altriDatiGestionali: AltriDatiGestionaliResolver,
            },
		},       
		{
			path: 'dati-riepilogo', 
			component: EnzoDatiRiepilogoListPageComponent,
		},
		{
			path: 'dati-riepilogo/detail/:id', 
			component: EnzoDatiRiepilogoDetailPageComponent,
			resolve: {
                datiRiepilogo: DatiRiepilogoResolver,
            },
		},       
		{
			path: 'dati-pagamento', 
			component: EnzoDatiPagamentoListPageComponent,
		},
		{
			path: 'dati-pagamento/detail/:id', 
			component: EnzoDatiPagamentoDetailPageComponent,
			resolve: {
                datiPagamento: DatiPagamentoResolver,
            },
		},       
		{
			path: 'dettaglio-pagamento', 
			component: EnzoDettaglioPagamentoListPageComponent,
		},
		{
			path: 'dettaglio-pagamento/detail/:id', 
			component: EnzoDettaglioPagamentoDetailPageComponent,
			resolve: {
                dettaglioPagamento: DettaglioPagamentoResolver,
            },
		},       
		{
			path: 'dati-veicoli', 
			component: EnzoDatiVeicoliListPageComponent,
		},
		{
			path: 'dati-veicoli/detail/:id', 
			component: EnzoDatiVeicoliDetailPageComponent,
			resolve: {
                datiVeicoli: DatiVeicoliResolver,
            },
		},       
		{
			path: 'allegati', 
			component: EnzoAllegatiListPageComponent,
		},
		{
			path: 'allegati/detail/:id', 
			component: EnzoAllegatiDetailPageComponent,
			resolve: {
                allegati: AllegatiResolver,
            },
		},       
    
];