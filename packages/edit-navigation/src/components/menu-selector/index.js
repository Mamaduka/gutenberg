/**
 * WordPress dependencies
 */
import {
	MenuGroup,
	MenuItemsChoice,
	Card,
	CardBody,
	NavigableMenu,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function MenuSelector( { onSelectMenu, menus } ) {
	return (
		<Card className="edit-navigation-menu-selector">
			<CardBody>
				<h3 className="edit-navigation-menu-selector__header">
					{ __( 'Choose a menu to edit: ' ) }
				</h3>
				<NavigableMenu className="edit-navigation-menu-selector__body">
					<MenuGroup>
						<MenuItemsChoice
							onSelect={ onSelectMenu }
							choices={ menus.map( ( menu ) => ( {
								value: menu.id,
								label: menu.name,
							} ) ) }
						/>
					</MenuGroup>
				</NavigableMenu>
			</CardBody>
		</Card>
	);
}
