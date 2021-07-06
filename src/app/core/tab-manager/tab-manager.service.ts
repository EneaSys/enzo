import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class TabManagerService {
	constructor(
		//private CFR: ComponentFactoryResolver,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) { }

	private tabUniqueKey: number = 0;

	private mainComponent: any;

	private activeTab: any;
	private tabs: any[] = [];
	
	private _isOpenInTab: boolean = false;
	private _componentActivation: boolean = false;
	
	private activeCard: any;
	private cards: any = {};
	
	private _isOpenInCard: boolean = false;

	private activeComponent: any;
	
	// Main component
	private setMainComponent(mainComponent: any) {
		this.mainComponent = mainComponent;
	}

	openMainComponent() {
		if(!this.mainComponent) {
			return;
		}
		this.setActiveTab(null);
		this.setActiveCard(null);
		this.openComponent(this.mainComponent);
	}

	isMainComponent(tab: any) {
		if(tab === this.mainComponent) {
			return true;
		}
		return false;
	}









	// Active tab
	private setActiveTab(tab: any) {
		this.activeTab = tab;
	}

	getActiveTab() {
		return this.activeTab;
	}
	
	openActiveTab() {
		this.openTab(this.activeTab);
	}
	
	// Tabs
	private addTab(tab: any) {
		tab.id = ++this.tabUniqueKey;
		this.tabs.push(tab);
		this.cards[tab.id] = [];
	}

	getTabs() {
		return this.tabs;
	}


	// Tab Action
	openTab(tab: any) {
		this.setActiveTab(tab);
		this.setActiveCard(null);
		this.openComponent(tab);
	}

	isTab(tab: any) {
		if(tab === this.mainComponent) {
			return false;
		}
		if(tab.tabId) {
			return false;
		}
		return true;
	}

	removeTab(tabToRemove: any) {
		if(this.activeTab === tabToRemove) {
			this.openMainComponent();
		}
		delete this.cards[tabToRemove.id]
		this.tabs.forEach( (tabInArray, index) => {
			if(tabInArray === tabToRemove) this.tabs.splice(index,1);
		});
	}

	removeAllTabs() {
		this.tabs = [];
		this.cards = {};
	}

	// Transactional
	openInTab() {
		this._isOpenInTab = true;
	}










	// Active card
	private setActiveCard(card: any) {
		this.activeCard = card;
	}

	getActiveCard() {
		return this.activeCard;
	}
	
	openActiveCard() {
		this.openCard(this.activeCard);
	}


	// Cards
	private addCard(card: any) {
		card.id = ++this.tabUniqueKey;
		this.cards[card.tabId].push(card);
	}


	getCards() {
		if(!this.getActiveTab()) {
			return null;
		}
		return this.cards[this.getActiveTab().id];
	}

	// Action
	openCard(card: any) {
		this.setActiveCard(card);
		this.openComponent(card);
	}

	isCard(card: any) {
		if(card.tabId) {
			return true;
		}
		return false;
	}

	removeCard(cardToRemove: any) {
		if(this.activeCard === cardToRemove) {
			this.openActiveTab();
		}
		
		this.cards[cardToRemove.tabId].forEach( (cardInArray: any, index) => {
			if(cardInArray === cardToRemove) this.cards[cardToRemove.tabId].splice(index,1);
		});
	}

	// Transactional
	openInCard() {
		this._isOpenInCard = true;
	}













	// Main Action
	createComponent(name: string) {
		if(this._componentActivation) {
			return this.activeComponent;
		}

		let component: any = {};
		component.name = name;
		{
			let path = window.location.href.replace(window.location.origin, "")
			component.url = path;
		}

		if(this._isOpenInCard) {
			component.tabId = this.getActiveTab().id;
			this.addCard(component);
		} else {
			if(this._isOpenInTab) {
				this.addTab(component);
			} else  {
				this.setMainComponent(component);
			}
	
			this.setActiveTab(component);
		}

		this._componentActivation = false;
		this._isOpenInTab = false;
		this._isOpenInCard = false;

		return component;
	}

	private openComponent(component: any) {
		this._componentActivation = true;
		this.activeComponent = component;
		this.router.navigateByUrl(component.url).then(
			() => {
				this._componentActivation = false;
				this._isOpenInTab = false;
				this._isOpenInCard = false;
			}
		);
	}

	









/*
	async navigateInTab(tab: any, queryParams: any) {
		
		await this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: queryParams, 
			queryParamsHandling: 'merge',
		});

		let path = window.location.href.replace(window.location.origin, "")
		tab.url = path;
		console.log(path);
	}

*/






	/*
	private VCR: ViewContainerRef;
	private child_unique_key: number = 0;
	
	private activeComponents = Array<ComponentRef<any>>();
	
	private currentMainTab = 0;
	private currentComponent: ComponentRef<any>;

	setVCR(VCR: ViewContainerRef) {
		this.VCR = VCR;
	}

	getListTabs(): Array<ComponentRef<any>> {
		return this.activeComponents;
	}

	getCurrentTab(): ComponentRef<any> {
		return this.currentComponent;
	}

	getCurrentMainTab(): number {
		return this.currentMainTab;
	}

	createTab(componentTypeToOpen: any, mainTabKey: number) {
		let componentFactory = this.CFR.resolveComponentFactory(componentTypeToOpen);
	
		let childComponentRef: ComponentRef<any> = this.VCR.createComponent(componentFactory);
	
		let childComponent: any = childComponentRef.instance;
		childComponent.unique_key = ++this.child_unique_key;
		childComponent.main_tab_key = mainTabKey
		childComponent.parentRef = this;
	
		this.activeComponents.push(childComponentRef);

		this.openTab(childComponent.unique_key);
	}
	
	openTab(key: number) {
		this.activeComponents.forEach((tab: ComponentRef<any>) => {
			tab.location.nativeElement.style.display = 'none';
		});

		let componentRef: ComponentRef<any> = this.activeComponents.filter(x => x.instance.unique_key == key)[0];
		this.currentComponent = componentRef;

		let currentMainTab = 0;

		if(componentRef) {
			componentRef.location.nativeElement.style.display = 'block';
			currentMainTab = componentRef.instance.main_tab_key;

			if(currentMainTab == 0) {
				currentMainTab = componentRef.instance.unique_key;
			}
		}

		this.currentMainTab = currentMainTab;
	}
	
	removeTab(key: number) {
		if (this.VCR.length < 1) return;	

		let componentRef: ComponentRef<any> = this.activeComponents.filter(x => x.instance.unique_key == key)[0];

		componentRef.hostView.destroy();
	
		// removing component from the list
		this.activeComponents = this.activeComponents.filter(x => x.instance.unique_key !== key);
		this.currentComponent = null;
	}

	removeAll() {
		this.currentMainTab = 0;
		this.currentComponent = null;

		this.activeComponents = Array<ComponentRef<any>>();
	}

*/

}