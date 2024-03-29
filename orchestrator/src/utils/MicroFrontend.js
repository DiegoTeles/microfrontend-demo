import React, { useEffect } from 'react';

const MicroFrontend = ({ name, host, document, history, window }) => {
  console.log('host :>> ', host);
  console.log('name :>> ', name);
  console.log('history :>> ', history);

  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;
    console.log('name :>> ', name);
    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        let script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
      });

    return () => window[`unmount${name}`](`${name}-content`);
  }, []);

  const renderMicroFrontend = () => {
    window[`render${name}`](`${name}-content`, history);
  };

  return <main id={`${name}-content`} />;
};

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
