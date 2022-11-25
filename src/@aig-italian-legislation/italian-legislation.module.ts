import { NgModule } from '@angular/core';
import { AgalCoreModule } from '@agal-core/agal-core.module';

import { AigProcurementListLoaderComponent } from './components/procurement/procurement-list-loader/procurement-list-loader.component';
import { AigProcurementDetailBoxComponent } from './components/procurement/procurement-detail-box/procurement-detail-box.component';
import { AigProcurementDisplayColumnComponent } from './components/procurement/procurement-display-column/procurement-display-column.component';
import { AigProcurementResourceService } from './services/procurement.service';
import { AigProcurementResolver } from './resolvers/procurement.resolver';

import { AigProcurementLotCategoryListLoaderComponent } from './components/procurement-lot-category/procurement-lot-category-list-loader/procurement-lot-category-list-loader.component';
import { AigProcurementLotCategoryDetailBoxComponent } from './components/procurement-lot-category/procurement-lot-category-detail-box/procurement-lot-category-detail-box.component';
import { AigProcurementLotCategoryDisplayColumnComponent } from './components/procurement-lot-category/procurement-lot-category-display-column/procurement-lot-category-display-column.component';
import { AigProcurementLotCategoryResourceService } from './services/procurement-lot-category.service';
import { AigProcurementLotCategoryResolver } from './resolvers/procurement-lot-category.resolver';

import { AigProcurementLotListLoaderComponent } from './components/procurement-lot/procurement-lot-list-loader/procurement-lot-list-loader.component';
import { AigProcurementLotDetailBoxComponent } from './components/procurement-lot/procurement-lot-detail-box/procurement-lot-detail-box.component';
import { AigProcurementLotDisplayColumnComponent } from './components/procurement-lot/procurement-lot-display-column/procurement-lot-display-column.component';
import { AigProcurementLotResourceService } from './services/procurement-lot.service';
import { AigProcurementLotResolver } from './resolvers/procurement-lot.resolver';

import { AigPartecipationStatusListLoaderComponent } from './components/partecipation-status/partecipation-status-list-loader/partecipation-status-list-loader.component';
import { AigPartecipationStatusDetailBoxComponent } from './components/partecipation-status/partecipation-status-detail-box/partecipation-status-detail-box.component';
import { AigPartecipationStatusDisplayColumnComponent } from './components/partecipation-status/partecipation-status-display-column/partecipation-status-display-column.component';
import { AigPartecipationStatusResourceService } from './services/partecipation-status.service';
import { AigPartecipationStatusResolver } from './resolvers/partecipation-status.resolver';

import { AigPartecipationModalityListLoaderComponent } from './components/partecipation-modality/partecipation-modality-list-loader/partecipation-modality-list-loader.component';
import { AigPartecipationModalityDetailBoxComponent } from './components/partecipation-modality/partecipation-modality-detail-box/partecipation-modality-detail-box.component';
import { AigPartecipationModalityDisplayColumnComponent } from './components/partecipation-modality/partecipation-modality-display-column/partecipation-modality-display-column.component';
import { AigPartecipationModalityResourceService } from './services/partecipation-modality.service';
import { AigPartecipationModalityResolver } from './resolvers/partecipation-modality.resolver';

import { AigPartecipationListLoaderComponent } from './components/partecipation/partecipation-list-loader/partecipation-list-loader.component';
import { AigPartecipationDetailBoxComponent } from './components/partecipation/partecipation-detail-box/partecipation-detail-box.component';
import { AigPartecipationDisplayColumnComponent } from './components/partecipation/partecipation-display-column/partecipation-display-column.component';
import { AigPartecipationResourceService } from './services/partecipation.service';
import { AigPartecipationResolver } from './resolvers/partecipation.resolver';

import { AigPreparationStatusListLoaderComponent } from './components/preparation-status/preparation-status-list-loader/preparation-status-list-loader.component';
import { AigPreparationStatusDetailBoxComponent } from './components/preparation-status/preparation-status-detail-box/preparation-status-detail-box.component';
import { AigPreparationStatusDisplayColumnComponent } from './components/preparation-status/preparation-status-display-column/preparation-status-display-column.component';
import { AigPreparationStatusResourceService } from './services/preparation-status.service';
import { AigPreparationStatusResolver } from './resolvers/preparation-status.resolver';

import { AigPreparationModalityListLoaderComponent } from './components/preparation-modality/preparation-modality-list-loader/preparation-modality-list-loader.component';
import { AigPreparationModalityDetailBoxComponent } from './components/preparation-modality/preparation-modality-detail-box/preparation-modality-detail-box.component';
import { AigPreparationModalityDisplayColumnComponent } from './components/preparation-modality/preparation-modality-display-column/preparation-modality-display-column.component';
import { AigPreparationModalityResourceService } from './services/preparation-modality.service';
import { AigPreparationModalityResolver } from './resolvers/preparation-modality.resolver';

import { AigPreparationListLoaderComponent } from './components/preparation/preparation-list-loader/preparation-list-loader.component';
import { AigPreparationDetailBoxComponent } from './components/preparation/preparation-detail-box/preparation-detail-box.component';
import { AigPreparationDisplayColumnComponent } from './components/preparation/preparation-display-column/preparation-display-column.component';
import { AigPreparationResourceService } from './services/preparation.service';
import { AigPreparationResolver } from './resolvers/preparation.resolver';

import { AigDesignatedCompanyListLoaderComponent } from './components/designated-company/designated-company-list-loader/designated-company-list-loader.component';
import { AigDesignatedCompanyDetailBoxComponent } from './components/designated-company/designated-company-detail-box/designated-company-detail-box.component';
import { AigDesignatedCompanyDisplayColumnComponent } from './components/designated-company/designated-company-display-column/designated-company-display-column.component';
import { AigDesignatedCompanyResourceService } from './services/designated-company.service';
import { AigDesignatedCompanyResolver } from './resolvers/designated-company.resolver';

import { AigInsurancePolicyStatusListLoaderComponent } from './components/insurance-policy-status/insurance-policy-status-list-loader/insurance-policy-status-list-loader.component';
import { AigInsurancePolicyStatusDetailBoxComponent } from './components/insurance-policy-status/insurance-policy-status-detail-box/insurance-policy-status-detail-box.component';
import { AigInsurancePolicyStatusDisplayColumnComponent } from './components/insurance-policy-status/insurance-policy-status-display-column/insurance-policy-status-display-column.component';
import { AigInsurancePolicyStatusResourceService } from './services/insurance-policy-status.service';
import { AigInsurancePolicyStatusResolver } from './resolvers/insurance-policy-status.resolver';

import { AigInsurancePolicyListLoaderComponent } from './components/insurance-policy/insurance-policy-list-loader/insurance-policy-list-loader.component';
import { AigInsurancePolicyDetailBoxComponent } from './components/insurance-policy/insurance-policy-detail-box/insurance-policy-detail-box.component';
import { AigInsurancePolicyDisplayColumnComponent } from './components/insurance-policy/insurance-policy-display-column/insurance-policy-display-column.component';
import { AigInsurancePolicyResourceService } from './services/insurance-policy.service';
import { AigInsurancePolicyResolver } from './resolvers/insurance-policy.resolver';

import { AigDossierListLoaderComponent } from './components/dossier/dossier-list-loader/dossier-list-loader.component';
import { AigDossierDetailBoxComponent } from './components/dossier/dossier-detail-box/dossier-detail-box.component';
import { AigDossierDisplayColumnComponent } from './components/dossier/dossier-display-column/dossier-display-column.component';
import { AigDossierResourceService } from './services/dossier.service';
import { AigDossierResolver } from './resolvers/dossier.resolver';

import { AigFatturaElettronicaHeaderListLoaderComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-list-loader/fattura-elettronica-header-list-loader.component';
import { AigFatturaElettronicaHeaderDetailBoxComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-detail-box/fattura-elettronica-header-detail-box.component';
import { AigFatturaElettronicaHeaderDisplayColumnComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-display-column/fattura-elettronica-header-display-column.component';
import { AigFatturaElettronicaHeaderResourceService } from './services/fattura-elettronica-header.service';
import { AigFatturaElettronicaHeaderResolver } from './resolvers/fattura-elettronica-header.resolver';

import { AigDatiTrasmissioneListLoaderComponent } from './components/dati-trasmissione/dati-trasmissione-list-loader/dati-trasmissione-list-loader.component';
import { AigDatiTrasmissioneDetailBoxComponent } from './components/dati-trasmissione/dati-trasmissione-detail-box/dati-trasmissione-detail-box.component';
import { AigDatiTrasmissioneDisplayColumnComponent } from './components/dati-trasmissione/dati-trasmissione-display-column/dati-trasmissione-display-column.component';
import { AigDatiTrasmissioneResourceService } from './services/dati-trasmissione.service';
import { AigDatiTrasmissioneResolver } from './resolvers/dati-trasmissione.resolver';

import { AigCedentePrestatoreListLoaderComponent } from './components/cedente-prestatore/cedente-prestatore-list-loader/cedente-prestatore-list-loader.component';
import { AigCedentePrestatoreDetailBoxComponent } from './components/cedente-prestatore/cedente-prestatore-detail-box/cedente-prestatore-detail-box.component';
import { AigCedentePrestatoreDisplayColumnComponent } from './components/cedente-prestatore/cedente-prestatore-display-column/cedente-prestatore-display-column.component';
import { AigCedentePrestatoreResourceService } from './services/cedente-prestatore.service';
import { AigCedentePrestatoreResolver } from './resolvers/cedente-prestatore.resolver';

import { AigRappresentanteFiscaleListLoaderComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-list-loader/rappresentante-fiscale-list-loader.component';
import { AigRappresentanteFiscaleDetailBoxComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-detail-box/rappresentante-fiscale-detail-box.component';
import { AigRappresentanteFiscaleDisplayColumnComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-display-column/rappresentante-fiscale-display-column.component';
import { AigRappresentanteFiscaleResourceService } from './services/rappresentante-fiscale.service';
import { AigRappresentanteFiscaleResolver } from './resolvers/rappresentante-fiscale.resolver';

import { AigCessionarioCommittenteListLoaderComponent } from './components/cessionario-committente/cessionario-committente-list-loader/cessionario-committente-list-loader.component';
import { AigCessionarioCommittenteDetailBoxComponent } from './components/cessionario-committente/cessionario-committente-detail-box/cessionario-committente-detail-box.component';
import { AigCessionarioCommittenteDisplayColumnComponent } from './components/cessionario-committente/cessionario-committente-display-column/cessionario-committente-display-column.component';
import { AigCessionarioCommittenteResourceService } from './services/cessionario-committente.service';
import { AigCessionarioCommittenteResolver } from './resolvers/cessionario-committente.resolver';

import { AigTerzoIntermediarioOSoggettoEmittenteListLoaderComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-list-loader/terzo-intermediario-o-soggetto-emittente-list-loader.component';
import { AigTerzoIntermediarioOSoggettoEmittenteDetailBoxComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-detail-box/terzo-intermediario-o-soggetto-emittente-detail-box.component';
import { AigTerzoIntermediarioOSoggettoEmittenteDisplayColumnComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-display-column/terzo-intermediario-o-soggetto-emittente-display-column.component';
import { AigTerzoIntermediarioOSoggettoEmittenteResourceService } from './services/terzo-intermediario-o-soggetto-emittente.service';
import { AigTerzoIntermediarioOSoggettoEmittenteResolver } from './resolvers/terzo-intermediario-o-soggetto-emittente.resolver';

import { AigSoggettoEmittenteListLoaderComponent } from './components/soggetto-emittente/soggetto-emittente-list-loader/soggetto-emittente-list-loader.component';
import { AigSoggettoEmittenteDetailBoxComponent } from './components/soggetto-emittente/soggetto-emittente-detail-box/soggetto-emittente-detail-box.component';
import { AigSoggettoEmittenteDisplayColumnComponent } from './components/soggetto-emittente/soggetto-emittente-display-column/soggetto-emittente-display-column.component';
import { AigSoggettoEmittenteResourceService } from './services/soggetto-emittente.service';
import { AigSoggettoEmittenteResolver } from './resolvers/soggetto-emittente.resolver';

import { AigFatturaElettronicaBodyListLoaderComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-list-loader/fattura-elettronica-body-list-loader.component';
import { AigFatturaElettronicaBodyDetailBoxComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-detail-box/fattura-elettronica-body-detail-box.component';
import { AigFatturaElettronicaBodyDisplayColumnComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-display-column/fattura-elettronica-body-display-column.component';
import { AigFatturaElettronicaBodyResourceService } from './services/fattura-elettronica-body.service';
import { AigFatturaElettronicaBodyResolver } from './resolvers/fattura-elettronica-body.resolver';

import { AigDatiGeneraliListLoaderComponent } from './components/dati-generali/dati-generali-list-loader/dati-generali-list-loader.component';
import { AigDatiGeneraliDetailBoxComponent } from './components/dati-generali/dati-generali-detail-box/dati-generali-detail-box.component';
import { AigDatiGeneraliDisplayColumnComponent } from './components/dati-generali/dati-generali-display-column/dati-generali-display-column.component';
import { AigDatiGeneraliResourceService } from './services/dati-generali.service';
import { AigDatiGeneraliResolver } from './resolvers/dati-generali.resolver';

import { AigDatiGeneraliDocumentoListLoaderComponent } from './components/dati-generali-documento/dati-generali-documento-list-loader/dati-generali-documento-list-loader.component';
import { AigDatiGeneraliDocumentoDetailBoxComponent } from './components/dati-generali-documento/dati-generali-documento-detail-box/dati-generali-documento-detail-box.component';
import { AigDatiGeneraliDocumentoDisplayColumnComponent } from './components/dati-generali-documento/dati-generali-documento-display-column/dati-generali-documento-display-column.component';
import { AigDatiGeneraliDocumentoResourceService } from './services/dati-generali-documento.service';
import { AigDatiGeneraliDocumentoResolver } from './resolvers/dati-generali-documento.resolver';

import { AigDatiRitenutaListLoaderComponent } from './components/dati-ritenuta/dati-ritenuta-list-loader/dati-ritenuta-list-loader.component';
import { AigDatiRitenutaDetailBoxComponent } from './components/dati-ritenuta/dati-ritenuta-detail-box/dati-ritenuta-detail-box.component';
import { AigDatiRitenutaDisplayColumnComponent } from './components/dati-ritenuta/dati-ritenuta-display-column/dati-ritenuta-display-column.component';
import { AigDatiRitenutaResourceService } from './services/dati-ritenuta.service';
import { AigDatiRitenutaResolver } from './resolvers/dati-ritenuta.resolver';

import { AigDatiBolloListLoaderComponent } from './components/dati-bollo/dati-bollo-list-loader/dati-bollo-list-loader.component';
import { AigDatiBolloDetailBoxComponent } from './components/dati-bollo/dati-bollo-detail-box/dati-bollo-detail-box.component';
import { AigDatiBolloDisplayColumnComponent } from './components/dati-bollo/dati-bollo-display-column/dati-bollo-display-column.component';
import { AigDatiBolloResourceService } from './services/dati-bollo.service';
import { AigDatiBolloResolver } from './resolvers/dati-bollo.resolver';

import { AigDatiCassaPrevidenzialeListLoaderComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-list-loader/dati-cassa-previdenziale-list-loader.component';
import { AigDatiCassaPrevidenzialeDetailBoxComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-detail-box/dati-cassa-previdenziale-detail-box.component';
import { AigDatiCassaPrevidenzialeDisplayColumnComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-display-column/dati-cassa-previdenziale-display-column.component';
import { AigDatiCassaPrevidenzialeResourceService } from './services/dati-cassa-previdenziale.service';
import { AigDatiCassaPrevidenzialeResolver } from './resolvers/dati-cassa-previdenziale.resolver';

import { AigScontoMaggiorazioneListLoaderComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-list-loader/sconto-maggiorazione-list-loader.component';
import { AigScontoMaggiorazioneDetailBoxComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-detail-box/sconto-maggiorazione-detail-box.component';
import { AigScontoMaggiorazioneDisplayColumnComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-display-column/sconto-maggiorazione-display-column.component';
import { AigScontoMaggiorazioneResourceService } from './services/sconto-maggiorazione.service';
import { AigScontoMaggiorazioneResolver } from './resolvers/sconto-maggiorazione.resolver';

import { AigDatiOrdineAcquistoListLoaderComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-list-loader/dati-ordine-acquisto-list-loader.component';
import { AigDatiOrdineAcquistoDetailBoxComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-detail-box/dati-ordine-acquisto-detail-box.component';
import { AigDatiOrdineAcquistoDisplayColumnComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-display-column/dati-ordine-acquisto-display-column.component';
import { AigDatiOrdineAcquistoResourceService } from './services/dati-ordine-acquisto.service';
import { AigDatiOrdineAcquistoResolver } from './resolvers/dati-ordine-acquisto.resolver';

import { AigDatiContrattoListLoaderComponent } from './components/dati-contratto/dati-contratto-list-loader/dati-contratto-list-loader.component';
import { AigDatiContrattoDetailBoxComponent } from './components/dati-contratto/dati-contratto-detail-box/dati-contratto-detail-box.component';
import { AigDatiContrattoDisplayColumnComponent } from './components/dati-contratto/dati-contratto-display-column/dati-contratto-display-column.component';
import { AigDatiContrattoResourceService } from './services/dati-contratto.service';
import { AigDatiContrattoResolver } from './resolvers/dati-contratto.resolver';

import { AigDatiConvenzioneListLoaderComponent } from './components/dati-convenzione/dati-convenzione-list-loader/dati-convenzione-list-loader.component';
import { AigDatiConvenzioneDetailBoxComponent } from './components/dati-convenzione/dati-convenzione-detail-box/dati-convenzione-detail-box.component';
import { AigDatiConvenzioneDisplayColumnComponent } from './components/dati-convenzione/dati-convenzione-display-column/dati-convenzione-display-column.component';
import { AigDatiConvenzioneResourceService } from './services/dati-convenzione.service';
import { AigDatiConvenzioneResolver } from './resolvers/dati-convenzione.resolver';

import { AigDatiRicezioneListLoaderComponent } from './components/dati-ricezione/dati-ricezione-list-loader/dati-ricezione-list-loader.component';
import { AigDatiRicezioneDetailBoxComponent } from './components/dati-ricezione/dati-ricezione-detail-box/dati-ricezione-detail-box.component';
import { AigDatiRicezioneDisplayColumnComponent } from './components/dati-ricezione/dati-ricezione-display-column/dati-ricezione-display-column.component';
import { AigDatiRicezioneResourceService } from './services/dati-ricezione.service';
import { AigDatiRicezioneResolver } from './resolvers/dati-ricezione.resolver';

import { AigDatiFattureCollegateListLoaderComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-list-loader/dati-fatture-collegate-list-loader.component';
import { AigDatiFattureCollegateDetailBoxComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-detail-box/dati-fatture-collegate-detail-box.component';
import { AigDatiFattureCollegateDisplayColumnComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-display-column/dati-fatture-collegate-display-column.component';
import { AigDatiFattureCollegateResourceService } from './services/dati-fatture-collegate.service';
import { AigDatiFattureCollegateResolver } from './resolvers/dati-fatture-collegate.resolver';

import { AigDatiSalListLoaderComponent } from './components/dati-sal/dati-sal-list-loader/dati-sal-list-loader.component';
import { AigDatiSalDetailBoxComponent } from './components/dati-sal/dati-sal-detail-box/dati-sal-detail-box.component';
import { AigDatiSalDisplayColumnComponent } from './components/dati-sal/dati-sal-display-column/dati-sal-display-column.component';
import { AigDatiSalResourceService } from './services/dati-sal.service';
import { AigDatiSalResolver } from './resolvers/dati-sal.resolver';

import { AigDatiDdtListLoaderComponent } from './components/dati-ddt/dati-ddt-list-loader/dati-ddt-list-loader.component';
import { AigDatiDdtDetailBoxComponent } from './components/dati-ddt/dati-ddt-detail-box/dati-ddt-detail-box.component';
import { AigDatiDdtDisplayColumnComponent } from './components/dati-ddt/dati-ddt-display-column/dati-ddt-display-column.component';
import { AigDatiDdtResourceService } from './services/dati-ddt.service';
import { AigDatiDdtResolver } from './resolvers/dati-ddt.resolver';

import { AigRiferimentoNumeroLineaListLoaderComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-list-loader/riferimento-numero-linea-list-loader.component';
import { AigRiferimentoNumeroLineaDetailBoxComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-detail-box/riferimento-numero-linea-detail-box.component';
import { AigRiferimentoNumeroLineaDisplayColumnComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-display-column/riferimento-numero-linea-display-column.component';
import { AigRiferimentoNumeroLineaResourceService } from './services/riferimento-numero-linea.service';
import { AigRiferimentoNumeroLineaResolver } from './resolvers/riferimento-numero-linea.resolver';

import { AigDatiTrasportoListLoaderComponent } from './components/dati-trasporto/dati-trasporto-list-loader/dati-trasporto-list-loader.component';
import { AigDatiTrasportoDetailBoxComponent } from './components/dati-trasporto/dati-trasporto-detail-box/dati-trasporto-detail-box.component';
import { AigDatiTrasportoDisplayColumnComponent } from './components/dati-trasporto/dati-trasporto-display-column/dati-trasporto-display-column.component';
import { AigDatiTrasportoResourceService } from './services/dati-trasporto.service';
import { AigDatiTrasportoResolver } from './resolvers/dati-trasporto.resolver';

import { AigIndirizzoResaListLoaderComponent } from './components/indirizzo-resa/indirizzo-resa-list-loader/indirizzo-resa-list-loader.component';
import { AigIndirizzoResaDetailBoxComponent } from './components/indirizzo-resa/indirizzo-resa-detail-box/indirizzo-resa-detail-box.component';
import { AigIndirizzoResaDisplayColumnComponent } from './components/indirizzo-resa/indirizzo-resa-display-column/indirizzo-resa-display-column.component';
import { AigIndirizzoResaResourceService } from './services/indirizzo-resa.service';
import { AigIndirizzoResaResolver } from './resolvers/indirizzo-resa.resolver';

import { AigFatturaPrincipaleListLoaderComponent } from './components/fattura-principale/fattura-principale-list-loader/fattura-principale-list-loader.component';
import { AigFatturaPrincipaleDetailBoxComponent } from './components/fattura-principale/fattura-principale-detail-box/fattura-principale-detail-box.component';
import { AigFatturaPrincipaleDisplayColumnComponent } from './components/fattura-principale/fattura-principale-display-column/fattura-principale-display-column.component';
import { AigFatturaPrincipaleResourceService } from './services/fattura-principale.service';
import { AigFatturaPrincipaleResolver } from './resolvers/fattura-principale.resolver';

import { AigDatiBeniServiziListLoaderComponent } from './components/dati-beni-servizi/dati-beni-servizi-list-loader/dati-beni-servizi-list-loader.component';
import { AigDatiBeniServiziDetailBoxComponent } from './components/dati-beni-servizi/dati-beni-servizi-detail-box/dati-beni-servizi-detail-box.component';
import { AigDatiBeniServiziDisplayColumnComponent } from './components/dati-beni-servizi/dati-beni-servizi-display-column/dati-beni-servizi-display-column.component';
import { AigDatiBeniServiziResourceService } from './services/dati-beni-servizi.service';
import { AigDatiBeniServiziResolver } from './resolvers/dati-beni-servizi.resolver';

import { AigDettaglioLineaListLoaderComponent } from './components/dettaglio-linea/dettaglio-linea-list-loader/dettaglio-linea-list-loader.component';
import { AigDettaglioLineaDetailBoxComponent } from './components/dettaglio-linea/dettaglio-linea-detail-box/dettaglio-linea-detail-box.component';
import { AigDettaglioLineaDisplayColumnComponent } from './components/dettaglio-linea/dettaglio-linea-display-column/dettaglio-linea-display-column.component';
import { AigDettaglioLineaResourceService } from './services/dettaglio-linea.service';
import { AigDettaglioLineaResolver } from './resolvers/dettaglio-linea.resolver';

import { AigScontoMaggiorazioneLineaListLoaderComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-list-loader/sconto-maggiorazione-linea-list-loader.component';
import { AigScontoMaggiorazioneLineaDetailBoxComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-detail-box/sconto-maggiorazione-linea-detail-box.component';
import { AigScontoMaggiorazioneLineaDisplayColumnComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-display-column/sconto-maggiorazione-linea-display-column.component';
import { AigScontoMaggiorazioneLineaResourceService } from './services/sconto-maggiorazione-linea.service';
import { AigScontoMaggiorazioneLineaResolver } from './resolvers/sconto-maggiorazione-linea.resolver';

import { AigAltriDatiGestionaliListLoaderComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-list-loader/altri-dati-gestionali-list-loader.component';
import { AigAltriDatiGestionaliDetailBoxComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-detail-box/altri-dati-gestionali-detail-box.component';
import { AigAltriDatiGestionaliDisplayColumnComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-display-column/altri-dati-gestionali-display-column.component';
import { AigAltriDatiGestionaliResourceService } from './services/altri-dati-gestionali.service';
import { AigAltriDatiGestionaliResolver } from './resolvers/altri-dati-gestionali.resolver';

import { AigDatiRiepilogoListLoaderComponent } from './components/dati-riepilogo/dati-riepilogo-list-loader/dati-riepilogo-list-loader.component';
import { AigDatiRiepilogoDetailBoxComponent } from './components/dati-riepilogo/dati-riepilogo-detail-box/dati-riepilogo-detail-box.component';
import { AigDatiRiepilogoDisplayColumnComponent } from './components/dati-riepilogo/dati-riepilogo-display-column/dati-riepilogo-display-column.component';
import { AigDatiRiepilogoResourceService } from './services/dati-riepilogo.service';
import { AigDatiRiepilogoResolver } from './resolvers/dati-riepilogo.resolver';

import { AigDatiPagamentoListLoaderComponent } from './components/dati-pagamento/dati-pagamento-list-loader/dati-pagamento-list-loader.component';
import { AigDatiPagamentoDetailBoxComponent } from './components/dati-pagamento/dati-pagamento-detail-box/dati-pagamento-detail-box.component';
import { AigDatiPagamentoDisplayColumnComponent } from './components/dati-pagamento/dati-pagamento-display-column/dati-pagamento-display-column.component';
import { AigDatiPagamentoResourceService } from './services/dati-pagamento.service';
import { AigDatiPagamentoResolver } from './resolvers/dati-pagamento.resolver';

import { AigDettaglioPagamentoListLoaderComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-list-loader/dettaglio-pagamento-list-loader.component';
import { AigDettaglioPagamentoDetailBoxComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-detail-box/dettaglio-pagamento-detail-box.component';
import { AigDettaglioPagamentoDisplayColumnComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-display-column/dettaglio-pagamento-display-column.component';
import { AigDettaglioPagamentoResourceService } from './services/dettaglio-pagamento.service';
import { AigDettaglioPagamentoResolver } from './resolvers/dettaglio-pagamento.resolver';

import { AigDatiVeicoliListLoaderComponent } from './components/dati-veicoli/dati-veicoli-list-loader/dati-veicoli-list-loader.component';
import { AigDatiVeicoliDetailBoxComponent } from './components/dati-veicoli/dati-veicoli-detail-box/dati-veicoli-detail-box.component';
import { AigDatiVeicoliDisplayColumnComponent } from './components/dati-veicoli/dati-veicoli-display-column/dati-veicoli-display-column.component';
import { AigDatiVeicoliResourceService } from './services/dati-veicoli.service';
import { AigDatiVeicoliResolver } from './resolvers/dati-veicoli.resolver';

import { AigAllegatiListLoaderComponent } from './components/allegati/allegati-list-loader/allegati-list-loader.component';
import { AigAllegatiDetailBoxComponent } from './components/allegati/allegati-detail-box/allegati-detail-box.component';
import { AigAllegatiDisplayColumnComponent } from './components/allegati/allegati-display-column/allegati-display-column.component';
import { AigAllegatiResourceService } from './services/allegati.service';
import { AigAllegatiResolver } from './resolvers/allegati.resolver';


@NgModule({
	imports: [ 
		AgalCoreModule,

	],
	declarations: [
		AigProcurementListLoaderComponent,
		AigProcurementDetailBoxComponent,
		AigProcurementDisplayColumnComponent,
		AigProcurementLotCategoryListLoaderComponent,
		AigProcurementLotCategoryDetailBoxComponent,
		AigProcurementLotCategoryDisplayColumnComponent,
		AigProcurementLotListLoaderComponent,
		AigProcurementLotDetailBoxComponent,
		AigProcurementLotDisplayColumnComponent,
		AigPartecipationStatusListLoaderComponent,
		AigPartecipationStatusDetailBoxComponent,
		AigPartecipationStatusDisplayColumnComponent,
		AigPartecipationModalityListLoaderComponent,
		AigPartecipationModalityDetailBoxComponent,
		AigPartecipationModalityDisplayColumnComponent,
		AigPartecipationListLoaderComponent,
		AigPartecipationDetailBoxComponent,
		AigPartecipationDisplayColumnComponent,
		AigPreparationStatusListLoaderComponent,
		AigPreparationStatusDetailBoxComponent,
		AigPreparationStatusDisplayColumnComponent,
		AigPreparationModalityListLoaderComponent,
		AigPreparationModalityDetailBoxComponent,
		AigPreparationModalityDisplayColumnComponent,
		AigPreparationListLoaderComponent,
		AigPreparationDetailBoxComponent,
		AigPreparationDisplayColumnComponent,
		AigDesignatedCompanyListLoaderComponent,
		AigDesignatedCompanyDetailBoxComponent,
		AigDesignatedCompanyDisplayColumnComponent,
		AigInsurancePolicyStatusListLoaderComponent,
		AigInsurancePolicyStatusDetailBoxComponent,
		AigInsurancePolicyStatusDisplayColumnComponent,
		AigInsurancePolicyListLoaderComponent,
		AigInsurancePolicyDetailBoxComponent,
		AigInsurancePolicyDisplayColumnComponent,
		AigDossierListLoaderComponent,
		AigDossierDetailBoxComponent,
		AigDossierDisplayColumnComponent,
		AigFatturaElettronicaHeaderListLoaderComponent,
		AigFatturaElettronicaHeaderDetailBoxComponent,
		AigFatturaElettronicaHeaderDisplayColumnComponent,
		AigDatiTrasmissioneListLoaderComponent,
		AigDatiTrasmissioneDetailBoxComponent,
		AigDatiTrasmissioneDisplayColumnComponent,
		AigCedentePrestatoreListLoaderComponent,
		AigCedentePrestatoreDetailBoxComponent,
		AigCedentePrestatoreDisplayColumnComponent,
		AigRappresentanteFiscaleListLoaderComponent,
		AigRappresentanteFiscaleDetailBoxComponent,
		AigRappresentanteFiscaleDisplayColumnComponent,
		AigCessionarioCommittenteListLoaderComponent,
		AigCessionarioCommittenteDetailBoxComponent,
		AigCessionarioCommittenteDisplayColumnComponent,
		AigTerzoIntermediarioOSoggettoEmittenteListLoaderComponent,
		AigTerzoIntermediarioOSoggettoEmittenteDetailBoxComponent,
		AigTerzoIntermediarioOSoggettoEmittenteDisplayColumnComponent,
		AigSoggettoEmittenteListLoaderComponent,
		AigSoggettoEmittenteDetailBoxComponent,
		AigSoggettoEmittenteDisplayColumnComponent,
		AigFatturaElettronicaBodyListLoaderComponent,
		AigFatturaElettronicaBodyDetailBoxComponent,
		AigFatturaElettronicaBodyDisplayColumnComponent,
		AigDatiGeneraliListLoaderComponent,
		AigDatiGeneraliDetailBoxComponent,
		AigDatiGeneraliDisplayColumnComponent,
		AigDatiGeneraliDocumentoListLoaderComponent,
		AigDatiGeneraliDocumentoDetailBoxComponent,
		AigDatiGeneraliDocumentoDisplayColumnComponent,
		AigDatiRitenutaListLoaderComponent,
		AigDatiRitenutaDetailBoxComponent,
		AigDatiRitenutaDisplayColumnComponent,
		AigDatiBolloListLoaderComponent,
		AigDatiBolloDetailBoxComponent,
		AigDatiBolloDisplayColumnComponent,
		AigDatiCassaPrevidenzialeListLoaderComponent,
		AigDatiCassaPrevidenzialeDetailBoxComponent,
		AigDatiCassaPrevidenzialeDisplayColumnComponent,
		AigScontoMaggiorazioneListLoaderComponent,
		AigScontoMaggiorazioneDetailBoxComponent,
		AigScontoMaggiorazioneDisplayColumnComponent,
		AigDatiOrdineAcquistoListLoaderComponent,
		AigDatiOrdineAcquistoDetailBoxComponent,
		AigDatiOrdineAcquistoDisplayColumnComponent,
		AigDatiContrattoListLoaderComponent,
		AigDatiContrattoDetailBoxComponent,
		AigDatiContrattoDisplayColumnComponent,
		AigDatiConvenzioneListLoaderComponent,
		AigDatiConvenzioneDetailBoxComponent,
		AigDatiConvenzioneDisplayColumnComponent,
		AigDatiRicezioneListLoaderComponent,
		AigDatiRicezioneDetailBoxComponent,
		AigDatiRicezioneDisplayColumnComponent,
		AigDatiFattureCollegateListLoaderComponent,
		AigDatiFattureCollegateDetailBoxComponent,
		AigDatiFattureCollegateDisplayColumnComponent,
		AigDatiSalListLoaderComponent,
		AigDatiSalDetailBoxComponent,
		AigDatiSalDisplayColumnComponent,
		AigDatiDdtListLoaderComponent,
		AigDatiDdtDetailBoxComponent,
		AigDatiDdtDisplayColumnComponent,
		AigRiferimentoNumeroLineaListLoaderComponent,
		AigRiferimentoNumeroLineaDetailBoxComponent,
		AigRiferimentoNumeroLineaDisplayColumnComponent,
		AigDatiTrasportoListLoaderComponent,
		AigDatiTrasportoDetailBoxComponent,
		AigDatiTrasportoDisplayColumnComponent,
		AigIndirizzoResaListLoaderComponent,
		AigIndirizzoResaDetailBoxComponent,
		AigIndirizzoResaDisplayColumnComponent,
		AigFatturaPrincipaleListLoaderComponent,
		AigFatturaPrincipaleDetailBoxComponent,
		AigFatturaPrincipaleDisplayColumnComponent,
		AigDatiBeniServiziListLoaderComponent,
		AigDatiBeniServiziDetailBoxComponent,
		AigDatiBeniServiziDisplayColumnComponent,
		AigDettaglioLineaListLoaderComponent,
		AigDettaglioLineaDetailBoxComponent,
		AigDettaglioLineaDisplayColumnComponent,
		AigScontoMaggiorazioneLineaListLoaderComponent,
		AigScontoMaggiorazioneLineaDetailBoxComponent,
		AigScontoMaggiorazioneLineaDisplayColumnComponent,
		AigAltriDatiGestionaliListLoaderComponent,
		AigAltriDatiGestionaliDetailBoxComponent,
		AigAltriDatiGestionaliDisplayColumnComponent,
		AigDatiRiepilogoListLoaderComponent,
		AigDatiRiepilogoDetailBoxComponent,
		AigDatiRiepilogoDisplayColumnComponent,
		AigDatiPagamentoListLoaderComponent,
		AigDatiPagamentoDetailBoxComponent,
		AigDatiPagamentoDisplayColumnComponent,
		AigDettaglioPagamentoListLoaderComponent,
		AigDettaglioPagamentoDetailBoxComponent,
		AigDettaglioPagamentoDisplayColumnComponent,
		AigDatiVeicoliListLoaderComponent,
		AigDatiVeicoliDetailBoxComponent,
		AigDatiVeicoliDisplayColumnComponent,
		AigAllegatiListLoaderComponent,
		AigAllegatiDetailBoxComponent,
		AigAllegatiDisplayColumnComponent,
	],
	providers: [
		AigProcurementResourceService,
		AigProcurementResolver,
		AigProcurementLotCategoryResourceService,
		AigProcurementLotCategoryResolver,
		AigProcurementLotResourceService,
		AigProcurementLotResolver,
		AigPartecipationStatusResourceService,
		AigPartecipationStatusResolver,
		AigPartecipationModalityResourceService,
		AigPartecipationModalityResolver,
		AigPartecipationResourceService,
		AigPartecipationResolver,
		AigPreparationStatusResourceService,
		AigPreparationStatusResolver,
		AigPreparationModalityResourceService,
		AigPreparationModalityResolver,
		AigPreparationResourceService,
		AigPreparationResolver,
		AigDesignatedCompanyResourceService,
		AigDesignatedCompanyResolver,
		AigInsurancePolicyStatusResourceService,
		AigInsurancePolicyStatusResolver,
		AigInsurancePolicyResourceService,
		AigInsurancePolicyResolver,
		AigDossierResourceService,
		AigDossierResolver,
		AigFatturaElettronicaHeaderResourceService,
		AigFatturaElettronicaHeaderResolver,
		AigDatiTrasmissioneResourceService,
		AigDatiTrasmissioneResolver,
		AigCedentePrestatoreResourceService,
		AigCedentePrestatoreResolver,
		AigRappresentanteFiscaleResourceService,
		AigRappresentanteFiscaleResolver,
		AigCessionarioCommittenteResourceService,
		AigCessionarioCommittenteResolver,
		AigTerzoIntermediarioOSoggettoEmittenteResourceService,
		AigTerzoIntermediarioOSoggettoEmittenteResolver,
		AigSoggettoEmittenteResourceService,
		AigSoggettoEmittenteResolver,
		AigFatturaElettronicaBodyResourceService,
		AigFatturaElettronicaBodyResolver,
		AigDatiGeneraliResourceService,
		AigDatiGeneraliResolver,
		AigDatiGeneraliDocumentoResourceService,
		AigDatiGeneraliDocumentoResolver,
		AigDatiRitenutaResourceService,
		AigDatiRitenutaResolver,
		AigDatiBolloResourceService,
		AigDatiBolloResolver,
		AigDatiCassaPrevidenzialeResourceService,
		AigDatiCassaPrevidenzialeResolver,
		AigScontoMaggiorazioneResourceService,
		AigScontoMaggiorazioneResolver,
		AigDatiOrdineAcquistoResourceService,
		AigDatiOrdineAcquistoResolver,
		AigDatiContrattoResourceService,
		AigDatiContrattoResolver,
		AigDatiConvenzioneResourceService,
		AigDatiConvenzioneResolver,
		AigDatiRicezioneResourceService,
		AigDatiRicezioneResolver,
		AigDatiFattureCollegateResourceService,
		AigDatiFattureCollegateResolver,
		AigDatiSalResourceService,
		AigDatiSalResolver,
		AigDatiDdtResourceService,
		AigDatiDdtResolver,
		AigRiferimentoNumeroLineaResourceService,
		AigRiferimentoNumeroLineaResolver,
		AigDatiTrasportoResourceService,
		AigDatiTrasportoResolver,
		AigIndirizzoResaResourceService,
		AigIndirizzoResaResolver,
		AigFatturaPrincipaleResourceService,
		AigFatturaPrincipaleResolver,
		AigDatiBeniServiziResourceService,
		AigDatiBeniServiziResolver,
		AigDettaglioLineaResourceService,
		AigDettaglioLineaResolver,
		AigScontoMaggiorazioneLineaResourceService,
		AigScontoMaggiorazioneLineaResolver,
		AigAltriDatiGestionaliResourceService,
		AigAltriDatiGestionaliResolver,
		AigDatiRiepilogoResourceService,
		AigDatiRiepilogoResolver,
		AigDatiPagamentoResourceService,
		AigDatiPagamentoResolver,
		AigDettaglioPagamentoResourceService,
		AigDettaglioPagamentoResolver,
		AigDatiVeicoliResourceService,
		AigDatiVeicoliResolver,
		AigAllegatiResourceService,
		AigAllegatiResolver,
		
	],
	exports: [
		AigProcurementListLoaderComponent,
		AigProcurementDetailBoxComponent,
		AigProcurementDisplayColumnComponent,
		AigProcurementLotCategoryListLoaderComponent,
		AigProcurementLotCategoryDetailBoxComponent,
		AigProcurementLotCategoryDisplayColumnComponent,
		AigProcurementLotListLoaderComponent,
		AigProcurementLotDetailBoxComponent,
		AigProcurementLotDisplayColumnComponent,
		AigPartecipationStatusListLoaderComponent,
		AigPartecipationStatusDetailBoxComponent,
		AigPartecipationStatusDisplayColumnComponent,
		AigPartecipationModalityListLoaderComponent,
		AigPartecipationModalityDetailBoxComponent,
		AigPartecipationModalityDisplayColumnComponent,
		AigPartecipationListLoaderComponent,
		AigPartecipationDetailBoxComponent,
		AigPartecipationDisplayColumnComponent,
		AigPreparationStatusListLoaderComponent,
		AigPreparationStatusDetailBoxComponent,
		AigPreparationStatusDisplayColumnComponent,
		AigPreparationModalityListLoaderComponent,
		AigPreparationModalityDetailBoxComponent,
		AigPreparationModalityDisplayColumnComponent,
		AigPreparationListLoaderComponent,
		AigPreparationDetailBoxComponent,
		AigPreparationDisplayColumnComponent,
		AigDesignatedCompanyListLoaderComponent,
		AigDesignatedCompanyDetailBoxComponent,
		AigDesignatedCompanyDisplayColumnComponent,
		AigInsurancePolicyStatusListLoaderComponent,
		AigInsurancePolicyStatusDetailBoxComponent,
		AigInsurancePolicyStatusDisplayColumnComponent,
		AigInsurancePolicyListLoaderComponent,
		AigInsurancePolicyDetailBoxComponent,
		AigInsurancePolicyDisplayColumnComponent,
		AigDossierListLoaderComponent,
		AigDossierDetailBoxComponent,
		AigDossierDisplayColumnComponent,
		AigFatturaElettronicaHeaderListLoaderComponent,
		AigFatturaElettronicaHeaderDetailBoxComponent,
		AigFatturaElettronicaHeaderDisplayColumnComponent,
		AigDatiTrasmissioneListLoaderComponent,
		AigDatiTrasmissioneDetailBoxComponent,
		AigDatiTrasmissioneDisplayColumnComponent,
		AigCedentePrestatoreListLoaderComponent,
		AigCedentePrestatoreDetailBoxComponent,
		AigCedentePrestatoreDisplayColumnComponent,
		AigRappresentanteFiscaleListLoaderComponent,
		AigRappresentanteFiscaleDetailBoxComponent,
		AigRappresentanteFiscaleDisplayColumnComponent,
		AigCessionarioCommittenteListLoaderComponent,
		AigCessionarioCommittenteDetailBoxComponent,
		AigCessionarioCommittenteDisplayColumnComponent,
		AigTerzoIntermediarioOSoggettoEmittenteListLoaderComponent,
		AigTerzoIntermediarioOSoggettoEmittenteDetailBoxComponent,
		AigTerzoIntermediarioOSoggettoEmittenteDisplayColumnComponent,
		AigSoggettoEmittenteListLoaderComponent,
		AigSoggettoEmittenteDetailBoxComponent,
		AigSoggettoEmittenteDisplayColumnComponent,
		AigFatturaElettronicaBodyListLoaderComponent,
		AigFatturaElettronicaBodyDetailBoxComponent,
		AigFatturaElettronicaBodyDisplayColumnComponent,
		AigDatiGeneraliListLoaderComponent,
		AigDatiGeneraliDetailBoxComponent,
		AigDatiGeneraliDisplayColumnComponent,
		AigDatiGeneraliDocumentoListLoaderComponent,
		AigDatiGeneraliDocumentoDetailBoxComponent,
		AigDatiGeneraliDocumentoDisplayColumnComponent,
		AigDatiRitenutaListLoaderComponent,
		AigDatiRitenutaDetailBoxComponent,
		AigDatiRitenutaDisplayColumnComponent,
		AigDatiBolloListLoaderComponent,
		AigDatiBolloDetailBoxComponent,
		AigDatiBolloDisplayColumnComponent,
		AigDatiCassaPrevidenzialeListLoaderComponent,
		AigDatiCassaPrevidenzialeDetailBoxComponent,
		AigDatiCassaPrevidenzialeDisplayColumnComponent,
		AigScontoMaggiorazioneListLoaderComponent,
		AigScontoMaggiorazioneDetailBoxComponent,
		AigScontoMaggiorazioneDisplayColumnComponent,
		AigDatiOrdineAcquistoListLoaderComponent,
		AigDatiOrdineAcquistoDetailBoxComponent,
		AigDatiOrdineAcquistoDisplayColumnComponent,
		AigDatiContrattoListLoaderComponent,
		AigDatiContrattoDetailBoxComponent,
		AigDatiContrattoDisplayColumnComponent,
		AigDatiConvenzioneListLoaderComponent,
		AigDatiConvenzioneDetailBoxComponent,
		AigDatiConvenzioneDisplayColumnComponent,
		AigDatiRicezioneListLoaderComponent,
		AigDatiRicezioneDetailBoxComponent,
		AigDatiRicezioneDisplayColumnComponent,
		AigDatiFattureCollegateListLoaderComponent,
		AigDatiFattureCollegateDetailBoxComponent,
		AigDatiFattureCollegateDisplayColumnComponent,
		AigDatiSalListLoaderComponent,
		AigDatiSalDetailBoxComponent,
		AigDatiSalDisplayColumnComponent,
		AigDatiDdtListLoaderComponent,
		AigDatiDdtDetailBoxComponent,
		AigDatiDdtDisplayColumnComponent,
		AigRiferimentoNumeroLineaListLoaderComponent,
		AigRiferimentoNumeroLineaDetailBoxComponent,
		AigRiferimentoNumeroLineaDisplayColumnComponent,
		AigDatiTrasportoListLoaderComponent,
		AigDatiTrasportoDetailBoxComponent,
		AigDatiTrasportoDisplayColumnComponent,
		AigIndirizzoResaListLoaderComponent,
		AigIndirizzoResaDetailBoxComponent,
		AigIndirizzoResaDisplayColumnComponent,
		AigFatturaPrincipaleListLoaderComponent,
		AigFatturaPrincipaleDetailBoxComponent,
		AigFatturaPrincipaleDisplayColumnComponent,
		AigDatiBeniServiziListLoaderComponent,
		AigDatiBeniServiziDetailBoxComponent,
		AigDatiBeniServiziDisplayColumnComponent,
		AigDettaglioLineaListLoaderComponent,
		AigDettaglioLineaDetailBoxComponent,
		AigDettaglioLineaDisplayColumnComponent,
		AigScontoMaggiorazioneLineaListLoaderComponent,
		AigScontoMaggiorazioneLineaDetailBoxComponent,
		AigScontoMaggiorazioneLineaDisplayColumnComponent,
		AigAltriDatiGestionaliListLoaderComponent,
		AigAltriDatiGestionaliDetailBoxComponent,
		AigAltriDatiGestionaliDisplayColumnComponent,
		AigDatiRiepilogoListLoaderComponent,
		AigDatiRiepilogoDetailBoxComponent,
		AigDatiRiepilogoDisplayColumnComponent,
		AigDatiPagamentoListLoaderComponent,
		AigDatiPagamentoDetailBoxComponent,
		AigDatiPagamentoDisplayColumnComponent,
		AigDettaglioPagamentoListLoaderComponent,
		AigDettaglioPagamentoDetailBoxComponent,
		AigDettaglioPagamentoDisplayColumnComponent,
		AigDatiVeicoliListLoaderComponent,
		AigDatiVeicoliDetailBoxComponent,
		AigDatiVeicoliDisplayColumnComponent,
		AigAllegatiListLoaderComponent,
		AigAllegatiDetailBoxComponent,
		AigAllegatiDisplayColumnComponent,
	],
})
export class AigItalianLegislationModule {}