import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";

let vm = new Observable({ myText: 'This is the menu page' });

class MenuPage extends BasePage{
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }

    changeToList(args) {
    	let tabNumber = args.view.id;
    	let tabTitle;
    	switch (tabNumber){
    		case 0: 
	    		tabTitle = "favoritos" ;
	    		break;
    		case 1:
	    		tabTitle = "principales";
	    		break;
    		case 2:
    			tabTitle = "ensaladas";
	    		break;
    		case 3:
    			tabTitle = "postres";
	    		break;
    		case 4:
    			tabTitle = "bebidas";
	    		break;
    		default: 
	    		tabTitle = "favoritos";
	    		break;
    		}
	    var navigationOptions={
	        moduleName:'pages/menulist/menulist',
	        context:{tab: tabNumber,
	                title: tabTitle
	                }
	    }
	    topmost().navigate(navigationOptions);
	}
}
export = new MenuPage();
