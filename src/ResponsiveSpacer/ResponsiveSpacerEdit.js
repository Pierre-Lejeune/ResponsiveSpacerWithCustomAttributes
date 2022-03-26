import { useBlockProps, InspectorControls} from '@wordpress/block-editor'; // Récupération de la méthode permettant à Wordpress de nous transmettre les attributs propres à notre bloc
import { PanelBody, TextControl } from '@wordpress/components'; // Récupération des composants utilisé pour notre bloc

import "./ResponsiveSpacer.scss";

const ResponsiveSpacerEdit = ({setAttributes, attributes}) => { //La fonction affichant notre premier bloc sur l'interface d'administration
	const {
		mobileHeight,
		desktopHeight,
	} = attributes; // Récupération des attributs customisés définit.
	const blockProps = useBlockProps() // Récupération des attributs propres à notre bloc
	return ( 
		<>
			<InspectorControls> 
				<PanelBody>
					<TextControl
						label={"Hauteur de l'espacement sur ordinateur"}
						value={desktopHeight}
						onChange={(newDesktopHeight)=>setAttributes({desktopHeight: newDesktopHeight})}
					/>
					<TextControl
						label={"Hauteur de l'espacement sur mobile"}
						value={mobileHeight}
						onChange={(newMobileHeight)=>setAttributes({mobileHeight: newMobileHeight})}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className={"bloc-customises-responsive-spacer-container"}>
					<div 
						className={"bloc-customises-responsive-spacer-mobile"} 
						aria-hidden="true" 
						style={{
							height: mobileHeight,
						}}
					/>
					<div 
						className={"bloc-customises-responsive-spacer-desktop"} 
						aria-hidden="true" 
						style={{
							height: desktopHeight,
						}}
					/>
				</div>
			</div>
		</>
        
	); //Affichage de notre bloc
}
export default ResponsiveSpacerEdit;
