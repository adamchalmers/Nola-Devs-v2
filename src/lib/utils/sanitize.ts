import sanitizeHtml from 'sanitize-html';
/**
 *  Pass a string that contains HTML and strip evenrything except a and p tags
 * @param dirty The dirty String
 * @returns The string that doesnt have any other tag besides a and p 
 */
export const sanitizer = (dirty: string) => {
	const clean = sanitizeHtml(dirty, {
		allowedTags: ['a', 'p'],
		allowedAttributes: {
			a: ['href']
		}
	});
	return clean;
};
