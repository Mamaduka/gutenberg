/**
 * External dependencies
 */
import { get, pick } from 'lodash';

export function defaultColumnsNumber( imageCount ) {
	return imageCount ? Math.min( 3, imageCount ) : 3;
}

export const pickRelevantMediaFiles = ( image, sizeSlug = 'large' ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );
	imageProps.url =
		get( image, [ 'sizes', sizeSlug, 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', sizeSlug, 'source_url' ] ) ||
		image.url;
	const fullUrl =
		get( image, [ 'sizes', 'full', 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', 'full', 'source_url' ] );
	if ( fullUrl ) {
		imageProps.fullUrl = fullUrl;
	}
	return imageProps;
};
