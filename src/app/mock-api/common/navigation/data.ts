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
						link : '/il/pp/procurement'
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
								link : '/il/pp/partecipation-status'
							},
							{
								id   : 'g5e-eopoo-status',
								title: 'Stato anarafiche',
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
                        id   : 'il-pp-procurement',
                        title: 'Gare d\'appalto',
						icon : 'iconsmind:letter_open',
                        type : 'basic',
						link : '/il/pp/procurement'
                    },
                    {
                        id   : 'il-pp-procurement-lot',
                        title: 'Lotti di gara',
						icon : 'iconsmind:stamp',
                        type : 'basic',
						link : '/il/pp/procurement-lot'
                    },
					{
                        id   : 'il-pp-partecipation',
                        title: 'Partecipazioni',
						icon : 'iconsmind:ruler_2',
                        type : 'basic',
						link : '/il/pp/partecipation'
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
								link : '/il/pp/partecipation-status'
							},
							{
								id   : 'il-pp-insurance-policy-status',
								title: 'Stati polizze',
								type : 'basic',
								link : '/il/pp/insurance-policy-status'
							},
							{
								id   : 'il-pp-preparation-status',
								title: 'Stati preparazioni',
								type : 'basic',
								link : '/il/pp/preparation-status'
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
						link : '/il/pp/procurement-lot'
                    },
					{
                        id   : 'c6e-inventory-item',
                        title: 'Inventario',
						icon : 'iconsmind:windows',
                        type : 'basic',
						link : '/il/pp/procurement'
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
								link : '/il/pp/insurance-policy-status'
							},
							{
								id   : 'c6e-producer',
								title: 'Produttori',
								type : 'basic',
								link : '/il/pp/insurance-policy-status'
							},
							{
								id   : 'c6e-whamrehouse-category',
								title: 'Categorie inventario',
								type : 'basic',
								link : '/il/pp/preparation-status'
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
                title: 'Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/example/asd'
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
                id      : 'navigation-features.level.0',
                title   : 'Level 0',
                icon    : 'heroicons_outline:check-circle',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'navigation-features.level.0.1',
                        title   : 'Level 1',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'navigation-features.level.0.1.2',
                                title   : 'Level 2',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id      : 'navigation-features.level.0.1.2.3',
                                        title   : 'Level 3',
                                        type    : 'collapsable',
                                        children: [
                                            {
                                                id      : 'navigation-features.level.0.1.2.3.4',
                                                title   : 'Level 4',
                                                type    : 'collapsable',
                                                children: [
                                                    {
                                                        id      : 'navigation-features.level.0.1.2.3.4.5',
                                                        title   : 'Level 5',
                                                        type    : 'collapsable',
                                                        children: [
                                                            {
                                                                id   : 'navigation-features.level.0.1.2.3.4.5.6',
                                                                title: 'Level 6',
                                                                type : 'basic'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id      : 'navigation-features.level.0',
                title   : 'Level 0',
                subtitle: 'With subtitle',
                icon    : 'heroicons_outline:check-circle',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'navigation-features.level.0.1-1',
                        title: 'Level 1.1',
                        type : 'basic'
                    },
                    {
                        id   : 'navigation-features.level.0.1-2',
                        title: 'Level 1.2',
                        type : 'basic'
                    }
                ]
            },
            {
                id      : 'navigation-features.active',
                title   : 'Active item',
                subtitle: 'Manually marked as active',
                icon    : 'heroicons_outline:check-circle',
                type    : 'basic',
                active  : true
            },
            {
                id      : 'navigation-features.disabled-collapsable',
                title   : 'Disabled collapsable',
                subtitle: 'Some subtitle',
                icon    : 'heroicons_outline:check-circle',
                type    : 'collapsable',
                disabled: true,
                children: [
                    {
                        id   : 'navigation-features.disabled-collapsable.child',
                        title: 'You shouldn\'t be able to see this child',
                        type : 'basic'
                    }
                ]
            },
            {
                id      : 'navigation-features.disabled-basic',
                title   : 'Disabled basic',
                subtitle: 'Some subtitle',
                icon    : 'heroicons_outline:check-circle',
                type    : 'basic',
                disabled: true
            },
            {
                id   : 'navigation-features.badge-style-oval',
                title: 'Oval badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : '8',
                    classes: 'w-5 h-5 bg-teal-400 text-black rounded-full'
                }
            },
            {
                id   : 'navigation-features.badge-style-rectangle',
                title: 'Rectangle badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : 'Updated!',
                    classes: 'px-2 bg-teal-400 text-black rounded'
                }
            },
            {
                id   : 'navigation-features.badge-style-rounded',
                title: 'Rounded badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : 'NEW',
                    classes: 'px-2.5 bg-teal-400 text-black rounded-full'
                }
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Simple badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : '87 Unread',
                    classes: 'text-teal-500'
                }
            },
            {
                id   : 'navigation-features.multi-line',
                title: 'A multi line navigation item title example which works just fine',
                icon : 'heroicons_outline:check-circle',
                type : 'basic'
            }
        ]
    }
];
