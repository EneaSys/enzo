/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: 'Home',
		tooltip : 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/example'
    },
	{
        id      : 'generic',
        title   : 'Base',
        tooltip : 'Base',
        type    : 'aside',
        icon    : 'heroicons_outline:color-swatch',
		children: [
			{
                id      : 'g5e-eopoo',
                title   : 'Anagrafiche',
                subtitle: 'Persone ed aziende',
                icon    : 'iconsmind:professor',
                type    : 'group',
                children: [
                    {
                        id   : 'g5c-eopoo-item',
                        title: 'Anagrafiche',
						icon : 'iconsmind:malefemale',
                        type : 'basic',
						link : '/generic/eopoo'
                    },
                    {
                        id   : 'g5c-eopoo-group',
                        title: 'Gruppi di anagrafiche',
						icon : 'iconsmind:conference',
                        type : 'basic',
						link : '/il/pp/procurement-lot'
                    },
					{
                        id   : 'g5e-settings',
                        title: 'Impostazioni',
						icon : 'iconsmind:gears',
                        type    : 'collapsable',
						children: [
							{
								id   : 'g5e-eopoo-type',
								title: 'Tipi anagrafiche',
								type : 'basic',
								link : '/generic/eopoo-type'
							},
							{
								id   : 'g5e-eopoo-status',
								title: 'Stato anagrafiche',
								type : 'basic',
								link : '/il/pp/insurance-policy-status'
							},
						]
                    }
                ]
            },
		],
	},
	{
        id      : 'business-center',
        title   : 'Business Center',
        tooltip : 'Business Center',
        type    : 'aside',
        icon    : 'mat_outline:business_center',
        children: [
			{
                id      : 'il-pp',
                title   : 'Lavori Pubblici',
                subtitle: 'Italia',
                icon    : 'iconsmind:colosseum',
                type    : 'group',
                children: [
                    {
                        id   : 'il-pp-procurement-lot',
                        title: 'Lotti di gara',
						icon : 'iconsmind:letter_open',
                        type : 'basic',
						link : '/italian-legislation/procurement-lot'
                    },
					{
                        id   : 'il-pp-partecipation',
                        title: 'Partecipazioni',
						icon : 'iconsmind:stamp',
                        type : 'basic',
						link : '/italian-legislation/partecipation'
                    },
					{
                        id   : 'il-pp-settings',
                        title: 'Impostazioni',
						icon : 'iconsmind:gears',
                        type    : 'collapsable',
						children: [
							{
								id   : 'il-pp-partecipation-status',
								title: 'Stati partecipazioni',
								type : 'basic',
								link : '/italian-legislation/partecipation-status'
							},
							{
								id   : 'il-pp-insurance-policy-status',
								title: 'Stati polizze',
								type : 'basic',
								link : '/italian-legislation/insurance-policy-status'
							},
							{
								id   : 'il-pp-preparation-status',
								title: 'Stati preparazioni',
								type : 'basic',
								link : '/italian-legislation/preparation-status'
							},
						]
                    }
                ]
            },
			{
                id      : 'c6e-wharehouse',
                title   : 'Magazzino',
                subtitle: 'Gestione magazzino',
                icon    : 'iconsmind:building',
                type    : 'group',
                children: [
                    {
                        id   : 'c6e-warehouse-manger',
                        title: 'Manager magazzino',
						icon : 'iconsmind:building',
                        type : 'basic',
						link : '/italian-legislation/procurement-lot'
                    },
					{
                        id   : 'c6e-inventory-item',
                        title: 'Inventario',
						icon : 'iconsmind:windows',
                        type : 'basic',
						link : '/italian-legislation/procurement'
                    },
					{
                        id   : 'c6e-settings',
                        title: 'Impostazioni',
						icon : 'iconsmind:gears',
                        type    : 'collapsable',
						children: [
							{
								id   : 'c6e-warehouse',
								title: 'Magazzini',
								type : 'basic',
								link : '/italian-legislation/insurance-policy-status'
							},
							{
								id   : 'c6e-producer',
								title: 'Produttori',
								type : 'basic',
								link : '/italian-legislation/insurance-policy-status'
							},
							{
								id   : 'c6e-whamrehouse-category',
								title: 'Categorie inventario',
								type : 'basic',
								link : '/italian-legislation/preparation-status'
							},
						]
					}
				]
			},
			{
                id      : 'commerce',
                title   : 'Commercio',
                subtitle: 'Gestione commerciale',
                icon    : 'iconsmind:money_bag',
                type    : 'group',
                children: [
					{
                        id   : 'c6e-catalog',
                        title: 'Manager catalogo',
						icon : 'iconsmind:books_2',
                        type : 'basic',
						link : '/il/pp/partecipation'
                    },
					{
                        id   : 'c6e-purchase',
                        title: 'Manager venditore',
						icon : 'iconsmind:full_cart',
                        type : 'basic',
						link : '/il/pp/partecipation'
                    },
					{
                        id   : 'c6e-settings',
                        title: 'Impostazioni',
						icon : 'iconsmind:gears',
                        type    : 'collapsable',
						children: [
							{
								id   : 'c6e-seller',
								title: 'Venditori',
								type : 'basic',
								link : '/il/pp/partecipation-status'
							},
							{
								id   : 'c6e-catalog',
								title: 'Cataloghi',
								type : 'basic',
								link : '/il/pp/preparation-status'
							},
						]
                    }
                ]
            },
        ]
    },
	{
        id      : 'economical-center',
        title   : 'Gestione economica',
        tooltip : 'Gestione economica',
        type    : 'aside',
        icon    : 'mat_outline:euro_symbol',
		children: [
			{
                id   : 'dashboards.project',
                title: 'Project',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/landing'
            },
            {
                id   : 'dashboards.analytics',
                title: 'Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/home/asd'
            },
			{
                id   : 'dashboards.analytics',
                title: 'List',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/example/list'
            },
			{
                id   : 'dashboards.analytics',
                title: 'Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/banana/asd'
            }
		]
	},
	{
        id  : 'divider-2',
        type: 'divider'
    },
	{
        id      : 'aig-standard',
        title   : 'Standard',
        tooltip : 'Standard',
        type    : 'aside',
        icon    : 'heroicons_outline:library',
		children: [
			{
				id      : 's6d-geo',
                title   : 'Geo',
                subtitle: 'Anagrafiche geografiche',
                icon    : 'iconsmind:map',
                type    : 'collapsable',
                children: [
					{
						id   : 'aig-standard.geo.country',
						title: 'Nazioni',
						type : 'basic',
						icon : 'iconsmind:flag_2',
						link : '/standard/country/list'
					},
					{
						id   : 'aig-standard.geo.region',
						title: 'Regione',
						type : 'basic',
						icon : 'iconsmind:geo3',
						link : '/standard/region/list'
					},
					{
						id   : 'aig-standard.geo.state',
						title: 'Provincia',
						type : 'basic',
						icon : 'iconsmind:road',
						link : '/standard/state/list'
					},
					{
						id   : 'aig-standard.geo.city',
						title: 'City',
						type : 'basic',
						icon : 'iconsmind:geo',
						link : '/standard/city/list'
					}
				]
			}
		]
	},
	{
        id      : 'aig-management',
        title   : 'management',
        tooltip : 'management',
        type    : 'aside',
        icon    : 'heroicons_outline:code',
        children: [
			{
				id   : 'management.application',
				title: 'Applicazioni',
				type : 'basic',
				icon : 'iconsmind:one_window',
				link : 'management/application-module/list'
			},
			{
				id   : 'management.personalization',
				title: 'Personalizzazioni',
				type : 'basic',
				icon : 'iconsmind:wrench',
				link : '/standard/country/list'
			},
			{
				id      : 'management.entity',
				title   : 'Gestione entità',
				subtitle: 'Oggetti, tipi e campi',
				type    : 'collapsable',
				icon    : 'iconsmind:tactic',
				children: [
					{
						id   : 'management.entity.object',
						title: 'Oggetti',
						type : 'basic',
						icon : 'iconsmind:flag_2',
						link : '/standard/country/list'
					},
					{
						id   : 'management.entity.entity',
						title: 'Entità',
						type : 'basic',
						icon : 'iconsmind:flag_2',
						link : '/standard/country/list'
					},
					{
						id   : 'management.entity.field',
						title: 'Campi',
						type : 'basic',
						icon : 'iconsmind:flag_2',
						link : '/standard/country/list'
					},
				]
			},
			{
				id      : 'management.rbac',
				title   : 'Rbac',
				subtitle: 'Role based access control',
				type    : 'collapsable',
				icon    : 'iconsmind:security_block',
				children: [
					{
						id   : 'management.rbac.role',
						title: 'Ruoli',
						type : 'basic',
						icon : 'iconsmind:fingerprint',
						link : '/standard/country/list'
					},
					{
						id   : 'management.rbac.permission',
						title: 'Permessi',
						type : 'basic',
						icon : 'iconsmind:key_lock',
						link : '/standard/country/list'
					},
				]
			},
			{
				id   : 'management.license',
				title: 'Licenze',
				type : 'basic',
				icon : 'iconsmind:flag_2',
				link : '/standard/country/list'
			},
			{
				id      : 'management.utilizator',
				title   : 'Utilizzatori',
				subtitle: 'Gestisci contesti ed utenti',
				type    : 'collapsable',
				icon    : 'iconsmind:statistic',
				children: [
					{
						id   : 'management.context_module',
						title: 'Contesti',
						type : 'basic',
						icon : 'iconsmind:memory_card',
						link : '/m8t/context-module/list'
					},
					{
						id   : 'management.context_module',
						title: 'Licenze',
						type : 'basic',
						icon : 'iconsmind:profile',
						link : '/standard/country/list'
					},
				]
			},
			{
				id  : 'divider-1',
				type: 'divider'
			},
			{
				id   : 'management.tenant_context',
				title: 'Contesti',
				type : 'basic',
				icon : 'iconsmind:memory_card2',
				link : '/standard/country/list'
			},
			{
				id   : 'management.user_context',
				title: 'Utenti',
				type : 'basic',
				icon : 'iconsmind:profile',
				link : '/standard/country/list'
			},
		]
    }
];
