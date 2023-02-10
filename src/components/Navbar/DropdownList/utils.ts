const convertDropdownValue = (dropdownvalue: string): string => {
  const now = 'NOW - ';
  switch (dropdownvalue) {
    case '1 روز قبل':
      return `${now}1day`;
    case '3 روز قبل':
      return `${now}3days`;
    case '10 روز قبل':
      return `${now}10days`;
    case '20 روز قبل':
      return `${now}20days`;
    case '30 روز قبل':
      return `${now}30days`;
    default:
      return `${now}3days`;
  }
};

export default convertDropdownValue;
