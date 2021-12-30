import { MessageDescriptor, useIntl } from 'react-intl';
import { selectUnit } from '@formatjs/intl-utils';

export const webId = (media: string) => {
  return { dataSet: { media } };
};

export const useFormat = (): {
  formatAge: (value: Date | string, descriptor: MessageDescriptor) => string;
  formatNumber: (number: number, decPlaces?: number) => string;
  formatRelativeDateTime: (value: Date | string) => string;
} => {
  const intl = useIntl();

  const formatAge = (value: Date | string, descriptor: MessageDescriptor): string => {
    const { value: timediff, unit } = selectUnit(new Date(value));
    return intl.formatMessage(
      {
        defaultMessage: '{value, plural, =0 {now} one {# {unit}} other {# {unit}s} }',
        ...descriptor
      }, 
      { value: -1 * timediff, unit }
    );
  };

  const formatNumber = (number: number, decPlaces = 3): string => {
    decPlaces = Math.pow(10, decPlaces);
  
    const abbrev = ['k', 'm', 'b', 't'];
    for (let i = abbrev.length - 1; i >= 0; i--) {
      const size = Math.pow(10, (i + 1) * 3);
  
      if (size <= number) {
        number = Math.round(number * decPlaces / size) / decPlaces;
  
        if ((number == 1000) && (i < abbrev.length - 1)) {
          number = 1;
          i++;
        }
  
        return `${number}${abbrev[i]}`;
      }
    }
  
    return `${number}`;
  };

  const formatRelativeDateTime = (value: Date | string) => {
    const { value: timediff, unit } = selectUnit(new Date(value));
    return intl.formatRelativeTime(timediff, unit, { numeric: 'auto' });
  };

  return {
    formatNumber,
    formatAge,
    formatRelativeDateTime,
  };
};
