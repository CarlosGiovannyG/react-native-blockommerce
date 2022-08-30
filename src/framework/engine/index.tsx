import { checkToken } from '$commerce/utils/customer-token';
import useSessionManager from '$core-commerce/session/use-session';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { FrameworkProps } from '..';
import Render from './render/Render';
const Engine: FC<FrameworkProps> = (props) => {
  const [engineIsLoading, setEngineIsLoading] = useState(true);
  const { setIsSignedIn } = useSessionManager();
  const checkAuth = async () => {
    const tokenExists = await checkToken();
    if (tokenExists) setIsSignedIn(true);
    else setIsSignedIn(false);
    return tokenExists;
  };

  const onLoadEngine = useCallback(() => {
    Promise.all([checkAuth()])
      .then((result) => {
        setEngineIsLoading(false);
      })
      .catch(() => {
        setEngineIsLoading(false);
      });
  }, []);

  const onUnmountEngine = useCallback(() => {}, []);

  useEffect(() => {
    onLoadEngine();
    return () => {
      onUnmountEngine();
    };
  }, []);

  return (
    <Render
      interfaces={props.interfaces}
      routes={props.routes}
      blocks={props.blocks}
      engineIsLoading={engineIsLoading}
    />
  );
};

export default Engine;
