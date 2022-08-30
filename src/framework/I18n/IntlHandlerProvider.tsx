import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { IntlProvider } from 'react-intl';
import { I18nContextProvider } from './context';

type Props = {
  defaultLocale?: string;
  messages: Record<string, Record<string, string>>;
};

const defaultLanguage = 'es-CO';

const IntlHandler: FC<Props> = ({
  defaultLocale = defaultLanguage,
  messages,
  children,
}) => {
  const [language, setLanguage] = useState({
    locale: defaultLocale,
    messages: messages || {},
  });

  const switchLanguage = (props: {
    locale: string;
    messages: Record<string, Record<string, string>>;
  }) => setLanguage(props);

  return (
    <IntlProvider
      messages={language.messages[language.locale]}
      locale={language.locale}
      defaultLocale={defaultLanguage}
    >
      <I18nContextProvider switchLanguage={switchLanguage}>
        {children}
      </I18nContextProvider>
    </IntlProvider>
  );
};

export default IntlHandler;
