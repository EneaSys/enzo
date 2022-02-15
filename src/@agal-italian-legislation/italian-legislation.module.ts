import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgalCoreModule } from '@agal-core/agal-core.module';
import { AigItalianLegislationApiModule } from 'aig-italianlegislation';

import { AgalProcurementListLoaderComponent } from './components/procurement/procurement-list-loader/procurement-list-loader.component';
import { AgalProcurementDetailBoxComponent } from './components/procurement/procurement-detail-box/procurement-detail-box.component';
import { AgalProcurementDisplayColumnComponent } from './components/procurement/procurement-display-column/procurement-display-column.component';
import { ProcurementResolver } from './resolvers/procurement.resolver';
import { AgalProcurementLotCategoryListLoaderComponent } from './components/procurement-lot-category/procurement-lot-category-list-loader/procurement-lot-category-list-loader.component';
import { AgalProcurementLotCategoryDetailBoxComponent } from './components/procurement-lot-category/procurement-lot-category-detail-box/procurement-lot-category-detail-box.component';
import { AgalProcurementLotCategoryDisplayColumnComponent } from './components/procurement-lot-category/procurement-lot-category-display-column/procurement-lot-category-display-column.component';
import { ProcurementLotCategoryResolver } from './resolvers/procurement-lot-category.resolver';
import { AgalProcurementLotListLoaderComponent } from './components/procurement-lot/procurement-lot-list-loader/procurement-lot-list-loader.component';
import { AgalProcurementLotDetailBoxComponent } from './components/procurement-lot/procurement-lot-detail-box/procurement-lot-detail-box.component';
import { AgalProcurementLotDisplayColumnComponent } from './components/procurement-lot/procurement-lot-display-column/procurement-lot-display-column.component';
import { ProcurementLotResolver } from './resolvers/procurement-lot.resolver';
import { AgalPartecipationStatusListLoaderComponent } from './components/partecipation-status/partecipation-status-list-loader/partecipation-status-list-loader.component';
import { AgalPartecipationStatusDetailBoxComponent } from './components/partecipation-status/partecipation-status-detail-box/partecipation-status-detail-box.component';
import { AgalPartecipationStatusDisplayColumnComponent } from './components/partecipation-status/partecipation-status-display-column/partecipation-status-display-column.component';
import { PartecipationStatusResolver } from './resolvers/partecipation-status.resolver';
import { AgalPartecipationModalityListLoaderComponent } from './components/partecipation-modality/partecipation-modality-list-loader/partecipation-modality-list-loader.component';
import { AgalPartecipationModalityDetailBoxComponent } from './components/partecipation-modality/partecipation-modality-detail-box/partecipation-modality-detail-box.component';
import { AgalPartecipationModalityDisplayColumnComponent } from './components/partecipation-modality/partecipation-modality-display-column/partecipation-modality-display-column.component';
import { PartecipationModalityResolver } from './resolvers/partecipation-modality.resolver';
import { AgalPartecipationListLoaderComponent } from './components/partecipation/partecipation-list-loader/partecipation-list-loader.component';
import { AgalPartecipationDetailBoxComponent } from './components/partecipation/partecipation-detail-box/partecipation-detail-box.component';
import { AgalPartecipationDisplayColumnComponent } from './components/partecipation/partecipation-display-column/partecipation-display-column.component';
import { PartecipationResolver } from './resolvers/partecipation.resolver';
import { AgalPreparationStatusListLoaderComponent } from './components/preparation-status/preparation-status-list-loader/preparation-status-list-loader.component';
import { AgalPreparationStatusDetailBoxComponent } from './components/preparation-status/preparation-status-detail-box/preparation-status-detail-box.component';
import { AgalPreparationStatusDisplayColumnComponent } from './components/preparation-status/preparation-status-display-column/preparation-status-display-column.component';
import { PreparationStatusResolver } from './resolvers/preparation-status.resolver';
import { AgalPreparationModalityListLoaderComponent } from './components/preparation-modality/preparation-modality-list-loader/preparation-modality-list-loader.component';
import { AgalPreparationModalityDetailBoxComponent } from './components/preparation-modality/preparation-modality-detail-box/preparation-modality-detail-box.component';
import { AgalPreparationModalityDisplayColumnComponent } from './components/preparation-modality/preparation-modality-display-column/preparation-modality-display-column.component';
import { PreparationModalityResolver } from './resolvers/preparation-modality.resolver';
import { AgalPreparationListLoaderComponent } from './components/preparation/preparation-list-loader/preparation-list-loader.component';
import { AgalPreparationDetailBoxComponent } from './components/preparation/preparation-detail-box/preparation-detail-box.component';
import { AgalPreparationDisplayColumnComponent } from './components/preparation/preparation-display-column/preparation-display-column.component';
import { PreparationResolver } from './resolvers/preparation.resolver';
import { AgalDesignatedCompanyListLoaderComponent } from './components/designated-company/designated-company-list-loader/designated-company-list-loader.component';
import { AgalDesignatedCompanyDetailBoxComponent } from './components/designated-company/designated-company-detail-box/designated-company-detail-box.component';
import { AgalDesignatedCompanyDisplayColumnComponent } from './components/designated-company/designated-company-display-column/designated-company-display-column.component';
import { DesignatedCompanyResolver } from './resolvers/designated-company.resolver';
import { AgalInsurancePolicyStatusListLoaderComponent } from './components/insurance-policy-status/insurance-policy-status-list-loader/insurance-policy-status-list-loader.component';
import { AgalInsurancePolicyStatusDetailBoxComponent } from './components/insurance-policy-status/insurance-policy-status-detail-box/insurance-policy-status-detail-box.component';
import { AgalInsurancePolicyStatusDisplayColumnComponent } from './components/insurance-policy-status/insurance-policy-status-display-column/insurance-policy-status-display-column.component';
import { InsurancePolicyStatusResolver } from './resolvers/insurance-policy-status.resolver';
import { AgalInsurancePolicyListLoaderComponent } from './components/insurance-policy/insurance-policy-list-loader/insurance-policy-list-loader.component';
import { AgalInsurancePolicyDetailBoxComponent } from './components/insurance-policy/insurance-policy-detail-box/insurance-policy-detail-box.component';
import { AgalInsurancePolicyDisplayColumnComponent } from './components/insurance-policy/insurance-policy-display-column/insurance-policy-display-column.component';
import { InsurancePolicyResolver } from './resolvers/insurance-policy.resolver';
import { AgalDossierListLoaderComponent } from './components/dossier/dossier-list-loader/dossier-list-loader.component';
import { AgalDossierDetailBoxComponent } from './components/dossier/dossier-detail-box/dossier-detail-box.component';
import { AgalDossierDisplayColumnComponent } from './components/dossier/dossier-display-column/dossier-display-column.component';
import { DossierResolver } from './resolvers/dossier.resolver';
import { AgalFatturaElettronicaHeaderListLoaderComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-list-loader/fattura-elettronica-header-list-loader.component';
import { AgalFatturaElettronicaHeaderDetailBoxComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-detail-box/fattura-elettronica-header-detail-box.component';
import { AgalFatturaElettronicaHeaderDisplayColumnComponent } from './components/fattura-elettronica-header/fattura-elettronica-header-display-column/fattura-elettronica-header-display-column.component';
import { FatturaElettronicaHeaderResolver } from './resolvers/fattura-elettronica-header.resolver';
import { AgalDatiTrasmissioneListLoaderComponent } from './components/dati-trasmissione/dati-trasmissione-list-loader/dati-trasmissione-list-loader.component';
import { AgalDatiTrasmissioneDetailBoxComponent } from './components/dati-trasmissione/dati-trasmissione-detail-box/dati-trasmissione-detail-box.component';
import { AgalDatiTrasmissioneDisplayColumnComponent } from './components/dati-trasmissione/dati-trasmissione-display-column/dati-trasmissione-display-column.component';
import { DatiTrasmissioneResolver } from './resolvers/dati-trasmissione.resolver';
import { AgalCedentePrestatoreListLoaderComponent } from './components/cedente-prestatore/cedente-prestatore-list-loader/cedente-prestatore-list-loader.component';
import { AgalCedentePrestatoreDetailBoxComponent } from './components/cedente-prestatore/cedente-prestatore-detail-box/cedente-prestatore-detail-box.component';
import { AgalCedentePrestatoreDisplayColumnComponent } from './components/cedente-prestatore/cedente-prestatore-display-column/cedente-prestatore-display-column.component';
import { CedentePrestatoreResolver } from './resolvers/cedente-prestatore.resolver';
import { AgalRappresentanteFiscaleListLoaderComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-list-loader/rappresentante-fiscale-list-loader.component';
import { AgalRappresentanteFiscaleDetailBoxComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-detail-box/rappresentante-fiscale-detail-box.component';
import { AgalRappresentanteFiscaleDisplayColumnComponent } from './components/rappresentante-fiscale/rappresentante-fiscale-display-column/rappresentante-fiscale-display-column.component';
import { RappresentanteFiscaleResolver } from './resolvers/rappresentante-fiscale.resolver';
import { AgalCessionarioCommittenteListLoaderComponent } from './components/cessionario-committente/cessionario-committente-list-loader/cessionario-committente-list-loader.component';
import { AgalCessionarioCommittenteDetailBoxComponent } from './components/cessionario-committente/cessionario-committente-detail-box/cessionario-committente-detail-box.component';
import { AgalCessionarioCommittenteDisplayColumnComponent } from './components/cessionario-committente/cessionario-committente-display-column/cessionario-committente-display-column.component';
import { CessionarioCommittenteResolver } from './resolvers/cessionario-committente.resolver';
import { AgalTerzoIntermediarioOSoggettoEmittenteListLoaderComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-list-loader/terzo-intermediario-o-soggetto-emittente-list-loader.component';
import { AgalTerzoIntermediarioOSoggettoEmittenteDetailBoxComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-detail-box/terzo-intermediario-o-soggetto-emittente-detail-box.component';
import { AgalTerzoIntermediarioOSoggettoEmittenteDisplayColumnComponent } from './components/terzo-intermediario-o-soggetto-emittente/terzo-intermediario-o-soggetto-emittente-display-column/terzo-intermediario-o-soggetto-emittente-display-column.component';
import { TerzoIntermediarioOSoggettoEmittenteResolver } from './resolvers/terzo-intermediario-o-soggetto-emittente.resolver';
import { AgalSoggettoEmittenteListLoaderComponent } from './components/soggetto-emittente/soggetto-emittente-list-loader/soggetto-emittente-list-loader.component';
import { AgalSoggettoEmittenteDetailBoxComponent } from './components/soggetto-emittente/soggetto-emittente-detail-box/soggetto-emittente-detail-box.component';
import { AgalSoggettoEmittenteDisplayColumnComponent } from './components/soggetto-emittente/soggetto-emittente-display-column/soggetto-emittente-display-column.component';
import { SoggettoEmittenteResolver } from './resolvers/soggetto-emittente.resolver';
import { AgalFatturaElettronicaBodyListLoaderComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-list-loader/fattura-elettronica-body-list-loader.component';
import { AgalFatturaElettronicaBodyDetailBoxComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-detail-box/fattura-elettronica-body-detail-box.component';
import { AgalFatturaElettronicaBodyDisplayColumnComponent } from './components/fattura-elettronica-body/fattura-elettronica-body-display-column/fattura-elettronica-body-display-column.component';
import { FatturaElettronicaBodyResolver } from './resolvers/fattura-elettronica-body.resolver';
import { AgalDatiGeneraliListLoaderComponent } from './components/dati-generali/dati-generali-list-loader/dati-generali-list-loader.component';
import { AgalDatiGeneraliDetailBoxComponent } from './components/dati-generali/dati-generali-detail-box/dati-generali-detail-box.component';
import { AgalDatiGeneraliDisplayColumnComponent } from './components/dati-generali/dati-generali-display-column/dati-generali-display-column.component';
import { DatiGeneraliResolver } from './resolvers/dati-generali.resolver';
import { AgalDatiGeneraliDocumentoListLoaderComponent } from './components/dati-generali-documento/dati-generali-documento-list-loader/dati-generali-documento-list-loader.component';
import { AgalDatiGeneraliDocumentoDetailBoxComponent } from './components/dati-generali-documento/dati-generali-documento-detail-box/dati-generali-documento-detail-box.component';
import { AgalDatiGeneraliDocumentoDisplayColumnComponent } from './components/dati-generali-documento/dati-generali-documento-display-column/dati-generali-documento-display-column.component';
import { DatiGeneraliDocumentoResolver } from './resolvers/dati-generali-documento.resolver';
import { AgalDatiRitenutaListLoaderComponent } from './components/dati-ritenuta/dati-ritenuta-list-loader/dati-ritenuta-list-loader.component';
import { AgalDatiRitenutaDetailBoxComponent } from './components/dati-ritenuta/dati-ritenuta-detail-box/dati-ritenuta-detail-box.component';
import { AgalDatiRitenutaDisplayColumnComponent } from './components/dati-ritenuta/dati-ritenuta-display-column/dati-ritenuta-display-column.component';
import { DatiRitenutaResolver } from './resolvers/dati-ritenuta.resolver';
import { AgalDatiBolloListLoaderComponent } from './components/dati-bollo/dati-bollo-list-loader/dati-bollo-list-loader.component';
import { AgalDatiBolloDetailBoxComponent } from './components/dati-bollo/dati-bollo-detail-box/dati-bollo-detail-box.component';
import { AgalDatiBolloDisplayColumnComponent } from './components/dati-bollo/dati-bollo-display-column/dati-bollo-display-column.component';
import { DatiBolloResolver } from './resolvers/dati-bollo.resolver';
import { AgalDatiCassaPrevidenzialeListLoaderComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-list-loader/dati-cassa-previdenziale-list-loader.component';
import { AgalDatiCassaPrevidenzialeDetailBoxComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-detail-box/dati-cassa-previdenziale-detail-box.component';
import { AgalDatiCassaPrevidenzialeDisplayColumnComponent } from './components/dati-cassa-previdenziale/dati-cassa-previdenziale-display-column/dati-cassa-previdenziale-display-column.component';
import { DatiCassaPrevidenzialeResolver } from './resolvers/dati-cassa-previdenziale.resolver';
import { AgalScontoMaggiorazioneListLoaderComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-list-loader/sconto-maggiorazione-list-loader.component';
import { AgalScontoMaggiorazioneDetailBoxComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-detail-box/sconto-maggiorazione-detail-box.component';
import { AgalScontoMaggiorazioneDisplayColumnComponent } from './components/sconto-maggiorazione/sconto-maggiorazione-display-column/sconto-maggiorazione-display-column.component';
import { ScontoMaggiorazioneResolver } from './resolvers/sconto-maggiorazione.resolver';
import { AgalDatiOrdineAcquistoListLoaderComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-list-loader/dati-ordine-acquisto-list-loader.component';
import { AgalDatiOrdineAcquistoDetailBoxComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-detail-box/dati-ordine-acquisto-detail-box.component';
import { AgalDatiOrdineAcquistoDisplayColumnComponent } from './components/dati-ordine-acquisto/dati-ordine-acquisto-display-column/dati-ordine-acquisto-display-column.component';
import { DatiOrdineAcquistoResolver } from './resolvers/dati-ordine-acquisto.resolver';
import { AgalDatiContrattoListLoaderComponent } from './components/dati-contratto/dati-contratto-list-loader/dati-contratto-list-loader.component';
import { AgalDatiContrattoDetailBoxComponent } from './components/dati-contratto/dati-contratto-detail-box/dati-contratto-detail-box.component';
import { AgalDatiContrattoDisplayColumnComponent } from './components/dati-contratto/dati-contratto-display-column/dati-contratto-display-column.component';
import { DatiContrattoResolver } from './resolvers/dati-contratto.resolver';
import { AgalDatiConvenzioneListLoaderComponent } from './components/dati-convenzione/dati-convenzione-list-loader/dati-convenzione-list-loader.component';
import { AgalDatiConvenzioneDetailBoxComponent } from './components/dati-convenzione/dati-convenzione-detail-box/dati-convenzione-detail-box.component';
import { AgalDatiConvenzioneDisplayColumnComponent } from './components/dati-convenzione/dati-convenzione-display-column/dati-convenzione-display-column.component';
import { DatiConvenzioneResolver } from './resolvers/dati-convenzione.resolver';
import { AgalDatiRicezioneListLoaderComponent } from './components/dati-ricezione/dati-ricezione-list-loader/dati-ricezione-list-loader.component';
import { AgalDatiRicezioneDetailBoxComponent } from './components/dati-ricezione/dati-ricezione-detail-box/dati-ricezione-detail-box.component';
import { AgalDatiRicezioneDisplayColumnComponent } from './components/dati-ricezione/dati-ricezione-display-column/dati-ricezione-display-column.component';
import { DatiRicezioneResolver } from './resolvers/dati-ricezione.resolver';
import { AgalDatiFattureCollegateListLoaderComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-list-loader/dati-fatture-collegate-list-loader.component';
import { AgalDatiFattureCollegateDetailBoxComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-detail-box/dati-fatture-collegate-detail-box.component';
import { AgalDatiFattureCollegateDisplayColumnComponent } from './components/dati-fatture-collegate/dati-fatture-collegate-display-column/dati-fatture-collegate-display-column.component';
import { DatiFattureCollegateResolver } from './resolvers/dati-fatture-collegate.resolver';
import { AgalDatiSalListLoaderComponent } from './components/dati-sal/dati-sal-list-loader/dati-sal-list-loader.component';
import { AgalDatiSalDetailBoxComponent } from './components/dati-sal/dati-sal-detail-box/dati-sal-detail-box.component';
import { AgalDatiSalDisplayColumnComponent } from './components/dati-sal/dati-sal-display-column/dati-sal-display-column.component';
import { DatiSalResolver } from './resolvers/dati-sal.resolver';
import { AgalDatiDdtListLoaderComponent } from './components/dati-ddt/dati-ddt-list-loader/dati-ddt-list-loader.component';
import { AgalDatiDdtDetailBoxComponent } from './components/dati-ddt/dati-ddt-detail-box/dati-ddt-detail-box.component';
import { AgalDatiDdtDisplayColumnComponent } from './components/dati-ddt/dati-ddt-display-column/dati-ddt-display-column.component';
import { DatiDdtResolver } from './resolvers/dati-ddt.resolver';
import { AgalRiferimentoNumeroLineaListLoaderComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-list-loader/riferimento-numero-linea-list-loader.component';
import { AgalRiferimentoNumeroLineaDetailBoxComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-detail-box/riferimento-numero-linea-detail-box.component';
import { AgalRiferimentoNumeroLineaDisplayColumnComponent } from './components/riferimento-numero-linea/riferimento-numero-linea-display-column/riferimento-numero-linea-display-column.component';
import { RiferimentoNumeroLineaResolver } from './resolvers/riferimento-numero-linea.resolver';
import { AgalDatiTrasportoListLoaderComponent } from './components/dati-trasporto/dati-trasporto-list-loader/dati-trasporto-list-loader.component';
import { AgalDatiTrasportoDetailBoxComponent } from './components/dati-trasporto/dati-trasporto-detail-box/dati-trasporto-detail-box.component';
import { AgalDatiTrasportoDisplayColumnComponent } from './components/dati-trasporto/dati-trasporto-display-column/dati-trasporto-display-column.component';
import { DatiTrasportoResolver } from './resolvers/dati-trasporto.resolver';
import { AgalIndirizzoResaListLoaderComponent } from './components/indirizzo-resa/indirizzo-resa-list-loader/indirizzo-resa-list-loader.component';
import { AgalIndirizzoResaDetailBoxComponent } from './components/indirizzo-resa/indirizzo-resa-detail-box/indirizzo-resa-detail-box.component';
import { AgalIndirizzoResaDisplayColumnComponent } from './components/indirizzo-resa/indirizzo-resa-display-column/indirizzo-resa-display-column.component';
import { IndirizzoResaResolver } from './resolvers/indirizzo-resa.resolver';
import { AgalFatturaPrincipaleListLoaderComponent } from './components/fattura-principale/fattura-principale-list-loader/fattura-principale-list-loader.component';
import { AgalFatturaPrincipaleDetailBoxComponent } from './components/fattura-principale/fattura-principale-detail-box/fattura-principale-detail-box.component';
import { AgalFatturaPrincipaleDisplayColumnComponent } from './components/fattura-principale/fattura-principale-display-column/fattura-principale-display-column.component';
import { FatturaPrincipaleResolver } from './resolvers/fattura-principale.resolver';
import { AgalDatiBeniServiziListLoaderComponent } from './components/dati-beni-servizi/dati-beni-servizi-list-loader/dati-beni-servizi-list-loader.component';
import { AgalDatiBeniServiziDetailBoxComponent } from './components/dati-beni-servizi/dati-beni-servizi-detail-box/dati-beni-servizi-detail-box.component';
import { AgalDatiBeniServiziDisplayColumnComponent } from './components/dati-beni-servizi/dati-beni-servizi-display-column/dati-beni-servizi-display-column.component';
import { DatiBeniServiziResolver } from './resolvers/dati-beni-servizi.resolver';
import { AgalDettaglioLineaListLoaderComponent } from './components/dettaglio-linea/dettaglio-linea-list-loader/dettaglio-linea-list-loader.component';
import { AgalDettaglioLineaDetailBoxComponent } from './components/dettaglio-linea/dettaglio-linea-detail-box/dettaglio-linea-detail-box.component';
import { AgalDettaglioLineaDisplayColumnComponent } from './components/dettaglio-linea/dettaglio-linea-display-column/dettaglio-linea-display-column.component';
import { DettaglioLineaResolver } from './resolvers/dettaglio-linea.resolver';
import { AgalScontoMaggiorazioneLineaListLoaderComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-list-loader/sconto-maggiorazione-linea-list-loader.component';
import { AgalScontoMaggiorazioneLineaDetailBoxComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-detail-box/sconto-maggiorazione-linea-detail-box.component';
import { AgalScontoMaggiorazioneLineaDisplayColumnComponent } from './components/sconto-maggiorazione-linea/sconto-maggiorazione-linea-display-column/sconto-maggiorazione-linea-display-column.component';
import { ScontoMaggiorazioneLineaResolver } from './resolvers/sconto-maggiorazione-linea.resolver';
import { AgalAltriDatiGestionaliListLoaderComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-list-loader/altri-dati-gestionali-list-loader.component';
import { AgalAltriDatiGestionaliDetailBoxComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-detail-box/altri-dati-gestionali-detail-box.component';
import { AgalAltriDatiGestionaliDisplayColumnComponent } from './components/altri-dati-gestionali/altri-dati-gestionali-display-column/altri-dati-gestionali-display-column.component';
import { AltriDatiGestionaliResolver } from './resolvers/altri-dati-gestionali.resolver';
import { AgalDatiRiepilogoListLoaderComponent } from './components/dati-riepilogo/dati-riepilogo-list-loader/dati-riepilogo-list-loader.component';
import { AgalDatiRiepilogoDetailBoxComponent } from './components/dati-riepilogo/dati-riepilogo-detail-box/dati-riepilogo-detail-box.component';
import { AgalDatiRiepilogoDisplayColumnComponent } from './components/dati-riepilogo/dati-riepilogo-display-column/dati-riepilogo-display-column.component';
import { DatiRiepilogoResolver } from './resolvers/dati-riepilogo.resolver';
import { AgalDatiPagamentoListLoaderComponent } from './components/dati-pagamento/dati-pagamento-list-loader/dati-pagamento-list-loader.component';
import { AgalDatiPagamentoDetailBoxComponent } from './components/dati-pagamento/dati-pagamento-detail-box/dati-pagamento-detail-box.component';
import { AgalDatiPagamentoDisplayColumnComponent } from './components/dati-pagamento/dati-pagamento-display-column/dati-pagamento-display-column.component';
import { DatiPagamentoResolver } from './resolvers/dati-pagamento.resolver';
import { AgalDettaglioPagamentoListLoaderComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-list-loader/dettaglio-pagamento-list-loader.component';
import { AgalDettaglioPagamentoDetailBoxComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-detail-box/dettaglio-pagamento-detail-box.component';
import { AgalDettaglioPagamentoDisplayColumnComponent } from './components/dettaglio-pagamento/dettaglio-pagamento-display-column/dettaglio-pagamento-display-column.component';
import { DettaglioPagamentoResolver } from './resolvers/dettaglio-pagamento.resolver';
import { AgalDatiVeicoliListLoaderComponent } from './components/dati-veicoli/dati-veicoli-list-loader/dati-veicoli-list-loader.component';
import { AgalDatiVeicoliDetailBoxComponent } from './components/dati-veicoli/dati-veicoli-detail-box/dati-veicoli-detail-box.component';
import { AgalDatiVeicoliDisplayColumnComponent } from './components/dati-veicoli/dati-veicoli-display-column/dati-veicoli-display-column.component';
import { DatiVeicoliResolver } from './resolvers/dati-veicoli.resolver';
import { AgalAllegatiListLoaderComponent } from './components/allegati/allegati-list-loader/allegati-list-loader.component';
import { AgalAllegatiDetailBoxComponent } from './components/allegati/allegati-detail-box/allegati-detail-box.component';
import { AgalAllegatiDisplayColumnComponent } from './components/allegati/allegati-display-column/allegati-display-column.component';
import { AllegatiResolver } from './resolvers/allegati.resolver';

@NgModule({
	imports: [ 
		CommonModule,
		AgalCoreModule,
		AigItalianLegislationApiModule,
	],
	declarations: [
            AgalProcurementListLoaderComponent,
            AgalProcurementDetailBoxComponent,
			AgalProcurementDisplayColumnComponent,
            AgalProcurementLotCategoryListLoaderComponent,
            AgalProcurementLotCategoryDetailBoxComponent,
			AgalProcurementLotCategoryDisplayColumnComponent,
            AgalProcurementLotListLoaderComponent,
            AgalProcurementLotDetailBoxComponent,
			AgalProcurementLotDisplayColumnComponent,
            AgalPartecipationStatusListLoaderComponent,
            AgalPartecipationStatusDetailBoxComponent,
			AgalPartecipationStatusDisplayColumnComponent,
            AgalPartecipationModalityListLoaderComponent,
            AgalPartecipationModalityDetailBoxComponent,
			AgalPartecipationModalityDisplayColumnComponent,
            AgalPartecipationListLoaderComponent,
            AgalPartecipationDetailBoxComponent,
			AgalPartecipationDisplayColumnComponent,
            AgalPreparationStatusListLoaderComponent,
            AgalPreparationStatusDetailBoxComponent,
			AgalPreparationStatusDisplayColumnComponent,
            AgalPreparationModalityListLoaderComponent,
            AgalPreparationModalityDetailBoxComponent,
			AgalPreparationModalityDisplayColumnComponent,
            AgalPreparationListLoaderComponent,
            AgalPreparationDetailBoxComponent,
			AgalPreparationDisplayColumnComponent,
            AgalDesignatedCompanyListLoaderComponent,
            AgalDesignatedCompanyDetailBoxComponent,
			AgalDesignatedCompanyDisplayColumnComponent,
            AgalInsurancePolicyStatusListLoaderComponent,
            AgalInsurancePolicyStatusDetailBoxComponent,
			AgalInsurancePolicyStatusDisplayColumnComponent,
            AgalInsurancePolicyListLoaderComponent,
            AgalInsurancePolicyDetailBoxComponent,
			AgalInsurancePolicyDisplayColumnComponent,
            AgalDossierListLoaderComponent,
            AgalDossierDetailBoxComponent,
			AgalDossierDisplayColumnComponent,
            AgalFatturaElettronicaHeaderListLoaderComponent,
            AgalFatturaElettronicaHeaderDetailBoxComponent,
			AgalFatturaElettronicaHeaderDisplayColumnComponent,
            AgalDatiTrasmissioneListLoaderComponent,
            AgalDatiTrasmissioneDetailBoxComponent,
			AgalDatiTrasmissioneDisplayColumnComponent,
            AgalCedentePrestatoreListLoaderComponent,
            AgalCedentePrestatoreDetailBoxComponent,
			AgalCedentePrestatoreDisplayColumnComponent,
            AgalRappresentanteFiscaleListLoaderComponent,
            AgalRappresentanteFiscaleDetailBoxComponent,
			AgalRappresentanteFiscaleDisplayColumnComponent,
            AgalCessionarioCommittenteListLoaderComponent,
            AgalCessionarioCommittenteDetailBoxComponent,
			AgalCessionarioCommittenteDisplayColumnComponent,
            AgalTerzoIntermediarioOSoggettoEmittenteListLoaderComponent,
            AgalTerzoIntermediarioOSoggettoEmittenteDetailBoxComponent,
			AgalTerzoIntermediarioOSoggettoEmittenteDisplayColumnComponent,
            AgalSoggettoEmittenteListLoaderComponent,
            AgalSoggettoEmittenteDetailBoxComponent,
			AgalSoggettoEmittenteDisplayColumnComponent,
            AgalFatturaElettronicaBodyListLoaderComponent,
            AgalFatturaElettronicaBodyDetailBoxComponent,
			AgalFatturaElettronicaBodyDisplayColumnComponent,
            AgalDatiGeneraliListLoaderComponent,
            AgalDatiGeneraliDetailBoxComponent,
			AgalDatiGeneraliDisplayColumnComponent,
            AgalDatiGeneraliDocumentoListLoaderComponent,
            AgalDatiGeneraliDocumentoDetailBoxComponent,
			AgalDatiGeneraliDocumentoDisplayColumnComponent,
            AgalDatiRitenutaListLoaderComponent,
            AgalDatiRitenutaDetailBoxComponent,
			AgalDatiRitenutaDisplayColumnComponent,
            AgalDatiBolloListLoaderComponent,
            AgalDatiBolloDetailBoxComponent,
			AgalDatiBolloDisplayColumnComponent,
            AgalDatiCassaPrevidenzialeListLoaderComponent,
            AgalDatiCassaPrevidenzialeDetailBoxComponent,
			AgalDatiCassaPrevidenzialeDisplayColumnComponent,
            AgalScontoMaggiorazioneListLoaderComponent,
            AgalScontoMaggiorazioneDetailBoxComponent,
			AgalScontoMaggiorazioneDisplayColumnComponent,
            AgalDatiOrdineAcquistoListLoaderComponent,
            AgalDatiOrdineAcquistoDetailBoxComponent,
			AgalDatiOrdineAcquistoDisplayColumnComponent,
            AgalDatiContrattoListLoaderComponent,
            AgalDatiContrattoDetailBoxComponent,
			AgalDatiContrattoDisplayColumnComponent,
            AgalDatiConvenzioneListLoaderComponent,
            AgalDatiConvenzioneDetailBoxComponent,
			AgalDatiConvenzioneDisplayColumnComponent,
            AgalDatiRicezioneListLoaderComponent,
            AgalDatiRicezioneDetailBoxComponent,
			AgalDatiRicezioneDisplayColumnComponent,
            AgalDatiFattureCollegateListLoaderComponent,
            AgalDatiFattureCollegateDetailBoxComponent,
			AgalDatiFattureCollegateDisplayColumnComponent,
            AgalDatiSalListLoaderComponent,
            AgalDatiSalDetailBoxComponent,
			AgalDatiSalDisplayColumnComponent,
            AgalDatiDdtListLoaderComponent,
            AgalDatiDdtDetailBoxComponent,
			AgalDatiDdtDisplayColumnComponent,
            AgalRiferimentoNumeroLineaListLoaderComponent,
            AgalRiferimentoNumeroLineaDetailBoxComponent,
			AgalRiferimentoNumeroLineaDisplayColumnComponent,
            AgalDatiTrasportoListLoaderComponent,
            AgalDatiTrasportoDetailBoxComponent,
			AgalDatiTrasportoDisplayColumnComponent,
            AgalIndirizzoResaListLoaderComponent,
            AgalIndirizzoResaDetailBoxComponent,
			AgalIndirizzoResaDisplayColumnComponent,
            AgalFatturaPrincipaleListLoaderComponent,
            AgalFatturaPrincipaleDetailBoxComponent,
			AgalFatturaPrincipaleDisplayColumnComponent,
            AgalDatiBeniServiziListLoaderComponent,
            AgalDatiBeniServiziDetailBoxComponent,
			AgalDatiBeniServiziDisplayColumnComponent,
            AgalDettaglioLineaListLoaderComponent,
            AgalDettaglioLineaDetailBoxComponent,
			AgalDettaglioLineaDisplayColumnComponent,
            AgalScontoMaggiorazioneLineaListLoaderComponent,
            AgalScontoMaggiorazioneLineaDetailBoxComponent,
			AgalScontoMaggiorazioneLineaDisplayColumnComponent,
            AgalAltriDatiGestionaliListLoaderComponent,
            AgalAltriDatiGestionaliDetailBoxComponent,
			AgalAltriDatiGestionaliDisplayColumnComponent,
            AgalDatiRiepilogoListLoaderComponent,
            AgalDatiRiepilogoDetailBoxComponent,
			AgalDatiRiepilogoDisplayColumnComponent,
            AgalDatiPagamentoListLoaderComponent,
            AgalDatiPagamentoDetailBoxComponent,
			AgalDatiPagamentoDisplayColumnComponent,
            AgalDettaglioPagamentoListLoaderComponent,
            AgalDettaglioPagamentoDetailBoxComponent,
			AgalDettaglioPagamentoDisplayColumnComponent,
            AgalDatiVeicoliListLoaderComponent,
            AgalDatiVeicoliDetailBoxComponent,
			AgalDatiVeicoliDisplayColumnComponent,
            AgalAllegatiListLoaderComponent,
            AgalAllegatiDetailBoxComponent,
			AgalAllegatiDisplayColumnComponent,
	],
	exports: [

            AgalProcurementListLoaderComponent,
            AgalProcurementDetailBoxComponent,
			AgalProcurementDisplayColumnComponent,
            AgalProcurementLotCategoryListLoaderComponent,
            AgalProcurementLotCategoryDetailBoxComponent,
			AgalProcurementLotCategoryDisplayColumnComponent,
            AgalProcurementLotListLoaderComponent,
            AgalProcurementLotDetailBoxComponent,
			AgalProcurementLotDisplayColumnComponent,
            AgalPartecipationStatusListLoaderComponent,
            AgalPartecipationStatusDetailBoxComponent,
			AgalPartecipationStatusDisplayColumnComponent,
            AgalPartecipationModalityListLoaderComponent,
            AgalPartecipationModalityDetailBoxComponent,
			AgalPartecipationModalityDisplayColumnComponent,
            AgalPartecipationListLoaderComponent,
            AgalPartecipationDetailBoxComponent,
			AgalPartecipationDisplayColumnComponent,
            AgalPreparationStatusListLoaderComponent,
            AgalPreparationStatusDetailBoxComponent,
			AgalPreparationStatusDisplayColumnComponent,
            AgalPreparationModalityListLoaderComponent,
            AgalPreparationModalityDetailBoxComponent,
			AgalPreparationModalityDisplayColumnComponent,
            AgalPreparationListLoaderComponent,
            AgalPreparationDetailBoxComponent,
			AgalPreparationDisplayColumnComponent,
            AgalDesignatedCompanyListLoaderComponent,
            AgalDesignatedCompanyDetailBoxComponent,
			AgalDesignatedCompanyDisplayColumnComponent,
            AgalInsurancePolicyStatusListLoaderComponent,
            AgalInsurancePolicyStatusDetailBoxComponent,
			AgalInsurancePolicyStatusDisplayColumnComponent,
            AgalInsurancePolicyListLoaderComponent,
            AgalInsurancePolicyDetailBoxComponent,
			AgalInsurancePolicyDisplayColumnComponent,
            AgalDossierListLoaderComponent,
            AgalDossierDetailBoxComponent,
			AgalDossierDisplayColumnComponent,
            AgalFatturaElettronicaHeaderListLoaderComponent,
            AgalFatturaElettronicaHeaderDetailBoxComponent,
			AgalFatturaElettronicaHeaderDisplayColumnComponent,
            AgalDatiTrasmissioneListLoaderComponent,
            AgalDatiTrasmissioneDetailBoxComponent,
			AgalDatiTrasmissioneDisplayColumnComponent,
            AgalCedentePrestatoreListLoaderComponent,
            AgalCedentePrestatoreDetailBoxComponent,
			AgalCedentePrestatoreDisplayColumnComponent,
            AgalRappresentanteFiscaleListLoaderComponent,
            AgalRappresentanteFiscaleDetailBoxComponent,
			AgalRappresentanteFiscaleDisplayColumnComponent,
            AgalCessionarioCommittenteListLoaderComponent,
            AgalCessionarioCommittenteDetailBoxComponent,
			AgalCessionarioCommittenteDisplayColumnComponent,
            AgalTerzoIntermediarioOSoggettoEmittenteListLoaderComponent,
            AgalTerzoIntermediarioOSoggettoEmittenteDetailBoxComponent,
			AgalTerzoIntermediarioOSoggettoEmittenteDisplayColumnComponent,
            AgalSoggettoEmittenteListLoaderComponent,
            AgalSoggettoEmittenteDetailBoxComponent,
			AgalSoggettoEmittenteDisplayColumnComponent,
            AgalFatturaElettronicaBodyListLoaderComponent,
            AgalFatturaElettronicaBodyDetailBoxComponent,
			AgalFatturaElettronicaBodyDisplayColumnComponent,
            AgalDatiGeneraliListLoaderComponent,
            AgalDatiGeneraliDetailBoxComponent,
			AgalDatiGeneraliDisplayColumnComponent,
            AgalDatiGeneraliDocumentoListLoaderComponent,
            AgalDatiGeneraliDocumentoDetailBoxComponent,
			AgalDatiGeneraliDocumentoDisplayColumnComponent,
            AgalDatiRitenutaListLoaderComponent,
            AgalDatiRitenutaDetailBoxComponent,
			AgalDatiRitenutaDisplayColumnComponent,
            AgalDatiBolloListLoaderComponent,
            AgalDatiBolloDetailBoxComponent,
			AgalDatiBolloDisplayColumnComponent,
            AgalDatiCassaPrevidenzialeListLoaderComponent,
            AgalDatiCassaPrevidenzialeDetailBoxComponent,
			AgalDatiCassaPrevidenzialeDisplayColumnComponent,
            AgalScontoMaggiorazioneListLoaderComponent,
            AgalScontoMaggiorazioneDetailBoxComponent,
			AgalScontoMaggiorazioneDisplayColumnComponent,
            AgalDatiOrdineAcquistoListLoaderComponent,
            AgalDatiOrdineAcquistoDetailBoxComponent,
			AgalDatiOrdineAcquistoDisplayColumnComponent,
            AgalDatiContrattoListLoaderComponent,
            AgalDatiContrattoDetailBoxComponent,
			AgalDatiContrattoDisplayColumnComponent,
            AgalDatiConvenzioneListLoaderComponent,
            AgalDatiConvenzioneDetailBoxComponent,
			AgalDatiConvenzioneDisplayColumnComponent,
            AgalDatiRicezioneListLoaderComponent,
            AgalDatiRicezioneDetailBoxComponent,
			AgalDatiRicezioneDisplayColumnComponent,
            AgalDatiFattureCollegateListLoaderComponent,
            AgalDatiFattureCollegateDetailBoxComponent,
			AgalDatiFattureCollegateDisplayColumnComponent,
            AgalDatiSalListLoaderComponent,
            AgalDatiSalDetailBoxComponent,
			AgalDatiSalDisplayColumnComponent,
            AgalDatiDdtListLoaderComponent,
            AgalDatiDdtDetailBoxComponent,
			AgalDatiDdtDisplayColumnComponent,
            AgalRiferimentoNumeroLineaListLoaderComponent,
            AgalRiferimentoNumeroLineaDetailBoxComponent,
			AgalRiferimentoNumeroLineaDisplayColumnComponent,
            AgalDatiTrasportoListLoaderComponent,
            AgalDatiTrasportoDetailBoxComponent,
			AgalDatiTrasportoDisplayColumnComponent,
            AgalIndirizzoResaListLoaderComponent,
            AgalIndirizzoResaDetailBoxComponent,
			AgalIndirizzoResaDisplayColumnComponent,
            AgalFatturaPrincipaleListLoaderComponent,
            AgalFatturaPrincipaleDetailBoxComponent,
			AgalFatturaPrincipaleDisplayColumnComponent,
            AgalDatiBeniServiziListLoaderComponent,
            AgalDatiBeniServiziDetailBoxComponent,
			AgalDatiBeniServiziDisplayColumnComponent,
            AgalDettaglioLineaListLoaderComponent,
            AgalDettaglioLineaDetailBoxComponent,
			AgalDettaglioLineaDisplayColumnComponent,
            AgalScontoMaggiorazioneLineaListLoaderComponent,
            AgalScontoMaggiorazioneLineaDetailBoxComponent,
			AgalScontoMaggiorazioneLineaDisplayColumnComponent,
            AgalAltriDatiGestionaliListLoaderComponent,
            AgalAltriDatiGestionaliDetailBoxComponent,
			AgalAltriDatiGestionaliDisplayColumnComponent,
            AgalDatiRiepilogoListLoaderComponent,
            AgalDatiRiepilogoDetailBoxComponent,
			AgalDatiRiepilogoDisplayColumnComponent,
            AgalDatiPagamentoListLoaderComponent,
            AgalDatiPagamentoDetailBoxComponent,
			AgalDatiPagamentoDisplayColumnComponent,
            AgalDettaglioPagamentoListLoaderComponent,
            AgalDettaglioPagamentoDetailBoxComponent,
			AgalDettaglioPagamentoDisplayColumnComponent,
            AgalDatiVeicoliListLoaderComponent,
            AgalDatiVeicoliDetailBoxComponent,
			AgalDatiVeicoliDisplayColumnComponent,
            AgalAllegatiListLoaderComponent,
            AgalAllegatiDetailBoxComponent,
			AgalAllegatiDisplayColumnComponent,
	],
	providers: [

            ProcurementResolver,
            ProcurementLotCategoryResolver,
            ProcurementLotResolver,
            PartecipationStatusResolver,
            PartecipationModalityResolver,
            PartecipationResolver,
            PreparationStatusResolver,
            PreparationModalityResolver,
            PreparationResolver,
            DesignatedCompanyResolver,
            InsurancePolicyStatusResolver,
            InsurancePolicyResolver,
            DossierResolver,
            FatturaElettronicaHeaderResolver,
            DatiTrasmissioneResolver,
            CedentePrestatoreResolver,
            RappresentanteFiscaleResolver,
            CessionarioCommittenteResolver,
            TerzoIntermediarioOSoggettoEmittenteResolver,
            SoggettoEmittenteResolver,
            FatturaElettronicaBodyResolver,
            DatiGeneraliResolver,
            DatiGeneraliDocumentoResolver,
            DatiRitenutaResolver,
            DatiBolloResolver,
            DatiCassaPrevidenzialeResolver,
            ScontoMaggiorazioneResolver,
            DatiOrdineAcquistoResolver,
            DatiContrattoResolver,
            DatiConvenzioneResolver,
            DatiRicezioneResolver,
            DatiFattureCollegateResolver,
            DatiSalResolver,
            DatiDdtResolver,
            RiferimentoNumeroLineaResolver,
            DatiTrasportoResolver,
            IndirizzoResaResolver,
            FatturaPrincipaleResolver,
            DatiBeniServiziResolver,
            DettaglioLineaResolver,
            ScontoMaggiorazioneLineaResolver,
            AltriDatiGestionaliResolver,
            DatiRiepilogoResolver,
            DatiPagamentoResolver,
            DettaglioPagamentoResolver,
            DatiVeicoliResolver,
            AllegatiResolver,
		
	],
})
export class AgalItalianLegislationModule {}