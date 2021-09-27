export const renderInDocument = ($el, selector) => {
   if (!$el || !selector) {
      throw new Error('renderInDocument must contain 2 args')
   }
   document.querySelector(selector).insertAdjacentHTML('afterbegin', $el)
}