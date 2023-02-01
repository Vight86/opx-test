export const isValueInArray = (value: string, array: string[]): boolean =>
  array.includes(value);

export const removeValueFromArray = (value: string, array: string[]): string[] => 
  array.filter(checkedLetter => checkedLetter !== value);
