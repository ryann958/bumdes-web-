/**
 * Format a number into IDR currency format
 * @param {number} number 
 * @returns {string} Formatted string
 */
export const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
};
