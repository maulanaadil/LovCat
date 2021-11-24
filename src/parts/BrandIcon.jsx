import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon(props) {
  return (
    <Button className="brand-icon" href="" type="link">
      <p className="text-brand-color">
        Lov<span className="text-black">Cat.</span>
      </p>
    </Button>
  );
}
