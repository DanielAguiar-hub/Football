import React from 'react';
import FutebolApp from './components';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FutebolApp>
      {children}
    </FutebolApp>
  );
}
