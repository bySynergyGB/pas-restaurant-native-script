import {
    TemplateRef,
    ElementRef,
    EmbeddedViewRef
} from "@angular/core";
import { RadListView } from './../';

/**
* Represents a proxy for the ListItem.
*/
export class ListItemContext extends ElementRef {
    /**
    * Gets the data of the item.
    */
    $implicit: any;

    /**
    * Gets the item.
    */
    item: any;

    /**
    * Gets the index of the item.
    */
    index: number;

    /**
    * Returns boolean value that represents if the item at an even position.
    */
    even: boolean;

    /**
    * Returns boolean value that represents if the item at an odd position.
    */
    odd: boolean;
}

/**
 * Generic scheme for event arguments provided to handlers of events exposed
 * by a {@link RadListView}.
 */
export interface ItemEventArgs {

    /**
    * The object that fires the event.
    */
    object: any;

    /**
     * The angular view object that fires the event.
     */
    view: EmbeddedViewRef<any>;

    /**
    * Might point to an object related to a specific event.
    */
    data: any;

    /**
    * Gets the index of the item in the source to which the event relates.
    */
    index: number;

    /**
    * Returns a boolean value which is interpreted in the context with the event.
    */
    returnValue?: boolean;
}

/**
 * Scheme for the arguments of the event fired on item swipe.
 */
export interface ItemSwipeArgs extends ItemEventArgs {
}

/**
 * Scheme for the arguments of the event fired on item reorder.
 */
export interface ItemReorderArgs extends ItemEventArgs {

    /**
     * The target index of the reordered item.
     */
    targetIndex: number;

    /**
    * The target group index of the reordered item.
    */
    targetGroupIndex: number;
}

/**
* Represents the RadListView component. RadListView is based on the
* already familiar native Android and iOS components from Telerik UI for Android
* and Telerik UI for iOS. The component exposes all major features supported
* by the native controls through a unified API suitable for NativeScript developers.
*/
export class RadListViewComponent {
    /**
     * Identifies the load on demand cell template.
     */
    loadOnDemandTemplate: TemplateRef<ElementRef>;

    /**
    * Identifies the {@link headerItemTemplate} property.
     */
    headerTemplate: TemplateRef<ElementRef>;

    /**
    * Identifies the {@link footerItemTemplate} property.
    */
    footerTemplate: TemplateRef<ElementRef>;

    /**
    * Identifies the {@link itemTemplate} property.
    */
    itemTemplate: TemplateRef<ElementRef>;

    /**
     * Identifies the {@link itemSwipeTemplate} property.
    */
    itemSwipeTemplate: TemplateRef<ElementRef>;

    /**
     * Gets or sets the source collection used to populate the {@link RadListView}.
     */
    items: any;

    /**
     * Gets the NativeScript {@link RadListView} element.
     */
    listView: RadListView;
}

/**
 * Directive identifying the ListViewLinearLayout.
 * 
 * @example
 * ' <ListViewLinearLayout tkListViewLayout scrollDirection="Vertical"></ListViewGridLayout> '
 */
export class ListViewLinearLayoutDirective {

}

/**
 * Directive identifying the ListViewGridLayout.
 * 
 * @example
 * ' <ListViewGridLayout tkListViewLayout scrollDirection="Vertical"></ListViewGridLayout> '
 */
export class ListViewGridLayoutDirective {

}

/**
 * Directive identifying the ListViewGridLayout. Note: the 'ListViewLinearLayout' should be placed after the 'listItemTemplate' in the html of the Component.
  * 
 * @example
 * ' <ListViewLinearLayout tkListViewLayout scrollDirection="Vertical"></ListViewGridLayout> '
 */
export class ListViewStaggeredLayout {

}

/**
 * Directive identifying the listViewLayout property of the RadCartesianChart component. Note: the 'radListViewLayout' should be placed after the 'listItemTemplate' in the html of the Component.
 * 
 * @example
 * ' <ListViewStaggeredLayout tkListViewLayout scrollDirection="Vertical"></ListViewStaggeredLayout> '
 */
export class TKListViewLayoutDirective {

}

/**
 * Directive identifying the ReorderHandle element.
 * 
 * @example
 * ' <ReorderHandle>
            <Label text="Drag me"></Label>
     </ReorderHandle> '
 */
export class ReorderHandleDirective {

}

/**
 * Directive identifying the header template.
 */
export class TKListViewHeaderDirective {

}

/**
 * Directive identifying the footer template.
 */
export class TKListViewFooterDirective {

}

/**
 * Directive identifying the swipe template.
 */
export class TKListViewItemSwipeDirective {

}

/**
 * Directive identifying the item template.
 */
export class TKListViewItemDirective {

}

/**
 * Directive identifying the load on demand cell template.
 */
export class TKListViewLoadOnDemandDirective {

}

/**
 * Directives identifying the RadListView.
 */
export const LISTVIEW_DIRECTIVES;

/**
 * Providers used by the identifying RadListViewComponent.
 */
export const LISTVIEW_PROVIDERS;