"use client"
import React, { useMemo } from 'react';
import { TextI } from './Text.interface';
import { useTranslations } from 'next-intl';

const Text: React.FC<TextI> = ({
  formatted,
  section,
  value,
  type,
  params,
  ...props
}) => {
  const t = useTranslations(section || 'general');

  // keep tag cannot set on of element
  const typeText = useMemo(() => {
    if (type) {
      return type;
    } else {
      return 'p';
    }
  }, [type]);

  return React.createElement(typeText, {
    dangerouslySetInnerHTML: {
      __html:
        formatted
          ? params ? t(value, params): t(value)
          : value,
    },
    className: `m-0 ${props.className || ''}`,
    ...props,
  });
};

export default React.memo(Text);
